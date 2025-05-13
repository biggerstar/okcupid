export function parseTiktokFeed(data, data_from: string) {
  if (!data_from) throw new Error('data_from is require')
  const liveList = data?.data
  if (!liveList) return
  const feedList = liveList
    .map(el => {
      return el.data
    })
    .map((el) => {
      return {
        data_from,
        room_id: el.id_str,
        nickname: el.owner.nickname,
        display_id: el.owner.display_id,
        is_ecommerce: !!el?.has_commerce_goods,
        audience_count: el.user_count || 0,
        like_count: el.like_count || 0,
        live_type: el.hashtag?.title || '',
        fans: el.owner?.follow_info?.follower_count || 0,
        follow: el.owner?.follow_info?.following_count || 0,
      }
    })
  return feedList
}
