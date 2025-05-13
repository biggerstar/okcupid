"use strict";
(globalThis.__TIKTOK_CHUNKS__ = globalThis.__TIKTOK_CHUNKS__ || []).push([[408], {
    25181: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                id: {
                    type: "int64",
                    id: 1
                },
                target_user_tag_enum: {
                    type: "MultiGuestUserTagEnum",
                    id: 2
                },
                tasks: {
                    rule: "repeated",
                    type: "MGHostGrowthTask",
                    id: 3
                },
                rewards: {
                    rule: "repeated",
                    type: "MGHostGrowthActivityReward",
                    id: 4
                },
                guide_links: {
                    rule: "repeated",
                    type: "MGHostGrowthActivityGuideLink",
                    id: 5
                },
                user_tips: {
                    type: "MGHostGrowthTips",
                    id: 6
                }
            }
        }
    }
    ,
    116687: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                status: {
                    type: "MGHostGrowthActivityEntranceStatus",
                    id: 1
                },
                target_user_tag_enum: {
                    type: "MultiGuestUserTagEnum",
                    id: 2
                }
            }
        }
    }
    ,
    201469: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                MGHostGrowthActivityEntranceStatusNone: 0,
                MGHostGrowthActivityEntranceStatusShow: 1
            }
        }
    }
    ,
    504477: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {}
        }
    }
    ,
    504142: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                id: {
                    type: "int64",
                    id: 1
                },
                activity_id: {
                    type: "int64",
                    id: 2
                },
                target_user_tag_enum: {
                    type: "MultiGuestUserTagEnum",
                    id: 3
                },
                type: {
                    type: "MGHostGrowthRewardType",
                    id: 4
                },
                reward_num: {
                    type: "int64",
                    id: 5
                },
                flare_tier: {
                    type: "int64",
                    id: 6
                },
                aggregation_duration: {
                    type: "MGHostGrowthTaskAggregationDuration",
                    id: 7
                },
                id_str: {
                    type: "string",
                    id: 8
                }
            }
        }
    }
    ,
    419181: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                MGHostGrowthRewardStatusNone: 0,
                MGHostGrowthRewardStatusNotClaimed: 1,
                MGHostGrowthRewardStatusClaimed: 2,
                MGHostGrowthRewardStatusSettled: 3
            }
        }
    }
    ,
    124921: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                segment_rewards: {
                    rule: "repeated",
                    type: "MGHostGrowthUserClaimReward",
                    id: 1
                },
                display_user_tag: {
                    type: "MultiGuestUserTagEnum",
                    id: 2
                },
                issue_reward_time_ms: {
                    type: "int64",
                    id: 3
                },
                reward_valid_offset_ms: {
                    type: "int64",
                    id: 4
                }
            }
        }
    }
    ,
    453395: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                MGHostGrowthRewardTypeNone: 0,
                MGHostGrowthRewardTypeFlare: 1,
                MGHostGrowthRewardTypeCoupon: 2
            }
        }
    }
    ,
    354037: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                id: {
                    type: "int64",
                    id: 1
                },
                type: {
                    type: "MGHostGrowthTaskType",
                    id: 2
                },
                aggregation_duration: {
                    type: "MGHostGrowthTaskAggregationDuration",
                    id: 3
                },
                required_threshold: {
                    type: "int64",
                    id: 4
                },
                req_user_acc_val: {
                    type: "int64",
                    id: 5
                }
            }
        }
    }
    ,
    380647: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                MGHostGrowthTaskAggregationDurationPerNone: 0,
                MGHostGrowthTaskAggregationDurationPerDay: 1,
                MGHostGrowthTaskAggregationDurationPerWeek: 2,
                MGHostGrowthTaskAggregationDurationPerMonth: 3
            }
        }
    }
    ,
    805909: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                MGHostGrowthTaskTypeNone: 0,
                MGHostGrowthTaskTypeLinkmicDuration: 1,
                MGHostGrowthTaskTypeLinkmicRevenue: 2,
                MGHostGrowthTaskTypeLinkmicLinkmicGuestNum: 3,
                MGHostGrowthTaskTypeLinkmicCommentUV: 4,
                MGHostGrowthTaskTypeLinkmicViewedUV: 5,
                MGHostGrowthTaskTypePublishHighLightVideo: 6,
                MGHostGrowthTaskTypePublishShortVideo: 7,
                MGHostGrowthTaskTypeValidDays: 8,
                MGHostGrowthTaskTypeReceiveRoomLikeCount: 9,
                MGHostGrowthTaskTypeAnchorTotalWatch: 10,
                MGHostGrowthTaskTypeSubscriberUV: 11,
                MGHostGrowthTaskTypeFansCount: 12,
                MGHostGrowthTaskTypeDiamondIncome: 13,
                MGHostGrowthTaskTypeNewFanAddCount: 14,
                MGHostGrowthTaskTypeTargetBasedDiamondsIncome: 15
            }
        }
    }
    ,
    26030: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                title: {
                    type: "string",
                    id: 1
                },
                content: {
                    type: "string",
                    id: 2
                },
                jump_url: {
                    type: "string",
                    id: 3
                },
                tips_id: {
                    type: "string",
                    id: 4
                }
            }
        }
    }
    ,
    194248: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                id: {
                    type: "int64",
                    id: 1
                },
                reward_id: {
                    type: "int64",
                    id: 2
                },
                activity_id: {
                    type: "int64",
                    id: 3
                },
                type: {
                    type: "MGHostGrowthRewardType",
                    id: 4
                },
                user_tag_enum_for_reward: {
                    type: "MultiGuestUserTagEnum",
                    id: 5
                },
                claim_status: {
                    type: "MGHostGrowthRewardClaimStatus",
                    id: 6
                },
                reward_num: {
                    type: "int64",
                    id: 7
                },
                flare_tier: {
                    type: "int64",
                    id: 8
                },
                update_time_ms: {
                    type: "int64",
                    id: 9
                },
                aggregation_duration: {
                    type: "MGHostGrowthTaskAggregationDuration",
                    id: 10
                },
                id_str: {
                    type: "string",
                    id: 11
                }
            }
        }
    }
    ,
    63410: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                diamond_count: {
                    type: "int64",
                    id: 2
                },
                magic_box_id: {
                    type: "int64",
                    id: 3
                },
                send_time: {
                    type: "int64",
                    id: 4
                },
                delay_time: {
                    type: "int64",
                    id: 5
                },
                box_type: {
                    type: "int64",
                    id: 6
                },
                title: {
                    type: "string",
                    id: 7
                },
                large: {
                    type: "bool",
                    id: 8
                },
                background: {
                    type: "webcast.data.Image",
                    id: 9
                },
                is_official: {
                    type: "bool",
                    id: 10
                },
                priority: {
                    type: "int64",
                    id: 11
                },
                user: {
                    type: "webcast.data.User",
                    id: 12
                },
                description_list: {
                    rule: "repeated",
                    type: "ImgText",
                    id: 13
                }
            },
            nested: {
                ImgText: {
                    fields: {
                        image: {
                            type: "webcast.data.Image",
                            id: 1
                        },
                        text: {
                            type: "string",
                            id: 2
                        }
                    }
                }
            }
        }
    }
    ,
    90139: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                message_scene: {
                    type: "string",
                    id: 2
                },
                message_entity: {
                    rule: "repeated",
                    type: "MessageEntity",
                    id: 3
                }
            },
            nested: {
                MessageEntity: {
                    fields: {
                        notify: {
                            type: "webcast.im.NotifyMessage",
                            id: 1
                        }
                    }
                }
            }
        }
    }
    ,
    128768: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                title: {
                    type: "webcast.data.Text",
                    id: 1
                },
                sub_title: {
                    type: "webcast.data.Text",
                    id: 2
                },
                mask_layer_type: {
                    type: "MaskLayerType",
                    id: 3
                },
                punish_info: {
                    type: "webcast.data.PunishEventInfo",
                    id: 4
                }
            },
            nested: {
                MaskLayerType: {
                    values: {
                        Unknown: 0,
                        R2: 1,
                        GameAgeRestricted: 2,
                        GameDisturbingContent: 3
                    }
                }
            }
        }
    }
    ,
    490416: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                critical: {
                    type: "int64",
                    id: 1
                },
                effect_card_in_use: {
                    type: "bool",
                    id: 2
                }
            }
        }
    }
    ,
    810615: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            oneofs: {
                content: {
                    oneof: ["success"]
                }
            },
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                match_id: {
                    type: "string",
                    id: 2
                },
                type: {
                    type: "MatchMsgType",
                    id: 3
                },
                success: {
                    type: "MatchSuccessMsg",
                    id: 100
                }
            }
        }
    }
    ,
    537311: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                SUCCESS: 0
            }
        }
    }
    ,
    807132: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                user: {
                    type: "webcast.data.User",
                    id: 1
                },
                room_id: {
                    type: "int64",
                    id: 2
                },
                invite_type: {
                    type: "int64",
                    id: 3
                }
            }
        }
    }
    ,
    171947: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                NotReviewed: 0,
                UnderReview: 1,
                ReviewPass: 2,
                ReviewRejected: 3,
                ReviewAbandon: 4
            }
        }
    }
    ,
    19850: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                vid: {
                    type: "string",
                    id: 2
                }
            }
        }
    }
    ,
    964608: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                MEDIA_UNDEFINED: 0,
                MEDIA_NORMAL: 1,
                MEDIA_MUTED: 2,
                MEDIA_UNMUTE_OCCUPIED: 3,
                MEDIA_MUTED_OCCUPIED: 4
            }
        }
    }
    ,
    120459: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                user_id: {
                    type: "int64",
                    id: 1
                },
                is_staged: {
                    type: "bool",
                    id: 2
                },
                nickname: {
                    type: "string",
                    id: 3
                },
                avatar: {
                    type: "data.Image",
                    id: 4
                }
            }
        }
    }
    ,
    88492: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                user: {
                    type: "webcast.data.User",
                    id: 2
                },
                member_count: {
                    type: "int64",
                    id: 3
                },
                operator: {
                    type: "webcast.data.User",
                    id: 4
                },
                is_set_to_admin: {
                    type: "bool",
                    id: 5
                },
                is_top_user: {
                    type: "bool",
                    id: 6
                },
                rank_score: {
                    type: "int64",
                    id: 7
                },
                top_user_no: {
                    type: "int64",
                    id: 8
                },
                enter_type: {
                    type: "int64",
                    id: 9
                },
                action: {
                    type: "int64",
                    id: 10
                },
                action_description: {
                    type: "string",
                    id: 11
                },
                user_id: {
                    type: "int64",
                    id: 12
                },
                effect_config: {
                    type: "EffectConfig",
                    id: 13
                },
                pop_str: {
                    type: "string",
                    id: 14
                },
                enter_effect_config: {
                    type: "EffectConfig",
                    id: 15
                },
                background_image: {
                    type: "webcast.data.Image",
                    id: 16
                },
                background_image_v2: {
                    type: "webcast.data.Image",
                    id: 17
                },
                anchor_display_text: {
                    type: "webcast.data.Text",
                    id: 18
                },
                client_enter_source: {
                    type: "string",
                    id: 19
                },
                client_enter_type: {
                    type: "string",
                    id: 20
                },
                client_live_reason: {
                    type: "string",
                    id: 21
                },
                action_duration: {
                    type: "int64",
                    id: 22
                },
                user_share_type: {
                    type: "string",
                    id: 23
                },
                display_style: {
                    type: "DisplayStyle",
                    id: 24
                },
                admin_permissions: {
                    keyType: "int32",
                    type: "int32",
                    id: 25
                },
                kick_source: {
                    type: "int32",
                    id: 26
                },
                allow_preview_time: {
                    type: "int64",
                    id: 27
                },
                last_subscription_action: {
                    type: "int64",
                    id: 28
                },
                public_area_message_common: {
                    type: "PublicAreaMessageCommon",
                    id: 29
                },
                live_sub_only_tier: {
                    type: "int64",
                    id: 30
                },
                live_sub_only_month: {
                    type: "int64",
                    id: 31
                },
                ec_streamer_key: {
                    type: "string",
                    id: 32
                },
                show_wave: {
                    type: "int64",
                    id: 33
                },
                wave_algorithm_data: {
                    type: "WaveAlgorithmData",
                    id: 34
                }
            },
            nested: {
                EffectConfig: {
                    fields: {
                        type: {
                            type: "int64",
                            id: 1
                        },
                        icon: {
                            type: "webcast.data.Image",
                            id: 2
                        },
                        avatar_pos: {
                            type: "int64",
                            id: 3
                        },
                        text: {
                            type: "webcast.data.Text",
                            id: 4
                        },
                        text_icon: {
                            type: "webcast.data.Image",
                            id: 5
                        },
                        stay_time: {
                            type: "int32",
                            id: 6
                        },
                        anim_asset_id: {
                            type: "int64",
                            id: 7
                        },
                        badge: {
                            type: "webcast.data.Image",
                            id: 8
                        },
                        flex_setting_array: {
                            rule: "repeated",
                            type: "int64",
                            id: 9
                        }
                    }
                }
            }
        }
    }
    ,
    189647: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                user_id: {
                    type: "string",
                    id: 1
                },
                nickname: {
                    type: "string",
                    id: 2
                }
            }
        }
    }
    ,
    811614: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                method: {
                    type: "string",
                    id: 1
                },
                payload: {
                    type: "bytes",
                    id: 2
                },
                msg_id: {
                    type: "int64",
                    id: 3
                },
                msg_type: {
                    type: "int32",
                    id: 4
                },
                offset: {
                    type: "int64",
                    id: 5
                },
                is_history: {
                    type: "bool",
                    id: 6
                }
            }
        }
    }
    ,
    101185: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                MessageDisplayStyle_Default: 0,
                MessageDisplayStyle_PopUp: 1
            }
        }
    }
    ,
    433654: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                MessageType_SubSuccess: 0,
                MessageType_AnchorReminder: 1,
                MessageType_EnterRoomExpireSoon: 2,
                MessageType_SubGoalCreateToAnchor: 3,
                MessageType_SubGoalCompleteToAudience: 4,
                MessageType_SubGoalCompleteToAnchor: 5,
                MessageType_SubGiftTiktok2UserNotice: 6,
                MessageType_SubGiftTiktok2AnchorNotice: 7,
                MessageType_SubGiftTReceiveSendNotice: 8,
                MessageType_SubGiftSendSucceedRoomMessage: 9,
                MessageType_SubGiftSendSucceedAnchorNotice: 10,
                MessageType_SubGiftLowVersionUpgradeNotice: 11,
                MessageType_SubGiftUserBuyAuthNotice: 12,
                MessageType_SubCommonTextNotice: 13,
                MessageType_SubModeratorPinPerk: 14
            }
        }
    }
    ,
    28270: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                MIC_IDX_OP_ON: 0,
                MIC_IDX_OP_OFF: 1
            }
        }
    }
    ,
    427623: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                sub_wave_data: {
                    type: "SubWaveData",
                    id: 1
                },
                sub_goal_data: {
                    type: "SubGoalData",
                    id: 2
                },
                live_goal_indicator_stream_goal: {
                    type: "StreamGoalData",
                    id: 3
                },
                guess_widgets_data: {
                    type: "GuessWidgetsData",
                    id: 4
                },
                play_together_widgets_data: {
                    type: "PlayTogetherWidgetsData",
                    id: 5
                }
            }
        }
    }
    ,
    773098: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                action_data: {
                    type: "webcast.data.UnifyBaseActionData",
                    id: 2
                },
                extra: {
                    type: "MiddleTouchExtra",
                    id: 3
                }
            }
        }
    }
    ,
    385563: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                is_migrate: {
                    type: "bool",
                    id: 1
                },
                source_group_channel_id: {
                    type: "int64",
                    id: 2
                },
                target_group_channel_id: {
                    type: "int64",
                    id: 3
                }
            }
        }
    }
    ,
    830937: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                id: {
                    type: "int64",
                    id: 1
                },
                nickname: {
                    type: "string",
                    id: 3
                },
                avatar_thumb: {
                    type: "webcast.data.Image",
                    id: 9
                },
                follow_info: {
                    type: "FollowInfo",
                    id: 22
                },
                display_id: {
                    type: "string",
                    id: 38
                },
                badge_list: {
                    rule: "repeated",
                    type: "BadgeStruct",
                    id: 64
                },
                id_str: {
                    type: "string",
                    id: 1028
                },
                is_mini_user: {
                    type: "bool",
                    id: 9999
                }
            },
            nested: {
                FollowInfo: {
                    fields: {
                        follow_status: {
                            type: "int64",
                            id: 3
                        }
                    }
                }
            }
        }
    }
    ,
    211925: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                MissionJoinStatusUnknown: 0,
                MissionJoinStatusCantJoin: 1,
                MissionJoinStatusUnJoin: 2,
                MissionJoinStatusUnClaim: 3,
                MissionJoinStatusJoined: 4
            }
        }
    }
    ,
    388656: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                ModificationMsgTypeUnknown: 0,
                ModificationMsgTypeStartUse: 1,
                ModificationMsgTypeEndUse: 2,
                ModificationMsgTypeUpdate: 3
            }
        }
    }
    ,
    382297: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                ModificationTypeUnknown: 0,
                ModificationTypeEffect: 1,
                ModificationTypeBeauty: 2,
                ModificationTypeFilter: 3,
                ModificationTypeVoice: 4,
                ModificationTypeMusic: 5,
                ModificationTypeSticker: 6
            }
        }
    }
    ,
    524185: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                deprecated1: {
                    type: "int64",
                    id: 1
                },
                deprecated2: {
                    type: "int64",
                    id: 2
                },
                deprecated3: {
                    type: "int64",
                    id: 3
                },
                deprecated4: {
                    type: "int64",
                    id: 4
                },
                deprecated5: {
                    type: "int64",
                    id: 5
                },
                deprecated6: {
                    type: "int64",
                    id: 6
                },
                deprecated7: {
                    type: "int64",
                    id: 7
                },
                deprecated8: {
                    type: "int64",
                    id: 8
                },
                deprecated9: {
                    type: "string",
                    id: 9
                }
            }
        }
    }
    ,
    715148: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                deprecated1: {
                    type: "int64",
                    id: 1
                },
                deprecated2: {
                    type: "Rank",
                    id: 2
                },
                deprecated3: {
                    type: "int32",
                    id: 3
                },
                deprecated4: {
                    rule: "repeated",
                    type: "Rank",
                    id: 4
                },
                deprecated5: {
                    type: "Rank",
                    id: 5
                },
                deprecated6: {
                    type: "bool",
                    id: 6
                }
            },
            nested: {
                Rank: {
                    fields: {
                        deprecated1: {
                            type: "webcast.data.User",
                            id: 1
                        },
                        deprecated2: {
                            type: "bool",
                            id: 2
                        },
                        deprecated3: {
                            type: "int64",
                            id: 3
                        },
                        deprecated4: {
                            type: "int32",
                            id: 4
                        },
                        deprecated5: {
                            type: "int32",
                            id: 5
                        },
                        deprecated6: {
                            type: "int32",
                            id: 6
                        },
                        deprecated7: {
                            type: "string",
                            id: 7
                        },
                        deprecated8: {
                            type: "string",
                            id: 8
                        },
                        deprecated9: {
                            type: "string",
                            id: 9
                        },
                        sec_anchor_id: {
                            type: "string",
                            id: 10
                        }
                    }
                }
            }
        }
    }
    ,
    224366: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                year: {
                    type: "int32",
                    id: 1
                },
                month: {
                    type: "int32",
                    id: 2
                },
                earnings: {
                    type: "string",
                    id: 3
                },
                total_revenue: {
                    type: "string",
                    id: 4
                },
                refunds: {
                    type: "string",
                    id: 5
                },
                earnings_usd: {
                    type: "string",
                    id: 6
                },
                total_revenue_usd: {
                    type: "string",
                    id: 7
                },
                refunds_usd: {
                    type: "string",
                    id: 8
                },
                new_installs: {
                    type: "int64",
                    id: 9
                }
            }
        }
    }
    ,
    11111: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                reward_id: {
                    type: "string",
                    id: 1
                },
                scene: {
                    type: "string",
                    id: 2
                },
                reward_type: {
                    type: "MotRewardType",
                    id: 3
                },
                reward_name: {
                    type: "string",
                    id: 4
                },
                reward_desc: {
                    type: "string",
                    id: 5
                },
                reward_name_starling_key: {
                    type: "string",
                    id: 6
                },
                reward_desc_starling_key: {
                    type: "string",
                    id: 7
                },
                reward_name_starling: {
                    type: "string",
                    id: 8
                },
                reward_desc_starling: {
                    type: "string",
                    id: 9
                },
                reward_config: {
                    type: "string",
                    id: 10
                },
                stock_id: {
                    type: "string",
                    id: 11
                },
                retry_conf: {
                    type: "MotRewardRetryConf",
                    id: 12
                },
                meta_status: {
                    type: "MotRewardMetaStatus",
                    id: 13
                },
                version: {
                    type: "int64",
                    id: 100
                },
                create_user: {
                    type: "string",
                    id: 101
                },
                update_user: {
                    type: "string",
                    id: 102
                },
                create_time: {
                    type: "string",
                    id: 103
                },
                update_time: {
                    type: "string",
                    id: 104
                }
            }
        }
    }
    ,
    38581: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                MOT_REWARD_META_STATUS_ONLINE: 0,
                MOT_REWARD_META_STATUS_OFFLINE: 1
            }
        }
    }
    ,
    608195: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                order_id: {
                    type: "string",
                    id: 1
                },
                scene: {
                    type: "string",
                    id: 2
                },
                downstream_order_id: {
                    type: "string",
                    id: 3
                },
                anchor_id: {
                    type: "string",
                    id: 4
                },
                reward_id: {
                    type: "string",
                    id: 5
                },
                reward_num: {
                    type: "int64",
                    id: 6
                },
                reward_status: {
                    type: "MotRewardStatus",
                    id: 7
                },
                idc: {
                    type: "string",
                    id: 8
                },
                err_msg: {
                    type: "string",
                    id: 9
                },
                out_put_info: {
                    type: "string",
                    id: 10
                },
                extra_info: {
                    type: "string",
                    id: 11
                },
                create_time: {
                    type: "string",
                    id: 103
                },
                update_time: {
                    type: "string",
                    id: 104
                }
            }
        }
    }
    ,
    570806: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                delay_second_list: {
                    rule: "repeated",
                    type: "int64",
                    id: 1
                }
            }
        }
    }
    ,
    153120: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                sync_conf: {
                    type: "MotRewardRetrySyncConf",
                    id: 1
                },
                async_conf: {
                    type: "MotRewardRetryAsyncConf",
                    id: 2
                }
            }
        }
    }
    ,
    402603: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                max_time: {
                    type: "int64",
                    id: 1
                },
                delay_ms: {
                    type: "int64",
                    id: 2
                }
            }
        }
    }
    ,
    772380: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                MOT_REWARD_STATUS_STOP: 0,
                MOT_REWARD_STATUS_INIT: 100,
                MOT_REWARD_STATUS_WAIT_ASYNC_SEND: 200,
                MOT_REWARD_STATUS_WAIT_ASYNC_RETRY: 201,
                MOT_REWARD_STATUS_SEND_INIT: 300,
                MOT_REWARD_STATUS_SEND_START: 301,
                MOT_REWARD_STATUS_SEND_SUCCESS: 302,
                MOT_REWARD_STATUS_SEND_FAIL: 3001,
                MOT_REWARD_STATUS_STOCK_CHECK_INIT: 400,
                MOT_REWARD_STATUS_STOCK_CHECK_SUCCESS: 401,
                MOT_REWARD_STATUS_STOCK_CHECK_FAIL: 4001
            }
        }
    }
    ,
    356150: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                MOT_REWARD_TYPE_UN_KNOW: 0,
                MOT_REWARD_TYPE_FLARE_CARD: 1,
                MOT_REWARD_TYPE_ANCHOR_GROW_LEVEL_EXP: 2,
                MOT_REWARD_TYPE_DIAMOND: 3,
                MOT_REWARD_TYPE_SUB_GIFT: 4,
                MOT_REWARD_TYPE_LS_OVERLAY: 5,
                MOT_REWARD_TYPE_EFFECT: 6,
                MOT_REWARD_TYPE_STICKER: 7,
                MOT_REWARD_TYPE_MONEY: 8,
                MOT_REWARD_TYPE_PROMOTE_COUPON: 9
            }
        }
    }
    ,
    818350: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                reward_type_name: {
                    type: "string",
                    id: 1
                },
                reward_type: {
                    type: "MotRewardType",
                    id: 2
                },
                reward_config_json_schema_field_list: {
                    rule: "repeated",
                    type: "JSONSchemaFieldInfo",
                    id: 3
                }
            }
        }
    }
    ,
    942592: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                d_type: {
                    type: "MsgDetectType",
                    id: 2
                },
                t_condition: {
                    type: "TriggerCondition",
                    id: 3
                },
                t_info: {
                    type: "TimeInfo",
                    id: 4
                },
                trigger_by: {
                    type: "TriggerBy",
                    id: 5
                },
                from_region: {
                    type: "string",
                    id: 6
                }
            },
            nested: {
                MsgDetectType: {
                    values: {
                        UnknownMsgDetectType: 0,
                        TriggerDetect: 1,
                        TimeDelayReport: 2,
                        TimeDelayWithCallback: 3
                    }
                },
                TriggerBy: {
                    values: {
                        Cronjob: 0,
                        DetectTask: 1
                    }
                }
            }
        }
    }
    ,
    467366: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                is_gifter: {
                    type: "bool",
                    id: 1
                },
                is_subscribed_to_anchor: {
                    type: "bool",
                    id: 2
                }
            }
        }
    }
    ,
    48857: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                source_operate_ms: {
                    type: "int64",
                    id: 1
                },
                server_send_ms: {
                    type: "int64",
                    id: 2
                },
                reasons: {
                    rule: "repeated",
                    type: "string",
                    id: 3
                }
            }
        }
    }
    ,
    293733: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                component_rule_list_v2: {
                    rule: "repeated",
                    type: "webcast.data.MsgNotifyComponentAvoidRuleV2",
                    id: 1
                }
            }
        }
    }
    ,
    98919: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                component_type: {
                    type: "MsgNotifyComponentType",
                    id: 1
                },
                sub_component_type: {
                    type: "MsgNotifySubComponentType",
                    id: 2
                },
                can_be_interrupt: {
                    type: "bool",
                    id: 3
                },
                first_recover_info: {
                    type: "MsgNotifyComponentRecoverInfo",
                    id: 4
                },
                interrupt_recover_info: {
                    type: "MsgNotifyComponentRecoverInfo",
                    id: 5
                },
                max_active_count: {
                    type: "int32",
                    id: 6
                },
                priority: {
                    type: "int64",
                    id: 7
                },
                avoid_scene: {
                    rule: "repeated",
                    type: "string",
                    id: 8
                },
                recover_threshold_ms: {
                    type: "int64",
                    id: 9
                },
                max_recover_remain_ms: {
                    type: "int64",
                    id: 10
                }
            }
        }
    }
    ,
    488444: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                recover: {
                    type: "bool",
                    id: 1
                },
                delay_ms: {
                    type: "int64",
                    id: 2
                }
            }
        }
    }
    ,
    507136: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                MsgNotifyComponentRecoverType_Unknown: 0,
                MsgNotifyComponentRecoverType_Recover: 1,
                MsgNotifyComponentRecoverType_NoRecover: 2
            }
        }
    }
    ,
    485998: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                MsgNotifyComponentType_Unknown: 0,
                MsgNotifyComponentType_Bubble: 1,
                MsgNotifyComponentType_RedDot: 2,
                MsgNotifyComponentType_PlatformCapsule: 4,
                MsgNotifyComponentType_UserCapsule: 5,
                MsgNotifyComponentType_AlienationCapsule: 6,
                MsgNotifyComponentType_SidePushCardA: 7,
                MsgNotifyComponentType_SidePushCardB: 8,
                MsgNotifyComponentType_UserPanel: 9,
                MsgNotifyComponentType_Panel: 10,
                MsgNotifyComponentType_HorizontalPushCard: 11,
                MsgNotifyComponentType_EcommerceGuideTips: 12,
                MsgNotifyComponentType_EcommerceGuideNew: 13,
                MsgNotifyComponentType_MarketingCapsule: 14,
                MsgNotifyComponentType_FollowGuideButton: 15
            }
        }
    }
    ,
    211082: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                MsgNotifyPosition_Unknown: 0,
                MsgNotifyPosition_PreviewSettingIcon: 1,
                MsgNotifyPosition_ProductIcon: 2,
                MsgNotifyPosition_ShareIcon: 3,
                MsgNotifyPosition_GiftIcon: 4,
                MsgNotifyPosition_ShopIcon: 5,
                MsgNotifyPosition_EnhanceIcon: 6,
                MsgNotifyPosition_SubscriptionIcon: 7,
                MsgNotifyPosition_PreviewLiveCenterIcon: 8,
                MsgNotifyPosition_GoLiveSubscriptionIcon: 9,
                MsgNotifyPosition_PreviewEnhanceIcon: 10,
                MsgNotifyPosition_CoHostIcon: 11,
                MsgNotifyPosition_InteractionIcon: 12,
                MsgNotifyPosition_MatchSettingIcon: 13,
                MsgNotifyPosition_PreviewSubscriptionIcon: 14,
                MsgNotifyPosition_PreviewBusinessIcon: 15,
                MsgNotifyPosition_ShareAndMoreIcon: 16,
                MsgNotifyPosition_PreviewLiveGoalIcon: 17,
                MsgNotifyPosition_GiftPanel: 18
            }
        }
    }
    ,
    955353: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                component_type: {
                    type: "MsgNotifyComponentType",
                    id: 1
                },
                position_count_map: {
                    keyType: "string",
                    type: "int64",
                    id: 2
                },
                default_count: {
                    type: "int64",
                    id: 3
                }
            }
        }
    }
    ,
    17232: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                room_id: {
                    type: "string",
                    id: 1
                },
                ts: {
                    type: "string",
                    id: 2
                },
                component_type: {
                    type: "MsgNotifyComponentType",
                    id: 3
                },
                biz_key: {
                    type: "string",
                    id: 4
                },
                position: {
                    type: "string",
                    id: 5
                },
                user_action: {
                    type: "MsgNotifyUserAction",
                    id: 6
                }
            }
        }
    }
    ,
    348672: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                MsgNotifySubComponentType_Unknown: 0,
                MsgNotifySubComponentType_SidePushCardB_PL: 81,
                MsgNotifySubComponentType_SidePushCardB_SubOnly: 82,
                MsgNotifySubComponentType_SidePushCardB_LiveEvent: 83
            }
        }
    }
    ,
    322056: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                MsgNotifyUserAction_Unknown: 0,
                MsgNotifyUserAction_Show: 1,
                MsgNotifyUserAction_Click: 2
            }
        }
    }
    ,
    899245: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                component_type: {
                    type: "MsgNotifyComponentType",
                    id: 1
                },
                coutinuous_room_cnt: {
                    type: "int64",
                    id: 2
                },
                count: {
                    type: "int64",
                    id: 3
                }
            }
        }
    }
    ,
    162571: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                component_type: {
                    type: "MsgNotifyComponentType",
                    id: 1
                },
                watch_mill_seconds: {
                    type: "int64",
                    id: 2
                },
                count: {
                    type: "int64",
                    id: 3
                }
            }
        }
    }
    ,
    391507: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                MULTI_GUEST_DISPLAY_ID_NONE: 0,
                MULTI_GUEST_DISPLAY_ID_FULL_SCREEN: 1,
                MULTI_GUEST_DISPLAY_ID_FIXED: 2,
                MULTI_GUEST_DISPLAY_ID_FLOAT: 3
            }
        }
    }
    ,
    608942: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                MULTI_GUEST_GIFTER_ENUM_NONE: 0,
                MULTI_GUEST_GIFTER_ENUM_V1: 1,
                MULTI_GUEST_GIFTER_ENUM_V2: 2
            }
        }
    }
    ,
    709722: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                MULTI_GUEST_HOST_DEV_MODE_NONE: 0,
                MULTI_GUEST_HOST_DEV_MODE_NOT_FINISH: 1
            }
        }
    }
    ,
    795131: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                linked_users: {
                    rule: "repeated",
                    type: "ListUser",
                    id: 1
                },
                request_user_status: {
                    type: "int64",
                    id: 8
                },
                fan_ticket_icon_url: {
                    type: "string",
                    id: 9
                },
                host_display_info: {
                    type: "HostDisplayInfo",
                    id: 14
                }
            },
            nested: {
                ListUser: {
                    fields: {
                        user: {
                            type: "webcast.data.User",
                            id: 1
                        },
                        modify_time: {
                            type: "int64",
                            id: 2
                        },
                        role_type: {
                            type: "int64",
                            id: 4
                        },
                        linkmic_id_str: {
                            type: "string",
                            id: 5
                        },
                        fan_ticket: {
                            type: "int64",
                            id: 7
                        },
                        fan_ticket_icon_type: {
                            type: "int32",
                            id: 10
                        }
                    }
                },
                HostDisplayInfo: {
                    fields: {
                        host_icon_background_url: {
                            type: "string",
                            id: 1
                        },
                        host_icon_url: {
                            type: "string",
                            id: 2
                        },
                        host_color: {
                            type: "string",
                            id: 3
                        },
                        icon_link_url: {
                            type: "string",
                            id: 4
                        },
                        host_type: {
                            type: "int64",
                            id: 5
                        }
                    }
                }
            }
        }
    }
    ,
    166344: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                OUTSIDE_ROOM_INVITE_SOURCE_UNKNOWN: 0,
                OUTSIDE_ROOM_INVITE_SOURCE_PANEL: 1,
                OUTSIDE_ROOM_INVITE_SOURCE_CAPSULE: 2,
                OUTSIDE_ROOM_INVITE_SOURCE_EMPTY_POSITION: 3
            }
        }
    }
    ,
    826817: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                flag: {
                    type: "bool",
                    id: 1
                },
                err_code: {
                    type: "int64",
                    id: 2
                },
                no_permission_prompt: {
                    type: "string",
                    id: 3
                },
                specific_permission_bit_map: {
                    type: "int64",
                    id: 4
                }
            }
        }
    }
    ,
    934759: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                MULTI_GUEST_PLAY_FEATURE_CONFIG_KEY_NONE: 0,
                MULTI_GUEST_PLAY_FEATURE_CONFIG_KEY_COUNTDOWN_V1: 1001
            }
        }
    }
    ,
    336753: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                MULTI_GUEST_PLAY_FEATURE_CONFIG_VALUE_NONE: 0,
                MULTI_GUEST_PLAY_FEATURE_CONFIG_VALUE_COUNTDOWN_V1_NORMAL: 10010001,
                MULTI_GUEST_PLAY_FEATURE_CONFIG_VALUE_COUNTDOWN_V1_WITHOUT_TARGET: 10010002
            }
        }
    }
    ,
    899208: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                pack_succ_flag: {
                    type: "bool",
                    id: 1
                },
                play_scene_to_config_map: {
                    keyType: "int32",
                    type: "MultiGuestPlayConfig",
                    id: 2
                }
            },
            nested: {
                MultiGuestPlayConfig: {
                    fields: {
                        play_scene: {
                            type: "int32",
                            id: 1
                        },
                        feature_config_map: {
                            keyType: "int32",
                            type: "int32",
                            id: 2
                        }
                    }
                }
            }
        }
    }
    ,
    221127: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                action_type: {
                    type: "tikcast.linkmic.common.MultiGuestPunishCenterActionType",
                    id: 2
                }
            }
        }
    }
    ,
    836764: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                MULTI_GUEST_PUNISH_CENTER_ACTION_TYPE_UNKNOWN: 0,
                MULTI_GUEST_PUNISH_CENTER_ACTION_TYPE_FINISH_LINKMIC: 1
            }
        }
    }
    ,
    9023: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                suggested_image: {
                    rule: "repeated",
                    type: "webcast.data.Image",
                    id: 2
                }
            }
        }
    }
    ,
    952484: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                MultiGuestUserTagEnumNone: 0,
                MultiGuestUserTagEnumPromising: 1,
                MultiGuestUserTagEnumGold: 2,
                MultiGuestUserTagEnumSilver: 3,
                MultiGuestUserTagEnumBronze: 4
            }
        }
    }
    ,
    900015: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                language: {
                    type: "string",
                    id: 1
                },
                content: {
                    type: "string",
                    id: 2
                }
            }
        }
    }
    ,
    961462: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                user_settings: {
                    type: "UserSettings",
                    id: 1
                },
                linkmic_service_version: {
                    type: "LinkmicServiceVersion",
                    id: 2
                },
                room_host_multi_guest_permission_info: {
                    type: "RoomHostMultiGuestPermissionInfo",
                    id: 3
                },
                try_open_multi_guest_when_create_room: {
                    type: "bool",
                    id: 4
                },
                room_audience_multi_guest_permission_info: {
                    type: "RoomAudienceMultiGuestPermissionInfo",
                    id: 5
                },
                room_multi_guest_linkmic_info: {
                    type: "RoomMultiGuestLinkmicInfo",
                    id: 6
                },
                host_multi_guest_dev_mode: {
                    type: "int64",
                    id: 7
                },
                audience_shared_invitee_panel_type: {
                    type: "int64",
                    id: 8
                },
                host_gifter_linkmic_enum: {
                    type: "int64",
                    id: 9
                },
                viewer_gifter_linkmic_enum: {
                    type: "int64",
                    id: 10
                },
                anchor_setting_info: {
                    type: "AnchorSettingInfo",
                    id: 11
                },
                host_send_gifts_to_all_enum: {
                    type: "int64",
                    id: 20
                },
                audience_send_gifts_to_all_enum: {
                    type: "int64",
                    id: 21
                },
                multi_guest_play_info: {
                    type: "webcast.data.MultiGuestPlayInfo",
                    id: 30
                }
            },
            nested: {
                UserSettings: {
                    fields: {
                        multi_live_apply_permission: {
                            type: "int64",
                            id: 1
                        },
                        applier_sort_setting: {
                            type: "int64",
                            id: 2
                        },
                        applier_sort_gift_score_threshold: {
                            type: "int64",
                            id: 3
                        },
                        multi_guest_allow_request_from_friends: {
                            type: "int64",
                            id: 4
                        },
                        multi_guest_allow_request_from_followers: {
                            type: "int64",
                            id: 5
                        },
                        multi_guest_allow_request_from_others: {
                            type: "int64",
                            id: 6
                        }
                    }
                }
            }
        }
    }
    ,
    6157: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            oneofs: {
                business: {
                    oneof: ["apply_biz_content", "invite_biz_content", "reply_biz_content", "permit_biz_content", "join_direct_biz_content", "kick_out_biz_content"]
                }
            },
            fields: {
                apply_biz_content: {
                    type: "ApplyBizContent",
                    id: 1
                },
                invite_biz_content: {
                    type: "InviteBizContent",
                    id: 2
                },
                reply_biz_content: {
                    type: "ReplyBizContent",
                    id: 3
                },
                permit_biz_content: {
                    type: "PermitBizContent",
                    id: 4
                },
                join_direct_biz_content: {
                    type: "JoinDirectBizContent",
                    id: 5
                },
                kick_out_biz_content: {
                    type: "KickOutBizContent",
                    id: 6
                }
            }
        }
    }
    ,
    334680: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                MainHorizontal: 0,
                MainVertical: 1
            }
        }
    }
    ,
    775138: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                MUTE: 0,
                UNMUTE: 1
            }
        }
    }
    ,
    964916: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                }
            }
        }
    }
    ,
    404850: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                STATE_NETWORK_UNDEFINED: 0,
                STATE_NETWORK_EXCELLENT: 1,
                STATE_NETWORK_GOOD: 2,
                STATE_NETWORK_POOR: 3,
                STATE_NETWORK_BAD: 4,
                STATE_NETWORK_VBAD: 5,
                STATE_NETWORK_DOWN: 6
            }
        }
    }
    ,
    949849: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                effect_panel: {
                    type: "string",
                    id: 1
                },
                resource_id: {
                    type: "string",
                    id: 2
                },
                category_id: {
                    type: "string",
                    id: 3
                },
                tab_key: {
                    type: "string",
                    id: 4
                }
            }
        }
    }
    ,
    207670: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                anchor_id: {
                    type: "int64",
                    id: 1
                },
                icon: {
                    type: "webcast.data.Image",
                    id: 2
                },
                icon_style: {
                    type: "NewAnchorGuideIconStyle",
                    id: 3
                },
                title: {
                    type: "webcast.data.Text",
                    id: 4
                },
                button: {
                    type: "webcast.data.Text",
                    id: 5
                },
                text: {
                    type: "webcast.data.Text",
                    id: 6
                },
                display_duration: {
                    type: "int32",
                    id: 7
                },
                effect_params: {
                    type: "NewAnchorEffectParams",
                    id: 8
                },
                display_type: {
                    type: "int32",
                    id: 9
                }
            }
        }
    }
    ,
    795388: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                NEW_ANCHOR_GUIDE_DISPLAY_TYPE_DEFAULT: 0,
                NEW_ANCHOR_GUIDE_DISPLAY_TYPE_TEXT: 1
            }
        }
    }
    ,
    136480: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                NEW_ANCHOR_GUIDE_ICON_STYLE_LONG: 0,
                NEW_ANCHOR_GUIDE_ICON_STYLE_WIDE: 1
            }
        }
    }
    ,
    930345: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                guide_msg: {
                    type: "NewAnchorGuideMsgInfo",
                    id: 2
                }
            }
        }
    }
    ,
    507091: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                message_key: {
                    type: "string",
                    id: 1
                },
                guide_config: {
                    type: "NewAnchorGuideConfig",
                    id: 2
                }
            }
        }
    }
    ,
    160975: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {}
        }
    }
    ,
    640029: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                noble_count: {
                    type: "int64",
                    id: 2
                }
            }
        }
    }
    ,
    249523: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                user: {
                    type: "webcast.data.User",
                    id: 2
                },
                toast_icon: {
                    type: "webcast.data.Image",
                    id: 3
                }
            }
        }
    }
    ,
    316234: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                user: {
                    type: "webcast.data.User",
                    id: 2
                },
                open_url: {
                    type: "string",
                    id: 3
                },
                background_pop: {
                    type: "webcast.data.Image",
                    id: 4
                },
                background_normal: {
                    type: "webcast.data.Image",
                    id: 5
                },
                display_style: {
                    type: "int32",
                    id: 6
                },
                priority: {
                    type: "webcast.data.GiftIMPriority",
                    id: 7
                }
            }
        }
    }
    ,
    365192: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                note_content_type: {
                    type: "NoteContentType",
                    id: 1
                },
                note_content_text: {
                    type: "string",
                    id: 2
                },
                note_content_image: {
                    type: "webcast.data.Image",
                    id: 3
                },
                note_content_display_order: {
                    type: "int32",
                    id: 4
                },
                note_time_ms: {
                    type: "int64",
                    id: 5
                },
                audit_status: {
                    type: "AuditStatus",
                    id: 6
                },
                audit_info: {
                    type: "AuditInfo",
                    id: 7
                }
            }
        }
    }
    ,
    97264: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                NoteContentTypeUnknown: 0,
                NoteContentTypeText: 1,
                NoteContentTypeImage: 2,
                NoteContentTypeImageCombined: 3
            }
        }
    }
    ,
    537320: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                note_content_list: {
                    rule: "repeated",
                    type: "NoteContent",
                    id: 1
                },
                note_version: {
                    type: "int64",
                    id: 2
                }
            }
        }
    }
    ,
    351038: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                content: {
                    type: "string",
                    id: 2
                },
                notice_type: {
                    type: "int64",
                    id: 3
                },
                style: {
                    type: "string",
                    id: 4
                },
                title: {
                    type: "webcast.data.Text",
                    id: 5
                },
                violation_reason: {
                    type: "webcast.data.Text",
                    id: 6
                },
                display_text: {
                    type: "webcast.data.Text",
                    id: 7
                },
                tips_title: {
                    type: "webcast.data.Text",
                    id: 8
                },
                tips_url: {
                    type: "string",
                    id: 9
                },
                notice_title: {
                    type: "webcast.data.Text",
                    id: 10
                },
                notice_content: {
                    type: "webcast.data.Text",
                    id: 11
                },
                scene: {
                    type: "string",
                    id: 12
                }
            }
        }
    }
    ,
    18444: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                room_id: {
                    type: "int64",
                    id: 1
                },
                channel_id: {
                    type: "int64",
                    id: 2
                },
                noticeboard_id: {
                    type: "int64",
                    id: 3
                },
                status: {
                    type: "NoticeboardStatus",
                    id: 4
                },
                linkmic_id: {
                    type: "string",
                    id: 5
                },
                position: {
                    type: "tikcast.linkmic.common.Position",
                    id: 6
                },
                stream_id: {
                    type: "string",
                    id: 7
                },
                start_time: {
                    type: "int64",
                    id: 8
                },
                end_time: {
                    type: "int64",
                    id: 9
                },
                passed_media_node_id: {
                    type: "string",
                    id: 10
                },
                last_review_info: {
                    type: "NoticeboardReviewInfo",
                    id: 11
                },
                version: {
                    type: "int64",
                    id: 12
                }
            }
        }
    }
    ,
    250148: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                background_image_uri: {
                    type: "string",
                    id: 1
                },
                cover_image_uri: {
                    type: "string",
                    id: 2
                },
                config_json_uri: {
                    type: "string",
                    id: 3
                },
                title: {
                    type: "string",
                    id: 4
                },
                text_char_count: {
                    type: "int64",
                    id: 5
                },
                text_box_count: {
                    type: "int64",
                    id: 6
                },
                starling_list: {
                    rule: "repeated",
                    type: "string",
                    id: 7
                },
                thumb_cover_image_uri: {
                    type: "string",
                    id: 8
                }
            }
        }
    }
    ,
    782494: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                message_type: {
                    type: "NoticeboardMessageType",
                    id: 2
                },
                noticeboard_content: {
                    type: "webcast.data.multi_guest_play.NoticeboardContent",
                    id: 3
                },
                operator_user_info: {
                    type: "tikcast.linkmic.common.LinkerMediaChangeOperator",
                    id: 4
                }
            }
        }
    }
    ,
    573942: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                NOTICEBOARD_MESSAGE_TYPE_UNKNOWN: 0,
                NOTICEBOARD_MESSAGE_TYPE_REVIEW: 1,
                NOTICEBOARD_MESSAGE_TYPE_END: 2,
                NOTICEBOARD_MESSAGE_TYPE_CONTENT_SYNC: 3
            }
        }
    }
    ,
    147609: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                NOTICEBOARD_POST_REVIEW_STATUS_UNKNOWN: 0,
                NOTICEBOARD_POST_REVIEW_STATUS_NORMAL: 10,
                NOTICEBOARD_POST_REVIEW_STATUS_TRAFFIC_RESTRICTED: 20,
                NOTICEBOARD_POST_REVIEW_STATUS_INTERRUPTED: 30
            }
        }
    }
    ,
    648322: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                NOTICEBOARD_PRE_REVIEW_STATUS_UNKNOWN: 0,
                NOTICEBOARD_PRE_REVIEW_STATUS_PASSED: 1,
                NOTICEBOARD_PRE_REVIEW_STATUS_REJECTED: 2
            }
        }
    }
    ,
    938913: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                media_node_id: {
                    type: "string",
                    id: 1
                },
                review_status: {
                    type: "NoticeboardReviewStatus",
                    id: 2
                }
            }
        }
    }
    ,
    674390: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                message_type: {
                    type: "NoticeboardReviewMessageType",
                    id: 2
                },
                media_node_id: {
                    type: "string",
                    id: 3
                },
                post_review_status: {
                    type: "webcast.data.multi_guest_play.NoticeboardPostReviewStatus",
                    id: 4
                },
                pre_review_status: {
                    type: "webcast.data.multi_guest_play.NoticeboardPreReviewStatus",
                    id: 5
                }
            }
        }
    }
    ,
    816414: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                NOTICEBOARD_REVIEW_MESSAGE_TYPE_UNKNOWN: 0,
                NOTICEBOARD_REVIEW_MESSAGE_TYPE_POST_REVIEW: 1,
                NOTICEBOARD_REVIEW_MESSAGE_TYPE_PRE_REVIEW: 2
            }
        }
    }
    ,
    491367: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                NOTICEBOARD_REVIEW_STATUS_UNKNOWN: 0,
                NOTICEBOARD_REVIEW_STATUS_UNDER_REVIEW: 1,
                NOTICEBOARD_REVIEW_STATUS_TIME_OUT_RETRY: 2,
                NOTICEBOARD_REVIEW_STATUS_PASSED: 3,
                NOTICEBOARD_REVIEW_STATUS_PASSED_BUT_NO_POSITION: 4,
                NOTICEBOARD_REVIEW_STATUS_REJECTED: 5,
                NOTICEBOARD_REVIEW_STATUS_FAILED: 6
            }
        }
    }
    ,
    624943: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                NOTICEBOARD_STATUS_UNKNOWN: 0,
                NOTICEBOARD_STATUS_PENDING: 1,
                NOTICEBOARD_STATUS_APPLIED: 2,
                NOTICEBOARD_STATUS_END: 3
            }
        }
    }
    ,
    161639: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                noticeboard_template_id: {
                    type: "int64",
                    id: 1
                },
                media_node_id: {
                    type: "string",
                    id: 2
                },
                convert_noticeboard_material_info: {
                    type: "ConvertNoticeboardMaterialInfo",
                    id: 3
                },
                private_status: {
                    type: "NoticeboardTemplatePrivateStatus",
                    id: 4
                },
                review_status: {
                    type: "NoticeboardTemplateReviewStatus",
                    id: 5
                },
                author_info: {
                    type: "SimpleUser",
                    id: 6
                }
            }
        }
    }
    ,
    350519: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                NOTICEBOARD_TEMPLATE_FETCH_TYPE_UNKNOWN: 0,
                NOTICEBOARD_TEMPLATE_FETCH_TYPE_ALL: 1,
                NOTICEBOARD_TEMPLATE_FETCH_TYPE_MY_TEMPLATE: 2,
                NOTICEBOARD_TEMPLATE_FETCH_TYPE_RECOMMEND: 3
            }
        }
    }
    ,
    432062: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                NOTICEBOARD_TEMPLATE_PRIVATE_STATUS_UNKNOWN: 0,
                NOTICEBOARD_TEMPLATE_PRIVATE_STATUS_OPEN: 1,
                NOTICEBOARD_TEMPLATE_PRIVATE_STATUS_SELF_SEE: 2
            }
        }
    }
    ,
    864921: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                NOTICEBOARD_TEMPLATE_REVIEW_STATUS_UNKNOWN: 0,
                NOTICEBOARD_TEMPLATE_REVIEW_STATUS_UNDER_REVIEW: 1,
                NOTICEBOARD_TEMPLATE_REVIEW_STATUS_PASSED: 2,
                NOTICEBOARD_TEMPLATE_REVIEW_STATUS_PRE_REJECTED: 3,
                NOTICEBOARD_TEMPLATE_REVIEW_STATUS_POST_REJECTED: 4
            }
        }
    }
    ,
    859018: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                NOTICEBOARD_TEMPLATE_UPDATE_TYPE_UNKNOWN: 0,
                NOTICEBOARD_TEMPLATE_UPDATE_TYPE_OWNERSHIP: 1,
                NOTICEBOARD_TEMPLATE_UPDATE_TYPE_MATERIAL: 2,
                NOTICEBOARD_TEMPLATE_UPDATE_TYPE_MATERIAL_AND_OWNERSHIP: 3
            }
        }
    }
    ,
    844373: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                schema: {
                    type: "string",
                    id: 2
                },
                notify_type: {
                    type: "int64",
                    id: 3
                },
                content: {
                    type: "string",
                    id: 4
                },
                user: {
                    type: "webcast.data.User",
                    id: 5
                },
                extra: {
                    type: "Extra",
                    id: 6
                },
                notify_class: {
                    type: "int64",
                    id: 7
                },
                flex_setting: {
                    rule: "repeated",
                    type: "int64",
                    id: 8
                },
                source: {
                    type: "string",
                    id: 9
                },
                from_user_id: {
                    type: "int64",
                    id: 10
                },
                privilege_log_extra: {
                    type: "webcast.data.PrivilegeLogExtra",
                    id: 11
                },
                to_anchor_id: {
                    type: "int64",
                    id: 12
                }
            },
            nested: {
                Background: {
                    fields: {
                        width: {
                            type: "int32",
                            id: 1
                        },
                        height: {
                            type: "int32",
                            id: 2
                        },
                        url_list: {
                            rule: "repeated",
                            type: "string",
                            id: 3
                        },
                        uri: {
                            type: "string",
                            id: 4
                        }
                    }
                },
                Content: {
                    fields: {
                        content: {
                            type: "string",
                            id: 1
                        },
                        need_high_light: {
                            type: "bool",
                            id: 2
                        }
                    }
                },
                ContentList: {
                    fields: {
                        contents: {
                            rule: "repeated",
                            type: "Content",
                            id: 1
                        },
                        high_light_color: {
                            type: "string",
                            id: 2
                        }
                    }
                },
                Extra: {
                    fields: {
                        duration: {
                            type: "int64",
                            id: 1
                        },
                        background: {
                            type: "Background",
                            id: 2
                        },
                        content_list: {
                            type: "ContentList",
                            id: 3
                        }
                    }
                }
            }
        }
    }
    ,
    294106: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                number: {
                    type: "int64",
                    id: 1
                },
                font_style: {
                    type: "FontStyle",
                    id: 2
                },
                background: {
                    type: "CombineBadgeBackground",
                    id: 3
                }
            }
        }
    }
    ,
    720045: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                start_timestamp: {
                    type: "int64",
                    id: 2
                },
                end_timestamp: {
                    type: "int64",
                    id: 3
                },
                role_type: {
                    type: "LineUpRoleType",
                    id: 4
                },
                exist_linkmic: {
                    type: "bool",
                    id: 5
                },
                linkmic_type: {
                    type: "LinkmicType",
                    id: 6
                }
            }
        }
    }
    ,
    278428: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                end_timestamp: {
                    type: "int64",
                    id: 2
                },
                channel_uid: {
                    type: "int64",
                    id: 3
                }
            }
        }
    }
    ,
    695931: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                start_timestamp: {
                    type: "int64",
                    id: 2
                },
                max_enter_time: {
                    type: "int64",
                    id: 3
                }
            }
        }
    }
    ,
    239717: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                path_map: {
                    keyType: "string",
                    type: "string",
                    id: 2
                },
                expire_at: {
                    type: "int64",
                    id: 3
                }
            }
        }
    }
    ,
    224108: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                message_type: {
                    type: "MessageType",
                    id: 2
                },
                purchase_product_info: {
                    type: "PurchaseProductInfo",
                    id: 3
                },
                subscription_info: {
                    type: "SubscriptionInfo",
                    id: 4
                },
                giveaway_info: {
                    type: "GiveawayInfo",
                    id: 5
                },
                ask_demo_info: {
                    type: "AskDemoInfo",
                    id: 6
                }
            },
            nested: {
                MessageType: {
                    values: {
                        MESSAGE_TYPE_PURCHASEPRODUCT: 0,
                        MESSAGE_TYPE_SUBSCRIPTION: 1,
                        MESSAGE_TYPE_GIVEAWAY: 2,
                        MESSAGE_TYPE_ASKDEMO: 3
                    }
                }
            }
        }
    }
    ,
    479023: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                action_type: {
                    type: "ActionType",
                    id: 2
                },
                live_product_number: {
                    type: "int32",
                    id: 3
                },
                pop_product: {
                    type: "PopProduct",
                    id: 4
                },
                trace_info: {
                    type: "TraceInfo",
                    id: 5
                },
                hot_tags: {
                    rule: "repeated",
                    type: "ProductHotTag",
                    id: 6
                },
                atmosphere_tag_info: {
                    type: "AtmosphereTagInfo",
                    id: 7
                },
                live_permission_info: {
                    type: "LivePermissionInfo",
                    id: 8
                },
                product_snap_shot: {
                    type: "ProductSnapShot",
                    id: 9
                },
                pin_card_delay_time: {
                    type: "int64",
                    id: 10
                },
                flash_sale_atmosphere_info: {
                    rule: "repeated",
                    type: "FlashSaleAtmosphereInfo",
                    id: 11
                },
                card_type: {
                    type: "CardType",
                    id: 12
                },
                billboard_info: {
                    type: "BillboardInfo",
                    id: 13
                },
                billboard_display_result: {
                    type: "BillboardDisplayResult",
                    id: 14
                },
                dispersion_info: {
                    rule: "repeated",
                    type: "DispersionInfo",
                    id: 15
                },
                promotion_info: {
                    type: "PromotionInfo",
                    id: 16
                },
                campaign_banner_display_result: {
                    type: "CampaignBannerDisplayResult",
                    id: 17
                },
                campaign_banner_display: {
                    type: "CampaignBannerDisplay",
                    id: 18
                },
                refresh_live_bag_info: {
                    type: "RefreshLiveBagInfo",
                    id: 19
                },
                oec_live_shopping_message_v2: {
                    type: "webcast.data.oec_msg.OecLiveShoppingMessageV2",
                    id: 100
                }
            },
            nested: {
                ActionType: {
                    values: {
                        LiveProductNumberChange: 0,
                        SetPopProduct: 1,
                        CancelPinProduct: 2,
                        ChangeBagProductOrder: 3,
                        BagProductStockChange: 4,
                        BagProductMetaInfoChange: 5,
                        SetProductHotTag: 6,
                        SetProductAtmosphereTag: 7,
                        BannedLivePermission: 8,
                        UnBannedLivePermission: 9,
                        FlashSaleAtmosphereStatusChange: 10,
                        FlashSaleAtmosphereStockChange: 11,
                        RefreshPinProduct: 12,
                        PinProductList: 13,
                        CancelPinProductList: 14,
                        BillboardDisplay: 15,
                        BillboardChange: 16,
                        BillboardDisplayResult: 17,
                        PromotionStatusChange: 18,
                        CampaignBannerDisplay: 19,
                        CampaignBannerDisplayResult: 20,
                        RefreshLiveBag: 21
                    }
                }
            }
        }
    }
    ,
    842551: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                actions: {
                    keyType: "int64",
                    type: "EcomLiveElementActions",
                    id: 1
                },
                commerce_info: {
                    type: "CommerceInfo",
                    id: 2
                },
                msg_meta: {
                    type: "MsgMeta",
                    id: 10
                }
            }
        }
    }
    ,
    654449: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                channel_user: {
                    type: "webcast.data.User",
                    id: 1
                },
                event_name: {
                    type: "string",
                    id: 2
                },
                end_timestamp: {
                    type: "int64",
                    id: 3
                },
                forbidden_before_end: {
                    type: "int64",
                    id: 4
                },
                max_next_time: {
                    type: "int64",
                    id: 5
                },
                delay_enter_time: {
                    keyType: "int64",
                    type: "int64",
                    id: 6
                },
                backup_room_id: {
                    type: "int64",
                    id: 7
                },
                backup_room_id_str: {
                    type: "string",
                    id: 8
                },
                start_timestamp: {
                    type: "int64",
                    id: 9
                },
                role_type: {
                    type: "LineUpRoleType",
                    id: 10
                },
                exist_linkmic: {
                    type: "bool",
                    id: 11
                },
                linkmic_type: {
                    type: "LinkmicType",
                    id: 12
                }
            },
            nested: {
                LineUpRoleType: {
                    values: {
                        ShowOwner: 0,
                        ShowGuest: 1
                    }
                },
                LinkmicType: {
                    values: {
                        LINKMIC_TYPE_NONE: 0,
                        LINKMIC_TYPE_COHOST: 1,
                        LINKMIC_TYPE_MULTI_GUEST: 2
                    }
                }
            }
        }
    }
    ,
    47827: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                is_show_more_anchor: {
                    type: "bool",
                    id: 1
                },
                is_use_server_subtitle: {
                    type: "bool",
                    id: 2
                },
                server_subtitle: {
                    type: "string",
                    id: 3
                }
            }
        }
    }
    ,
    318948: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                official_room_info: {
                    type: "webcast.data.OfficialRoomInfo",
                    id: 2
                }
            }
        }
    }
    ,
    652244: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                OldSubscribeStatus_First: 0,
                OldSubscribeStatus_Resub: 1,
                OldSubscribeStatus_SubInGracePeriod: 2,
                OldSubscribeStatus_SubNotInGracePeriod: 3,
                OldSubscribeStatus_Default: 100
            }
        }
    }
    ,
    371232: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                ranks: {
                    rule: "repeated",
                    type: "Rank",
                    id: 1
                },
                self_info: {
                    type: "Rank",
                    id: 2
                },
                currency: {
                    type: "string",
                    id: 3
                },
                anchor_show_contribution: {
                    type: "bool",
                    id: 4
                },
                deprecated: {
                    type: "bool",
                    id: 5
                },
                total: {
                    type: "int64",
                    id: 6
                },
                rule_url: {
                    type: "string",
                    id: 7
                },
                display_config: {
                    type: "DisplayConfig",
                    id: 8
                },
                anonymous: {
                    type: "int64",
                    id: 9
                },
                preview_count: {
                    type: "int64",
                    id: 10
                }
            },
            nested: {
                Rank: {
                    fields: {
                        user: {
                            type: "webcast.data.User",
                            id: 1
                        },
                        score: {
                            type: "int64",
                            id: 2
                        },
                        rank: {
                            type: "int64",
                            id: 3
                        },
                        gap_description: {
                            type: "string",
                            id: 4
                        },
                        user_restriction_level: {
                            type: "int64",
                            id: 5
                        },
                        rank_user: {
                            type: "webcast.data.RankUser",
                            id: 6
                        }
                    }
                },
                DisplayConfig: {
                    fields: {
                        show_online_panel: {
                            type: "bool",
                            id: 1
                        },
                        can_panel_click: {
                            type: "bool",
                            id: 2
                        },
                        show_avatar_list: {
                            type: "bool",
                            id: 3
                        },
                        avatar_count: {
                            type: "int64",
                            id: 4
                        },
                        show_score: {
                            type: "bool",
                            id: 5
                        }
                    }
                }
            }
        }
    }
    ,
    649012: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                STATE_UNDEFINED: 0,
                STATE_NORMAL: 1,
                STATE_PAUSED: 2
            }
        }
    }
    ,
    959306: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                OP_TYPE_DEFAULT: 0,
                OP_TYPE_ADD: 1,
                OP_TYPE_REMOVE: 2,
                OP_TYPE_RELOAD: 3,
                OP_TYPE_BASIC_EFFECT: 4
            }
        }
    }
    ,
    781729: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                url: {
                    type: "string",
                    id: 1
                }
            }
        }
    }
    ,
    255096: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                OPERATION_TYPE_UNKNOWN: 0,
                OPERATION_TYPE_TASK_REFRESH: 1,
                OPERATION_TYPE_WIDGET_REMIND: 2
            }
        }
    }
    ,
    163408: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                mapping_id: {
                    type: "int64",
                    id: 1
                },
                expected_time_sec: {
                    type: "int64",
                    id: 2
                },
                opt_pair_status: {
                    type: "OptPairStatus",
                    id: 3
                },
                opt_pair_type: {
                    type: "int64",
                    id: 4
                },
                team_info: {
                    rule: "repeated",
                    type: "TeamInfo",
                    id: 5
                }
            },
            nested: {
                TeamInfo: {
                    fields: {
                        team_id: {
                            type: "int64",
                            id: 1
                        },
                        user_id: {
                            rule: "repeated",
                            type: "int64",
                            id: 2
                        }
                    }
                }
            }
        }
    }
    ,
    992562: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                OPT_PAIR_STATUS_UNKNOWN: 0,
                OPT_PAIR_STATUS_OFFLINE: 1,
                OPT_PAIR_STATUS_FINISHED: 2
            }
        }
    }
    ,
    440971: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                user: {
                    type: "webcast.data.User",
                    id: 1
                },
                room_id: {
                    type: "int64",
                    id: 2
                }
            }
        }
    }
    ,
    398412: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                sub_level: {
                    type: "int32",
                    id: 1
                },
                origin_img: {
                    type: "webcast.data.Image",
                    id: 2
                },
                description: {
                    type: "string",
                    id: 3
                }
            }
        }
    }
    ,
    352916: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                activity_list: {
                    rule: "repeated",
                    type: "OuterActivityInfo",
                    id: 1
                },
                activity_type: {
                    type: "string",
                    id: 2
                },
                seq: {
                    type: "int32",
                    id: 3
                }
            }
        }
    }
    ,
    219519: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                id: {
                    type: "int64",
                    id: 1
                },
                name: {
                    type: "string",
                    id: 2
                },
                type: {
                    type: "string",
                    id: 3
                },
                seq: {
                    type: "int32",
                    id: 4
                },
                resource: {
                    type: "string",
                    id: 5
                },
                resource_theme_color: {
                    type: "string",
                    id: 6
                },
                link_type: {
                    type: "OuterActivityLinkType",
                    id: 7
                },
                link: {
                    type: "string",
                    id: 8
                },
                introduction: {
                    type: "string",
                    id: 9
                },
                start_time: {
                    type: "int64",
                    id: 10
                },
                end_time: {
                    type: "int64",
                    id: 11
                }
            }
        }
    }
    ,
    308355: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                OUTER_ACTIVITY_LINK_TYPE_H5: 0,
                OUTER_ACTIVITY_LINK_TYPE_DEEP_LINK: 1,
                OUTER_ACTIVITY_LINK_TYPE_H5_PURCHASE: 10
            }
        }
    }
    ,
    442119: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                group_ext_info: {
                    rule: "repeated",
                    type: "tikcast.linkmic.common.RTCExtraInfo",
                    id: 1
                },
                group_user: {
                    type: "tikcast.linkmic.common.GroupChannelAllUser",
                    id: 2
                },
                migration_details: {
                    type: "tikcast.linkmic.common.MigrationDetails",
                    id: 3
                },
                content_pos: {
                    rule: "repeated",
                    type: "tikcast.linkmic.common.ContentPosition",
                    id: 4
                }
            }
        }
    }
    ,
    772340: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                avgms: {
                    type: "int64",
                    id: 1
                },
                p99ms: {
                    type: "int64",
                    id: 2
                }
            }
        }
    }
    ,
    362808: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                use_specific: {
                    type: "bool",
                    id: 1
                },
                middle_padding: {
                    type: "int32",
                    id: 2
                },
                badge_width: {
                    type: "int32",
                    id: 3
                },
                left_padding: {
                    type: "int32",
                    id: 4
                },
                right_padding: {
                    type: "int32",
                    id: 5
                },
                icon_top_padding: {
                    type: "int32",
                    id: 6
                },
                icon_bottom_padding: {
                    type: "int32",
                    id: 7
                },
                horizontal_padding_rule: {
                    type: "HorizontalPaddingRule",
                    id: 8
                },
                vertical_padding_rule: {
                    type: "VerticalPaddingRule",
                    id: 9
                }
            }
        }
    }
    ,
    793650: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                paid_content_permission: {
                    type: "bool",
                    id: 1
                },
                paid_content_live_data: {
                    type: "string",
                    id: 2
                }
            }
        }
    }
    ,
    448589: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                action_type: {
                    type: "ActionType",
                    id: 2
                },
                live_series_number: {
                    type: "int32",
                    id: 3
                },
                pop_series: {
                    type: "PopSeries",
                    id: 4
                },
                time_tag: {
                    type: "TimeTag",
                    id: 5
                }
            },
            nested: {
                ActionType: {
                    values: {
                        LiveSeriesNumberChange: 0,
                        ACTION_TYPE_PIN_SERIES: 1,
                        ACTION_TYPE_CANCEL_PIN_SERIES: 2,
                        ACTION_TYPE_CHANGE_SERIES_ORDER: 3
                    }
                }
            }
        }
    }
    ,
    979747: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                event_id: {
                    type: "int64",
                    id: 1
                },
                paid_type: {
                    type: "PaidType",
                    id: 2
                }
            },
            nested: {
                PaidType: {
                    values: {
                        Free: 0,
                        Paid: 1
                    }
                }
            }
        }
    }
    ,
    425215: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                allow_preview: {
                    type: "int64",
                    id: 1
                },
                allow_preview_time: {
                    type: "int64",
                    id: 2
                }
            }
        }
    }
    ,
    258413: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                enable: {
                    type: "bool",
                    id: 1
                },
                feature_detail: {
                    type: "string",
                    id: 2
                }
            }
        }
    }
    ,
    410384: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                ParticipateMethodUnknown: 0,
                ParticipateMethodComment: 1,
                ParticipateMethodShare: 2,
                ParticipateMethodNoThreshold: 3
            }
        }
    }
    ,
    174498: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                type: {
                    type: "ParticipateThresholdType",
                    id: 1
                },
                values: {
                    rule: "repeated",
                    type: "int64",
                    id: 2
                }
            }
        }
    }
    ,
    988343: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                type: {
                    type: "ParticipateThresholdType",
                    id: 1
                },
                value: {
                    type: "int64",
                    id: 2
                }
            }
        }
    }
    ,
    580618: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                ParticipateThresholdUnknown: 0,
                ParticipateThresholdAllViewer: 1,
                ParticipateThresholdFansClub: 2
            }
        }
    }
    ,
    476467: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                id_str: {
                    type: "string",
                    id: 1
                },
                name: {
                    type: "string",
                    id: 2
                },
                icon: {
                    type: "string",
                    id: 3
                },
                game_name: {
                    type: "string",
                    id: 4
                },
                start_time: {
                    type: "int64",
                    id: 5
                },
                end_time: {
                    type: "int64",
                    id: 6
                },
                joined: {
                    type: "bool",
                    id: 7
                },
                game_id_str: {
                    type: "string",
                    id: 8
                },
                IncentiveType: {
                    type: "EventIncentiveType",
                    id: 9
                },
                game_tag_id: {
                    type: "int64",
                    id: 10
                }
            }
        }
    }
    ,
    835012: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                change_mode: {
                    type: "ChangeMode",
                    id: 2
                },
                sequence_id: {
                    type: "int32",
                    id: 3
                },
                task_id: {
                    type: "string",
                    id: 4
                }
            },
            nested: {
                ChangeMode: {
                    values: {
                        Cancel: 0,
                        Update: 1
                    }
                }
            }
        }
    }
    ,
    605535: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                downloaded_count: {
                    type: "int64",
                    id: 2
                },
                game_id: {
                    type: "string",
                    id: 3
                }
            }
        }
    }
    ,
    513715: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                id_str: {
                    type: "string",
                    id: 1
                },
                event: {
                    type: "PartnershipGameEvent",
                    id: 2
                },
                start_time: {
                    type: "int64",
                    id: 3
                },
                end_time: {
                    type: "int64",
                    id: 4
                },
                task_type: {
                    type: "DropsTaskType",
                    id: 5
                },
                task_round: {
                    type: "int32",
                    id: 6
                },
                status: {
                    type: "DropsStatus",
                    id: 7
                },
                name: {
                    type: "string",
                    id: 8
                },
                icon: {
                    type: "string",
                    id: 9
                },
                head_image: {
                    type: "string",
                    id: 10
                },
                join_rule: {
                    type: "string",
                    id: 11
                },
                reward_rule: {
                    type: "string",
                    id: 12
                },
                rank_rule: {
                    type: "string",
                    id: 13
                },
                remark: {
                    type: "string",
                    id: 14
                },
                rewards: {
                    rule: "repeated",
                    type: "PartnershipDropsReward",
                    id: 15
                },
                anchor_rewards: {
                    rule: "repeated",
                    type: "PartnershipDropsAnchorReward",
                    id: 16
                },
                rank_list: {
                    rule: "repeated",
                    type: "PartnershipDropsRankItem",
                    id: 17
                },
                anchor_rank: {
                    type: "PartnershipDropsRankItem",
                    id: 18
                },
                auth_check: {
                    type: "bool",
                    id: 19
                },
                rank_show: {
                    type: "bool",
                    id: 20
                },
                anchor_joined: {
                    type: "bool",
                    id: 21
                },
                anchor_can_join: {
                    type: "bool",
                    id: 22
                },
                game_name: {
                    type: "string",
                    id: 23
                },
                cp_name: {
                    type: "string",
                    id: 24
                },
                game_tag_id: {
                    type: "int64",
                    id: 25
                }
            }
        }
    }
    ,
    678859: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                change_mode: {
                    type: "ChangeMode",
                    id: 2
                },
                drops_id: {
                    type: "string",
                    id: 3
                },
                anchor_uid: {
                    type: "int64",
                    id: 4
                },
                anchor_join_drops_notice_type: {
                    type: "AnchorJoinDropsNoticeType",
                    id: 5
                },
                drops_name: {
                    type: "string",
                    id: 6
                }
            },
            nested: {
                ChangeMode: {
                    values: {
                        CHANGE_MODE_SHOW: 0,
                        CHANGE_MODE_UPDATE: 1,
                        CHANGE_MODE_CLOSE: 2
                    }
                },
                AnchorJoinDropsNoticeType: {
                    values: {
                        ANCHOR_JOIN_DROPS_NOTICE_TYPE_UNSET: 0,
                        ANCHOR_JOIN_DROPS_NOTICE_TYPE_AUTO_JOIN: 1,
                        ANCHOR_JOIN_DROPS_NOTICE_TYPE_WARMUP_TO_ONLINE: 2
                    }
                }
            }
        }
    }
    ,
    934333: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                drops_id_str: {
                    type: "string",
                    id: 1
                },
                name: {
                    type: "string",
                    id: 2
                },
                icon: {
                    type: "string",
                    id: 3
                },
                first_rank: {
                    type: "int32",
                    id: 4
                },
                last_rank: {
                    type: "int32",
                    id: 5
                },
                remain_num: {
                    type: "int32",
                    id: 6
                },
                start_time: {
                    type: "int64",
                    id: 7
                },
                end_time: {
                    type: "int64",
                    id: 8
                },
                platform: {
                    type: "string",
                    id: 9
                }
            }
        }
    }
    ,
    858030: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                change_mode: {
                    type: "ChangeMode",
                    id: 2
                },
                drops_id: {
                    type: "string",
                    id: 3
                },
                card_show_duration: {
                    type: "int64",
                    id: 4
                },
                game_id: {
                    type: "string",
                    id: 5
                },
                game_name: {
                    type: "string",
                    id: 6
                }
            },
            nested: {
                ChangeMode: {
                    values: {
                        CHANGE_MODE_UNPIN: 0,
                        CHANGE_MODE_PIN: 1
                    }
                }
            }
        }
    }
    ,
    720693: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                gift: {
                    type: "PartnershipGiftInfo",
                    id: 1
                },
                total_num: {
                    type: "int64",
                    id: 2
                },
                task_config: {
                    rule: "repeated",
                    type: "PartnershipDropsTaskConfig",
                    id: 3
                },
                total_num_config: {
                    rule: "repeated",
                    type: "int64",
                    id: 4
                },
                unique: {
                    type: "bool",
                    id: 5
                },
                total_available_num: {
                    type: "int64",
                    id: 6
                }
            }
        }
    }
    ,
    351298: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                drops_id_str: {
                    type: "string",
                    id: 1
                },
                anchor_id_str: {
                    type: "string",
                    id: 2
                },
                score: {
                    type: "int32",
                    id: 3
                },
                rank: {
                    type: "int32",
                    id: 4
                },
                name: {
                    type: "string",
                    id: 5
                },
                head_url: {
                    type: "string",
                    id: 6
                },
                follow_status: {
                    type: "int32",
                    id: 7
                },
                live_status: {
                    type: "int32",
                    id: 8
                }
            }
        }
    }
    ,
    669336: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                drops_id_str: {
                    type: "string",
                    id: 1
                },
                round: {
                    type: "int32",
                    id: 2
                },
                name: {
                    type: "string",
                    id: 3
                },
                icon: {
                    type: "string",
                    id: 4
                },
                view_duration: {
                    type: "int32",
                    id: 5
                },
                comment_content: {
                    type: "string",
                    id: 6
                },
                comment_times: {
                    type: "int32",
                    id: 7
                },
                comment_interval: {
                    type: "int32",
                    id: 8
                },
                remain_num: {
                    type: "int32",
                    id: 9
                },
                anchor_score: {
                    type: "int32",
                    id: 10
                },
                start_time: {
                    type: "int64",
                    id: 11
                },
                end_time: {
                    type: "int64",
                    id: 12
                },
                platform: {
                    type: "string",
                    id: 13
                },
                status: {
                    type: "DropsTaskStatus",
                    id: 14
                },
                cdkey: {
                    type: "string",
                    id: 15
                }
            }
        }
    }
    ,
    197781: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                game: {
                    type: "BriefGame",
                    id: 1
                },
                gift: {
                    type: "PartnershipGiftInfo",
                    id: 2
                },
                type: {
                    type: "int32",
                    id: 3
                },
                activity_id: {
                    type: "string",
                    id: 4
                },
                stock_type: {
                    type: "int32",
                    id: 5
                }
            }
        }
    }
    ,
    451274: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                id: {
                    type: "string",
                    id: 1
                },
                gift: {
                    type: "PartnershipGiftInfo",
                    id: 2
                },
                type: {
                    type: "DropsTaskType",
                    id: 3
                },
                view_duration: {
                    type: "int32",
                    id: 4
                },
                comment_content: {
                    type: "string",
                    id: 5
                },
                comment_times: {
                    type: "int32",
                    id: 6
                },
                comment_interval: {
                    type: "int32",
                    id: 7
                },
                total_num: {
                    type: "int64",
                    id: 8
                },
                rewarded_num: {
                    type: "int64",
                    id: 9
                },
                active_rewarded_num: {
                    type: "int64",
                    id: 10
                },
                status: {
                    type: "int32",
                    id: 11
                },
                user_status: {
                    type: "int32",
                    id: 12
                },
                user_view_start: {
                    type: "int64",
                    id: 13
                },
                user_comment_times: {
                    type: "int32",
                    id: 14
                },
                user_last_comment_time: {
                    type: "int64",
                    id: 15
                },
                user_view_duration: {
                    type: "int64",
                    id: 16
                },
                user_finish_time: {
                    type: "int64",
                    id: 17
                },
                comment_type: {
                    type: "int32",
                    id: 18
                },
                countdown_duration: {
                    type: "int64",
                    id: 19
                },
                countdown_passed: {
                    type: "int64",
                    id: 20
                },
                claimed_num: {
                    type: "int64",
                    id: 21
                },
                claim_expire_ts: {
                    type: "int64",
                    id: 22
                },
                drops_task_skip_reason: {
                    type: "DropsTaskSkipReason",
                    id: 23
                },
                real_available_num: {
                    type: "int64",
                    id: 24
                },
                is_exclusive: {
                    type: "bool",
                    id: 25
                }
            }
        }
    }
    ,
    237912: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                type: {
                    type: "DropsTaskType",
                    id: 1
                },
                view_durations: {
                    rule: "repeated",
                    type: "int32",
                    id: 2
                },
                comment_times: {
                    type: "int32",
                    id: 3
                }
            }
        }
    }
    ,
    212683: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                change_mode: {
                    type: "ChangeMode",
                    id: 2
                },
                drops_id: {
                    type: "string",
                    id: 3
                },
                task_id: {
                    type: "string",
                    id: 4
                },
                event_id: {
                    type: "string",
                    id: 5
                },
                anchor_uid: {
                    type: "int64",
                    id: 6
                }
            },
            nested: {
                ChangeMode: {
                    values: {
                        CHANGE_MODE_SHOW: 0,
                        CHANGE_MODE_UPDATE: 1,
                        CHANGE_MODE_CLOSE: 2
                    }
                }
            }
        }
    }
    ,
    489305: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                id: {
                    type: "string",
                    id: 1
                },
                game_name: {
                    type: "string",
                    id: 2
                },
                game_icon: {
                    type: "string",
                    id: 3
                },
                start_time: {
                    type: "int64",
                    id: 4
                },
                end_time: {
                    type: "int64",
                    id: 5
                },
                reason_type: {
                    type: "string",
                    id: 6
                },
                gifts: {
                    rule: "repeated",
                    type: "PartnershipDropsGift",
                    id: 7
                },
                tasks: {
                    rule: "repeated",
                    type: "PartnershipDropsTask",
                    id: 8
                },
                started: {
                    type: "bool",
                    id: 9
                },
                started_time: {
                    type: "int64",
                    id: 10
                },
                reason_type_value: {
                    type: "DropsReasonType",
                    id: 11
                },
                reason_params: {
                    type: "ReasonParams",
                    id: 12
                },
                game_id: {
                    type: "int64",
                    id: 13
                },
                game_id_str: {
                    type: "string",
                    id: 14
                },
                game_tag_id: {
                    type: "string",
                    id: 15
                },
                status: {
                    type: "int32",
                    id: 16
                },
                join_status: {
                    type: "bool",
                    id: 17
                },
                cp_name: {
                    type: "string",
                    id: 18
                },
                country: {
                    rule: "repeated",
                    type: "string",
                    id: 19
                },
                name: {
                    type: "string",
                    id: 20
                },
                stock_type: {
                    type: "int32",
                    id: 21
                },
                user_reserve_status: {
                    type: "int32",
                    id: 22
                }
            },
            nested: {
                ReasonParams: {
                    fields: {
                        excellent_creator_params: {
                            type: "ExcellentCreatorParams",
                            id: 1
                        },
                        top_reward_params: {
                            type: "TopRewardsParams",
                            id: 2
                        }
                    },
                    nested: {
                        ExcellentCreatorParams: {
                            fields: {
                                game_name: {
                                    type: "string",
                                    id: 1
                                }
                            }
                        },
                        TopRewardsParams: {
                            fields: {
                                event_name: {
                                    type: "string",
                                    id: 1
                                },
                                rank: {
                                    type: "int32",
                                    id: 2
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    ,
    289151: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                id: {
                    type: "int64",
                    id: 1
                },
                id_str: {
                    type: "string",
                    id: 2
                },
                name: {
                    type: "string",
                    id: 3
                },
                android_version: {
                    type: "string",
                    id: 4
                },
                ios_version: {
                    type: "string",
                    id: 5
                },
                age_limit: {
                    type: "int64",
                    id: 6
                },
                android_package: {
                    type: "string",
                    id: 7
                },
                android_package_size: {
                    type: "int64",
                    id: 8
                },
                ios_bundle_id: {
                    type: "string",
                    id: 9
                },
                ios_package_size: {
                    type: "int64",
                    id: 10
                },
                icon: {
                    type: "webcast.data.Image",
                    id: 11
                },
                introduction_image: {
                    rule: "repeated",
                    type: "webcast.data.Image",
                    id: 12
                },
                introduction: {
                    type: "string",
                    id: 13
                },
                brief_introduction: {
                    type: "string",
                    id: 14
                },
                labels: {
                    rule: "repeated",
                    type: "string",
                    id: 15
                },
                last_update_time: {
                    type: "int64",
                    id: 16
                },
                cp_name: {
                    type: "string",
                    id: 17
                },
                contact_phone_num: {
                    type: "string",
                    id: 18
                },
                contact_email: {
                    type: "string",
                    id: 19
                },
                game_publisher: {
                    type: "string",
                    id: 20
                },
                open_gll: {
                    type: "int32",
                    id: 21
                },
                introduction_video: {
                    rule: "repeated",
                    type: "Video",
                    id: 22
                },
                top_background_image: {
                    type: "webcast.data.Image",
                    id: 23
                },
                deep_link: {
                    type: "string",
                    id: 24
                },
                game_tag_id: {
                    type: "int64",
                    id: 25
                }
            },
            nested: {
                Video: {
                    fields: {
                        vid: {
                            type: "string",
                            id: 1
                        },
                        url: {
                            type: "string",
                            id: 2
                        },
                        cover: {
                            type: "webcast.data.Image",
                            id: 3
                        },
                        duration: {
                            type: "double",
                            id: 4
                        }
                    }
                }
            }
        }
    }
    ,
    718775: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                game_tag_id: {
                    type: "int64",
                    id: 1
                },
                anchor_has_joined: {
                    type: "bool",
                    id: 2
                },
                event_detail_url: {
                    type: "string",
                    id: 3
                },
                game_name: {
                    type: "string",
                    id: 4
                },
                game_id_str: {
                    type: "string",
                    id: 5
                },
                task_id_str: {
                    type: "string",
                    id: 6
                },
                event_id_str: {
                    type: "string",
                    id: 7
                },
                event_type: {
                    type: "GameEventType",
                    id: 8
                },
                IncentiveType: {
                    type: "EventIncentiveType",
                    id: 9
                },
                anchor_has_showed: {
                    type: "bool",
                    id: 10
                },
                game_icon: {
                    type: "string",
                    id: 11
                }
            }
        }
    }
    ,
    211489: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                offline_game_list: {
                    rule: "repeated",
                    type: "OfflineGameInfo",
                    id: 2
                }
            },
            nested: {
                OfflineGameInfo: {
                    fields: {
                        task_id: {
                            type: "string",
                            id: 1
                        },
                        toast_text: {
                            type: "string",
                            id: 2
                        },
                        task_list_len: {
                            type: "int32",
                            id: 3
                        },
                        offline_type: {
                            type: "OfflineType",
                            id: 4
                        },
                        toast_title: {
                            type: "string",
                            id: 5
                        }
                    },
                    nested: {
                        OfflineType: {
                            values: {
                                TaskOffline: 0,
                                EventOffline: 1,
                                DropsOffline: 2
                            }
                        }
                    }
                }
            }
        }
    }
    ,
    150675: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                id_str: {
                    type: "string",
                    id: 1
                },
                name: {
                    type: "string",
                    id: 2
                },
                icon_url: {
                    type: "string",
                    id: 3
                },
                items: {
                    rule: "repeated",
                    type: "GiftItem",
                    id: 4
                },
                start_time: {
                    type: "int64",
                    id: 5
                },
                end_time: {
                    type: "int64",
                    id: 6
                },
                detail: {
                    type: "string",
                    id: 7
                },
                type: {
                    type: "GiftType",
                    id: 8
                },
                gift_code: {
                    type: "string",
                    id: 9
                },
                need_auth: {
                    type: "bool",
                    id: 10
                },
                auth_param: {
                    type: "AuthParam",
                    id: 11
                },
                guidance: {
                    type: "string",
                    id: 12
                },
                pattern_info: {
                    type: "GameAccountPatternInfo",
                    id: 13
                }
            },
            nested: {
                GameAccountPatternItem: {
                    fields: {
                        pattern_name: {
                            type: "string",
                            id: 1
                        },
                        pattern_text: {
                            type: "string",
                            id: 2
                        },
                        pattern_index: {
                            type: "uint32",
                            id: 3
                        }
                    }
                },
                GameAccountPatternInfo: {
                    fields: {
                        patterns: {
                            rule: "repeated",
                            type: "GameAccountPatternItem",
                            id: 1
                        },
                        version_id: {
                            type: "string",
                            id: 2
                        },
                        guide_pic_url: {
                            type: "string",
                            id: 3
                        }
                    }
                }
            }
        }
    }
    ,
    835213: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                partnership_room: {
                    type: "bool",
                    id: 1
                },
                promoting_task_id: {
                    type: "string",
                    id: 2
                },
                task_id_list: {
                    rule: "repeated",
                    type: "string",
                    id: 3
                },
                promoting_game_id: {
                    type: "string",
                    id: 4
                },
                show_task_id: {
                    type: "string",
                    id: 5
                },
                promoting_drops_id: {
                    type: "string",
                    id: 6
                },
                promoting_room: {
                    type: "bool",
                    id: 7
                },
                promoting_task_type: {
                    type: "webcast.data.GamepadTaskType",
                    id: 8
                },
                show_task_type: {
                    type: "webcast.data.GamepadTaskType",
                    id: 9
                }
            }
        }
    }
    ,
    411889: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                punish_info: {
                    type: "webcast.data.PunishEventInfo",
                    id: 2
                }
            }
        }
    }
    ,
    476572: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                id: {
                    type: "int64",
                    id: 1
                },
                id_str: {
                    type: "string",
                    id: 2
                },
                game_id: {
                    type: "int64",
                    id: 3
                },
                game_id_str: {
                    type: "string",
                    id: 4
                },
                task_mode: {
                    type: "TaskMode",
                    id: 5
                },
                status: {
                    type: "TaskStatus",
                    id: 6
                },
                ios_unit_price: {
                    type: "string",
                    id: 7
                },
                android_unit_price: {
                    type: "string",
                    id: 8
                },
                ios_share_ratio: {
                    type: "string",
                    id: 9
                },
                android_share_ratio: {
                    type: "string",
                    id: 10
                },
                task_description: {
                    rule: "repeated",
                    type: "string",
                    id: 11
                },
                show_duration: {
                    type: "int64",
                    id: 12
                },
                last_ios_unit_price: {
                    type: "string",
                    id: 13
                },
                last_android_unit_price: {
                    type: "string",
                    id: 14
                },
                last_ios_share_ratio: {
                    type: "string",
                    id: 15
                },
                last_android_share_ratio: {
                    type: "string",
                    id: 16
                },
                last_price_update_timestamp: {
                    type: "int64",
                    id: 17
                },
                anchor_start_promote_ts: {
                    type: "int64",
                    id: 18
                },
                anchor_show_status: {
                    type: "AnchorTaskShowStatus",
                    id: 19
                },
                android_age_limit: {
                    type: "int32",
                    id: 20
                },
                ios_age_limit: {
                    type: "int32",
                    id: 21
                },
                exclusive_task: {
                    type: "bool",
                    id: 22
                },
                apply_ts: {
                    type: "int64",
                    id: 23
                },
                ios_unit_price_usd: {
                    type: "string",
                    id: 24
                },
                android_unit_price_usd: {
                    type: "string",
                    id: 25
                },
                last_ios_unit_price_usd: {
                    type: "string",
                    id: 26
                },
                last_android_unit_price_usd: {
                    type: "string",
                    id: 27
                },
                cpp_url: {
                    type: "string",
                    id: 28
                },
                attribution_info: {
                    type: "TaskAttributionInfo",
                    id: 29
                },
                open_gll: {
                    type: "int32",
                    id: 30
                },
                game_tag_id: {
                    type: "int64",
                    id: 31
                },
                cp_punished_ts: {
                    type: "int64",
                    id: 32
                },
                task_type: {
                    type: "GamepadTaskType",
                    id: 33
                },
                game_link_type: {
                    type: "PublisherAnchorType",
                    id: 34
                }
            }
        }
    }
    ,
    711866: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                change_mode: {
                    type: "ChangeMode",
                    id: 2
                },
                task_id: {
                    type: "string",
                    id: 3
                },
                has_show_task: {
                    type: "bool",
                    id: 4
                }
            },
            nested: {
                ChangeMode: {
                    values: {
                        Show: 0,
                        Hide: 1
                    }
                }
            }
        }
    }
    ,
    678120: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                PathScene_Unknown: 0,
                PathPopCard: 1001,
                PathPopRefresh: 1002,
                PathPopPromotion: 1003
            }
        }
    }
    ,
    350546: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                key: {
                    type: "string",
                    id: 1
                },
                default_pattern: {
                    type: "string",
                    id: 2
                }
            }
        }
    }
    ,
    236752: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                PayChan_UnKnown: 0,
                PayChan_Coins: 1,
                PayChan_IapCash: 2,
                PayChan_Webapp: 3,
                PayChan_GiftSub: 4
            }
        }
    }
    ,
    654261: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                SubStatus_Unknown: 0,
                SubStatus_OneTime: 1,
                SubStatus_AutoDeduction: 2,
                SubStatus_AutoDeductionCanceled: 3,
                SubStatus_Revoke: 4
            }
        }
    }
    ,
    907864: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                reason_id: {
                    type: "int64",
                    id: 1
                },
                category: {
                    type: "string",
                    id: 2
                },
                reason: {
                    type: "string",
                    id: 3
                }
            }
        }
    }
    ,
    789583: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                IconTypeNone: 0,
                IconTypeWarning: 1,
                IconTypeLinkMic: 2,
                IconTypeGuestLinkMic: 3,
                IconTypeLive: 4,
                IconTypeTreasureBox: 5,
                IconTypeMute: 6,
                IconGamepadAccessRevoked: 7,
                IconTypeBanReportLiveSingleRoom: 8,
                IconTypeBanReportLiveAllRoom: 9,
                IconTypeBanReportLiveGreenScreen: 10,
                IconTypeGift: 11,
                IconTypeAppealSuccess: 12,
                IconTypeMatch: 13,
                IconTypeLiveGoal: 14,
                IconTypeSubscription: 15,
                IconTypeStarComment: 16,
                IconTypeRanking: 17,
                IconTypeCommon: 18
            }
        }
    }
    ,
    597894: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                icon_type: {
                    type: "PerceptionDialogIconType",
                    id: 1
                },
                title: {
                    type: "webcast.data.Text",
                    id: 2
                },
                sub_title: {
                    type: "webcast.data.Text",
                    id: 3
                },
                advice_action_text: {
                    type: "webcast.data.Text",
                    id: 4
                },
                default_action_text: {
                    type: "webcast.data.Text",
                    id: 5
                },
                violation_detail_url: {
                    type: "string",
                    id: 6
                },
                scene: {
                    type: "int32",
                    id: 7
                },
                target_user_id: {
                    type: "int64",
                    id: 8
                },
                target_room_id: {
                    type: "int64",
                    id: 9
                },
                count_down_time: {
                    type: "int64",
                    id: 10
                },
                show_feedback: {
                    type: "bool",
                    id: 11
                },
                feedback_options: {
                    rule: "repeated",
                    type: "PerceptionFeedbackOption",
                    id: 12
                },
                policy_tip: {
                    type: "int64",
                    id: 13
                },
                appeal_popup: {
                    type: "int32",
                    id: 14
                }
            }
        }
    }
    ,
    756544: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                id: {
                    type: "int64",
                    id: 1
                },
                content_key: {
                    type: "string",
                    id: 2
                }
            }
        }
    }
    ,
    690706: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                show_violations_entrance: {
                    type: "bool",
                    id: 1
                },
                violations_entrance_end_time: {
                    type: "int64",
                    id: 2
                }
            }
        }
    }
    ,
    323959: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                dialog: {
                    type: "webcast.data.PerceptionDialogInfo",
                    id: 2
                },
                punish_info: {
                    type: "webcast.data.PunishEventInfo",
                    id: 3
                },
                end_time: {
                    type: "int64",
                    id: 4
                },
                show_violation_warning: {
                    type: "bool",
                    id: 5
                },
                toast: {
                    type: "webcast.data.Text",
                    id: 6
                },
                float_style: {
                    type: "int32",
                    id: 7
                },
                float_text: {
                    type: "webcast.data.Text",
                    id: 8
                },
                sheet: {
                    type: "webcast.data.PerceptionSheetInfo",
                    id: 9
                },
                float_icon_type: {
                    type: "webcast.data.PerceptionDialogIconType",
                    id: 10
                }
            }
        }
    }
    ,
    890503: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                icon_type: {
                    type: "PerceptionDialogIconType",
                    id: 1
                },
                title: {
                    type: "webcast.data.Text",
                    id: 2
                },
                sub_title: {
                    type: "webcast.data.Text",
                    id: 3
                },
                reason_title: {
                    type: "webcast.data.Text",
                    id: 4
                },
                reason_info: {
                    type: "webcast.data.Text",
                    id: 5
                },
                not_allowed_title: {
                    type: "webcast.data.Text",
                    id: 6
                },
                not_allowed_text: {
                    type: "webcast.data.Text",
                    id: 7
                },
                default_action_text: {
                    type: "webcast.data.Text",
                    id: 8
                },
                scene: {
                    type: "int32",
                    id: 9
                },
                target_user_id: {
                    type: "int64",
                    id: 10
                },
                target_room_id: {
                    type: "int64",
                    id: 11
                },
                count_down_time: {
                    type: "int64",
                    id: 12
                }
            }
        }
    }
    ,
    700293: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                title: {
                    type: "string",
                    id: 1
                },
                benefit_type: {
                    type: "SubCustomizedBenefitType",
                    id: 2
                }
            }
        }
    }
    ,
    622023: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                perk_details_text: {
                    rule: "repeated",
                    type: "string",
                    id: 25
                },
                audit_info: {
                    type: "data.AuditInfo",
                    id: 26
                }
            }
        }
    }
    ,
    504773: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                category: {
                    type: "PerkTagCategory",
                    id: 1
                },
                text: {
                    type: "string",
                    id: 2
                },
                clickable: {
                    type: "bool",
                    id: 3
                },
                popup_content: {
                    type: "string",
                    id: 4
                }
            }
        }
    }
    ,
    864701: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                PERK_TAG_CATEGORY_UNKNOWN: 0,
                PERK_TAG_CATEGORY_RARE: 1
            }
        }
    }
    ,
    967466: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                PermissionLevelDefault: 0,
                PermissionLevelL0: 1,
                PermissionLevelL1: 2,
                PermissionLevelL2: 3
            }
        }
    }
    ,
    43727: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                LevelTaskDefault: 0,
                LevelTaskLearnLiveTips: 1,
                LevelTaskDuration: 2,
                LevelTaskLiveDifferentDays: 3
            }
        }
    }
    ,
    270659: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                permiter: {
                    type: "tikcast.linkmic.common.Player",
                    id: 1
                },
                permiter_link_mic_id: {
                    type: "string",
                    id: 2
                },
                applier_pos: {
                    type: "tikcast.linkmic.common.Position",
                    id: 3
                },
                reply_status: {
                    type: "tikcast.linkmic.common.AgreeStatus",
                    id: 4
                },
                dsl: {
                    type: "tikcast.linkmic.common.DSLConfig",
                    id: 5
                },
                applier: {
                    type: "tikcast.linkmic.common.Player",
                    id: 6
                },
                operator: {
                    type: "tikcast.linkmic.common.Player",
                    id: 7
                },
                applier_link_mic_id: {
                    type: "string",
                    id: 8
                },
                linked_user_ui_positions: {
                    rule: "repeated",
                    type: "string",
                    id: 9
                },
                applier_rtc_token: {
                    type: "string",
                    id: 10
                },
                ui_pos: {
                    rule: "repeated",
                    type: "tikcast.linkmic.common.PosIdentity",
                    id: 11
                }
            }
        }
    }
    ,
    671584: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                anchor_setting_info: {
                    type: "webcast.data.LinkmicUserSettingInfo",
                    id: 1
                },
                expire_timestamp: {
                    type: "int64",
                    id: 2
                },
                operator_user_info: {
                    type: "webcast.data.User",
                    id: 3
                },
                operator_link_admin_type: {
                    type: "tikcast.linkmic.common.LinkMicUserAdminType",
                    id: 4
                },
                link_user_type: {
                    type: "webcast.data.LinkUserType",
                    id: 5
                }
            }
        }
    }
    ,
    185261: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                reply_status: {
                    type: "tikcast.linkmic.common.ReplyStatus",
                    id: 1
                },
                source_type: {
                    type: "tikcast.linkmic.common.SourceType",
                    id: 2
                }
            }
        }
    }
    ,
    381062: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                approver: {
                    type: "tikcast.linkmic.common.GroupPlayer",
                    id: 1
                },
                agree_status: {
                    type: "tikcast.linkmic.common.AgreeStatus",
                    id: 2
                },
                type: {
                    type: "tikcast.linkmic.common.JoinType",
                    id: 3
                },
                group_ext_info: {
                    rule: "repeated",
                    type: "tikcast.linkmic.common.RTCExtraInfo",
                    id: 4
                },
                group_user: {
                    type: "tikcast.linkmic.common.GroupChannelAllUser",
                    id: 5
                },
                migration_details: {
                    type: "tikcast.linkmic.common.MigrationDetails",
                    id: 6
                },
                linked_user_ui_positions: {
                    rule: "repeated",
                    type: "string",
                    id: 7
                }
            }
        }
    }
    ,
    201428: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                combo_sum_count: {
                    type: "int64",
                    id: 1
                },
                emoji: {
                    type: "string",
                    id: 2
                },
                emoji_icon: {
                    type: "webcast.data.Image",
                    id: 3
                },
                emoji_text: {
                    type: "string",
                    id: 4
                }
            }
        }
    }
    ,
    437100: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                count: {
                    type: "int64",
                    id: 2
                },
                total: {
                    type: "int64",
                    id: 3
                },
                color: {
                    type: "int64",
                    id: 4
                },
                user: {
                    type: "webcast.data.User",
                    id: 5
                },
                icon: {
                    type: "string",
                    id: 6
                },
                pico_display_info: {
                    type: "PicoDisplayInfo",
                    id: 7
                }
            }
        }
    }
    ,
    18477: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                pictionary_id: {
                    type: "int64",
                    id: 2
                },
                word: {
                    type: "string",
                    id: 3
                },
                end_type: {
                    type: "webcast.data.PictionaryEndType",
                    id: 4
                },
                pictionary_type: {
                    type: "webcast.data.PictionaryType",
                    id: 5
                }
            }
        }
    }
    ,
    427992: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                PETUnknown: 0,
                Timeout: 1,
                Manual: 2,
                ServerTimeout: 3,
                ChangeWord: 4
            }
        }
    }
    ,
    360494: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                session_id: {
                    type: "int64",
                    id: 2
                },
                show_statistics: {
                    type: "bool",
                    id: 3
                },
                pictionary_type: {
                    type: "webcast.data.PictionaryType",
                    id: 4
                }
            }
        }
    }
    ,
    609696: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                pictionary_info: {
                    type: "webcast.data.PictionaryInfo",
                    id: 1
                },
                pictionary_statistics: {
                    type: "webcast.data.PictionaryStatistics",
                    id: 2
                },
                guess_correct: {
                    type: "bool",
                    id: 3
                }
            }
        }
    }
    ,
    137089: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                id: {
                    type: "int64",
                    id: 1
                },
                word: {
                    type: "string",
                    id: 2
                },
                status: {
                    type: "PictionaryStatus",
                    id: 3
                },
                start_time: {
                    type: "int64",
                    id: 4
                },
                end_time: {
                    type: "int64",
                    id: 5
                },
                session_id: {
                    type: "int64",
                    id: 6
                },
                draw_url: {
                    type: "webcast.data.Image",
                    id: 7
                },
                pictionary_type: {
                    type: "PictionaryType",
                    id: 8
                }
            }
        }
    }
    ,
    3070: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                data: {
                    type: "webcast.data.PictionaryInfo",
                    id: 2
                }
            }
        }
    }
    ,
    137818: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                guess_correct_uv: {
                    type: "int64",
                    id: 1
                },
                guess_total_pv: {
                    type: "int64",
                    id: 2
                },
                first_user: {
                    type: "webcast.data.User",
                    id: 3
                }
            }
        }
    }
    ,
    369223: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                Create: 0,
                Start: 1,
                Finish: 2
            }
        }
    }
    ,
    551545: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                defaultType: 0,
                customType: 1,
                freeDrawType: 2
            }
        }
    }
    ,
    912665: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                correct_cnt: {
                    type: "int64",
                    id: 2
                },
                pictionary_id: {
                    type: "int64",
                    id: 3
                }
            }
        }
    }
    ,
    934356: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                UnknownPinCardType: 0,
                CustomizedBenefitEnum: 1,
                SubGoalEnum: 2,
                UpsellDM: 3,
                UpsellLeadsGen: 4
            }
        }
    }
    ,
    737749: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                duration: {
                    type: "int64",
                    id: 1
                },
                end_timestamp_str: {
                    type: "string",
                    id: 2
                },
                min_duration_time: {
                    type: "int64",
                    id: 3
                },
                version_code_str: {
                    type: "string",
                    id: 4
                },
                guess_title: {
                    type: "GuessText",
                    id: 5
                },
                round_id_str: {
                    type: "string",
                    id: 6
                },
                pin_card_type: {
                    type: "GuessPinType",
                    id: 7
                },
                is_auto_pin: {
                    type: "bool",
                    id: 8
                }
            }
        }
    }
    ,
    770486: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                has_pin: {
                    type: "bool",
                    id: 1
                },
                display_duration: {
                    type: "int64",
                    id: 2
                }
            }
        }
    }
    ,
    984091: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                chat_message: {
                    type: "webcast.im.ChatMessage",
                    id: 2
                },
                social_message: {
                    type: "webcast.im.SocialMessage",
                    id: 3
                },
                gift_message: {
                    type: "webcast.im.GiftMessage",
                    id: 4
                },
                member_message: {
                    type: "webcast.im.MemberMessage",
                    id: 5
                },
                like_message: {
                    type: "webcast.im.LikeMessage",
                    id: 6
                },
                method: {
                    type: "string",
                    id: 30
                },
                pin_time: {
                    type: "int64",
                    id: 31
                },
                operator: {
                    type: "webcast.data.User",
                    id: 32
                },
                action: {
                    type: "actionType",
                    id: 33
                },
                display_duration: {
                    type: "int64",
                    id: 34
                },
                pin_msg_id: {
                    type: "int64",
                    id: 35
                },
                ec_streamer_key: {
                    type: "string",
                    id: 36
                }
            },
            nested: {
                actionType: {
                    values: {
                        Unkown: 0,
                        Pin: 1,
                        PinCancel: 2
                    }
                }
            }
        }
    }
    ,
    581817: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                PIN_RESULT_STATUS_SUCCESS: 0,
                PIN_RESULT_STATUS_IN_INTERVAL: 1,
                PIN_RESULT_STATUS_OVER_TIMES: 2
            }
        }
    }
    ,
    245900: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                PIN_STATUS_UNKNOWN: 0,
                PIN_STATUS_ACTIVE: 1,
                PIN_STATUS_COOLING_DOWN: 2,
                PIN_STATUS_CAN_PIN: 3
            }
        }
    }
    ,
    782407: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                PLAY_SCENE_UNKNOWN: 0,
                PLAY_SCENE_COUNTDOWN_FOR_ALL: 1,
                PLAY_SCENE_COUNTDOWN_FOR_SINGLE: 2,
                PLAY_SCENE_LIVE_SHOW: 3,
                PLAY_SCENE_AIGC: 4,
                PLAY_SCENE_KARAOKE: 5,
                PLAY_SCENE_DRAW_GUESS: 6,
                PLAY_SCENE_ENLARGE_GRID: 7,
                PLAY_SCENE_GIFT_PRIORITY_LINK: 8,
                PLAY_SCENE_GIFT_THRESHOLD_LINK: 9,
                PLAY_SCENE_NOTICE_BOARD: 10,
                PLAY_SCENE_PLAYBOOK: 11,
                PLAY_SCENE_GUEST_SHOWDOWN: 12
            }
        }
    }
    ,
    580795: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                play_together_id: {
                    type: "string",
                    id: 1
                },
                description: {
                    type: "string",
                    id: 2
                },
                apply_note: {
                    type: "string",
                    id: 3
                },
                status: {
                    type: "PlayTogetherStatus",
                    id: 4
                },
                apply_limit_type: {
                    type: "ApplyLimitType",
                    id: 5
                },
                apply_user_num: {
                    type: "int64",
                    id: 6
                },
                is_applying: {
                    type: "bool",
                    id: 7
                },
                creator_id: {
                    type: "int64",
                    id: 8
                },
                creator_avatar: {
                    type: "string",
                    id: 9
                },
                creator_nick_name: {
                    type: "string",
                    id: 10
                }
            }
        }
    }
    ,
    931269: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                basic_info: {
                    type: "PlayTogetherBasicInfo",
                    id: 1
                },
                apply_list: {
                    rule: "repeated",
                    type: "PlayTogetherMember",
                    id: 2
                },
                history_list: {
                    rule: "repeated",
                    type: "PlayTogetherMember",
                    id: 3
                }
            }
        }
    }
    ,
    861912: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                apply_list_members: {
                    rule: "repeated",
                    type: "webcast.data.PlayTogetherMember",
                    id: 1
                },
                history_list_members: {
                    rule: "repeated",
                    type: "webcast.data.PlayTogetherMember",
                    id: 2
                }
            }
        }
    }
    ,
    870579: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                user_id: {
                    type: "string",
                    id: 1
                },
                avatar: {
                    type: "string",
                    id: 2
                },
                nick_name: {
                    type: "string",
                    id: 3
                },
                apply_message: {
                    type: "string",
                    id: 4
                },
                apply_time: {
                    type: "int64",
                    id: 5
                },
                accept_time: {
                    type: "int64",
                    id: 6
                },
                relation_tag: {
                    type: "string",
                    id: 7
                },
                relation_tag_enum: {
                    type: "PlayTogetherRelationTag",
                    id: 8
                }
            }
        }
    }
    ,
    581370: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            oneofs: {
                content: {
                    oneof: ["list_change_content", "permit_notice_content"]
                }
            },
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                message_type: {
                    type: "PlayTogetherMessageType",
                    id: 2
                },
                basic_info: {
                    type: "webcast.data.PlayTogetherBasicInfo",
                    id: 3
                },
                list_change_content: {
                    type: "PlayTogetherListChangeContent",
                    id: 4
                },
                permit_notice_content: {
                    type: "PlayTogetherPermitNoticeContent",
                    id: 5
                }
            }
        }
    }
    ,
    385650: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                PLAY_TOGETHER_MESSAGE_TYPE_START: 0,
                PLAY_TOGETHER_MESSAGE_TYPE_END: 1,
                PLAY_TOGETHER_MESSAGE_TYPE_REVIEW_NOTICE: 2,
                PLAY_TOGETHER_MESSAGE_TYPE_LIST_CHANGE: 3,
                PLAY_TOGETHER_MESSAGE_TYPE_PERMIT_NOTICE: 4,
                PLAY_TOGETHER_MESSAGE_TYPE_IN_PROGRESS: 5
            }
        }
    }
    ,
    826757: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                permit_type: {
                    type: "webcast.data.PlayTogetherPermitType",
                    id: 1
                }
            }
        }
    }
    ,
    723730: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                PLAY_TOGETHER_PERMIT_TYPE_UNKNOWN: 0,
                PLAY_TOGETHER_PERMIT_TYPE_ACCEPT: 1,
                PLAY_TOGETHER_PERMIT_TYPE_REJECT: 2
            }
        }
    }
    ,
    702797: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                PLAY_TOGETHER_RELATION_TAG_UNKNOWN: 0,
                PLAY_TOGETHER_RELATION_TAG_FRIEND: 1,
                PLAY_TOGETHER_RELATION_TAG_SUBSCRIBER: 2,
                PLAY_TOGETHER_RELATION_TAG_TEAM_MEMBER: 3
            }
        }
    }
    ,
    672957: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                PLAY_TOGETHER_ROLE_TYPE_UNKNOWN: 0,
                PLAY_TOGETHER_ROLE_TYPE_ANCHOR: 1,
                PLAY_TOGETHER_ROLE_TYPE_AUDIENCE: 2
            }
        }
    }
    ,
    697931: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                PLAY_TOGETHER_STATUS_UNKNOWN: 0,
                PLAY_TOGETHER_STATUS_REVIEWING: 1,
                PLAY_TOGETHER_STATUS_REVIEW_PASS: 2,
                PLAY_TOGETHER_STATUS_DESC_NOT_PASS: 3,
                PLAY_TOGETHER_STATUS_APPLY_NOTE_NOT_PASS: 4,
                PLAY_TOGETHER_STATUS_ALL_NOT_REVIEW_PASS: 5,
                PLAY_TOGETHER_STATUS_START: 6,
                PLAY_TOGETHER_STATUS_END: 7
            }
        }
    }
    ,
    538396: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                message_type: {
                    type: "webcast.im.PlayTogetherMessageType",
                    id: 1
                },
                basic_info: {
                    type: "webcast.data.PlayTogetherBasicInfo",
                    id: 2
                }
            }
        }
    }
    ,
    229090: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                PLAY_USER_TAG_UNKNOWN: 0,
                PLAY_USER_TAG_GUEST_SHOWDOWN_NORMAL: 1,
                PLAY_USER_TAG_GUEST_SHOWDOWN_WINNER: 2,
                PLAY_USER_TAG_GUEST_SHOWDOWN_LOSER: 3
            }
        }
    }
    ,
    294038: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                playbook_id: {
                    type: "int64",
                    id: 1
                },
                author_info: {
                    type: "SimpleUser",
                    id: 2
                },
                content: {
                    type: "PlaybookContent",
                    id: 3
                },
                total_favorites: {
                    type: "int64",
                    id: 4
                },
                total_usage: {
                    type: "int64",
                    id: 5
                },
                create_time: {
                    type: "int64",
                    id: 6
                },
                update_time: {
                    type: "int64",
                    id: 7
                },
                is_updated_version: {
                    type: "bool",
                    id: 8
                },
                is_my_favorite: {
                    type: "bool",
                    id: 9
                }
            }
        }
    }
    ,
    128045: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                playbook_content_id: {
                    type: "int64",
                    id: 1
                },
                original_playbook_content_id: {
                    type: "int64",
                    id: 2
                },
                text_type: {
                    type: "PlaybookContentTextType",
                    id: 3
                },
                title: {
                    type: "string",
                    id: 4
                },
                cover_url: {
                    type: "string",
                    id: 5
                },
                description: {
                    type: "string",
                    id: 6
                },
                content_status: {
                    type: "PlaybookContentStatus",
                    id: 7
                },
                min_symphony_engine_app_version: {
                    type: "int64",
                    id: 8
                },
                editor_info: {
                    type: "PlaybookEditorInfo",
                    id: 9
                },
                flow_str: {
                    type: "string",
                    id: 10
                },
                cover_uri: {
                    type: "string",
                    id: 11
                },
                tag_types: {
                    rule: "repeated",
                    type: "int32",
                    id: 12
                }
            }
        }
    }
    ,
    238835: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                PLAYBOOK_CONTENT_STATUS_UNKNOWN: 0,
                PLAYBOOK_CONTENT_STATUS_UNDER_REVIEW: 1,
                PLAYBOOK_CONTENT_STATUS_REJECT: 2,
                PLAYBOOK_CONTENT_STATUS_AVAILABLE: 3,
                PLAYBOOK_CONTENT_STATUS_DEPRECATED: 4
            }
        }
    }
    ,
    60570: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                PLAYBOOK_CONTENT_TEXT_TYPE_UNKNOWN: 0,
                PLAYBOOK_CONTENT_TEXT_TYPE_NORMAL: 1,
                PLAYBOOK_CONTENT_TEXT_TYPE_STARLING: 2
            }
        }
    }
    ,
    497971: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                editor_type: {
                    type: "string",
                    id: 1
                },
                version: {
                    type: "int64",
                    id: 2
                }
            }
        }
    }
    ,
    641761: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                PLAYBOOK_END_REASON_UNKNOWN: 0,
                PLAYBOOK_END_REASON_HOST_END: 1,
                PLAYBOOK_END_REASON_MODERATOR_END: 2,
                PLAYBOOK_END_REASON_MULTI_GUEST_CLOSED: 3
            }
        }
    }
    ,
    107011: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                message_type: {
                    type: "PlaybookMessageType",
                    id: 2
                },
                play_id: {
                    type: "int64",
                    id: 3
                },
                play_status: {
                    type: "webcast.data.multi_guest_play.ActivePlaybookStatus",
                    id: 4
                },
                title: {
                    type: "string",
                    id: 5
                },
                cover_url: {
                    type: "string",
                    id: 6
                },
                playbook_end_reason: {
                    type: "PlaybookEndReason",
                    id: 7
                }
            }
        }
    }
    ,
    213659: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                PLAYBOOK_MESSAGE_TYPE_UNKNOWN: 0,
                PLAYBOOK_MESSAGE_TYPE_START: 1,
                PLAYBOOK_MESSAGE_TYPE_END: 2,
                PLAYBOOK_MESSAGE_TYPE_CONTENT_SYNC: 3
            }
        }
    }
    ,
    332516: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                tag_type: {
                    type: "int32",
                    id: 1
                },
                tag_translated_name: {
                    type: "string",
                    id: 2
                }
            }
        }
    }
    ,
    765420: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                room_id: {
                    type: "int64",
                    id: 1
                },
                user_id: {
                    type: "int64",
                    id: 2
                }
            }
        }
    }
    ,
    598293: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                POLL_APPEAL_STATUS_UNKNOWN: 0,
                POLL_APPEAL_STATUS_PASS: 1,
                POLL_APPEAL_STATUS_FAIL: 2
            }
        }
    }
    ,
    741960: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                poll_sponsor: {
                    type: "string",
                    id: 1
                },
                gift_id: {
                    type: "int64",
                    id: 2
                },
                title: {
                    type: "string",
                    id: 3
                },
                is_suggested_question: {
                    type: "bool",
                    id: 4
                },
                user_cnt: {
                    type: "int64",
                    id: 5
                },
                gift: {
                    type: "webcast.data.GiftStruct",
                    id: 6
                },
                poll_id_str: {
                    type: "string",
                    id: 7
                },
                suggested_question_key: {
                    type: "string",
                    id: 8
                },
                poll_duration: {
                    type: "int64",
                    id: 9
                },
                time_remain: {
                    type: "int64",
                    id: 10
                },
                poll_index: {
                    type: "int64",
                    id: 11
                },
                template_id: {
                    type: "int64",
                    id: 12
                }
            }
        }
    }
    ,
    52978: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                gift_poll_limit: {
                    type: "PollCountLimit",
                    id: 1
                },
                use_new_gift_poll: {
                    type: "bool",
                    id: 2
                },
                poll_template_optimize_group: {
                    type: "int64",
                    id: 3
                }
            }
        }
    }
    ,
    741966: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                max_poll_count: {
                    type: "int64",
                    id: 1
                },
                current_poll_count: {
                    type: "int64",
                    id: 2
                },
                unlimited: {
                    type: "bool",
                    id: 3
                }
            }
        }
    }
    ,
    207284: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                poll_id: {
                    type: "int64",
                    id: 1
                },
                poll_status: {
                    type: "PollStatus",
                    id: 2
                },
                start_time: {
                    type: "int64",
                    id: 3
                },
                end_time: {
                    type: "int64",
                    id: 4
                },
                poll_option_list: {
                    rule: "repeated",
                    type: "PollOptionInfo",
                    id: 5
                },
                kind: {
                    type: "PollKind",
                    id: 6
                },
                title: {
                    type: "string",
                    id: 7
                },
                operator: {
                    type: "data.User",
                    id: 8
                },
                template_id: {
                    type: "int64",
                    id: 9
                },
                poll_id_str: {
                    type: "string",
                    id: 10
                },
                template_id_str: {
                    type: "string",
                    id: 11
                },
                user_vote_info: {
                    type: "webcast.data.UserVoteInfo",
                    id: 12
                },
                template_duration_ms: {
                    type: "int64",
                    id: 13
                },
                vote_limit: {
                    type: "PollVoteLimit",
                    id: 14
                },
                gift_id: {
                    type: "int64",
                    id: 15
                },
                poll_index: {
                    type: "int64",
                    id: 16
                },
                poll_sponsor: {
                    type: "string",
                    id: 17
                },
                poll_user_cnt: {
                    type: "int64",
                    id: 18
                },
                gift: {
                    type: "webcast.data.GiftStruct",
                    id: 19
                },
                end_type: {
                    type: "PollEndType",
                    id: 20
                },
                suggested_question_key: {
                    type: "string",
                    id: 21
                },
                is_suggested_question: {
                    type: "bool",
                    id: 22
                },
                original_poll_duration_ms: {
                    type: "int64",
                    id: 23
                }
            }
        }
    }
    ,
    959754: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                end_type: {
                    type: "webcast.data.PollEndType",
                    id: 1
                },
                option_list: {
                    rule: "repeated",
                    type: "webcast.data.PollOptionInfo",
                    id: 2
                },
                operator: {
                    type: "data.User",
                    id: 3
                }
            }
        }
    }
    ,
    823275: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                POLL_END_BY_TIME: 0,
                POLL_END_BY_OWNER: 1,
                POLL_END_BY_OTHER: 2,
                POLL_END_BY_ADMIN: 3
            }
        }
    }
    ,
    427384: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                poll_data: {
                    type: "PollData",
                    id: 1
                },
                user_vote_info: {
                    type: "UserVoteInfo",
                    id: 2
                }
            }
        }
    }
    ,
    330662: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                PollKindNormal: 0,
                PollKindGift: 1,
                PollKindCustomizable: 2,
                PollKindCustomizableGift: 3,
                PollKindQuickGift: 4,
                PollKindEmote: 5
            }
        }
    }
    ,
    658625: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            oneofs: {
                content: {
                    oneof: ["start_content", "end_content", "update_votes_content", "template_content"]
                }
            },
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                message_type: {
                    type: "int64",
                    id: 2
                },
                poll_id: {
                    type: "int64",
                    id: 3
                },
                poll_kind: {
                    type: "webcast.data.PollKind",
                    id: 7
                },
                poll_basic_info: {
                    type: "PollBasicInfo",
                    id: 8
                },
                start_content: {
                    type: "PollStartContent",
                    id: 4
                },
                end_content: {
                    type: "PollEndContent",
                    id: 5
                },
                update_votes_content: {
                    type: "PollUpdateVotesContent",
                    id: 6
                },
                template_content: {
                    type: "TemplateContent",
                    id: 9
                }
            }
        }
    }
    ,
    752977: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                POLL_START: 0,
                POLL_END: 1,
                POLL_UPDATE_VOTES: 2,
                POLL_MESSAGE_TYPE_TEMPLATE_CHANGE: 3
            }
        }
    }
    ,
    190669: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                votes: {
                    type: "int64",
                    id: 1
                },
                display_content: {
                    type: "string",
                    id: 2
                },
                option_idx: {
                    type: "int64",
                    id: 3
                },
                vote_user_list: {
                    rule: "repeated",
                    type: "VoteUser",
                    id: 4
                }
            }
        }
    }
    ,
    514341: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                start_time: {
                    type: "int64",
                    id: 1
                },
                end_time: {
                    type: "int64",
                    id: 2
                },
                option_list: {
                    rule: "repeated",
                    type: "webcast.data.PollOptionInfo",
                    id: 3
                },
                title: {
                    type: "string",
                    id: 4
                },
                operator: {
                    type: "data.User",
                    id: 5
                }
            }
        }
    }
    ,
    747178: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                PSUnknown: 0,
                Enable: 1,
                Disable: 2
            }
        }
    }
    ,
    442462: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                id: {
                    type: "int64",
                    id: 1
                },
                anchor_id: {
                    type: "int64",
                    id: 2
                },
                owner_id: {
                    type: "int64",
                    id: 3
                },
                title: {
                    type: "string",
                    id: 4
                },
                poll_option_list: {
                    rule: "repeated",
                    type: "PollOptionInfo",
                    id: 5
                },
                duration_ms: {
                    type: "int64",
                    id: 6
                },
                status: {
                    type: "PollTemplateStatus",
                    id: 7
                },
                created_at: {
                    type: "int64",
                    id: 8
                },
                modified_at: {
                    type: "int64",
                    id: 9
                },
                last_applied_at: {
                    type: "int64",
                    id: 10
                },
                id_str: {
                    type: "string",
                    id: 11
                },
                anchor_id_str: {
                    type: "string",
                    id: 12
                },
                owner_id_str: {
                    type: "string",
                    id: 13
                },
                appeal_status: {
                    type: "PollAppealStatus",
                    id: 14
                },
                violation_id_str: {
                    type: "string",
                    id: 15
                },
                kind: {
                    type: "PollKind",
                    id: 16
                },
                is_auto_created: {
                    type: "bool",
                    id: 17
                },
                suggested_question_key: {
                    type: "string",
                    id: 18
                }
            }
        }
    }
    ,
    586908: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                PollTemplateStatusToBeReviewed: 0,
                PollTemplateStatusUnderReview: 1,
                PollTemplateStatusReviewed: 2,
                PollTemplateStatusRefused: 3
            }
        }
    }
    ,
    108347: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                option_list: {
                    rule: "repeated",
                    type: "webcast.data.PollOptionInfo",
                    id: 2
                }
            }
        }
    }
    ,
    94693: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                limit_type: {
                    type: "PollVoteLimitType",
                    id: 1
                },
                vote_count_limit: {
                    type: "int64",
                    id: 2
                }
            }
        }
    }
    ,
    940709: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                POLL_VOTE_LIMIT_TYPE_SINGLE: 0,
                POLL_VOTE_LIMIT_TYPE_MULTIPLE: 1
            }
        }
    }
    ,
    346656: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                pop_product_id: {
                    type: "int64",
                    id: 1
                },
                pop_card_type: {
                    type: "int32",
                    id: 2
                }
            }
        }
    }
    ,
    199531: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                title: {
                    type: "string",
                    id: 1
                },
                price: {
                    type: "string",
                    id: 2
                },
                image_url: {
                    type: "string",
                    id: 3
                },
                open_url: {
                    type: "string",
                    id: 4
                },
                product_type: {
                    type: "string",
                    id: 5
                },
                product_id: {
                    type: "int64",
                    id: 6
                },
                source: {
                    type: "string",
                    id: 7
                },
                source_from: {
                    type: "int64",
                    id: 8
                },
                schema: {
                    type: "string",
                    id: 9
                },
                platform: {
                    type: "int64",
                    id: 10
                },
                product_status: {
                    type: "int64",
                    id: 11
                }
            }
        }
    }
    ,
    513679: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                collection_id: {
                    type: "int64",
                    id: 1
                }
            }
        }
    }
    ,
    73383: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                popular_card_info: {
                    type: "PopularCardInfo",
                    id: 2
                }
            },
            nested: {
                PopularCardInfo: {
                    fields: {
                        status: {
                            type: "int32",
                            id: 1
                        },
                        start_time: {
                            type: "int64",
                            id: 2
                        },
                        end_time: {
                            type: "int64",
                            id: 3
                        },
                        enter_number: {
                            type: "int32",
                            id: 4
                        }
                    }
                }
            }
        }
    }
    ,
    582150: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                team_rank: {
                    type: "int64",
                    id: 1
                },
                team_points: {
                    type: "int64",
                    id: 2
                },
                gap_team_points: {
                    type: "int64",
                    id: 3
                },
                is_opt_out: {
                    type: "bool",
                    id: 4
                },
                region_type: {
                    type: "PopularityRankRegionType",
                    id: 5
                },
                rank_cycle_count_down: {
                    type: "int64",
                    id: 6
                },
                revenue_region: {
                    type: "string",
                    id: 7
                },
                rank_end_timestamp_milli: {
                    type: "int64",
                    id: 8
                }
            }
        }
    }
    ,
    428416: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                PopularityRankRegionType_Unknown: 0,
                PopularityRankRegionType_EU: 1,
                PopularityRankRegionType_NA: 2,
                PopularityRankRegionType_BR: 3,
                PopularityRankRegionType_US: 4,
                PopularityRankRegionType_Others: 100
            }
        }
    }
    ,
    929205: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                join_user: {
                    type: "JoinGroupMessageExtra.RivalExtra",
                    id: 1
                },
                other_users: {
                    rule: "repeated",
                    type: "JoinGroupMessageExtra.RivalExtra",
                    id: 2
                }
            }
        }
    }
    ,
    155523: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                start_time: {
                    type: "int64",
                    id: 1
                },
                enter_count: {
                    type: "int64",
                    id: 2
                },
                sugar_daddy: {
                    type: "data.User",
                    id: 3
                },
                room_id: {
                    type: "int64",
                    id: 4
                },
                anchor: {
                    type: "data.User",
                    id: 5
                },
                portal_id: {
                    type: "int64",
                    id: 6
                },
                user_type: {
                    type: "PortalUserType",
                    id: 7
                },
                invitee_count: {
                    type: "int64",
                    id: 8
                },
                status: {
                    type: "PortalStatus",
                    id: 9
                },
                wait_duration: {
                    type: "int64",
                    id: 10
                },
                reward_duration: {
                    type: "int64",
                    id: 11
                },
                total_amount: {
                    type: "int64",
                    id: 12
                },
                cover: {
                    type: "data.Image",
                    id: 13
                }
            }
        }
    }
    ,
    970995: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                sugar_daddy: {
                    type: "data.User",
                    id: 1
                }
            }
        }
    }
    ,
    517933: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                PortalDisplayUnknown: 0,
                PortalDisplayNew: 1,
                PortalDisplayHide: 2
            }
        }
    }
    ,
    868864: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                lucky_person: {
                    type: "data.User",
                    id: 1
                }
            }
        }
    }
    ,
    490647: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                PortalHideReasonUnknown: 0,
                PortalHideReasonNR: 1,
                PortalHideReasonRecallEnd: 2,
                PortalHideReasonExpired: 3
            }
        }
    }
    ,
    757638: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                invite_count_down: {
                    type: "int64",
                    id: 1
                },
                reward_count_down: {
                    type: "int64",
                    id: 2
                },
                sugar_daddy: {
                    type: "data.User",
                    id: 3
                },
                anchor: {
                    type: "data.User",
                    id: 4
                },
                cover: {
                    type: "data.Image",
                    id: 5
                }
            }
        }
    }
    ,
    529096: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                type: {
                    type: "int64",
                    id: 2
                },
                portal_id: {
                    type: "int64",
                    id: 3
                },
                room_id: {
                    type: "int64",
                    id: 4
                },
                portal_buy: {
                    type: "PortalBuy",
                    id: 5
                },
                portal_invite: {
                    type: "PortalInvite",
                    id: 6
                },
                portal_finish: {
                    type: "PortalFinish",
                    id: 7
                },
                portal: {
                    type: "data.Portal",
                    id: 8
                },
                next_ping_time: {
                    type: "int64",
                    id: 9
                }
            }
        }
    }
    ,
    662137: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                PORTAL_NONE: 0,
                PORTAL_CREATED: 1,
                PORTAL_INVITED: 2,
                PORTAL_REWARDED: 3,
                PORTAL_FINISHED: 4
            }
        }
    }
    ,
    633499: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                NOTHING: 0,
                PORTAL_START: 1,
                PORTAL_INVITE: 2,
                PORTAL_FINISH: 3,
                PORTAL_OPEN_TO_ROOM: 4
            }
        }
    }
    ,
    943956: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                AUDIENCE: 0,
                SUGAR_DADDY: 1,
                ANCHOR: 2
            }
        }
    }
    ,
    975470: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                PortalViewUnknown: 0,
                PortalViewEntrance: 1,
                PortalViewData: 2
            }
        }
    }
    ,
    217241: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                type: {
                    type: "PosIdentityType",
                    id: 1
                },
                value: {
                    type: "string",
                    id: 2
                }
            }
        }
    }
    ,
    988441: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                IDENTITY_EMPTY_SLOT: 0,
                IDENTITY_RTC_USER_ID: 1,
                IDENTITY_RTC_STREAM_ID: 2,
                IDENTITY_LIVE_USER_ID: 3
            }
        }
    }
    ,
    546074: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                PositionUnknown: 0,
                PositionLeft: 1,
                PositionRight: 2
            }
        }
    }
    ,
    515112: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                max_position: {
                    type: "int32",
                    id: 1
                }
            }
        }
    }
    ,
    321554: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                Undefined: 0,
                BOTTOM_RIGHT: 1,
                TOP_RIGHT: 2,
                TOP_LEFT: 3,
                BOTTOM_LEFT: 4,
                ACTIVITY_TOP_RIGHT: 5
            }
        }
    }
    ,
    209247: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                item_id: {
                    type: "string",
                    id: 1
                },
                creator_uid: {
                    type: "string",
                    id: 2
                },
                creator_display_id: {
                    type: "string",
                    id: 3
                },
                post_time: {
                    type: "int64",
                    id: 4
                },
                title: {
                    type: "string",
                    id: 5
                },
                cover_url: {
                    type: "string",
                    id: 6
                },
                video_id: {
                    type: "string",
                    id: 7
                },
                video_play: {
                    type: "int64",
                    id: 8
                }
            }
        }
    }
    ,
    962716: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                card_name_key: {
                    type: "string",
                    id: 1
                },
                card_image: {
                    type: "webcast.data.Image",
                    id: 2
                },
                send_time_sec: {
                    type: "int64",
                    id: 3
                },
                send_user: {
                    type: "BattleUserInfo",
                    id: 4
                },
                effect_last_duration: {
                    type: "int64",
                    id: 5
                },
                rule_url: {
                    type: "string",
                    id: 6
                },
                effect_time_sec: {
                    type: "int64",
                    id: 7
                },
                to_anchor_id: {
                    type: "int64",
                    id: 8
                }
            }
        }
    }
    ,
    177012: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                NotPreRecorded: 0,
                PreRecordedAndExempted: 1,
                PreRecordedAndNotExempted: 2
            }
        }
    }
    ,
    480096: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                polling_interval: {
                    type: "int64",
                    id: 1
                },
                comment_list: {
                    rule: "repeated",
                    type: "PreviewCommentItem",
                    id: 2
                },
                expire_time: {
                    type: "int64",
                    id: 3
                }
            }
        }
    }
    ,
    484759: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                id: {
                    type: "int64",
                    id: 1
                },
                content: {
                    type: "string",
                    id: 2
                },
                item_type: {
                    type: "PreviewType",
                    id: 3
                }
            }
        }
    }
    ,
    602315: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                PREVIEW_GAME_INFO_TYPE_UNKNOWN: 0,
                PREVIEW_GAME_INFO_TYPE_REALTIME: 1,
                PREVIEW_GAME_INFO_TYPE_MOMENT_ACCUMULATE_INFO: 2
            }
        }
    }
    ,
    28371: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                preview_game_info_type: {
                    type: "PreviewGameInfoType",
                    id: 1
                },
                game_moment_message_type: {
                    type: "GameMomentMessageType",
                    id: 2
                },
                event_time: {
                    type: "int64",
                    id: 3
                },
                max_time: {
                    type: "int64",
                    id: 4
                },
                moment_unique_id: {
                    type: "string",
                    id: 5
                },
                content: {
                    type: "webcast.data.Text",
                    id: 6
                },
                game_tag_name: {
                    type: "webcast.data.Text",
                    id: 7
                },
                game_tag_id: {
                    type: "int64",
                    id: 8
                }
            }
        }
    }
    ,
    516816: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                moment_data_list: {
                    rule: "repeated",
                    type: "PreviewGameMomentData",
                    id: 2
                }
            }
        }
    }
    ,
    924492: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                recommend_info: {
                    type: "string",
                    id: 1
                }
            }
        }
    }
    ,
    319525: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                PREVIEW_TYPE_COMMENT: 0,
                PREVIEW_TYPE_TRAY: 1
            }
        }
    }
    ,
    169908: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                is_price_changed: {
                    type: "bool",
                    id: 1
                },
                new_price: {
                    type: "string",
                    id: 2
                },
                old_price: {
                    type: "string",
                    id: 3
                },
                next_billing_date: {
                    type: "int64",
                    id: 4
                },
                days_left_to_agree_change: {
                    type: "int64",
                    id: 6
                },
                is_first_entrance: {
                    type: "bool",
                    id: 7
                },
                is_consent_required: {
                    type: "bool",
                    id: 8
                },
                contract_id: {
                    type: "string",
                    id: 9
                },
                order_id: {
                    type: "string",
                    id: 10
                },
                no_confirm_cancel_contract_date: {
                    type: "int64",
                    id: 11
                },
                billing_type: {
                    type: "BillingType",
                    id: 12
                },
                changed_price: {
                    type: "string",
                    id: 13
                }
            }
        }
    }
    ,
    82361: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                PRICE_GROUP_UNKNOWN: 0,
                PRICE_GROUP_BASIC: 1,
                PRICE_GROUP_STANDARD: 2,
                PRICE_GROUP_DELUXE: 3
            }
        }
    }
    ,
    482356: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                price_tier_grade: {
                    type: "int64",
                    id: 1
                },
                usd_price: {
                    type: "string",
                    id: 2
                },
                local_price: {
                    type: "string",
                    id: 3
                },
                price_hint: {
                    type: "string",
                    id: 4
                },
                is_default: {
                    type: "bool",
                    id: 5
                },
                price_group: {
                    type: "PriceGroup",
                    id: 6
                },
                name: {
                    type: "string",
                    id: 7
                }
            }
        }
    }
    ,
    68997: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                emote_list: {
                    rule: "repeated",
                    type: "Emote",
                    id: 1
                }
            }
        }
    }
    ,
    872532: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                PRIVATE_STATUS_OPEN: 0,
                PRIVATE_STATUS_SELF_SEE: 1,
                PRIVATE_STATUS_FRIEND_SEE: 2
            }
        }
    }
    ,
    617359: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "webcast.im.Common",
                    id: 1
                },
                notify: {
                    type: "webcast.im.NotifyMessage",
                    id: 2
                },
                scene: {
                    type: "string",
                    id: 3
                },
                control: {
                    type: "webcast.data.DisplayControl",
                    id: 4
                },
                left_icon: {
                    type: "webcast.data.Image",
                    id: 5
                },
                right_icon: {
                    type: "webcast.data.Image",
                    id: 6
                },
                background: {
                    type: "webcast.data.Image",
                    id: 7
                },
                sub_type: {
                    type: "string",
                    id: 8
                },
                privilege_log_extra: {
                    type: "webcast.data.PrivilegeLogExtra",
                    id: 100
                }
            }
        }
    }
    ,
    420441: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "webcast.im.Common",
                    id: 1
                },
                scene: {
                    type: "string",
                    id: 2
                },
                resource_attr: {
                    type: "webcast.data.ResourceAttr",
                    id: 3
                },
                control: {
                    type: "webcast.data.DisplayControl",
                    id: 4
                },
                placeholder_list: {
                    rule: "repeated",
                    type: "Placeholder",
                    id: 5
                },
                effect_type: {
                    type: "EffectType",
                    id: 6
                },
                sticker_model: {
                    type: "StickerEffectModel",
                    id: 7
                },
                privilege_log_extra: {
                    type: "webcast.data.PrivilegeLogExtra",
                    id: 100
                }
            },
            nested: {
                FontStyle: {
                    fields: {
                        max_lines: {
                            type: "int32",
                            id: 1
                        },
                        font_size: {
                            type: "int32",
                            id: 2
                        },
                        font_color: {
                            type: "string",
                            id: 3
                        },
                        weight: {
                            type: "int32",
                            id: 4
                        },
                        enable_shadow: {
                            type: "bool",
                            id: 5
                        },
                        shadow_config_list: {
                            rule: "repeated",
                            type: "ShadowConfig",
                            id: 6
                        },
                        enable_stroke: {
                            type: "bool",
                            id: 7
                        },
                        stroke_config_list: {
                            rule: "repeated",
                            type: "StrokeConfig",
                            id: 8
                        },
                        horizontal_align: {
                            type: "HorizontalAlign",
                            id: 9
                        },
                        vertical_align: {
                            type: "VerticalAlign",
                            id: 10
                        }
                    },
                    nested: {
                        ShadowConfig: {
                            fields: {
                                shadow_color: {
                                    type: "string",
                                    id: 6
                                },
                                shadow_dx: {
                                    type: "int32",
                                    id: 7
                                },
                                shadow_dy: {
                                    type: "int32",
                                    id: 8
                                },
                                shadow_radius: {
                                    type: "int32",
                                    id: 9
                                }
                            }
                        },
                        StrokeConfig: {
                            fields: {
                                stroke_color: {
                                    type: "string",
                                    id: 1
                                },
                                stroke_width: {
                                    type: "int32",
                                    id: 2
                                }
                            }
                        },
                        HorizontalAlign: {
                            values: {
                                HORIZONTAL_ALIGN_UNKNOWN: 0,
                                HORIZONTAL_ALIGN_LEFT: 1,
                                HORIZONTAL_ALIGN_MIDDLE: 2,
                                HORIZONTAL_ALIGN_RIGHT: 3
                            }
                        },
                        VerticalAlign: {
                            values: {
                                VERTICAL_ALIGN_UNKNOWN: 0,
                                VERTICAL_ALIGN_TOP: 1,
                                VERTICAL_ALIGN_MIDDLE: 2,
                                VERTICAL_ALIGN_BOTTOM: 3
                            }
                        }
                    }
                },
                PlaceType: {
                    values: {
                        PLACE_TYPE_UNKNOWN: 0,
                        PLACE_TYPE_TEXT: 1,
                        PLACE_TYPE_IMAGE: 2
                    }
                },
                Placeholder: {
                    fields: {
                        place_type: {
                            type: "PlaceType",
                            id: 1
                        },
                        target_image: {
                            type: "string",
                            id: 2
                        },
                        target_width: {
                            type: "int32",
                            id: 3
                        },
                        target_height: {
                            type: "int32",
                            id: 4
                        },
                        text: {
                            type: "webcast.data.Text",
                            id: 5
                        },
                        font_style: {
                            type: "FontStyle",
                            id: 6
                        },
                        image_padding: {
                            type: "ImagePadding",
                            id: 7
                        }
                    },
                    nested: {
                        ImagePadding: {
                            fields: {
                                left_padding: {
                                    type: "int32",
                                    id: 1
                                },
                                right_padding: {
                                    type: "int32",
                                    id: 2
                                },
                                top_padding: {
                                    type: "int32",
                                    id: 3
                                },
                                bottom_padding: {
                                    type: "int32",
                                    id: 4
                                }
                            }
                        }
                    }
                },
                EffectType: {
                    values: {
                        EFFECT_TYPE_UNKNOWN: 0,
                        EFFECT_TYPE_VIDEO: 1,
                        EFFECT_TYPE_STICKER: 2
                    }
                },
                StickerEffectModel: {
                    fields: {
                        resource_id: {
                            type: "string",
                            id: 1
                        },
                        text: {
                            type: "webcast.data.Text",
                            id: 2
                        },
                        duration: {
                            type: "int64",
                            id: 3
                        },
                        panel_type: {
                            type: "string",
                            id: 4
                        }
                    }
                }
            }
        }
    }
    ,
    926410: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                data_version: {
                    type: "string",
                    id: 1
                },
                privilege_id: {
                    type: "string",
                    id: 2
                },
                privilege_version: {
                    type: "string",
                    id: 3
                },
                privilege_order_id: {
                    type: "string",
                    id: 4
                },
                level: {
                    type: "string",
                    id: 5
                }
            }
        }
    }
    ,
    590390: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                category: {
                    type: "PrivilegeSwitchCategory",
                    id: 1
                },
                status: {
                    type: "PrivilegeSwitchStatus",
                    id: 2
                }
            }
        }
    }
    ,
    721466: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                PRIVILEGE_SWITCH_CATEGORY_UNKNOWN: 0,
                PRIVILEGE_SWITCH_CATEGORY_USER_EMOTE: 1
            }
        }
    }
    ,
    113300: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                PRIVILEGE_SWITCH_STATUS_DISABLE: 0,
                PRIVILEGE_SWITCH_STATUS_ENABLE: 1
            }
        }
    }
    ,
    66838: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                title: {
                    type: "string",
                    id: 1
                },
                cover: {
                    type: "webcast.data.Image",
                    id: 2
                },
                price: {
                    type: "ProductPrice",
                    id: 3
                }
            }
        }
    }
    ,
    714072: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                product_id: {
                    type: "string",
                    id: 1
                },
                tag_desc: {
                    type: "string",
                    id: 2
                },
                count: {
                    type: "int64",
                    id: 3
                }
            }
        }
    }
    ,
    311939: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                product_id: {
                    type: "string",
                    id: 1
                },
                hot_count: {
                    type: "int64",
                    id: 2
                }
            }
        }
    }
    ,
    957913: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                product_id: {
                    type: "int64",
                    id: 1
                },
                bag_index: {
                    type: "BagIndex",
                    id: 2
                },
                title: {
                    type: "Title",
                    id: 3
                },
                cover: {
                    type: "webcast.data.Image",
                    id: 4
                },
                atmosphere_info: {
                    type: "AtmosphereInfo",
                    id: 5
                },
                shop_brand_logo: {
                    type: "ShopBrandLogo",
                    id: 6
                },
                live_flash_sale_info: {
                    type: "LiveFlashSaleInfo",
                    id: 7
                }
            }
        }
    }
    ,
    729485: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                format_price: {
                    type: "string",
                    id: 1
                }
            }
        }
    }
    ,
    169110: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                product_id: {
                    type: "string",
                    id: 1
                },
                title: {
                    type: "string",
                    id: 2
                },
                cover: {
                    type: "Img",
                    id: 3
                },
                stock_type: {
                    type: "StockType",
                    id: 4
                },
                timestamp: {
                    type: "int64",
                    id: 5
                },
                add_to_cart_button: {
                    type: "AddToCartButton",
                    id: 6
                }
            }
        }
    }
    ,
    872910: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                use_new_profile_card_style: {
                    type: "bool",
                    id: 1
                },
                badge_text_position: {
                    type: "BadgeTextPosition",
                    id: 2
                },
                projection_config: {
                    type: "ProjectionConfig",
                    id: 3
                },
                profile_content: {
                    type: "ProfileContent",
                    id: 4
                },
                separator_config: {
                    type: "SeparatorConfig",
                    id: 5
                }
            }
        }
    }
    ,
    685747: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                use_content: {
                    type: "bool",
                    id: 1
                },
                icon_list: {
                    rule: "repeated",
                    type: "IconConfig",
                    id: 2
                },
                number_config: {
                    type: "NumberConfig",
                    id: 3
                }
            }
        }
    }
    ,
    667895: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                start_ts: {
                    type: "int64",
                    id: 1
                },
                end_ts: {
                    type: "int64",
                    id: 2
                },
                total_revenue: {
                    type: "string",
                    id: 3
                },
                daily_revenue: {
                    type: "string",
                    id: 4
                },
                refunds: {
                    type: "string",
                    id: 5
                },
                daily_new_players: {
                    type: "int64",
                    id: 6
                },
                daily_new_installs: {
                    type: "int64",
                    id: 7
                },
                total_earnings: {
                    type: "string",
                    id: 8
                },
                total_revenue_usd: {
                    type: "string",
                    id: 9
                },
                daily_revenue_usd: {
                    type: "string",
                    id: 10
                },
                refunds_usd: {
                    type: "string",
                    id: 11
                },
                total_earnings_usd: {
                    type: "string",
                    id: 12
                },
                total_new_installs: {
                    type: "int64",
                    id: 13
                },
                daily_earnings_usd: {
                    type: "string",
                    id: 14
                },
                daily_refunds_usd: {
                    type: "string",
                    id: 15
                }
            }
        }
    }
    ,
    73098: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                TypeHourlyRank: 0,
                TypeWeeklyRank: 1,
                TypeHourlyStarRank: 2,
                TypeWeeklyRisingRankActivity: 3,
                TypeWeeklyRisingRank: 4,
                TypeWeeklyRookie: 5,
                TypeECommerceWeekly: 6,
                TypeECommerceDaily: 7,
                TypeDailyRank: 8,
                TypeFirstGiftRank: 9,
                TypeGameRank: 10,
                TypeDailyGame: 11,
                TypeHallOfFameRank: 12,
                PROFIT_RANK_TYPE_DAILY_ROOKIE: 14,
                TypeTeamRank: 15,
                TypeDailyGamePUBG: 20,
                TypeDailyGameMLBB: 21,
                TypeDailyGameFreeFire: 22,
                TypeRankLeague: 13,
                TypeClassRank: 16
            }
        }
    }
    ,
    320447: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                min_enable_progressive_benefit_num: {
                    type: "int64",
                    id: 1
                },
                max_enable_progressive_benefit_num: {
                    type: "int64",
                    id: 2
                },
                progressive_benefit_error_prompt: {
                    type: "string",
                    id: 3
                }
            }
        }
    }
    ,
    301583: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                top_left: {
                    type: "string",
                    id: 2
                },
                buttom_right: {
                    type: "string",
                    id: 3
                }
            }
        }
    }
    ,
    555227: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                atype: {
                    type: "AwardType",
                    id: 2
                },
                icon: {
                    type: "webcast.data.Image",
                    id: 3
                },
                count: {
                    type: "string",
                    id: 4
                },
                fallback_context: {
                    type: "string",
                    id: 5
                },
                award_url: {
                    type: "string",
                    id: 6
                },
                left_task_count: {
                    type: "int64",
                    id: 7
                },
                sub_task_id: {
                    type: "int64",
                    id: 8
                }
            },
            nested: {
                AwardType: {
                    values: {
                        Unknown: 0,
                        Diamond: 1,
                        Cash: 2,
                        PickTicket: 3
                    }
                }
            }
        }
    }
    ,
    858674: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                use_projection: {
                    type: "bool",
                    id: 1
                },
                icon: {
                    type: "Image",
                    id: 2
                }
            }
        }
    }
    ,
    454290: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                ad_id: {
                    type: "int64",
                    id: 1
                },
                cnt: {
                    type: "int64",
                    id: 2
                },
                percent: {
                    type: "int64",
                    id: 3
                },
                end_time: {
                    type: "int64",
                    id: 4
                }
            }
        }
    }
    ,
    265479: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                ad_id: {
                    type: "int64",
                    id: 2
                },
                status: {
                    type: "PromoteAdStatusType",
                    id: 3
                }
            }
        }
    }
    ,
    260170: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                PROMOTE_AD_STATUS_TYPE_ONLINE: 0,
                PROMOTE_AD_STATUS_TYPE_OFFLINE: 1
            }
        }
    }
    ,
    245252: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                recall_toast: {
                    type: "string",
                    id: 1
                }
            }
        }
    }
    ,
    908628: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                PROMOTE_TASK_FAIL_REASON_UNKNOWN: 0,
                PROMOTE_TASK_FAIL_REASON_NO_LIVE_AUTH: 1,
                PROMOTE_TASK_FAIL_REASON_LIVE_ACCESS_BANNED: 2,
                PROMOTE_TASK_FAIL_REASON_NOT_MEET_COMMUNITY_GUIDELINES: 3,
                PROMOTE_TASK_FAIL_REASON_NEED_MORE_FOLLOWER: 4,
                PROMOTE_TASK_FAIL_REASON_NOT_IN_ALLOW_COUNTRY: 5,
                PROMOTE_TASK_FAIL_REASON_EVENT_HAS_ENDED: 6,
                PROMOTE_TASK_FAIL_REASON_HAS_OTHER_EVENT_OR_TASK: 7,
                PROMOTE_TASK_FAIL_REASON_ORG_ACCOUNT: 8,
                PROMOTE_TASK_FAIL_REASON_HAS_JOINED_OTHER_TASK_TYPE: 9,
                PROMOTE_TASK_FAIL_REASON_NO_TASK_AUTH: 10,
                PROMOTE_TASK_FAIL_REASON_BUDGET_CONTROL: 11
            }
        }
    }
    ,
    265296: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                promotion_id: {
                    type: "string",
                    id: 1
                },
                product_ids: {
                    rule: "repeated",
                    type: "string",
                    id: 100
                }
            }
        }
    }
    ,
    668219: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                prompt_key: {
                    type: "string",
                    id: 1
                },
                elems: {
                    rule: "repeated",
                    type: "PromptElem",
                    id: 2
                }
            }
        }
    }
    ,
    430156: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                prompt_field: {
                    type: "string",
                    id: 1
                },
                value: {
                    type: "string",
                    id: 2
                }
            }
        }
    }
    ,
    596165: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                content: {
                    type: "string",
                    id: 2
                },
                user_id: {
                    type: "int64",
                    id: 3
                },
                property_event_type: {
                    type: "int64",
                    id: 4
                }
            }
        }
    }
    ,
    396112: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                user_label: {
                    type: "webcast.data.Image",
                    id: 1
                },
                user_consume_in_room: {
                    type: "int64",
                    id: 2
                }
            }
        }
    }
    ,
    329975: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                scroll_gap_count: {
                    type: "int64",
                    id: 1
                },
                anchor_scroll_gap_count: {
                    type: "int64",
                    id: 2
                },
                release_to_scroll_area: {
                    type: "bool",
                    id: 3
                },
                anchor_release_to_scroll_area: {
                    type: "bool",
                    id: 4
                },
                is_anchor_marked: {
                    type: "bool",
                    id: 5
                },
                creator_success_info: {
                    type: "CreatorSuccessInfo",
                    id: 6
                },
                portrait_info: {
                    type: "PortraitInfo",
                    id: 7
                },
                user_interaction_info: {
                    type: "UserInteractionInfo",
                    id: 8
                },
                admin_fold_type: {
                    type: "int64",
                    id: 9
                }
            },
            nested: {
                CreatorSuccessInfo: {
                    fields: {
                        tags: {
                            rule: "repeated",
                            type: "TagItem",
                            id: 1
                        },
                        topic: {
                            type: "Topic",
                            id: 2
                        }
                    },
                    nested: {
                        TagItem: {
                            fields: {
                                tag_type: {
                                    type: "webcast.data.TagType",
                                    id: 1
                                },
                                tag_text: {
                                    type: "webcast.data.Text",
                                    id: 2
                                }
                            }
                        },
                        Topic: {
                            fields: {
                                topic_action_type: {
                                    type: "webcast.data.TopicActionType",
                                    id: 1
                                },
                                topic_text: {
                                    type: "webcast.data.Text",
                                    id: 2
                                },
                                topic_tips: {
                                    type: "webcast.data.Text",
                                    id: 3
                                }
                            }
                        }
                    }
                },
                PortraitInfo: {
                    fields: {
                        user_metrics: {
                            rule: "repeated",
                            type: "UserMetrics",
                            id: 1
                        },
                        portrait_tag: {
                            rule: "repeated",
                            type: "PortraitTag",
                            id: 2
                        }
                    },
                    nested: {
                        UserMetrics: {
                            fields: {
                                type: {
                                    type: "UserMetricsType",
                                    id: 1
                                },
                                metrics_value: {
                                    type: "string",
                                    id: 2
                                }
                            },
                            nested: {
                                UserMetricsType: {
                                    values: {
                                        USER_METRICS_TYPE_UNKNOWN: 0,
                                        USER_METRICS_TYPE_GRADE: 1,
                                        USER_METRICS_TYPE_SUBSCRIBE: 2,
                                        USER_METRICS_TYPE_FOLLOW: 3,
                                        USER_METRICS_TYPE_FANSCLUB: 4,
                                        USER_METRICS_TYPE_TOPVIEWER: 5,
                                        USER_METRICS_TYPE_GIFT: 6
                                    }
                                }
                            }
                        },
                        PortraitTag: {
                            fields: {
                                tag_id: {
                                    type: "string",
                                    id: 1
                                },
                                priority: {
                                    type: "int64",
                                    id: 2
                                },
                                show_value: {
                                    type: "string",
                                    id: 3
                                },
                                show_args: {
                                    type: "string",
                                    id: 4
                                }
                            }
                        }
                    }
                },
                UserInteractionInfo: {
                    fields: {
                        like_cnt: {
                            type: "int64",
                            id: 1
                        },
                        comment_cnt: {
                            type: "int64",
                            id: 2
                        },
                        share_cnt: {
                            type: "int64",
                            id: 3
                        }
                    }
                }
            }
        }
    }
    ,
    560915: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                text_sticker_config: {
                    rule: "repeated",
                    type: "TextStickerConfig",
                    id: 1
                },
                music_id: {
                    type: "string",
                    id: 2
                },
                special_effect_config: {
                    rule: "repeated",
                    type: "SpecialEffectConfig",
                    id: 3
                },
                default_text: {
                    type: "string",
                    id: 4
                },
                challenges: {
                    rule: "repeated",
                    type: "string",
                    id: 5
                },
                mentions: {
                    rule: "repeated",
                    type: "Mention",
                    id: 6
                },
                hashtag_sticker_config: {
                    rule: "repeated",
                    type: "HashtagStickerConfig",
                    id: 7
                },
                is_caption_on: {
                    type: "bool",
                    id: 8
                },
                info_sticker_config: {
                    rule: "repeated",
                    type: "InfoStickerConfig",
                    id: 9
                }
            }
        }
    }
    ,
    709396: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                text_type: {
                    type: "PlaybookContentTextType",
                    id: 1
                },
                title: {
                    type: "string",
                    id: 2
                },
                cover_uri: {
                    type: "string",
                    id: 3
                },
                description: {
                    type: "string",
                    id: 4
                },
                min_symphony_engine_app_version: {
                    type: "int64",
                    id: 5
                },
                editor_info: {
                    type: "PlaybookEditorInfo",
                    id: 6
                },
                flow_str: {
                    type: "string",
                    id: 7
                }
            }
        }
    }
    ,
    423100: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                PUBLISHER_ANCHOR_TYPE_UNSET: 0,
                PUBLISHER_ANCHOR_TYPE_AUTO_SELECT: 1,
                PUBLISHER_ANCHOR_TYPE_NOT_SELECT: 2
            }
        }
    }
    ,
    795212: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                item_id: {
                    type: "string",
                    id: 1
                },
                cover_image_url: {
                    type: "string",
                    id: 2
                },
                item_create_ts: {
                    type: "int64",
                    id: 3
                },
                title: {
                    type: "string",
                    id: 4
                }
            }
        }
    }
    ,
    900653: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                PUBLISHER_BILLING_INDICATOR_UNSET: 0,
                PUBLISHER_BILLING_INDICATOR_ANCHOR_POINT_PV: 1,
                PUBLISHER_BILLING_INDICATOR_VIDEO_VV: 2,
                PUBLISHER_BILLING_INDICATOR_VALID_ANCHOR_POINT_PV: 3,
                PUBLISHER_BILLING_INDICATOR_VALID_VIDEO_VV: 4
            }
        }
    }
    ,
    630688: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                task_id: {
                    type: "string",
                    id: 1
                },
                task_name: {
                    type: "string",
                    id: 2
                },
                game_name: {
                    type: "string",
                    id: 3
                },
                game_logo: {
                    type: "string",
                    id: 4
                },
                start_time: {
                    type: "int64",
                    id: 5
                },
                end_time: {
                    type: "int64",
                    id: 6
                },
                status: {
                    type: "PublisherTaskStatus",
                    id: 7
                },
                game_id: {
                    type: "string",
                    id: 8
                }
            }
        }
    }
    ,
    43698: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                PUBLISHER_CREATOR_JOIN_REJECT_REASON_TYPE_UNSET: 0,
                PUBLISHER_CREATOR_JOIN_REJECT_REASON_TYPE_TNS_CHECK: 1,
                PUBLISHER_CREATOR_JOIN_REJECT_REASON_TYPE_CORRELATION_CHECK: 2,
                PUBLISHER_CREATOR_JOIN_REJECT_REASON_TYPE_TASK_REQUIREMENT_CHECK: 3,
                PUBLISHER_CREATOR_JOIN_REJECT_REASON_TYPE_TASK_IRREGULAR_GUIDANCE: 4,
                PUBLISHER_CREATOR_JOIN_REJECT_REASON_TYPE_TASK_CONTENT_INFRINGEMENT: 5
            }
        }
    }
    ,
    310871: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                PUBLISHER_CREATOR_JOIN_STATUS_WAIT_AUDIT: 0,
                PUBLISHER_CREATOR_JOIN_STATUS_AUDIT_PASS: 1,
                PUBLISHER_CREATOR_JOIN_STATUS_REJECT: 2,
                PUBLISHER_CREATOR_JOIN_STATUS_REMOVE: 3,
                PUBLISHER_CREATOR_JOIN_STATUS_APPEALING: 4
            }
        }
    }
    ,
    542701: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                item_id: {
                    type: "string",
                    id: 1
                },
                cover_image_url: {
                    type: "string",
                    id: 2
                },
                item_create_ts: {
                    type: "int64",
                    id: 3
                },
                estimated_revenue: {
                    type: "string",
                    id: 4
                },
                status: {
                    type: "PublisherCreatorJoinStatus",
                    id: 5
                },
                reject_reason_type: {
                    type: "PublisherCreatorJoinRejectReasonType",
                    id: 6
                },
                is_deleted: {
                    type: "bool",
                    id: 7
                },
                game_name: {
                    type: "string",
                    id: 8
                },
                appeal_info: {
                    type: "PublisherVideoAppealInfo",
                    id: 9
                },
                duration_sec: {
                    type: "int32",
                    id: 10
                },
                task_id: {
                    type: "string",
                    id: 11
                },
                anchor_valid_view: {
                    type: "int64",
                    id: 12
                },
                video_valid_view: {
                    type: "int64",
                    id: 13
                },
                last_updated_at: {
                    type: "int64",
                    id: 14
                },
                billing_indicator: {
                    type: "PublisherBillingIndicator",
                    id: 15
                }
            }
        }
    }
    ,
    268463: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                total_revenue: {
                    type: "string",
                    id: 1
                },
                paid_revenue: {
                    type: "string",
                    id: 2
                },
                estimated_next_revenue: {
                    type: "string",
                    id: 3
                },
                last_updated_time: {
                    type: "int64",
                    id: 4
                },
                estimated_wht_revenue: {
                    type: "string",
                    id: 5
                }
            }
        }
    }
    ,
    441424: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                estimated_revenue: {
                    type: "string",
                    id: 1
                },
                anchor_valid_view: {
                    type: "int64",
                    id: 2
                },
                video_valid_view: {
                    type: "int64",
                    id: 3
                },
                billing_indicator: {
                    type: "PublisherBillingIndicator",
                    id: 4
                },
                task_mode: {
                    type: "TaskMode",
                    id: 5
                },
                last_updated_time: {
                    type: "int64",
                    id: 6
                },
                task_status: {
                    type: "PublisherTaskStatus",
                    id: 7
                }
            }
        }
    }
    ,
    77630: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                PUBLISHER_FAQ_MODE_NORMAL: 0,
                PUBLISHER_FAQ_MODE_WITH_PROFIT: 1
            }
        }
    }
    ,
    839031: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                PUBLISHER_FORBID_TYPE_UNSET: 0,
                PUBLISHER_FORBID_TYPE_FANS_NUM_LIMIT: 1,
                PUBLISHER_FORBID_TYPE_STATUS_ERROR: 2,
                PUBLISHER_FORBID_TYPE_BUDGET_CONTROL: 3,
                PUBLISHER_FORBID_TYPE_POST_VIDEO_NUM_LIMIT: 4,
                PUBLISHER_FORBID_TYPE_ALLOW_COUNTRY_LIMIT: 5,
                PUBLISHER_FORBID_TYPE_STORE_COUNTRY_LIMIT: 6,
                PUBLISHER_FORBID_TYPE_AGE_LIMIT: 7,
                PUBLISHER_FORBID_TYPE_SPECIAL_DISTRIBUTION_ACCESS_LIMIT: 8,
                PUBLISHER_FORBID_TYPE_ORG_ACCOUNT: 9,
                PUBLISHER_FORBID_TYPE_RISK_CONTROL: 10
            }
        }
    }
    ,
    400558: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                item_id: {
                    type: "string",
                    id: 1
                },
                cover_image_url: {
                    type: "string",
                    id: 2
                },
                duration_sec: {
                    type: "int64",
                    id: 3
                },
                title: {
                    type: "string",
                    id: 4
                }
            }
        }
    }
    ,
    846802: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                not_within_billing_days_vv: {
                    type: "int64",
                    id: 1
                },
                not_in_billing_country_vv: {
                    type: "int64",
                    id: 2
                },
                game_link_not_visible_vv: {
                    type: "int64",
                    id: 3
                },
                not_from_fyp_vv: {
                    type: "int64",
                    id: 4
                },
                cleaned_vv: {
                    type: "int64",
                    id: 5
                },
                not_within_billing_days_vv_rate: {
                    type: "float",
                    id: 6
                },
                not_in_billing_country_vv_rate: {
                    type: "float",
                    id: 7
                },
                game_link_not_visible_vv_rate: {
                    type: "float",
                    id: 8
                },
                not_from_fyp_vv_rate: {
                    type: "float",
                    id: 9
                },
                cleaned_vv_rate: {
                    type: "float",
                    id: 10
                },
                billing_duration_days: {
                    type: "int32",
                    id: 11
                }
            }
        }
    }
    ,
    543563: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                PUBLISHER_PROFIT_LINK_TYPE_ME: 0,
                PUBLISHER_PROFIT_LINK_TYPE_FQA: 1
            }
        }
    }
    ,
    206166: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                room_id: {
                    type: "string",
                    id: 1
                },
                rewarded: {
                    type: "bool",
                    id: 2
                },
                room_uv: {
                    type: "int64",
                    id: 3
                },
                gamepad_mount_duration: {
                    type: "int64",
                    id: 4
                },
                content_consistent_duration: {
                    type: "int64",
                    id: 5
                },
                is_living: {
                    type: "bool",
                    id: 6
                },
                audit_status: {
                    type: "PublisherRoomAuditStatus",
                    id: 7
                }
            }
        }
    }
    ,
    800645: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                PUBLISHER_ROOM_AUDIT_STATUS_UNKNOWN: 0,
                PUBLISHER_ROOM_AUDIT_STATUS_AUDITING: 1,
                PUBLISHER_ROOM_AUDIT_STATUS_REJECTED: 2,
                PUBLISHER_ROOM_AUDIT_STATUS_PASS: 100
            }
        }
    }
    ,
    283343: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                item_id: {
                    type: "string",
                    id: 1
                },
                cover_image_url: {
                    type: "string",
                    id: 2
                },
                duration_sec: {
                    type: "int64",
                    id: 3
                },
                title: {
                    type: "string",
                    id: 4
                },
                creator_nick_name: {
                    type: "string",
                    id: 5
                },
                estimated_next_revenue: {
                    type: "string",
                    id: 6
                },
                reason: {
                    type: "PublisherShowcaseReason",
                    id: 7
                }
            }
        }
    }
    ,
    994984: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                PUBLISHER_SHOWCASE_REASON_AUTO: 0,
                PUBLISHER_SHOWCASE_REASON_MANUAL: 1
            }
        }
    }
    ,
    209381: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                task_id: {
                    type: "string",
                    id: 1
                },
                task_name: {
                    type: "string",
                    id: 2
                },
                game_info: {
                    type: "PublisherTaskGameInfo",
                    id: 3
                },
                start_ts: {
                    type: "int64",
                    id: 4
                },
                end_ts: {
                    type: "int64",
                    id: 5
                },
                remain_budget: {
                    type: "string",
                    id: 6
                },
                total_budget: {
                    type: "string",
                    id: 7
                },
                status: {
                    type: "PublisherTaskStatus",
                    id: 8
                },
                task_mode: {
                    type: "TaskMode",
                    id: 9
                },
                anchor_type: {
                    type: "PublisherAnchorType",
                    id: 10
                },
                unit_price: {
                    type: "string",
                    id: 11
                },
                min_fans_limit: {
                    type: "int32",
                    id: 12
                },
                max_post_limit_day: {
                    type: "int32",
                    id: 13
                },
                max_post_limit_num: {
                    type: "int32",
                    id: 14
                },
                has_post_permission: {
                    type: "bool",
                    id: 15
                },
                post_forbid_types: {
                    rule: "repeated",
                    type: "PublisherForbidType",
                    id: 16
                },
                has_joined: {
                    type: "bool",
                    id: 17
                },
                reward_desc: {
                    type: "string",
                    id: 18
                },
                task_desc: {
                    type: "GBLGameRichText",
                    id: 19
                },
                post_requirement: {
                    type: "GBLGameRichText",
                    id: 20
                },
                note: {
                    type: "GBLGameRichText",
                    id: 21
                },
                creator_task_join_info: {
                    type: "PublisherCreatorTaskJoinInfo",
                    id: 22
                },
                open_platform_extra: {
                    type: "string",
                    id: 23
                },
                has_sign_agreement: {
                    type: "bool",
                    id: 24
                },
                remain_budget_percent: {
                    type: "float",
                    id: 25
                },
                task_video_count: {
                    type: "int64",
                    id: 26
                },
                billing_indicator: {
                    type: "PublisherBillingIndicator",
                    id: 27
                },
                budget_control_threshold_percent: {
                    type: "float",
                    id: 28
                },
                distribution_type: {
                    type: "PublisherTaskDistributionType",
                    id: 29
                },
                cpt_price_info: {
                    type: "CPTPriceInfo",
                    id: 30
                }
            }
        }
    }
    ,
    343958: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                PUBLISHER_TASK_DISTRIBUTION_TYPE_UNSET: 0,
                PUBLISHER_TASK_DISTRIBUTION_TYPE_SPECIAL: 1,
                PUBLISHER_TASK_DISTRIBUTION_TYPE_ALL: 2
            }
        }
    }
    ,
    858130: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                game_id: {
                    type: "string",
                    id: 1
                },
                game_name: {
                    type: "string",
                    id: 2
                },
                logo: {
                    type: "string",
                    id: 3
                },
                game_tag_id: {
                    type: "int64",
                    id: 4
                }
            }
        }
    }
    ,
    467779: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                PUBLISHER_TASK_MODE_UNSET: 0,
                PUBLISHER_TASK_MODE_CPM: 10
            }
        }
    }
    ,
    530217: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                PUBLISHER_TASK_OFFLINE_REASON_TIME_UNKNOWN: 0,
                PUBLISHER_TASK_OFFLINE_REASON_TIME_END: 1,
                PUBLISHER_TASK_OFFLINE_REASON_MANUAL: 2,
                PUBLISHER_TASK_OFFLINE_REASON_BUDGET_SECOND_CONTROL: 3
            }
        }
    }
    ,
    932894: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                PUBLISHER_TASK_STATUS_UNSET: 0,
                PUBLISHER_TASK_STATUS_COMING_SOON: 1,
                PUBLISHER_TASK_STATUS_ONGOING: 2,
                PUBLISHER_TASK_STATUS_SETTLING: 3,
                PUBLISHER_TASK_STATUS_COMPLETED: 4
            }
        }
    }
    ,
    426984: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                total_vv: {
                    type: "int64",
                    id: 1
                },
                qualified_vv: {
                    type: "int64",
                    id: 2
                },
                ineligible_vv: {
                    type: "int64",
                    id: 3
                },
                ineligible_vv_detail: {
                    type: "PublisherIneligibleVVDetail",
                    id: 4
                }
            }
        }
    }
    ,
    274001: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                appeal_status: {
                    type: "PublisherVideoAppealStatus",
                    id: 1
                },
                appeal_reason: {
                    type: "string",
                    id: 2
                },
                violation_reason: {
                    type: "PublisherCreatorJoinRejectReasonType",
                    id: 3
                },
                appeal_reject_reason: {
                    type: "PublisherCreatorJoinRejectReasonType",
                    id: 4
                }
            }
        }
    }
    ,
    246711: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                PUBLISHER_VIDEO_APPEAL_STATUS_UNKNOWN: 0,
                PUBLISHER_VIDEO_APPEAL_STATUS_CAN_APPEAL: 1,
                PUBLISHER_VIDEO_APPEAL_STATUS_APPEALING: 2,
                PUBLISHER_VIDEO_APPEAL_STATUS_NO_NEED: 3,
                PUBLISHER_VIDEO_APPEAL_STATUS_NOT_ALLOWED: 4,
                PUBLISHER_VIDEO_APPEAL_STATUS_REJECTED: 9,
                PUBLISHER_VIDEO_APPEAL_STATUS_PASS: 10
            }
        }
    }
    ,
    55216: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                push_stream_level: {
                    type: "int32",
                    id: 2
                },
                random_seconds: {
                    type: "int32",
                    id: 3
                }
            }
        }
    }
    ,
    519762: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                punish_type: {
                    type: "string",
                    id: 1
                },
                punish_reason: {
                    type: "string",
                    id: 2
                },
                punish_id: {
                    type: "string",
                    id: 3
                },
                violation_uid: {
                    type: "int64",
                    id: 4
                },
                punish_type_id: {
                    type: "PunishTypeId",
                    id: 5
                },
                duration: {
                    type: "int64",
                    id: 6
                },
                punish_perception_code: {
                    type: "string",
                    id: 7
                },
                end_time: {
                    type: "int64",
                    id: 8
                },
                violation_uid_str: {
                    type: "string",
                    id: 9
                },
                show_reason: {
                    type: "string",
                    id: 10
                }
            }
        }
    }
    ,
    664641: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                PunishTypeIdUnknown: 0,
                PunishTypeIdBanLinkMic: 9,
                PunishTypeIdBanGamePartnership: 25,
                PunishTypeIdRemoveGamePartnership: 26,
                PunishTypeIDBanCoHostLinkmic: 55,
                PunishTypeIDAuthorityLimitMatch: 57,
                PunishTypeIDBanVoiceChat: 59,
                PunishTypeIDBanLiveGoal: 64,
                PunishTypeIDViewerLimit: 70
            }
        }
    }
    ,
    706663: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                user: {
                    type: "webcast.data.User",
                    id: 1
                },
                product: {
                    type: "Product",
                    id: 2
                }
            }
        }
    }
    ,
    329244: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                pay_channel: {
                    type: "data.PayChannel",
                    id: 1
                },
                status: {
                    type: "ContractStatus",
                    id: 2
                },
                tpl_type: {
                    type: "TemplateType",
                    id: 3
                },
                sub_circle: {
                    type: "SubCircle",
                    id: 4
                },
                sub_info: {
                    type: "data.SubInfo",
                    id: 5
                },
                toast: {
                    type: "string",
                    id: 6
                },
                contractID: {
                    type: "string",
                    id: 7
                },
                create_contract_intent: {
                    type: "data.CreateContractIntent",
                    id: 8
                }
            },
            nested: {
                ContractStatus: {
                    values: {
                        ContractStatus_UnKnown: 0,
                        ContractStatus_Success: 1,
                        ContractStatus_Failed: 2,
                        ContractStatus_Pending: 3
                    }
                }
            }
        }
    }
    ,
    318462: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                content: {
                    type: "string",
                    id: 2
                },
                color: {
                    type: "string",
                    id: 3
                },
                traceid: {
                    type: "string",
                    id: 4
                },
                icon: {
                    type: "webcast.data.Image",
                    id: 5
                },
                action_content: {
                    type: "string",
                    id: 6
                },
                action_type: {
                    type: "int64",
                    id: 7
                },
                push_message_display_time: {
                    type: "int64",
                    id: 8
                },
                background_image: {
                    type: "FlexImageStruct",
                    id: 9
                },
                action_icon: {
                    type: "webcast.data.Image",
                    id: 10
                },
                new_background_image: {
                    type: "FlexImageStruct",
                    id: 11
                },
                source: {
                    type: "string",
                    id: 12
                }
            }
        }
    }
    ,
    681521: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                action_content: {
                    type: "string",
                    id: 2
                },
                content: {
                    type: "string",
                    id: 3
                },
                target_num: {
                    type: "int64",
                    id: 4
                },
                show_num: {
                    type: "int64",
                    id: 5
                },
                is_finished: {
                    type: "bool",
                    id: 6
                },
                adcard_type: {
                    type: "int32",
                    id: 7
                },
                hotvalue: {
                    type: "int32",
                    id: 8
                }
            }
        }
    }
    ,
    252615: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                List: 0,
                Invite: 1,
                Suggest: 2,
                Quick: 3,
                Pin: 4
            }
        }
    }
    ,
    618697: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                AudienceManualInput: 0,
                AudienceUseRecommend: 1,
                AnchorUseRecommend: 2
            }
        }
    }
    ,
    120167: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                question_id: {
                    type: "int64",
                    id: 2
                },
                user_id: {
                    type: "int64",
                    id: 3
                },
                scene: {
                    type: "int32",
                    id: 4
                }
            }
        }
    }
    ,
    29428: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                data: {
                    type: "webcast.data.InteractionQuestion",
                    id: 2
                }
            }
        }
    }
    ,
    258521: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                data: {
                    type: "webcast.data.InteractionQuestion",
                    id: 2
                }
            }
        }
    }
    ,
    852561: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                question_id: {
                    type: "int64",
                    id: 2
                }
            }
        }
    }
    ,
    598430: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                on: {
                    type: "bool",
                    id: 2
                }
            }
        }
    }
    ,
    4303: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                type: {
                    type: "QuickChatType",
                    id: 1
                },
                text: {
                    type: "string",
                    id: 2
                },
                text_starling_key: {
                    type: "string",
                    id: 3
                },
                emote: {
                    type: "webcast.data.Emote",
                    id: 4
                }
            }
        }
    }
    ,
    224793: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                duration: {
                    type: "int64",
                    id: 2
                },
                content_list: {
                    rule: "repeated",
                    type: "QuickChatContent",
                    id: 3
                },
                priority: {
                    type: "int64",
                    id: 4
                },
                scene: {
                    type: "string",
                    id: 5
                }
            }
        }
    }
    ,
    260516: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                TEXT: 0,
                EMOTE: 1
            }
        }
    }
    ,
    133224: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                id: {
                    type: "int64",
                    id: 1
                },
                name: {
                    type: "string",
                    id: 2
                },
                image: {
                    type: "webcast.data.Image",
                    id: 3
                },
                type: {
                    type: "int64",
                    id: 4
                },
                is_box_gift: {
                    type: "bool",
                    id: 5
                },
                diamond_count: {
                    type: "int64",
                    id: 6
                },
                is_broadcast_gift: {
                    type: "bool",
                    id: 7
                },
                is_effect_befview: {
                    type: "bool",
                    id: 8
                },
                primary_effect_id: {
                    type: "int64",
                    id: 9
                }
            }
        }
    }
    ,
    904677: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                uid: {
                    type: "string",
                    id: 1
                },
                user_name: {
                    type: "string",
                    id: 2
                },
                room_id: {
                    type: "string",
                    id: 3
                },
                category: {
                    type: "string",
                    id: 4
                },
                description: {
                    type: "string",
                    id: 5
                },
                avatar: {
                    type: "string",
                    id: 6
                },
                background_image: {
                    type: "string",
                    id: 7
                },
                extra: {
                    type: "string",
                    id: 8
                }
            }
        }
    }
    ,
    864846: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                message_type: {
                    type: "QuizMsgType",
                    id: 1
                },
                quiz_id: {
                    type: "string",
                    id: 2
                },
                quiz_type: {
                    type: "int32",
                    id: 3
                },
                extra: {
                    type: "string",
                    id: 4
                },
                participants_count: {
                    type: "int64",
                    id: 5
                },
                question_id: {
                    type: "string",
                    id: 6
                },
                question_no: {
                    type: "int32",
                    id: 7
                },
                question_count: {
                    type: "int32",
                    id: 8
                },
                question_type: {
                    type: "QuizQuestionType",
                    id: 9
                },
                title: {
                    type: "string",
                    id: 10
                },
                image: {
                    rule: "repeated",
                    type: "QuizImage",
                    id: 11
                },
                correct_answer: {
                    type: "string",
                    id: 15
                },
                statistics: {
                    type: "QuizStatistics",
                    id: 16
                },
                next_quiz: {
                    rule: "repeated",
                    type: "QuizNextQuiz",
                    id: 17
                },
                reward_amount: {
                    type: "string",
                    id: 18
                },
                correct_answer_image: {
                    rule: "repeated",
                    type: "QuizImage",
                    id: 19
                },
                sponsor_code: {
                    type: "string",
                    id: 20
                },
                display_duration_ms: {
                    type: "int32",
                    id: 21
                },
                extra1: {
                    type: "string",
                    id: 51
                },
                extra2: {
                    type: "string",
                    id: 52
                },
                extra3: {
                    type: "string",
                    id: 53
                },
                extra4: {
                    type: "string",
                    id: 54
                },
                extra5: {
                    type: "string",
                    id: 55
                }
            }
        }
    }
    ,
    331880: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                quizID: {
                    type: "int64",
                    id: 2
                },
                status: {
                    type: "QuizStatus",
                    id: 3
                },
                quizInfos: {
                    rule: "repeated",
                    type: "AllQuizInfo",
                    id: 4
                },
                errorCode: {
                    type: "int64",
                    id: 5
                },
                extra: {
                    type: "string",
                    id: 6
                }
            }
        }
    }
    ,
    621194: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                message_type: {
                    type: "QuizMsgType",
                    id: 1
                },
                quiz_id: {
                    type: "string",
                    id: 2
                },
                quiz_type: {
                    type: "int32",
                    id: 3
                },
                extra: {
                    type: "string",
                    id: 4
                },
                user_data_version: {
                    type: "int32",
                    id: 5
                },
                sponsor_code: {
                    type: "string",
                    id: 6
                },
                display_duration_ms: {
                    type: "int32",
                    id: 7
                },
                extra1: {
                    type: "string",
                    id: 51
                },
                extra2: {
                    type: "string",
                    id: 52
                },
                extra3: {
                    type: "string",
                    id: 53
                },
                extra4: {
                    type: "string",
                    id: 54
                },
                extra5: {
                    type: "string",
                    id: 55
                }
            }
        }
    }
    ,
    387036: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                quiz_id: {
                    type: "int64",
                    id: 1
                },
                status: {
                    type: "int64",
                    id: 2
                }
            }
        }
    }
    ,
    774230: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                quiz_change_data: {
                    rule: "repeated",
                    type: "QuizChangeData",
                    id: 2
                }
            }
        }
    }
    ,
    333247: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                message_type: {
                    type: "QuizMsgType",
                    id: 1
                },
                quiz_id: {
                    type: "string",
                    id: 2
                },
                quiz_type: {
                    type: "int32",
                    id: 3
                },
                extra: {
                    type: "string",
                    id: 4
                },
                settled_reward: {
                    rule: "repeated",
                    type: "QuizRewardRule",
                    id: 5
                },
                next_quiz: {
                    rule: "repeated",
                    type: "QuizNextQuiz",
                    id: 6
                },
                reward_amount: {
                    type: "string",
                    id: 7
                },
                question_count: {
                    type: "int32",
                    id: 8
                },
                anchor_list: {
                    rule: "repeated",
                    type: "QuizAnchorInfo",
                    id: 9
                },
                sponsor_code: {
                    type: "string",
                    id: 10
                },
                display_duration_ms: {
                    type: "int32",
                    id: 11
                },
                extra1: {
                    type: "string",
                    id: 51
                },
                extra2: {
                    type: "string",
                    id: 52
                },
                extra3: {
                    type: "string",
                    id: 53
                },
                extra4: {
                    type: "string",
                    id: 54
                },
                extra5: {
                    type: "string",
                    id: 55
                }
            }
        }
    }
    ,
    374207: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                url: {
                    type: "string",
                    id: 1
                }
            }
        }
    }
    ,
    438787: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                UnknownQuizMsgType: 0,
                RegisterQuizMsgType: 1,
                PostQuestionQuizMsgType: 2,
                PostAnswerQuizMsgType: 3,
                PostFinalResultQuizMsgType: 4,
                CallUpWebviewQuizMsgType: 5,
                RulesIntroductionQuizMsgType: 6,
                PropRuleMsgType: 7,
                RemainingPeopleMsgType: 8,
                SubscriptionMsgType: 9,
                NoWinnerMsgType: 10,
                AbnormalEndMsgType: 11,
                Extra12MsgType: 12,
                Extra13MsgType: 13,
                Extra14MsgType: 14,
                Extra15MsgType: 15,
                Extra16MsgType: 16,
                Extra17MsgType: 17,
                Extra18MsgType: 18
            }
        }
    }
    ,
    846932: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                time: {
                    type: "int64",
                    id: 1
                },
                reward_amount: {
                    type: "string",
                    id: 2
                },
                quiz_id: {
                    type: "string",
                    id: 3
                },
                live_event_id: {
                    type: "string",
                    id: 4
                },
                end_time: {
                    type: "int64",
                    id: 5
                }
            }
        }
    }
    ,
    711584: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                message_type: {
                    type: "QuizMsgType",
                    id: 1
                },
                quiz_id: {
                    type: "string",
                    id: 2
                },
                quiz_type: {
                    type: "int32",
                    id: 3
                },
                extra: {
                    type: "string",
                    id: 4
                },
                participants_count: {
                    type: "int32",
                    id: 5
                },
                question_id: {
                    type: "string",
                    id: 6
                },
                question_no: {
                    type: "int32",
                    id: 7
                },
                question_count: {
                    type: "int32",
                    id: 8
                },
                question_type: {
                    type: "QuizQuestionType",
                    id: 9
                },
                title: {
                    type: "string",
                    id: 10
                },
                image: {
                    rule: "repeated",
                    type: "QuizImage",
                    id: 11
                },
                reward_amount: {
                    type: "string",
                    id: 15
                },
                question_duration_ms: {
                    type: "int32",
                    id: 16
                },
                next_quiz: {
                    rule: "repeated",
                    type: "QuizNextQuiz",
                    id: 17
                },
                sponsor_code: {
                    type: "string",
                    id: 18
                },
                display_duration_ms: {
                    type: "int32",
                    id: 19
                },
                extra1: {
                    type: "string",
                    id: 51
                },
                extra2: {
                    type: "string",
                    id: 52
                },
                extra3: {
                    type: "string",
                    id: 53
                },
                extra4: {
                    type: "string",
                    id: 54
                },
                extra5: {
                    type: "string",
                    id: 55
                }
            }
        }
    }
    ,
    107925: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                option_id: {
                    type: "string",
                    id: 2
                },
                content: {
                    type: "string",
                    id: 3
                },
                image: {
                    rule: "repeated",
                    type: "QuizImage",
                    id: 4
                }
            }
        }
    }
    ,
    552380: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                UnknownQuizQuestionType: 0,
                TextQuizQuestionType: 1,
                Image1QuizQuestionType: 2,
                Image2QuizQuestionType: 3
            }
        }
    }
    ,
    551621: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                title: {
                    type: "string",
                    id: 1
                },
                result: {
                    type: "webcast.data.Text",
                    id: 2
                },
                gain: {
                    type: "webcast.data.Text",
                    id: 3
                }
            }
        }
    }
    ,
    635098: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                quiz_result: {
                    type: "QuizResult",
                    id: 3
                }
            }
        }
    }
    ,
    205157: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                settler_code: {
                    type: "string",
                    id: 1
                },
                send_amount: {
                    type: "int32",
                    id: 2
                },
                reward_list: {
                    rule: "repeated",
                    type: "RewardItem",
                    id: 3
                }
            },
            nested: {
                RewardItem: {
                    fields: {
                        reward_name: {
                            type: "string",
                            id: 1
                        },
                        reward_amount: {
                            type: "string",
                            id: 2
                        }
                    }
                }
            }
        }
    }
    ,
    826265: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                message_type: {
                    type: "QuizMsgType",
                    id: 1
                },
                quiz_id: {
                    type: "string",
                    id: 2
                },
                quiz_type: {
                    type: "int32",
                    id: 3
                },
                extra: {
                    type: "string",
                    id: 4
                },
                reward_amount: {
                    type: "string",
                    id: 5
                },
                question_count: {
                    type: "int32",
                    id: 6
                },
                user_count: {
                    type: "int32",
                    id: 7
                },
                sponsor_code: {
                    type: "string",
                    id: 8
                },
                display_duration_ms: {
                    type: "int32",
                    id: 9
                },
                extra1: {
                    type: "string",
                    id: 51
                },
                extra2: {
                    type: "string",
                    id: 52
                },
                extra3: {
                    type: "string",
                    id: 53
                },
                extra4: {
                    type: "string",
                    id: 54
                },
                extra5: {
                    type: "string",
                    id: 55
                }
            }
        }
    }
    ,
    978063: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                display_text: {
                    type: "webcast.data.Text",
                    id: 2
                }
            }
        }
    }
    ,
    250599: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                option_count: {
                    rule: "repeated",
                    type: "OptionCountItem",
                    id: 1
                }
            },
            nested: {
                OptionCountItem: {
                    fields: {
                        option_id: {
                            type: "string",
                            id: 1
                        },
                        count: {
                            type: "int32",
                            id: 2
                        }
                    }
                }
            }
        }
    }
    ,
    132038: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                OtherStatus: 0,
                Pass: 1,
                NoPass: 2
            }
        }
    }
    ,
    848255: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                Unknown: 0,
                Processing: 1,
                AutomaticSealing: 2,
                ManualSealing: 3,
                Settlement: 4,
                Settled: 5,
                Canceled: 6,
                Auditing: 7,
                AuditFailed: 8
            }
        }
    }
    ,
    753058: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                id: {
                    type: "int64",
                    id: 1
                },
                title: {
                    type: "string",
                    id: 2
                },
                duration: {
                    type: "int64",
                    id: 4
                }
            }
        }
    }
    ,
    635853: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                Undefined: 0,
                NormalQuiz: 1,
                AdvancedQuiz: 2
            }
        }
    }
    ,
    256021: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                message_type: {
                    type: "QuizMsgType",
                    id: 1
                },
                quiz_id: {
                    type: "string",
                    id: 2
                },
                quiz_type: {
                    type: "int32",
                    id: 3
                },
                extra: {
                    type: "string",
                    id: 4
                },
                user_data_version: {
                    type: "int32",
                    id: 5
                },
                device_id: {
                    type: "string",
                    id: 6
                },
                user_status: {
                    type: "QuizUserStatus",
                    id: 7
                },
                respawn_balance: {
                    type: "int32",
                    id: 8
                },
                double_bonus_balance: {
                    type: "int32",
                    id: 9
                },
                spectator_type: {
                    type: "int32",
                    id: 10
                },
                is_question_encrypt: {
                    type: "bool",
                    id: 11
                },
                question_encrypt_key: {
                    type: "string",
                    id: 12
                },
                user_question_result: {
                    rule: "repeated",
                    type: "QuizUserQuestionResult",
                    id: 13
                },
                available_respawn_balance: {
                    type: "int32",
                    id: 14
                },
                available_double_bonus_balance: {
                    type: "int32",
                    id: 15
                },
                is_retain_if_wrong: {
                    type: "bool",
                    id: 16
                },
                user_live_event_infos: {
                    rule: "repeated",
                    type: "UserLiveEventInfo",
                    id: 17
                },
                user_identity_infos: {
                    rule: "repeated",
                    type: "QuizUserIdentityInfo",
                    id: 18
                },
                extra1: {
                    type: "string",
                    id: 51
                },
                extra2: {
                    type: "string",
                    id: 52
                },
                extra3: {
                    type: "string",
                    id: 53
                },
                extra4: {
                    type: "string",
                    id: 54
                },
                extra5: {
                    type: "string",
                    id: 55
                }
            }
        }
    }
    ,
    476966: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                correct_answer: {
                    type: "string",
                    id: 1
                },
                user_answer: {
                    type: "string",
                    id: 2
                },
                question_id: {
                    type: "string",
                    id: 3
                },
                question_no: {
                    type: "int32",
                    id: 4
                },
                simple_user_answer: {
                    type: "string",
                    id: 5
                },
                is_use_respawn: {
                    type: "bool",
                    id: 6
                }
            }
        }
    }
    ,
    4613: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                UnknownQuizUserStatus: 0,
                ParticipantQuizUserStatus: 1,
                SpectatorQuizUserStatus: 2
            }
        }
    }
    ,
    294935: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                xx1: {
                    type: "int32",
                    id: 1
                },
                xx2: {
                    type: "int32",
                    id: 2
                },
                xx3: {
                    type: "int32",
                    id: 3
                },
                xx4: {
                    type: "int32",
                    id: 4
                }
            }
        }
    }
    ,
    325031: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                remote_default_stream_type: {
                    type: "int32",
                    id: 1
                },
                is_auto_switch: {
                    type: "int32",
                    id: 2
                },
                auto_switch_user_num: {
                    type: "int32",
                    id: 3
                },
                hd_video_param: {
                    type: "RTCVideoParam",
                    id: 4
                },
                sd_video_param: {
                    type: "RTCVideoParam",
                    id: 5
                }
            }
        }
    }
    ,
    303286: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                rtc_app_id: {
                    type: "string",
                    id: 1
                },
                rtc_user_id: {
                    type: "string",
                    id: 2
                },
                rtc_token: {
                    type: "string",
                    id: 3
                },
                rtc_channel_id: {
                    type: "int64",
                    id: 4
                }
            }
        }
    }
    ,
    97774: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                live_rtc_engine_config: {
                    type: "RTCEngineConfig",
                    id: 1
                },
                live_rtc_video_param: {
                    rule: "repeated",
                    type: "RTCLiveVideoParam",
                    id: 2
                },
                rtc_bitrate_map: {
                    type: "RTCBitrateMap",
                    id: 3
                },
                rtc_fps: {
                    type: "int32",
                    id: 4
                },
                rtc_mix_base: {
                    type: "RTCMixBase",
                    id: 5
                },
                byte_rtc_ext_info: {
                    type: "ByteRTCExtInfo",
                    id: 6
                },
                extra: {
                    type: "RTCInfoExtra",
                    id: 7
                },
                rtc_business_id: {
                    type: "string",
                    id: 8
                },
                rtc_other: {
                    type: "RTCOther",
                    id: 9
                },
                interact_client_type: {
                    type: "int32",
                    id: 10
                }
            }
        }
    }
    ,
    870854: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                version: {
                    type: "string",
                    id: 1
                }
            }
        }
    }
    ,
    27772: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                strategy_id: {
                    type: "int32",
                    id: 1
                },
                params: {
                    type: "RTCVideoParam",
                    id: 2
                }
            }
        }
    }
    ,
    240135: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                bitrate: {
                    type: "int32",
                    id: 1
                }
            }
        }
    }
    ,
    334461: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                video_bitrate_kbps: {
                    type: "int32",
                    id: 1
                }
            }
        }
    }
    ,
    648698: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                max_transcoding_cb_interval_second: {
                    type: "int32",
                    id: 1
                }
            }
        }
    }
    ,
    657458: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                width: {
                    type: "int32",
                    id: 1
                },
                height: {
                    type: "int32",
                    id: 2
                },
                fps: {
                    type: "int32",
                    id: 3
                },
                bitrate_kbps: {
                    type: "int32",
                    id: 4
                }
            }
        }
    }
    ,
    544057: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                rank_type: {
                    type: "webcast.data.ProfitRankType",
                    id: 1
                },
                countdown: {
                    type: "int64",
                    id: 2
                },
                default_content: {
                    type: "webcast.data.Text",
                    id: 3
                },
                roll_config: {
                    type: "RollCfg",
                    id: 4
                },
                block_message: {
                    type: "bool",
                    id: 5
                },
                owner_rank_idx: {
                    type: "int64",
                    id: 6
                },
                owner_on_rank: {
                    type: "bool",
                    id: 7
                },
                related_tab_rank_type: {
                    type: "webcast.data.ProfitRankType",
                    id: 8
                },
                request_first_show_type: {
                    type: "webcast.data.ProfitRankType",
                    id: 9
                },
                entranceIcon: {
                    type: "webcast.data.Image",
                    id: 10
                },
                affiliated_content: {
                    type: "AffiliatedInfo",
                    id: 11
                },
                reset_time: {
                    type: "int64",
                    id: 12
                },
                window_size: {
                    type: "int64",
                    id: 13
                }
            }
        }
    }
    ,
    693651: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                rank: {
                    type: "int64",
                    id: 1
                },
                anchor_info: {
                    type: "webcast.data.User",
                    id: 2
                },
                room_id: {
                    type: "string",
                    id: 3
                }
            }
        }
    }
    ,
    653063: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                asset_id: {
                    type: "int64",
                    id: 2
                },
                effect_open: {
                    type: "bool",
                    id: 3
                },
                rank_type: {
                    type: "int64",
                    id: 4
                },
                rank: {
                    type: "int64",
                    id: 5
                }
            }
        }
    }
    ,
    1152: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                sprint_type: {
                    type: "RankListSprintType",
                    id: 2
                },
                notify_mode: {
                    type: "RankListSprintNotifyMode",
                    id: 3
                },
                prompt: {
                    type: "data.HourlyRankSprintPrompt",
                    id: 4
                }
            }
        }
    }
    ,
    259549: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                RankListSprintNotifyMode_Unknown: 0,
                RankListSprintNotifyMode_ForUser: 1,
                RankListSprintNotifyMode_ForAnchor: 2
            }
        }
    }
    ,
    458339: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                RankListSprintType_Unknown: 0,
                RankListSprintType_Hourly: 1,
                RankListSprintType_Weekly: 2
            }
        }
    }
    ,
    8856: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                tabs: {
                    rule: "repeated",
                    type: "webcast.data.RankTabInfo",
                    id: 1
                },
                supported_version: {
                    type: "int64",
                    id: 2
                }
            }
        }
    }
    ,
    566213: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                countdown: {
                    type: "int64",
                    id: 1
                },
                duration: {
                    type: "int64",
                    id: 2
                },
                content: {
                    type: "webcast.data.Text",
                    id: 3
                },
                background_color: {
                    type: "string",
                    id: 4
                },
                gap_score: {
                    type: "int64",
                    id: 5
                },
                owner_rank_idx: {
                    type: "int64",
                    id: 6
                }
            }
        }
    }
    ,
    942160: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                rank_type: {
                    type: "ProfitRankType",
                    id: 1
                },
                title: {
                    type: "string",
                    id: 2
                },
                title_text: {
                    type: "webcast.data.Text",
                    id: 3
                },
                list_lynx_type: {
                    type: "int64",
                    id: 4
                }
            }
        }
    }
    ,
    376521: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                scene: {
                    type: "RankTestMessageScene",
                    id: 2
                },
                owner_idx_before_update: {
                    type: "int64",
                    id: 3
                },
                owner_idx_after_update: {
                    type: "int64",
                    id: 4
                },
                self_get_badge_msg: {
                    type: "webcast.data.Text",
                    id: 5
                },
                other_get_badge_msg: {
                    type: "webcast.data.Text",
                    id: 6
                },
                cur_user_id: {
                    type: "int64",
                    id: 7
                }
            },
            nested: {
                RankTestMessageScene: {
                    values: {
                        Unknown: 0,
                        OnlineAudienceTopNUpdatePublicScreen: 1
                    }
                }
            }
        }
    }
    ,
    772425: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                toast: {
                    type: "RankToast",
                    id: 2
                }
            },
            nested: {
                RankToast: {
                    fields: {
                        user_id: {
                            type: "int64",
                            id: 1
                        },
                        should_toast: {
                            type: "bool",
                            id: 2
                        }
                    }
                }
            }
        }
    }
    ,
    943543: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                updates: {
                    rule: "repeated",
                    type: "RankUpdate",
                    id: 2
                },
                group_type: {
                    type: "webcast.data.EntranceGroupType",
                    id: 3
                },
                op_type: {
                    type: "OpType",
                    id: 4
                },
                priority: {
                    type: "int64",
                    id: 5
                },
                tabs: {
                    rule: "repeated",
                    type: "webcast.data.RankTabInfo",
                    id: 6
                },
                is_animation_loop_play: {
                    type: "bool",
                    id: 7
                },
                animation_loop_for_off: {
                    type: "bool",
                    id: 8
                },
                union_animation: {
                    rule: "repeated",
                    type: "UnionAnimationInfo",
                    id: 9
                },
                tab_info: {
                    rule: "repeated",
                    type: "RankListTabInfo",
                    id: 10
                }
            },
            nested: {
                RankUpdate: {
                    fields: {
                        rank_type: {
                            type: "webcast.data.ProfitRankType",
                            id: 1
                        },
                        owner_rank: {
                            type: "int64",
                            id: 2
                        },
                        default_content: {
                            type: "webcast.data.Text",
                            id: 3
                        },
                        prompt: {
                            type: "webcast.data.RankSprintPrompt",
                            id: 4
                        },
                        show_entrance_animation: {
                            type: "bool",
                            id: 5
                        },
                        countdown: {
                            type: "int64",
                            id: 6
                        },
                        animation_info: {
                            type: "AnimationInfo",
                            id: 7
                        },
                        related_tab_rank_type: {
                            type: "webcast.data.ProfitRankType",
                            id: 8
                        },
                        request_first_show_type: {
                            type: "webcast.data.ProfitRankType",
                            id: 9
                        },
                        supported_version: {
                            type: "int64",
                            id: 10
                        },
                        OwnerOnRank: {
                            type: "bool",
                            id: 11
                        },
                        entranceIcon: {
                            type: "webcast.data.Image",
                            id: 12
                        },
                        affiliated_info: {
                            type: "AffiliatedInfo",
                            id: 13
                        }
                    },
                    nested: {
                        AnimationInfo: {
                            fields: {
                                type: {
                                    type: "AnimationInfoType",
                                    id: 1
                                },
                                background_color: {
                                    type: "string",
                                    id: 2
                                },
                                content: {
                                    type: "webcast.data.Text",
                                    id: 3
                                },
                                duration: {
                                    type: "int64",
                                    id: 4
                                }
                            }
                        },
                        AffiliatedInfo: {
                            fields: {
                                text_content: {
                                    type: "webcast.data.Text",
                                    id: 1
                                },
                                gap_desc: {
                                    type: "webcast.data.Text",
                                    id: 2
                                },
                                real_time_rank: {
                                    type: "int64",
                                    id: 3
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    ,
    975554: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                UnKnown: 0,
                AudienceViewer: 1,
                AnchorViewer: 2
            }
        }
    }
    ,
    709450: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            oneofs: {
                business: {
                    oneof: ["multi_live_content"]
                }
            },
            fields: {
                over_length: {
                    type: "int64",
                    id: 1
                },
                multi_live_content: {
                    type: "MultiLiveContent",
                    id: 100
                }
            }
        }
    }
    ,
    893022: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                REAL_TIME_EVENT_TYPE_DEFAULT: 0,
                REAL_TIME_EVENT_TYPE_GUIDE: 1
            }
        }
    }
    ,
    826036: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                type: {
                    type: "RealTimeEventType",
                    id: 2
                },
                guide_text_starling: {
                    type: "string",
                    id: 3
                }
            }
        }
    }
    ,
    525498: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                boosted: {
                    type: "bool",
                    id: 1
                },
                boost_user_count: {
                    type: "int64",
                    id: 2
                }
            }
        }
    }
    ,
    71001: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                suggest: {
                    type: "string",
                    id: 1
                }
            }
        }
    }
    ,
    169410: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                live_start_time: {
                    type: "int64",
                    id: 1
                },
                live_end_time: {
                    type: "int64",
                    id: 2
                },
                total_score: {
                    type: "int64",
                    id: 3
                },
                live_watch_cnt: {
                    type: "int64",
                    id: 4
                },
                live_new_fans_ucnt: {
                    type: "int64",
                    id: 5
                },
                live_consume_ucnt: {
                    type: "int64",
                    id: 6
                },
                live_comment_cnt: {
                    type: "int64",
                    id: 7
                },
                live_like_cnt: {
                    type: "int64",
                    id: 8
                },
                new_subscribers_cnt: {
                    type: "int64",
                    id: 9
                },
                live_online_watch_cnt: {
                    type: "int64",
                    id: 10
                },
                share_cnt: {
                    type: "int64",
                    id: 11
                }
            }
        }
    }
    ,
    413718: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                room_id: {
                    type: "string",
                    id: 2
                },
                base_info: {
                    type: "webcast.data.RealtimeLiveCenterBaseData",
                    id: 3
                },
                tips_info: {
                    type: "webcast.data.RealtimeLiveCenterTips",
                    id: 4
                },
                shop_info: {
                    type: "webcast.data.RealtimeLiveCenterShopData",
                    id: 5
                },
                cold_start_stat_data: {
                    type: "webcast.data.ColdStartStatData",
                    id: 6
                },
                reminder_word_info: {
                    type: "webcast.data.RealtimeReminderWordInfoMsg",
                    id: 7
                }
            }
        }
    }
    ,
    242743: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                show_shop_data: {
                    type: "bool",
                    id: 1
                },
                revenue_amount: {
                    type: "string",
                    id: 2
                },
                unit_sales: {
                    type: "int64",
                    id: 3
                },
                buyers: {
                    type: "int64",
                    id: 6
                }
            }
        }
    }
    ,
    955801: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                show_tips: {
                    type: "bool",
                    id: 1
                },
                tip_text: {
                    type: "string",
                    id: 2
                },
                tip_type: {
                    type: "TipsType",
                    id: 3
                },
                random_tip_key: {
                    type: "string",
                    id: 4
                },
                tips_schema: {
                    type: "string",
                    id: 5
                }
            }
        }
    }
    ,
    522933: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                scene: {
                    type: "string",
                    id: 1
                },
                title: {
                    type: "webcast.data.Text",
                    id: 2
                },
                content: {
                    type: "string",
                    id: 3
                },
                message_key: {
                    type: "string",
                    id: 4
                }
            }
        }
    }
    ,
    747352: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                start_time: {
                    type: "int64",
                    id: 1
                },
                end_time: {
                    type: "int64",
                    id: 2
                },
                title: {
                    type: "string",
                    id: 3
                },
                reason: {
                    type: "string",
                    id: 4
                },
                suggestion: {
                    type: "string",
                    id: 5
                },
                type: {
                    type: "ViolationType",
                    id: 6
                },
                punish_info: {
                    type: "webcast.data.PunishEventInfo",
                    id: 7
                },
                status: {
                    type: "ViolationEndStatus",
                    id: 8
                },
                appeal_info: {
                    type: "AppealInfo",
                    id: 9
                },
                issue_time_text: {
                    type: "string",
                    id: 10
                },
                icon_type: {
                    type: "webcast.data.PerceptionDialogIconType",
                    id: 11
                }
            }
        }
    }
    ,
    697230: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                type: {
                    type: "string",
                    id: 1
                },
                text: {
                    type: "string",
                    id: 2
                },
                total_diamond: {
                    type: "int64",
                    id: 3
                },
                sub_goal_number: {
                    type: "int64",
                    id: 4
                },
                recommended_gift_unit_price: {
                    type: "int64",
                    id: 5
                }
            }
        }
    }
    ,
    796862: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                RECEIVE_REWARD_RESULT_UNKNOWN: 0,
                RECEIVE_REWARD_RESULT_CAN_NOT_RECEIVE: 1,
                RECEIVE_REWARD_RESULT_RECEIVE_SUCCESS: 2,
                RECEIVE_REWARD_RESULT_HAVE_RECEIVED: 3,
                RECEIVE_REWARD_RESULT_RECEIVE_FAILED: 4,
                RECEIVE_REWARD_RESULT_NO_QUOTA: 5
            }
        }
    }
    ,
    644468: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                user_id: {
                    type: "int64",
                    id: 1
                },
                hidden_gids: {
                    rule: "repeated",
                    type: "int64",
                    id: 2
                }
            }
        }
    }
    ,
    697301: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                user: {
                    type: "webcast.data.User",
                    id: 1
                },
                recent_become_gold_times: {
                    type: "int64",
                    id: 2
                },
                online_room_id: {
                    type: "string",
                    id: 3
                }
            }
        }
    }
    ,
    601001: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                prompt_type: {
                    type: "int32",
                    id: 1
                },
                toast_content: {
                    type: "string",
                    id: 2
                },
                pop_up_title: {
                    type: "string",
                    id: 3
                },
                pop_up_content: {
                    type: "string",
                    id: 4
                },
                content_replace: {
                    keyType: "string",
                    type: "RechargePopUpContentReplace",
                    id: 5
                },
                pop_up_dismiss: {
                    type: "string",
                    id: 6
                },
                pop_up_dismiss_action: {
                    type: "int32",
                    id: 7
                },
                pop_up_primary_CTA: {
                    type: "string",
                    id: 8
                },
                pop_up_primary_CTA_schema: {
                    type: "string",
                    id: 9
                },
                extra: {
                    type: "string",
                    id: 10
                },
                pop_up_style: {
                    type: "int32",
                    id: 11
                },
                link_to_jump: {
                    type: "string",
                    id: 12
                },
                pop_up_primary_action: {
                    type: "int32",
                    id: 13
                },
                penalty_warning_skip: {
                    type: "string",
                    id: 14
                },
                err_code: {
                    type: "int32",
                    id: 15
                },
                pop_up_dismiss_cta_schema: {
                    type: "string",
                    id: 16
                },
                question_mark_cta_schema: {
                    type: "string",
                    id: 17
                }
            }
        }
    }
    ,
    656651: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                replace_value: {
                    type: "string",
                    id: 1
                },
                value_schema: {
                    type: "string",
                    id: 2
                },
                replace_type: {
                    type: "int32",
                    id: 3
                }
            }
        }
    }
    ,
    298448: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                RECHARGE_UNKNOWN: 0,
                RECHARGE_INVITE: 1,
                RECHARGE_REPLY: 2,
                RECHARGE_GROUP_LIST: 3
            }
        }
    }
    ,
    335130: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                priority: {
                    type: "int64",
                    id: 1
                },
                duration: {
                    type: "int64",
                    id: 2
                },
                recommend_text: {
                    type: "webcast.data.Text",
                    id: 3
                },
                tips_type: {
                    type: "int64",
                    id: 4
                }
            }
        }
    }
    ,
    612255: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                space_red_dot: {
                    type: "int64",
                    id: 1
                },
                user_emote_red_dot: {
                    type: "int64",
                    id: 2
                },
                multi_tier_red_dot: {
                    rule: "repeated",
                    type: "string",
                    id: 3
                }
            }
        }
    }
    ,
    775383: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                RedDotSceneUnknown: 0,
                RedDotSceneGuide: 1,
                RedDotSceneAssets: 2
            }
        }
    }
    ,
    880650: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                red_packet_group_id: {
                    type: "int64",
                    id: 1
                },
                bonus_type: {
                    type: "int64",
                    id: 2
                },
                combo_count: {
                    type: "int64",
                    id: 3
                },
                bonus_count: {
                    type: "int64",
                    id: 4
                },
                count_down: {
                    type: "int64",
                    id: 5
                },
                rush_time: {
                    type: "int64",
                    id: 6
                },
                icon_url: {
                    type: "string",
                    id: 7
                },
                disappear_time: {
                    type: "int64",
                    id: 8
                },
                owner: {
                    type: "webcast.data.User",
                    id: 9
                },
                total_count_down: {
                    type: "int64",
                    id: 10
                },
                red_packet_source: {
                    type: "string",
                    id: 11
                }
            }
        }
    }
    ,
    195337: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                red_packet_group_id: {
                    type: "int64",
                    id: 1
                },
                user_id: {
                    type: "int64",
                    id: 2
                },
                user_name: {
                    type: "string",
                    id: 3
                },
                bonus_count: {
                    type: "int64",
                    id: 4
                },
                bonus_type: {
                    type: "int64",
                    id: 5
                },
                room_id: {
                    type: "int64",
                    id: 6
                },
                im_text: {
                    type: "string",
                    id: 7
                },
                create_time: {
                    type: "int64",
                    id: 8
                }
            }
        }
    }
    ,
    868568: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                refresh_live_bag_types: {
                    rule: "repeated",
                    type: "RefreshLiveBagType",
                    id: 1
                }
            }
        }
    }
    ,
    34516: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                RefreshLiveBagTypeUnknown: 0,
                RefreshLiveBagTypeProductList: 1,
                RefreshLiveBagTypeTab: 2,
                RefreshLiveBagTypePromotionHighlight: 3
            }
        }
    }
    ,
    34991: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                REFRESH_SUB_TYPE_ENUM_DEFAULT_SUB_TYPE: 0,
                REFRESH_SUB_TYPE_ENUM_BACKUP_REFRESH_MSG: 1
            }
        }
    }
    ,
    678401: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                block_list: {
                    rule: "repeated",
                    type: "string",
                    id: 1
                }
            }
        }
    }
    ,
    353717: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                REMINDER_WORD_STATUS_CLOSE: 0,
                REMINDER_WORD_STATUS_OPEN: 1
            }
        }
    }
    ,
    556178: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                REMUX_STATUS_NOT_HIT_AB: 0,
                REMUX_STATUS_NOT_STARTED: 1,
                REMUX_STATUS_PROCESSING: 2,
                REMUX_STATUS_READY: 3,
                REMUX_STATUS_FAILED: 4,
                REMUX_STATUS_UNAVAILABLE: 5
            }
        }
    }
    ,
    971004: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                REPLAY_SHARE_USER_TYPE_UNKNOWN: 0,
                REPLAY_SHARE_USER_TYPE_MODERATOR: 1,
                REPLAY_SHARE_USER_TYPE_GUEST: 2,
                REPLAY_SHARE_USER_TYPE_FRIEND: 3
            }
        }
    }
    ,
    195232: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                REPLAY_VIDEO_POST_SORT_BY_UNKNOWN: 0,
                REPLAY_VIDEO_POST_SORT_BY_VV: 1,
                REPLAY_VIDEO_POST_SORT_BY_POST_TIME: 2
            }
        }
    }
    ,
    540358: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                REPLAY_VIDEO_POST_TIME_FILTER_UNKNOWN: 0,
                REPLAY_VIDEO_POST_TIME_FILTER_LAST_30_DAYS: 1,
                REPLAY_VIDEO_POST_TIME_FILTER_LAST_90_DAYS: 2
            }
        }
    }
    ,
    427227: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                link_type: {
                    type: "int32",
                    id: 1
                },
                is_turn_off_invitation: {
                    type: "int32",
                    id: 2
                },
                reply_user_info: {
                    type: "webcast.data.User",
                    id: 3
                }
            }
        }
    }
    ,
    775608: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                replier: {
                    type: "webcast.data.User",
                    id: 1
                },
                replier_room_id: {
                    type: "int64",
                    id: 2
                },
                reply_status: {
                    type: "webcast.data.ReserveReplyStatus",
                    id: 3
                }
            }
        }
    }
    ,
    392211: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                invitee: {
                    type: "tikcast.linkmic.common.Player",
                    id: 1
                },
                reply_status: {
                    type: "tikcast.linkmic.common.AgreeStatus",
                    id: 2
                },
                invitee_link_mic_id: {
                    type: "string",
                    id: 3
                },
                invitee_pos: {
                    type: "tikcast.linkmic.common.Position",
                    id: 4
                },
                invite_operator_user: {
                    type: "tikcast.linkmic.common.Player",
                    id: 5
                },
                linked_user_ui_positions: {
                    rule: "repeated",
                    type: "string",
                    id: 6
                },
                ui_pos: {
                    rule: "repeated",
                    type: "tikcast.linkmic.common.PosIdentity",
                    id: 7
                }
            }
        }
    }
    ,
    577931: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                REPLY_STATUS_UNKNOWN: 0,
                REPLY_STATUS_AGREE: 1,
                REPLY_STATUS_REFUSE_PERSONALLY: 2,
                REPLY_STATUS_REFUSE_TYPE_NOT_SUPPORT: 3,
                REPLY_STATUS_REFUSE_PROCESSING_INVITATION: 4,
                REPLY_STATUS_REFUSE_BY_TIMEOUT: 5,
                REPLY_STATUS_REFUSE_EXCEPTION: 6,
                REPLY_STATUS_REFUSE_SYSTEM_NOT_SUPPORTED: 7,
                REPLY_STATUS_REFUSE_SUBTYPE_DIFFERENCE: 8,
                REPLY_STATUS_REFUSE_IN_MICROOM: 9,
                REPLY_STATUS_REFUSE_NOT_LOAD_PLUGIN: 10,
                REPLY_STATUS_REFUSE_IN_MULTI_GUEST: 11,
                REPLY_STATUS_REFUSE_PAUSE_LIVE: 12,
                REPLY_STATUS_REFUSE_OPEN_CAMERA_DIALOG_SHOWING: 13,
                REPLY_STATUS_REFUSE_DRAW_GUESSING: 14,
                REPLY_STATUS_REFUSE_RANDOM_MATCHING: 15,
                REPLY_STATUS_REFUSE_IN_MATCH_PROCESSING: 16,
                REPLY_STATUS_REFUSE_IN_MICROOM_FOR_MULTI_COHOST: 17,
                REPLY_STATUS_REFUSE_COHOST_FINISHED: 18,
                REPLY_STATUS_REFUSE_NOT_CONNECTED: 19,
                REPLY_STATUS_REFUSE_LINKMIC_FULL: 20,
                REPLY_STATUS_REFUSE_ARC_INCOMPATIBLE: 21,
                REPLY_STATUS_REFUSE_PROCESSING_OTHER_INVITE: 22,
                REPLY_STATUS_REFUSE_PROCESSING_OTHER_APPLY: 23,
                REPLY_STATUS_REFUSE_IN_ANCHOR_COHOST: 24,
                REPLY_STATUS_REFUSE_TOPIC_PAIRING: 25,
                REPLY_STATUS_REFUSE_POSITION_CONFLICT: 26,
                REPLY_STATUS_REFUSE_CONFLICT_QUICK_COHOST: 27,
                REPLY_STATUS_REFUSE_IN_TAKE_STAGE_PROCESSING: 28
            }
        }
    }
    ,
    470707: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                REPORT_SCENE_TYPE_UNKNOWN: 0,
                REPORT_SCENE_TYPE_LS_ANCHOR_TASK: 1,
                REPORT_SCENE_TYPE_GUESS_TASK: 2
            }
        }
    }
    ,
    840974: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                show_tag: {
                    type: "bool",
                    id: 1
                },
                reposters_token: {
                    type: "string",
                    id: 2
                },
                reposters_cnt: {
                    type: "int64",
                    id: 3
                }
            }
        }
    }
    ,
    431127: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                is_from_homescreen: {
                    type: "bool",
                    id: 1
                }
            }
        }
    }
    ,
    929094: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                scene: {
                    type: "PathScene",
                    id: 1
                },
                dispersion_param: {
                    type: "DispersionParam",
                    id: 2
                }
            }
        }
    }
    ,
    824196: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                song: {
                    type: "webcast.data.KaraokeSong",
                    id: 1
                },
                user_list: {
                    rule: "repeated",
                    type: "webcast.data.User",
                    id: 2
                },
                req_count: {
                    type: "int64",
                    id: 3
                }
            }
        }
    }
    ,
    519277: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                REQUEST_USERSTATUS_UNKOWN: 0,
                REQUEST_USERSTATUS_UNLINKED: 1,
                REQUEST_USERSTATUS_WAITING: 2,
                REQUEST_USERSTATUS_READY: 3,
                REQUEST_USERSTATUS_LINKED: 4
            }
        }
    }
    ,
    122775: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                appointment_id: {
                    type: "int64",
                    id: 1
                },
                anchor_id: {
                    type: "int64",
                    id: 2
                },
                room_id: {
                    type: "int64",
                    id: 3
                },
                start_time: {
                    type: "int64",
                    id: 4
                },
                end_time: {
                    type: "int64",
                    id: 5
                },
                btn_rect: {
                    rule: "repeated",
                    type: "int64",
                    id: 6
                },
                btn_color: {
                    type: "string",
                    id: 7
                },
                is_reserved: {
                    type: "bool",
                    id: 8
                }
            }
        }
    }
    ,
    371416: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                reserver: {
                    type: "webcast.data.User",
                    id: 1
                },
                reserver_room_id: {
                    type: "int64",
                    id: 2
                },
                red_dot_num: {
                    type: "int64",
                    id: 3
                },
                created_timestamp: {
                    type: "int64",
                    id: 4
                },
                reservation_anchor_count: {
                    type: "int64",
                    id: 5
                }
            }
        }
    }
    ,
    487215: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                ReserveReplyStatusUnknown: 0,
                ReserveReplyStatusWaitForMe: 1
            }
        }
    }
    ,
    532907: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                RESERVE_STATUS_NOT_RESERVE: 0,
                RESERVE_STATUS_RESERVED: 1
            }
        }
    }
    ,
    517765: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                ReserveType_Unknown: 0,
                ReserveType_Reserve: 1,
                ReserveType_Reply: 2
            }
        }
    }
    ,
    876710: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                user: {
                    type: "webcast.data.User",
                    id: 1
                },
                room_id: {
                    type: "int64",
                    id: 2
                }
            }
        }
    }
    ,
    72430: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                resource_location: {
                    type: "ResourceLocation",
                    id: 1
                },
                gecko_attr: {
                    type: "GeckoAttr",
                    id: 2
                }
            }
        }
    }
    ,
    609358: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                RESOURCE_LOCATION_UNKNOWN: 0,
                RESOURCE_LOCATION_GECKO: 1
            }
        }
    }
    ,
    539037: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                REWARD_CONDITION_SUBSCRIPTION: 0,
                REWARD_CONDITION_SUB_WAVE_CUSTOM: 1
            }
        }
    }
    ,
    581520: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                REWARD_STATUS_UNKNOWN: 0,
                REWARD_STATUS_CAN_NOT_RECEIVE: 1,
                REWARD_STATUS_CAN_RECEIVE: 2,
                REWARD_STATUS_HAVE_RECEIVED: 3
            }
        }
    }
    ,
    534658: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                content_type: {
                    type: "RichContentType",
                    id: 1
                },
                content_value: {
                    type: "string",
                    id: 2
                },
                extra: {
                    type: "RichContentExtra",
                    id: 3
                }
            }
        }
    }
    ,
    164734: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                url: {
                    type: "string",
                    id: 1
                }
            }
        }
    }
    ,
    411370: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                RICH_CONTENT_TYPE_UNSET: 0,
                RICH_CONTENT_TYPE_TEXT: 1,
                RICH_CONTENT_TYPE_TITLE: 2,
                RICH_CONTENT_TYPE_LINK: 3,
                RICH_CONTENT_TYPE_NEWLINE: 4,
                RICH_CONTENT_TYPE_BOLD: 5
            }
        }
    }
    ,
    698231: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                text: {
                    type: "string",
                    id: 1
                },
                text_type: {
                    type: "TextType",
                    id: 2
                },
                label: {
                    type: "string",
                    id: 3
                },
                anchor_layer: {
                    type: "AnchorLayer",
                    id: 4
                },
                linker_info: {
                    type: "LinkerInfo",
                    id: 5
                },
                linkmic_user_settings: {
                    type: "webcast.data.AnchorLinkmicUserSettings",
                    id: 6
                },
                battle_user_settings: {
                    type: "webcast.data.BattleUserSettings",
                    id: 7
                },
                invite_block_reason: {
                    type: "InviteBlockReason",
                    id: 8
                },
                show_play_type: {
                    type: "LinkmicPlayType",
                    id: 9
                },
                top_host_info: {
                    type: "TopHostInfo",
                    id: 10
                },
                tag: {
                    type: "Tag",
                    id: 11
                },
                reserve_info: {
                    type: "ReserveInfo",
                    id: 12
                },
                detail_block_reason: {
                    type: "DetailBlockReason",
                    id: 13
                },
                opt_pair_info: {
                    type: "OptPairInfo",
                    id: 14
                },
                tag_v2: {
                    type: "TagV2",
                    id: 15
                },
                eoy_level: {
                    type: "int64",
                    id: 16
                },
                battle_info: {
                    type: "BattleInfo",
                    id: 17
                },
                cohost_layout_mode: {
                    type: "CohostLayoutMode",
                    id: 18
                },
                game_tag: {
                    type: "RivalsGameTag",
                    id: 19
                }
            },
            nested: {
                TextType: {
                    values: {
                        TextTypeUnknown: 0,
                        CurRoomFanTicket: 1,
                        TotalDiamondCount: 2,
                        Distance: 3,
                        DistanceCity: 4
                    }
                },
                AnchorLayer: {
                    values: {
                        AnchorLayerUnknown: 0,
                        AnchorLayerTop: 1,
                        AnchorLayerSMALL: 2
                    }
                },
                LinkerInfo: {
                    fields: {
                        linked_users: {
                            rule: "repeated",
                            type: "UserInfo",
                            id: 1
                        },
                        in_quick_pairing: {
                            type: "bool",
                            id: 2
                        }
                    },
                    nested: {
                        UserInfo: {
                            fields: {
                                user_id: {
                                    type: "int64",
                                    id: 1
                                },
                                nick_name: {
                                    type: "string",
                                    id: 2
                                },
                                avatar_thumb: {
                                    type: "webcast.data.Image",
                                    id: 3
                                }
                            }
                        }
                    }
                },
                InviteBlockReason: {
                    values: {
                        None: 0,
                        IsLinking: 1,
                        InvitationDenied: 2,
                        PermissionDenied: 3,
                        LowClientVersion: 4,
                        RoomPaused: 5,
                        LinkmicFull: 6,
                        MatureThemeNotMatch: 7,
                        ReserveFull: 8,
                        RegionalBlock: 9
                    }
                },
                ReserveInfo: {
                    fields: {
                        reservation_id: {
                            type: "int64",
                            id: 1
                        },
                        reply_status: {
                            type: "ReserveReplyStatus",
                            id: 2
                        },
                        bubble_tip: {
                            type: "string",
                            id: 3
                        },
                        response_time: {
                            type: "int64",
                            id: 4
                        },
                        is_reservation_sender: {
                            type: "bool",
                            id: 5
                        },
                        created_timestamp: {
                            type: "int64",
                            id: 6
                        },
                        viewed: {
                            type: "bool",
                            id: 7
                        }
                    }
                },
                BattleInfo: {
                    fields: {
                        info_type: {
                            type: "BattleInfoType",
                            id: 1
                        },
                        value: {
                            type: "int64",
                            id: 2
                        }
                    },
                    nested: {
                        BattleInfoType: {
                            values: {
                                BATTLE_INFO_TYPE_NONE: 0,
                                BATTLE_INFO_TYPE_AVERAGE_SCORE: 1,
                                BATTLE_INFO_TYPE_MAX_SCORE: 2,
                                BATTLE_INFO_TYPE_LAST_SCORE: 3,
                                BATTLE_INFO_TYPE_WIN_STREAK: 4
                            }
                        }
                    }
                }
            }
        }
    }
    ,
    471032: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                tag_id: {
                    type: "int64",
                    id: 1
                },
                tag_display_text: {
                    type: "string",
                    id: 2
                }
            }
        }
    }
    ,
    779150: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                weight: {
                    type: "int64",
                    id: 1
                },
                duration: {
                    type: "int64",
                    id: 2
                }
            }
        }
    }
    ,
    209734: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                id: {
                    type: "int64",
                    id: 1
                },
                id_str: {
                    type: "string",
                    id: 2
                },
                status: {
                    type: "int64",
                    id: 3
                },
                owner_user_id: {
                    type: "int64",
                    id: 4
                },
                title: {
                    type: "string",
                    id: 5
                },
                user_count: {
                    type: "int64",
                    id: 6
                },
                create_time: {
                    type: "int64",
                    id: 7
                },
                linkmic_layout: {
                    type: "int64",
                    id: 8
                },
                finish_time: {
                    type: "int64",
                    id: 9
                },
                deprecated1: {
                    type: "RoomExtra",
                    id: 10
                },
                deprecated2: {
                    type: "string",
                    id: 11
                },
                deprecated3: {
                    keyType: "int64",
                    type: "string",
                    id: 12
                },
                last_ping_time: {
                    type: "int64",
                    id: 13
                },
                live_id: {
                    type: "int64",
                    id: 14
                },
                deprecated4: {
                    type: "int64",
                    id: 15
                },
                os_type: {
                    type: "int64",
                    id: 16
                },
                client_version: {
                    type: "int64",
                    id: 17
                },
                with_linkmic: {
                    type: "bool",
                    id: 18
                },
                deprecated5: {
                    type: "bool",
                    id: 19
                },
                cover: {
                    type: "webcast.data.Image",
                    id: 20
                },
                dynamic_cover: {
                    type: "webcast.data.Image",
                    id: 21
                },
                dynamic_cover_low: {
                    type: "webcast.data.Image",
                    id: 22
                },
                share_url: {
                    type: "string",
                    id: 23
                },
                anchor_share_text: {
                    type: "string",
                    id: 24
                },
                user_share_text: {
                    type: "string",
                    id: 25
                },
                stream_id: {
                    type: "int64",
                    id: 26
                },
                stream_id_str: {
                    type: "string",
                    id: 27
                },
                stream_url: {
                    type: "StreamUrl",
                    id: 28
                },
                mosaic_status: {
                    type: "int64",
                    id: 29
                },
                deprecated6: {
                    type: "string",
                    id: 30
                },
                deprecated7: {
                    type: "int64",
                    id: 31
                },
                link_mic: {
                    type: "LinkMic",
                    id: 32
                },
                deprecated41: {
                    type: "int64",
                    id: 33
                },
                deco_list: {
                    rule: "repeated",
                    type: "webcast.data.Decoration",
                    id: 34
                },
                top_fans: {
                    rule: "repeated",
                    type: "TopFan",
                    id: 35
                },
                stats: {
                    type: "RoomStats",
                    id: 36
                },
                deprecated8: {
                    type: "string",
                    id: 37
                },
                deprecated9: {
                    type: "string",
                    id: 38
                },
                deprecated10: {
                    type: "string",
                    id: 39
                },
                deprecated11: {
                    type: "string",
                    id: 40
                },
                deprecated12: {
                    type: "string",
                    id: 41
                },
                feed_room_label: {
                    type: "webcast.data.Image",
                    id: 42
                },
                common_label_list: {
                    type: "string",
                    id: 43
                },
                living_room_attrs: {
                    type: "RoomUserAttr",
                    id: 44
                },
                admin_user_ids: {
                    rule: "repeated",
                    type: "int64",
                    id: 45
                },
                owner: {
                    type: "webcast.data.User",
                    id: 46
                },
                deprecated13: {
                    type: "string",
                    id: 47
                },
                has_commerce_goods: {
                    type: "bool",
                    id: 48
                },
                live_type_normal: {
                    type: "bool",
                    id: 49
                },
                live_type_linkmic: {
                    type: "bool",
                    id: 50
                },
                live_type_audio: {
                    type: "bool",
                    id: 51
                },
                live_type_third_party: {
                    type: "bool",
                    id: 52
                },
                live_type_screenshot: {
                    type: "bool",
                    id: 53
                },
                live_type_sandbox: {
                    type: "bool",
                    id: 54
                },
                deprecated43: {
                    type: "bool",
                    id: 55
                },
                deprecated14: {
                    type: "int64",
                    id: 59
                },
                deprecated15: {
                    type: "int64",
                    id: 60
                },
                deprecated16: {
                    type: "int64",
                    id: 61
                },
                deprecated17: {
                    rule: "repeated",
                    type: "int64",
                    id: 62
                },
                start_time: {
                    type: "int64",
                    id: 63
                },
                deprecated18: {
                    type: "int64",
                    id: 64
                },
                deprecated19: {
                    type: "string",
                    id: 65
                },
                deprecated20: {
                    type: "int64",
                    id: 66
                },
                deprecated21: {
                    type: "bool",
                    id: 68
                },
                deprecated22: {
                    type: "int64",
                    id: 69
                },
                deprecated23: {
                    type: "string",
                    id: 70
                },
                deprecated24: {
                    type: "int64",
                    id: 71
                },
                room_auth: {
                    type: "RoomAuthStatus",
                    id: 72
                },
                room_tabs: {
                    rule: "repeated",
                    type: "RoomTab",
                    id: 73
                },
                introduction: {
                    type: "string",
                    id: 74
                },
                burst: {
                    type: "BurstInfo",
                    id: 75
                },
                deprecated25: {
                    type: "RoomHealthScoreInfo",
                    id: 76
                },
                is_replay: {
                    type: "bool",
                    id: 77
                },
                deprecated26: {
                    type: "string",
                    id: 78
                },
                group_source: {
                    type: "int64",
                    id: 79
                },
                lottery_finish_time: {
                    type: "int64",
                    id: 80
                },
                deprecated27: {
                    type: "RoomActivityTag",
                    id: 81
                },
                portrait_cover: {
                    type: "data.Image",
                    id: 82
                },
                background: {
                    type: "data.Image",
                    id: 83
                },
                layout: {
                    type: "int64",
                    id: 84
                },
                deprecated28: {
                    type: "string",
                    id: 85
                },
                deprecated29: {
                    type: "data.Image",
                    id: 86
                },
                deprecated30: {
                    type: "string",
                    id: 87
                },
                deprecated31: {
                    type: "bool",
                    id: 88
                },
                deprecated42: {
                    type: "DeprecatedStruct5",
                    id: 89
                },
                use_filter: {
                    type: "bool",
                    id: 90
                },
                gift_msg_style: {
                    type: "int64",
                    id: 91
                },
                deprecated32: {
                    type: "string",
                    id: 92
                },
                finish_url: {
                    type: "string",
                    id: 93
                },
                deprecated33: {
                    type: "webcast.data.OfficialRoomInfo",
                    id: 94
                },
                is_show_user_card_switch: {
                    type: "bool",
                    id: 95
                },
                video_feed_tag: {
                    type: "string",
                    id: 96
                },
                forum_extra_data: {
                    type: "string",
                    id: 97
                },
                fansclub_msg_style: {
                    type: "int64",
                    id: 98
                },
                follow_msg_style: {
                    type: "int64",
                    id: 99
                },
                share_msg_style: {
                    type: "int64",
                    id: 100
                },
                room_layout: {
                    type: "int64",
                    id: 101
                },
                short_title: {
                    type: "string",
                    id: 102
                },
                short_touch_area_config: {
                    type: "RoomShortTouchAreaConfig",
                    id: 103
                },
                book_time: {
                    type: "int64",
                    id: 104
                },
                book_end_time: {
                    type: "int64",
                    id: 105
                },
                room_audit_status: {
                    type: "int64",
                    id: 106
                },
                live_distribution: {
                    rule: "repeated",
                    type: "int64",
                    id: 107
                },
                deprecated34: {
                    type: "TVStation",
                    id: 108
                },
                replay: {
                    type: "bool",
                    id: 109
                },
                challenge_info: {
                    type: "string",
                    id: 110
                },
                like_count: {
                    type: "int64",
                    id: 111
                },
                search_id: {
                    type: "int64",
                    id: 112
                },
                anchor_scheduled_time_text: {
                    type: "string",
                    id: 113
                },
                hot_sentence_info: {
                    type: "string",
                    id: 114
                },
                deprecated35: {
                    type: "int64",
                    id: 115
                },
                deprecated36: {
                    type: "int64",
                    id: 116
                },
                content_tag: {
                    type: "string",
                    id: 117
                },
                content_label: {
                    type: "data.Image",
                    id: 118
                },
                operation_label: {
                    type: "data.Image",
                    id: 119
                },
                anchor_tab_type: {
                    type: "int32",
                    id: 120
                },
                deprecated37: {
                    type: "DeprecatedStruct3",
                    id: 121
                },
                official_channel: {
                    type: "OfficialChannelInfo",
                    id: 122
                },
                deprecated39: {
                    type: "string",
                    id: 123
                },
                comment_box: {
                    type: "CommentBox",
                    id: 124
                },
                business_live: {
                    type: "int32",
                    id: 125
                },
                with_ktv: {
                    type: "bool",
                    id: 126
                },
                with_draw_something: {
                    type: "bool",
                    id: 127
                },
                webcast_comment_tcs: {
                    type: "int64",
                    id: 128
                },
                room_tag: {
                    type: "int64",
                    id: 129
                },
                linker_map: {
                    keyType: "string",
                    type: "int64",
                    id: 130
                },
                finish_reason: {
                    type: "int32",
                    id: 131
                },
                deprecated40: {
                    type: "DeprecatedStruct4",
                    id: 132
                },
                scroll_config: {
                    type: "string",
                    id: 133
                },
                relation_tag: {
                    type: "string",
                    id: 134
                },
                owner_device_id: {
                    type: "int64",
                    id: 135
                },
                auto_cover: {
                    type: "int64",
                    id: 136
                },
                app_id: {
                    type: "int64",
                    id: 137
                },
                webcast_sdk_version: {
                    type: "int64",
                    id: 138
                },
                comment_name_mode: {
                    type: "int64",
                    id: 139
                },
                room_create_ab_param: {
                    type: "string",
                    id: 140
                },
                pre_enter_time: {
                    type: "int64",
                    id: 141
                },
                ranklist_audience_type: {
                    type: "int64",
                    id: 142
                },
                preview_flow_tag: {
                    type: "int64",
                    id: 143
                },
                preview_tag_url: {
                    type: "webcast.data.Image",
                    id: 144
                },
                commerce_info: {
                    type: "CommerceStruct",
                    id: 145
                },
                AnchorABMap: {
                    keyType: "string",
                    type: "string",
                    id: 146
                },
                stream_cover: {
                    type: "webcast.data.Image",
                    id: 147
                },
                disable_preload_stream: {
                    type: "bool",
                    id: 148
                },
                interaction_question_version: {
                    type: "int32",
                    id: 149
                },
                is_gated_room: {
                    type: "bool",
                    id: 150
                },
                live_event_info: {
                    type: "webcast.data.LiveEventInfo",
                    id: 151
                },
                hashtag: {
                    type: "webcast.data.Hashtag",
                    id: 152
                },
                ba_link_info: {
                    type: "BALinkStruct",
                    id: 153
                },
                deprecated44: {
                    type: "int32",
                    id: 154
                },
                answering_question_content: {
                    type: "string",
                    id: 155
                },
                live_type_social_live: {
                    type: "bool",
                    id: 156
                },
                warning_tag: {
                    type: "WarningTag",
                    id: 157
                },
                mask_layer: {
                    type: "MaskLayer",
                    id: 158
                },
                live_room_mode: {
                    type: "int32",
                    id: 159
                },
                owner_device_id_str: {
                    type: "string",
                    id: 160
                },
                owner_user_id_str: {
                    type: "string",
                    id: 161
                },
                lineup_room: {
                    type: "LineupRoomInfo",
                    id: 162
                },
                finish_url_v2: {
                    type: "string",
                    id: 163
                },
                live_reason: {
                    type: "string",
                    id: 164
                },
                like_info: {
                    type: "LikeInfo",
                    id: 165
                },
                short_touch_items: {
                    rule: "repeated",
                    type: "ShortTouchItem",
                    id: 166
                },
                filter_msg_rules: {
                    rule: "repeated",
                    type: "FilterMsgRule",
                    id: 167
                },
                sticker_list: {
                    rule: "repeated",
                    type: "webcast.data.Decoration",
                    id: 168
                },
                boost_status: {
                    type: "BoostStatus",
                    id: 169
                },
                feed_room_labels: {
                    rule: "repeated",
                    type: "FeedRoomLabel",
                    id: 170
                },
                stream_url_filtered_info: {
                    type: "StreamURLFilteredInfo",
                    id: 171
                },
                have_wishlist: {
                    type: "bool",
                    id: 172
                },
                fyp_room_tags: {
                    type: "FYPRoomTag",
                    id: 173
                },
                social_interaction: {
                    type: "webcast.data.SocialInteraction",
                    id: 174
                },
                poll_info: {
                    type: "webcast.data.PollInfo",
                    id: 175
                },
                interaction_question: {
                    type: "InteractionQuestionInfo",
                    id: 176
                },
                room_sticker_list: {
                    rule: "repeated",
                    type: "webcast.data.RoomSticker",
                    id: 177
                },
                game_tag: {
                    rule: "repeated",
                    type: "webcast.data.GameTag",
                    id: 178
                },
                advanced_poll_info: {
                    type: "webcast.data.PollInfo",
                    id: 179
                },
                gift_poll_vote_enabled: {
                    type: "bool",
                    id: 180
                },
                share_show_time: {
                    type: "ShareShowTime",
                    id: 181
                },
                skin: {
                    type: "Skin",
                    id: 182
                },
                square_cover_img: {
                    type: "webcast.data.Image",
                    id: 183
                },
                rectangle_cover_img: {
                    type: "webcast.data.Image",
                    id: 184
                },
                room_auth_message: {
                    type: "RoomAuthMsg",
                    id: 185
                },
                paid_event: {
                    type: "webcast.data.PaidEvent",
                    id: 186
                },
                pictionary_info: {
                    type: "webcast.data.PictionaryFullInfo",
                    id: 187
                },
                existed_commerce_goods: {
                    type: "bool",
                    id: 188
                },
                age_restricted: {
                    type: "AgeRestricted",
                    id: 189
                },
                perception_info: {
                    type: "PerceptionInfo",
                    id: 190
                },
                pin_info: {
                    type: "PinInfo",
                    id: 191
                },
                indicators: {
                    rule: "repeated",
                    type: "string",
                    id: 192
                },
                top_frame_summary: {
                    type: "TopFrameSummary",
                    id: 193
                },
                bc_toggle_info: {
                    type: "BCToggleInfo",
                    id: 194
                },
                deprecated195: {
                    type: "bool",
                    id: 195
                },
                comment_has_text_emoji_emote: {
                    type: "int64",
                    id: 196
                },
                partnership_info: {
                    type: "PartnershipInfo",
                    id: 197
                },
                stream_status: {
                    type: "int64",
                    id: 198
                },
                creator: {
                    type: "webcast.data.Creator",
                    id: 199
                },
                drawer_tab_position: {
                    type: "string",
                    id: 200
                },
                ba_leads_gen_info: {
                    type: "BaLeadsGenInfo",
                    id: 201
                },
                effect_info: {
                    rule: "repeated",
                    type: "EffectInfo",
                    id: 202
                },
                audio_mute: {
                    type: "int32",
                    id: 203
                },
                live_event_card: {
                    type: "webcast.data.EventCard",
                    id: 204
                },
                live_sub_only: {
                    type: "int64",
                    id: 205
                },
                support_quiz: {
                    type: "int64",
                    id: 206
                },
                admin_ec_show_permission: {
                    keyType: "int64",
                    type: "int64",
                    id: 207
                },
                blurred_cover: {
                    type: "webcast.data.Image",
                    id: 208
                },
                caption_info: {
                    type: "CaptionInfo",
                    id: 209
                },
                adjust_display_order: {
                    type: "int64",
                    id: 210
                },
                commerce_info_backup: {
                    type: "CommerceStruct",
                    id: 211
                },
                allow_preview_time: {
                    type: "int64",
                    id: 212
                },
                paid_content_info: {
                    type: "PaidContentInfo",
                    id: 213
                },
                sub_pin_card: {
                    type: "webcast.data.SubPinCard",
                    id: 214
                },
                enable_server_drop: {
                    type: "int64",
                    id: 215
                },
                disable_preview_sub_only: {
                    type: "int64",
                    id: 216
                },
                lite_user_visible: {
                    type: "bool",
                    id: 217
                },
                lite_user_not_visible: {
                    type: "bool",
                    id: 218
                },
                drop_comment_group: {
                    type: "int64",
                    id: 219
                },
                pico_live_type: {
                    type: "int32",
                    id: 220
                },
                gift_suspension: {
                    type: "GiftSuspension",
                    id: 221
                },
                polling_star_comment: {
                    type: "bool",
                    id: 222
                },
                has_used_music: {
                    type: "bool",
                    id: 223
                },
                anchor_live_pro_info: {
                    type: "LiveProInfo",
                    id: 224
                },
                rank_comment_groups: {
                    rule: "repeated",
                    type: "string",
                    id: 225
                },
                multi_stream_scene: {
                    type: "int64",
                    id: 226
                },
                multi_stream_id: {
                    type: "int64",
                    id: 227
                },
                multi_stream_id_str: {
                    type: "string",
                    id: 228
                },
                multi_stream_url: {
                    type: "StreamUrl",
                    id: 229
                },
                idc_region: {
                    type: "string",
                    id: 230
                },
                regional_restricted: {
                    type: "RegionalRestricted",
                    id: 231
                },
                commercial_content_toggle: {
                    type: "CommercialContentToggle",
                    id: 232
                },
                max_preview_time: {
                    type: "int64",
                    id: 233
                },
                karaoke_info: {
                    type: "KaraokeInfo",
                    id: 234
                },
                star_comment_config: {
                    type: "webcast.data.StarCommentConfig",
                    id: 235
                },
                show_star_comment_entrance: {
                    type: "bool",
                    id: 236
                },
                cpp_version: {
                    type: "webcast.data.CppVersion",
                    id: 237
                },
                live_sub_only_use_music: {
                    type: "int64",
                    id: 238
                },
                like_effect: {
                    type: "LikeEffect",
                    id: 239
                },
                room_pcu: {
                    type: "int64",
                    id: 240
                },
                fyp_commerce_info: {
                    type: "FYPCommerceStruct",
                    id: 241
                },
                net_mode: {
                    type: "int64",
                    id: 242
                },
                rtc_app_id: {
                    type: "string",
                    id: 245
                },
                game_demo: {
                    type: "int64",
                    id: 246
                },
                quick_gift: {
                    type: "QuickGift",
                    id: 247
                },
                online_audience: {
                    type: "OnlineAudience",
                    id: 248
                },
                history_comment_list: {
                    rule: "repeated",
                    type: "webcast.im.Message",
                    id: 249
                },
                has_more_history_comment: {
                    type: "bool",
                    id: 250
                },
                history_comment_cursor: {
                    type: "string",
                    id: 251
                },
                commercial_welcome_message: {
                    type: "webcast.im.Message",
                    id: 252
                },
                like_icon_info: {
                    type: "LikeIconInfo",
                    id: 253
                },
                guess_widgets: {
                    type: "webcast.data.GuessWidgets",
                    id: 254
                },
                guess_task_pack_info: {
                    type: "webcast.data.GuessTaskPackInfo",
                    id: 255
                },
                current_interaction_question: {
                    type: "CurrentInteractionQuestion",
                    id: 256
                },
                poll_conf: {
                    type: "PollConf",
                    id: 257
                },
                decisions: {
                    type: "EpiphronDecision",
                    id: 258
                },
                aggregation_data: {
                    type: "AggregationData",
                    id: 259
                },
                play_together_info: {
                    type: "webcast.data.PlayTogetherBasicInfo",
                    id: 260
                },
                multi_stream_source: {
                    type: "MultiStreamSourceEnum",
                    id: 261
                },
                highlight_fragment_info: {
                    type: "HighlightFragmentInfo",
                    id: 262
                },
                quota_config: {
                    keyType: "int64",
                    type: "MsgNotifyQuota",
                    id: 263
                },
                live_record_config: {
                    type: "LiveRecordConfig",
                    id: 264
                },
                effect_frame_upload_demotion: {
                    type: "int64",
                    id: 265
                },
                sub_upsell_info: {
                    type: "SubUpsellInfo",
                    id: 266
                },
                cover_type: {
                    type: "int64",
                    id: 267
                },
                reposted: {
                    type: "bool",
                    id: 268
                },
                repost_info: {
                    type: "RepostInfo",
                    id: 269
                },
                drops_info: {
                    type: "webcast.data.DropsRoomInfo",
                    id: 270
                },
                enable_stream_encryption: {
                    type: "bool",
                    id: 271
                },
                disable_screen_record: {
                    type: "bool",
                    id: 272
                },
                game_tag_detail: {
                    type: "webcast.data.GameTagDetail",
                    id: 273
                },
                enable_optimize_sensitive_word: {
                    type: "bool",
                    id: 274
                },
                custom_tab_info: {
                    type: "CustomTabInfo",
                    id: 275
                },
                room_llm_title: {
                    type: "string",
                    id: 276
                },
                game_emotes_tab: {
                    type: "webcast.data.GameEmotesTab",
                    id: 277
                },
                official_channel_bc_toggle_info: {
                    type: "BCToggleInfo",
                    id: 280
                },
                official_channel_anchor_live_pro_info: {
                    type: "LiveProInfo",
                    id: 281
                },
                preview_comment_info: {
                    type: "webcast.data.PreviewCommentInfo",
                    id: 282
                },
                ec_age_interval: {
                    type: "AgeIntervalEnum",
                    id: 283
                },
                taxonomy_tag_info: {
                    type: "TaxonomyTagInfo",
                    id: 284
                },
                sub_tag: {
                    type: "int64",
                    id: 285
                },
                live_sub_only_tier: {
                    type: "int64",
                    id: 286
                },
                live_sub_only_month: {
                    type: "int64",
                    id: 287
                },
                avoid_config: {
                    type: "MsgNotifyComAvoidConfig",
                    id: 288
                },
                aigc_self_disclosure_switch: {
                    type: "bool",
                    id: 289
                },
                ecommerce_room_tags: {
                    rule: "repeated",
                    type: "EcommerceRoomTag",
                    id: 290
                },
                group_live_info: {
                    type: "GroupLiveInfo",
                    id: 291
                },
                group_live_session: {
                    type: "GroupLiveSession",
                    id: 292
                },
                watch_early_quota_config: {
                    keyType: "int64",
                    type: "MsgNotifyWatchEarlyQuota",
                    id: 293
                },
                continuous_room_quota_config: {
                    keyType: "int64",
                    type: "MsgNotifyWatchContinuousQuota",
                    id: 294
                },
                max_continue_watch_mill_seconds: {
                    type: "int64",
                    id: 295
                },
                ai_live_summary: {
                    type: "AILiveSummary",
                    id: 296
                },
                parallel_pull_stream_info: {
                    type: "ParallelPullStreamInfo",
                    id: 297
                },
                game_gift_guide_config: {
                    type: "GameGiftGuideKeywordsConfig",
                    id: 298
                },
                biz_sticker_list: {
                    rule: "repeated",
                    type: "webcast.data.RoomSticker",
                    id: 299
                }
            }
        }
    }
    ,
    639611: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                activity_type: {
                    type: "TagType",
                    id: 1
                },
                name: {
                    type: "string",
                    id: 2
                },
                url: {
                    type: "string",
                    id: 3
                },
                extra: {
                    type: "string",
                    id: 4
                },
                icon: {
                    type: "data.Image",
                    id: 5
                }
            },
            nested: {
                TagType: {
                    values: {
                        XiguaPlay: 0,
                        OperationTag: 1,
                        Lottery: 2,
                        Quiz: 3,
                        CategoryType: 4,
                        PureImage: 5
                    }
                }
            }
        }
    }
    ,
    603380: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                room_pack_succ_flag: {
                    type: "bool",
                    id: 1
                },
                permission_info: {
                    type: "MultiGuestPermissionInfo",
                    id: 2
                }
            }
        }
    }
    ,
    279009: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                show_user_card: {
                    type: "bool",
                    id: 2
                }
            }
        }
    }
    ,
    415343: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                golden_envelope_message: {
                    type: "GoldenEnvelopeMessage",
                    id: 1
                },
                promote_other_message: {
                    type: "PromoteOtherMessage",
                    id: 2
                }
            }
        }
    }
    ,
    780746: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                Chat: {
                    type: "bool",
                    id: 1
                },
                Danmaku: {
                    type: "bool",
                    id: 2
                },
                Gift: {
                    type: "bool",
                    id: 3
                },
                LuckMoney: {
                    type: "bool",
                    id: 4
                },
                Digg: {
                    type: "bool",
                    id: 5
                },
                RoomContributor: {
                    type: "bool",
                    id: 7
                },
                Props: {
                    type: "bool",
                    id: 8
                },
                UserCard: {
                    type: "bool",
                    id: 9
                },
                deprecated1: {
                    type: "bool",
                    id: 10
                },
                deprecated2: {
                    type: "int64",
                    id: 11
                },
                Banner: {
                    type: "int64",
                    id: 12
                },
                deprecated3: {
                    type: "int64",
                    id: 13
                },
                deprecated4: {
                    type: "int64",
                    id: 14
                },
                Landscape: {
                    type: "int64",
                    id: 15
                },
                LandscapeChat: {
                    type: "int64",
                    id: 16
                },
                PublicScreen: {
                    type: "int64",
                    id: 17
                },
                GiftAnchorMt: {
                    type: "int64",
                    id: 18
                },
                deprecated5: {
                    type: "int64",
                    id: 19
                },
                DonationSticker: {
                    type: "int64",
                    id: 20
                },
                deprecated6: {
                    type: "int64",
                    id: 21
                },
                deprecated7: {
                    type: "int64",
                    id: 22
                },
                deprecated8: {
                    type: "int64",
                    id: 23
                },
                deprecated9: {
                    type: "int64",
                    id: 24
                },
                InteractionQuestion: {
                    type: "bool",
                    id: 25
                },
                ChatL2: {
                    type: "bool",
                    id: 26
                },
                Viewers: {
                    type: "bool",
                    id: 27
                },
                Share: {
                    type: "bool",
                    id: 28
                },
                transaction_history: {
                    type: "int32",
                    id: 29
                },
                Promote: {
                    type: "bool",
                    id: 30
                },
                UserCount: {
                    type: "int64",
                    id: 31
                },
                Rank: {
                    type: "int64",
                    id: 32
                },
                BroadcastMessage: {
                    type: "int64",
                    id: 33
                },
                ChatSubOnly: {
                    type: "bool",
                    id: 34
                },
                GoldenEnvelope: {
                    type: "int64",
                    id: 35
                },
                QuickChat: {
                    type: "int64",
                    id: 36
                },
                Poll: {
                    type: "int64",
                    id: 37
                },
                GiftPoll: {
                    type: "int64",
                    id: 38
                },
                ShareEffect: {
                    type: "ShareEffectTarget",
                    id: 39
                },
                Pictionary: {
                    type: "int64",
                    id: 40
                },
                GoldenEnvelopeActivity: {
                    type: "int64",
                    id: 41
                },
                CustomizablePoll: {
                    type: "int64",
                    id: 42
                },
                OffReason: {
                    type: "RoomAuthOffReasons",
                    id: 100
                },
                use_user_pv: {
                    type: "bool",
                    id: 101
                },
                PromoteOther: {
                    type: "int64",
                    id: 102
                },
                ShoppingRanking: {
                    type: "int32",
                    id: 103
                },
                CommercePermission: {
                    type: "int32",
                    id: 104
                },
                EventPromotion: {
                    type: "int32",
                    id: 105
                },
                CommunityFlagged: {
                    type: "bool",
                    id: 106
                },
                CommunityFlaggedReview: {
                    type: "bool",
                    id: 107
                },
                Explore: {
                    type: "bool",
                    id: 108
                },
                PictionaryPermission: {
                    type: "int64",
                    id: 109
                },
                PictionaryBubble: {
                    type: "int64",
                    id: 110
                },
                anchor_level_permission: {
                    type: "AnchorLevelPermission",
                    id: 111
                },
                GameRankingSwitch: {
                    type: "int32",
                    id: 112
                },
                ToolBarManagement: {
                    type: "webcast.data.ToolBarManagement",
                    id: 113
                },
                MultiEnableReserve: {
                    type: "bool",
                    id: 114
                },
                EnableFansLevel: {
                    type: "bool",
                    id: 115
                },
                SecretRoom: {
                    type: "int64",
                    id: 116
                },
                SpamComments: {
                    type: "bool",
                    id: 117
                },
                deprecated118: {
                    rule: "repeated",
                    type: "int64",
                    id: 118
                },
                deprecated119: {
                    type: "int64",
                    id: 119
                },
                custom_error_for_gift_setting: {
                    type: "webcast.data.RechargeCustomError",
                    id: 120
                },
                guess_entrance_for_host: {
                    type: "bool",
                    id: 121
                },
                credit_entrance_for_audience: {
                    type: "bool",
                    id: 122
                },
                game_guess_permission: {
                    type: "bool",
                    id: 123
                },
                CustomizableGiftPoll: {
                    type: "int64",
                    id: 124
                },
                comment_tray_status: {
                    type: "int64",
                    id: 125
                },
                RankingChangeAlterSwitch: {
                    type: "int32",
                    id: 126
                },
                show_credit_widget: {
                    type: "bool",
                    id: 127
                },
                star_comment_permission_switch: {
                    type: "StarCommentPermissionSwitch",
                    id: 128
                },
                EmotePoll: {
                    type: "int64",
                    id: 129
                },
                EnableShowUserUV: {
                    type: "bool",
                    id: 130
                }
            },
            nested: {
                ShareEffectTarget: {
                    values: {
                        ShareEffectUnknown: 0,
                        ShareEffectNoShow: 1,
                        ShareEffectShow: 2
                    }
                },
                RoomAuthOffReasons: {
                    fields: {
                        gift: {
                            type: "string",
                            id: 1
                        },
                        gift_off_reason: {
                            type: "int64",
                            id: 2
                        }
                    }
                },
                AnchorLevelPermission: {
                    fields: {
                        beauty: {
                            type: "Switch",
                            id: 1
                        },
                        effects: {
                            type: "Switch",
                            id: 2
                        },
                        share: {
                            type: "Switch",
                            id: 3
                        },
                        moderator_setting: {
                            type: "Switch",
                            id: 4
                        },
                        comment_setting: {
                            type: "Switch",
                            id: 5
                        },
                        comment_filter: {
                            type: "Switch",
                            id: 6
                        },
                        pause_live: {
                            type: "Switch",
                            id: 7
                        },
                        flip: {
                            type: "Switch",
                            id: 8
                        },
                        mirror: {
                            type: "Switch",
                            id: 9
                        },
                        hear_your_own_voice: {
                            type: "Switch",
                            id: 10
                        },
                        donation_sticker: {
                            type: "Switch",
                            id: 11
                        },
                        full_screen_mode: {
                            type: "Switch",
                            id: 12
                        },
                        live_center: {
                            type: "Switch",
                            id: 13
                        },
                        topic: {
                            type: "Switch",
                            id: 14
                        },
                        sticker: {
                            type: "Switch",
                            id: 15
                        },
                        voice_effect: {
                            type: "Switch",
                            id: 16
                        },
                        live_intro: {
                            type: "Switch",
                            id: 17
                        },
                        InteractionQuestion: {
                            type: "Switch",
                            id: 18
                        },
                        poll: {
                            type: "Switch",
                            id: 19
                        },
                        pin: {
                            type: "Switch",
                            id: 20
                        },
                        pictionary: {
                            type: "Switch",
                            id: 21
                        },
                        viewer_rank_list: {
                            type: "Switch",
                            id: 22
                        },
                        promote: {
                            type: "Switch",
                            id: 23
                        },
                        customizable_poll: {
                            type: "Switch",
                            id: 24
                        },
                        goody_bag: {
                            type: "Switch",
                            id: 25
                        },
                        karaoke: {
                            type: "Switch",
                            id: 26
                        },
                        treasure_box: {
                            type: "Switch",
                            id: 27
                        },
                        portal: {
                            type: "Switch",
                            id: 28
                        },
                        live_background: {
                            type: "Switch",
                            id: 29
                        },
                        play_together: {
                            type: "Switch",
                            id: 30
                        }
                    },
                    nested: {
                        Switch: {
                            values: {
                                Off: 0,
                                On: 1
                            }
                        }
                    }
                },
                StarCommentPermissionSwitch: {
                    fields: {
                        status: {
                            type: "Status",
                            id: 1
                        },
                        OffReason: {
                            type: "string",
                            id: 2
                        }
                    },
                    nested: {
                        Status: {
                            values: {
                                Unknown: 0,
                                On: 1,
                                Off: 2
                            }
                        }
                    }
                }
            }
        }
    }
    ,
    961397: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                room_based_gifts: {
                    keyType: "int64",
                    type: "RoomBasedGifts",
                    id: 2
                }
            },
            nested: {
                GiftInfo: {
                    fields: {
                        id: {
                            type: "int64",
                            id: 1
                        },
                        price: {
                            type: "int64",
                            id: 2
                        }
                    }
                },
                RoomBasedGifts: {
                    fields: {
                        gift_info: {
                            rule: "repeated",
                            type: "GiftInfo",
                            id: 1
                        }
                    }
                }
            }
        }
    }
    ,
    953434: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                color: {
                    type: "string",
                    id: 3
                },
                action_content: {
                    type: "string",
                    id: 6
                },
                action_type: {
                    type: "int64",
                    id: 7
                },
                push_message_display_time: {
                    type: "int64",
                    id: 8
                },
                action_icon: {
                    type: "webcast.data.Image",
                    id: 10
                },
                new_background_image: {
                    type: "FlexImageStruct",
                    id: 11
                },
                source: {
                    type: "string",
                    id: 12
                }
            }
        }
    }
    ,
    738942: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                challenge_info: {
                    type: "string",
                    id: 2
                },
                notify_type: {
                    type: "int64",
                    id: 3
                }
            }
        }
    }
    ,
    391321: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                config_info: {
                    type: "string",
                    id: 2
                },
                config_type: {
                    type: "int64",
                    id: 3
                }
            }
        }
    }
    ,
    20593: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                event_id: {
                    type: "int64",
                    id: 2
                },
                title: {
                    type: "string",
                    id: 3
                },
                start_time: {
                    type: "int64",
                    id: 4
                },
                pos_x: {
                    type: "string",
                    id: 5
                },
                pos_y: {
                    type: "string",
                    id: 6
                },
                subscribed_count: {
                    type: "int64",
                    id: 7
                },
                config_opt: {
                    type: "EventConfigOpt",
                    id: 8
                },
                event_user_info: {
                    rule: "repeated",
                    type: "webcast.data.EventUserInfo",
                    id: 9
                }
            }
        }
    }
    ,
    552890: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                is_sandbox: {
                    type: "bool",
                    id: 1
                },
                deprecated1: {
                    type: "EnterRegionMatch",
                    id: 2
                }
            }
        }
    }
    ,
    183079: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                id: {
                    type: "string",
                    id: 1
                },
                name: {
                    type: "string",
                    id: 2
                },
                type: {
                    type: "int64",
                    id: 3
                },
                content: {
                    type: "string",
                    id: 4
                },
                text_size: {
                    type: "int64",
                    id: 5
                },
                text_color: {
                    type: "string",
                    id: 6
                },
                image_uri: {
                    type: "string",
                    id: 7
                },
                nine_patch_image_uri: {
                    type: "string",
                    id: 8
                },
                x: {
                    type: "int64",
                    id: 9
                },
                y: {
                    type: "int64",
                    id: 10
                },
                w: {
                    type: "int64",
                    id: 11
                },
                h: {
                    type: "int64",
                    id: 12
                },
                top_left_h: {
                    type: "int64",
                    id: 13
                },
                top_left_w: {
                    type: "int64",
                    id: 14
                },
                bottom_right_h: {
                    type: "int64",
                    id: 15
                },
                bottom_right_w: {
                    type: "int64",
                    id: 16
                },
                edited: {
                    type: "bool",
                    id: 17
                },
                sticker_status: {
                    type: "int64",
                    id: 18
                },
                review_id: {
                    type: "int64",
                    id: 19
                },
                starling_key: {
                    type: "string",
                    id: 20
                },
                reward_sticker: {
                    type: "bool",
                    id: 21
                },
                extra: {
                    type: "string",
                    id: 22
                }
            }
        }
    }
    ,
    1756: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                score: {
                    type: "double",
                    id: 1
                },
                bubble_message: {
                    type: "string",
                    id: 2
                },
                jump_url: {
                    type: "string",
                    id: 3
                }
            }
        }
    }
    ,
    845704: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                room_pack_succ_flag: {
                    type: "bool",
                    id: 1
                },
                permission_info: {
                    type: "MultiGuestPermissionInfo",
                    id: 2
                }
            }
        }
    }
    ,
    405895: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                hot_sentence_info: {
                    type: "string",
                    id: 2
                }
            }
        }
    }
    ,
    340664: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                content: {
                    type: "string",
                    id: 2
                },
                action: {
                    type: "int64",
                    id: 3
                },
                bg_img_url: {
                    type: "string",
                    id: 4
                }
            }
        }
    }
    ,
    620191: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                user: {
                    type: "webcast.data.User",
                    id: 2
                },
                style: {
                    type: "int64",
                    id: 3
                },
                intro: {
                    type: "string",
                    id: 4
                },
                label: {
                    rule: "repeated",
                    type: "string",
                    id: 5
                }
            }
        }
    }
    ,
    390094: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                user: {
                    type: "webcast.data.User",
                    id: 2
                },
                action: {
                    type: "int64",
                    id: 3
                },
                member_count: {
                    type: "int64",
                    id: 4
                },
                popularity: {
                    type: "int64",
                    id: 5
                },
                popularity_str: {
                    type: "string",
                    id: 6
                },
                device_id: {
                    type: "int64",
                    id: 7
                },
                content: {
                    type: "string",
                    id: 8
                }
            }
        }
    }
    ,
    628883: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                content: {
                    type: "string",
                    id: 2
                },
                supprot_landscape: {
                    type: "bool",
                    id: 3
                },
                source: {
                    type: "int64",
                    id: 4
                },
                icon: {
                    type: "webcast.data.Image",
                    id: 5
                },
                scene: {
                    type: "string",
                    id: 6
                },
                is_welcome: {
                    type: "bool",
                    id: 7
                },
                public_area_common: {
                    type: "PublicAreaMessageCommon",
                    id: 8
                },
                show_duration_ms: {
                    type: "int64",
                    id: 9
                },
                sub_scene: {
                    type: "string",
                    id: 10
                }
            }
        }
    }
    ,
    462194: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                pack_err_code: {
                    type: "int64",
                    id: 1
                },
                multi_guest_linkmic_info: {
                    type: "MultiGuestLinkmicInfo",
                    id: 2
                },
                linkmic_room_create_ab_param: {
                    type: "string",
                    id: 3
                }
            }
        }
    }
    ,
    270855: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                is_sandbox: {
                    type: "bool",
                    id: 1
                },
                enter_region_match: {
                    type: "EnterRegionMatch",
                    id: 2
                },
                locale: {
                    type: "string",
                    id: 3
                },
                deprecated1: {
                    type: "DeprecatedStruct1",
                    id: 4
                },
                deprecated2: {
                    type: "DeprecatedStruct1",
                    id: 5
                },
                tag_set: {
                    type: "string",
                    id: 6
                },
                deprecated3: {
                    type: "double",
                    id: 7
                },
                deprecated4: {
                    type: "double",
                    id: 8
                },
                deprecated5: {
                    type: "string",
                    id: 9
                },
                laneEnv: {
                    type: "string",
                    id: 10
                },
                pre_recorded: {
                    type: "PreRecordedType",
                    id: 11
                },
                region: {
                    type: "string",
                    id: 12
                },
                recommend_level: {
                    type: "int32",
                    id: 13
                }
            }
        }
    }
    ,
    775816: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                elements: {
                    keyType: "int32",
                    type: "Element",
                    id: 1
                }
            },
            nested: {
                ElementType: {
                    values: {
                        Unknown: 0,
                        NewRegularLuckyBox: 11
                    }
                },
                Element: {
                    fields: {
                        type: {
                            type: "int32",
                            id: 1
                        },
                        priority: {
                            type: "int32",
                            id: 2
                        }
                    }
                }
            }
        }
    }
    ,
    948905: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                content: {
                    type: "string",
                    id: 2
                },
                image_url: {
                    type: "string",
                    id: 3
                },
                instation_push_type: {
                    type: "InstationPushType",
                    id: 4
                }
            }
        }
    }
    ,
    749291: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                id: {
                    type: "int64",
                    id: 1
                },
                id_str: {
                    type: "string",
                    id: 2
                },
                fan_ticket: {
                    type: "int64",
                    id: 3
                },
                deprecated1: {
                    type: "int64",
                    id: 4
                },
                total_user: {
                    type: "int64",
                    id: 5
                },
                gift_uv_count: {
                    type: "int64",
                    id: 6
                },
                follow_count: {
                    type: "int64",
                    id: 7
                },
                user_count_composition: {
                    type: "UserCountComposition",
                    id: 8
                },
                watermelon: {
                    type: "int64",
                    id: 9
                },
                digg_count: {
                    type: "int64",
                    id: 10
                },
                enter_count: {
                    type: "int64",
                    id: 11
                },
                deprecated2: {
                    type: "string",
                    id: 12
                },
                total_user_desp: {
                    type: "string",
                    id: 13
                },
                like_count: {
                    type: "int64",
                    id: 14
                },
                replay_fan_ticket: {
                    type: "int64",
                    id: 15
                },
                replay_viewers: {
                    type: "int64",
                    id: 16
                },
                share_count: {
                    type: "int64",
                    id: 17
                }
            },
            nested: {
                UserCountComposition: {
                    fields: {
                        deprecated1: {
                            type: "double",
                            id: 1
                        },
                        video_detail: {
                            type: "double",
                            id: 2
                        },
                        my_follow: {
                            type: "double",
                            id: 3
                        },
                        other: {
                            type: "double",
                            id: 4
                        }
                    }
                }
            }
        }
    }
    ,
    731003: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                id: {
                    type: "int64",
                    id: 1
                },
                name: {
                    type: "string",
                    id: 2
                },
                type: {
                    type: "int64",
                    id: 3
                },
                content: {
                    type: "string",
                    id: 4
                },
                text_size: {
                    type: "int64",
                    id: 5
                },
                text_color: {
                    type: "string",
                    id: 6
                },
                image: {
                    type: "webcast.data.Image",
                    id: 7
                },
                nine_patch_image: {
                    type: "webcast.data.Image",
                    id: 8
                },
                x: {
                    type: "int64",
                    id: 9
                },
                y: {
                    type: "int64",
                    id: 10
                },
                w: {
                    type: "int64",
                    id: 11
                },
                h: {
                    type: "int64",
                    id: 12
                },
                top_left_h: {
                    type: "int64",
                    id: 13
                },
                top_left_w: {
                    type: "int64",
                    id: 14
                },
                bottom_right_h: {
                    type: "int64",
                    id: 15
                },
                bottom_right_w: {
                    type: "int64",
                    id: 16
                },
                review_status: {
                    type: "RoomStickerStatus",
                    id: 17
                },
                edited: {
                    type: "bool",
                    id: 18
                },
                audit_info: {
                    type: "RoomStickerAuditInfo",
                    id: 19
                },
                starling_key: {
                    type: "string",
                    id: 20
                },
                extra: {
                    type: "string",
                    id: 21
                }
            }
        }
    }
    ,
    425964: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                violation_id: {
                    type: "int64",
                    id: 1
                },
                task_type: {
                    type: "int64",
                    id: 2
                }
            },
            nested: {
                TaskType: {
                    values: {
                        TASK_TYPE_DEFAULT: 0,
                        TASK_TYPE_APPEAL: 1
                    }
                }
            }
        }
    }
    ,
    984128: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                sticker: {
                    rule: "repeated",
                    type: "webcast.data.RoomSticker",
                    id: 2
                }
            }
        }
    }
    ,
    651121: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                StickerStatusUnknown: 0,
                StickerStatusUnderReview: 1,
                StickerStatusApproved: 2,
                StickerStatusRejected: 3
            }
        }
    }
    ,
    320992: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                action: {
                    type: "int64",
                    id: 2
                },
                subject_position_info: {
                    type: "SubjectPositionInfo",
                    id: 3
                }
            }
        }
    }
    ,
    815034: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                UndefinedSwitch: 0,
                OpenSwitch: 1,
                CloseSwitch: 2
            }
        }
    }
    ,
    587091: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                tab_type: {
                    type: "RoomTabType",
                    id: 1
                },
                tab_name: {
                    type: "string",
                    id: 2
                },
                tab_url: {
                    type: "string",
                    id: 3
                }
            }
        }
    }
    ,
    828747: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                UnknownTab: 0,
                ChatTab: 1,
                RankTab: 2,
                IntroTab: 3,
                FansclubTab: 4,
                RaceSchedule: 5,
                CommonH5Tab: 6,
                NobleList: 7
            }
        }
    }
    ,
    169434: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                room_id: {
                    type: "int64",
                    id: 1
                },
                room_id_str: {
                    type: "string",
                    id: 2
                },
                silence_flag: {
                    type: "int64",
                    id: 3
                },
                admin_flag: {
                    type: "int64",
                    id: 4
                },
                rank: {
                    type: "int64",
                    id: 5
                }
            }
        }
    }
    ,
    63879: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                ranks: {
                    rule: "repeated",
                    type: "Contributor",
                    id: 2
                },
                total: {
                    type: "int64",
                    id: 3
                },
                pop_str: {
                    type: "string",
                    id: 4
                },
                seats: {
                    rule: "repeated",
                    type: "Contributor",
                    id: 5
                },
                popularity: {
                    type: "int64",
                    id: 6
                },
                total_user: {
                    type: "int64",
                    id: 7
                },
                anonymous: {
                    type: "int64",
                    id: 8
                }
            },
            nested: {
                Contributor: {
                    fields: {
                        score: {
                            type: "int64",
                            id: 1
                        },
                        user: {
                            type: "webcast.data.User",
                            id: 2
                        },
                        rank: {
                            type: "int64",
                            id: 3
                        },
                        delta: {
                            type: "int64",
                            id: 4
                        }
                    }
                }
            }
        }
    }
    ,
    682056: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                action: {
                    type: "int32",
                    id: 2
                },
                content: {
                    type: "string",
                    id: 3
                },
                notice_type: {
                    type: "int64",
                    id: 4
                },
                close_room: {
                    type: "bool",
                    id: 5
                }
            }
        }
    }
    ,
    72255: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                recv_metrics_data: {
                    keyType: "string",
                    type: "IMRecvMetrics",
                    id: 1
                },
                route_qps: {
                    keyType: "string",
                    type: "double",
                    id: 2
                },
                rpc_call_fail_rate: {
                    keyType: "string",
                    type: "double",
                    id: 3
                },
                mq_call_fail_rate: {
                    keyType: "string",
                    type: "double",
                    id: 4
                },
                mq_latency: {
                    keyType: "string",
                    type: "PackLatency",
                    id: 5
                },
                rpc_latency: {
                    keyType: "string",
                    type: "PackLatency",
                    id: 6
                }
            }
        }
    }
    ,
    545288: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                should_poll_campaign_incentive: {
                    type: "bool",
                    id: 1
                },
                campaign_status: {
                    type: "CampaignStatus",
                    id: 2
                },
                campaign_start_time: {
                    type: "string",
                    id: 3
                },
                campaign_end_time: {
                    type: "string",
                    id: 4
                },
                campaign_cashback_pct: {
                    type: "string",
                    id: 5
                },
                referral_code: {
                    type: "string",
                    id: 6
                },
                cashback_max_amount: {
                    type: "string",
                    id: 7
                }
            }
        }
    }
    ,
    378305: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                STATE_RTC_UNDEFINED: 0,
                STATE_RTC_NORMAL: 1,
                STATE_RTC_DISCONNECT: 2
            }
        }
    }
    ,
    639050: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                info: {
                    type: "string",
                    id: 1
                },
                link_mic_id: {
                    type: "string",
                    id: 2
                }
            }
        }
    }
    ,
    672325: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                red_packet_rush_records: {
                    rule: "repeated",
                    type: "RedPacketRushRecord",
                    id: 2
                }
            }
        }
    }
    ,
    628493: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                cover: {
                    type: "Image",
                    id: 1
                },
                mask_info: {
                    type: "SOVMaskInfo",
                    id: 2
                }
            }
        }
    }
    ,
    268669: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                type: {
                    type: "SOVMaskInfoType",
                    id: 1
                },
                title: {
                    type: "string",
                    id: 2
                }
            }
        }
    }
    ,
    661005: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                SOV_MASK_INFO_TYPE_NONE: 0,
                SOV_MASK_INFO_TYPE_SENSITIVE: 1,
                SOV_MASK_INFO_TYPE_VIOLATION: 2,
                SOV_MASK_INFO_TYPE_MUSIC_COPYRIGHT: 3,
                SOV_MASK_INFO_TYPE_UNAVAILABLE: 4
            }
        }
    }
    ,
    293219: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                SOV_STATUS_UNKNOWN: 0,
                SOV_STATUS_ON: 1,
                SOV_STATUS_OFF: 2
            }
        }
    }
    ,
    23153: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                SCENE_UNKNOWN: 0,
                SCENE_CO_HOST: 2,
                SCENE_MULTI_LIVE: 4
            }
        }
    }
    ,
    715911: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                normal_hidden_gids: {
                    rule: "repeated",
                    type: "int64",
                    id: 1
                },
                match_hidden_gids: {
                    rule: "repeated",
                    type: "int64",
                    id: 2
                },
                cohost_hidden_gids: {
                    rule: "repeated",
                    type: "int64",
                    id: 3
                },
                multiguest_hidden_gids: {
                    rule: "repeated",
                    type: "int64",
                    id: 4
                }
            }
        }
    }
    ,
    503243: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                start_time: {
                    type: "int64",
                    id: 1
                },
                duration: {
                    type: "int64",
                    id: 2
                }
            }
        }
    }
    ,
    35467: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                SCORE_TYPE_TOTAL: 0,
                SCORE_TYPE_PLACE: 1,
                SCORE_TYPE_KILL: 2
            }
        }
    }
    ,
    422352: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                user: {
                    type: "webcast.data.User",
                    id: 2
                },
                screen_chat_type: {
                    type: "int64",
                    id: 3
                },
                content: {
                    type: "string",
                    id: 4
                },
                priority: {
                    type: "int64",
                    id: 5
                },
                effect: {
                    type: "Effect",
                    id: 6
                },
                background_image: {
                    type: "webcast.data.Image",
                    id: 7
                },
                effect_v2: {
                    type: "Effect",
                    id: 8
                },
                background_image_v2: {
                    type: "webcast.data.Image",
                    id: 9
                },
                public_area_common: {
                    type: "PublicAreaCommon",
                    id: 10
                }
            },
            nested: {
                Effect: {
                    fields: {
                        icon: {
                            type: "FlexImageStruct",
                            id: 1
                        },
                        avatar_icon: {
                            type: "webcast.data.Image",
                            id: 2
                        }
                    }
                }
            }
        }
    }
    ,
    749664: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                color: {
                    type: "string",
                    id: 1
                }
            }
        }
    }
    ,
    154525: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                share_channel: {
                    type: "string",
                    id: 2
                }
            }
        }
    }
    ,
    711918: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                show_time_on_enter: {
                    type: "int32",
                    id: 1
                },
                show_time_on_share: {
                    type: "int32",
                    id: 2
                }
            }
        }
    }
    ,
    594522: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                SHARED_INVITEE_PANEL_NONE: 0,
                SHARED_INVITEE_PANEL_NORMAL_VIEWER: 1,
                SHARED_INVITEE_PANEL_REPLY_INVITATION: 2,
                SHARED_INVITEE_PANEL_APPLY: 3,
                SHARED_INVITEE_PANEL_CANCEL_APPLY: 4,
                SHARED_INVITEE_PANEL_SERVER_DECISION: 5
            }
        }
    }
    ,
    646007: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                seller_name: {
                    type: "string",
                    id: 1
                },
                seller_logo: {
                    type: "webcast.data.Image",
                    id: 2
                },
                blue_v_image: {
                    type: "webcast.data.Image",
                    id: 3
                },
                dark_blue_v_image: {
                    type: "webcast.data.Image",
                    id: 4
                },
                top_brand_image: {
                    type: "webcast.data.Image",
                    id: 5
                },
                dark_top_brand_image: {
                    type: "webcast.data.Image",
                    id: 6
                }
            }
        }
    }
    ,
    511130: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                shuffle_interval: {
                    type: "int64",
                    id: 1
                },
                refresh_items: {
                    rule: "repeated",
                    type: "string",
                    id: 2
                },
                activity_id: {
                    type: "string",
                    id: 3
                },
                index: {
                    type: "int64",
                    id: 4
                },
                refresh_msg_type: {
                    type: "RefreshSubTypeEnum",
                    id: 5
                }
            }
        }
    }
    ,
    499245: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                type: {
                    type: "int32",
                    id: 1
                },
                priority: {
                    type: "uint32",
                    id: 2
                },
                min_webcast_sdk_version: {
                    type: "int64",
                    id: 3
                },
                short_touch_type: {
                    type: "ShortTouchType",
                    id: 4
                },
                short_touch_info: {
                    type: "ShortTouchInfo",
                    id: 5
                }
            },
            nested: {
                ShortTouchType: {
                    values: {
                        UnknownShortTouchType: 0,
                        Client: 1,
                        FrontEnd: 2
                    }
                }
            }
        }
    }
    ,
    253346: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                message_type: {
                    type: "MessageType",
                    id: 2
                },
                short_touch_area_data: {
                    type: "webcast.data.ShortTouchArea",
                    id: 3
                }
            },
            nested: {
                MessageType: {
                    values: {
                        UnknownMessageType: 0,
                        Refresh: 1,
                        Destroy: 2
                    }
                }
            }
        }
    }
    ,
    15696: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                poll_data: {
                    type: "ShortTouchPollData",
                    id: 1
                }
            }
        }
    }
    ,
    847128: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                short_touch_url: {
                    type: "string",
                    id: 1
                },
                short_touch_fallback_url: {
                    type: "string",
                    id: 2
                },
                container_type: {
                    type: "ContainerType",
                    id: 3
                },
                width: {
                    type: "uint32",
                    id: 4
                },
                height: {
                    type: "uint32",
                    id: 5
                },
                img_url: {
                    type: "string",
                    id: 6
                },
                jump_schema: {
                    type: "string",
                    id: 7
                },
                show_animation: {
                    type: "RoomSwitch",
                    id: 8
                },
                animation_type: {
                    type: "AnimationType",
                    id: 9
                },
                sub_item_list: {
                    rule: "repeated",
                    type: "string",
                    id: 10
                }
            },
            nested: {
                ContainerType: {
                    values: {
                        UnknownContainerType: 0,
                        Lynx: 1,
                        WebView: 2
                    }
                },
                AnimationType: {
                    values: {
                        UnknownAnimationType: 0,
                        ShowEveryTime: 1,
                        ShowNotClicked: 2,
                        ShowAppLife: 3,
                        ShowEveryDay: 4
                    }
                }
            }
        }
    }
    ,
    358975: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                schema: {
                    type: "string",
                    id: 1
                },
                width: {
                    type: "int64",
                    id: 2
                },
                height: {
                    type: "int64",
                    id: 3
                },
                top_margin: {
                    type: "int64",
                    id: 4
                },
                left_margin: {
                    type: "int64",
                    id: 5
                },
                fc_second: {
                    type: "int64",
                    id: 6
                },
                name: {
                    type: "string",
                    id: 7
                },
                preview_setting: {
                    type: "ShortTouchPreviewSetting",
                    id: 8
                },
                anime_type: {
                    type: "AnimeType",
                    id: 9
                },
                icon_skin: {
                    type: "string",
                    id: 10
                },
                activity_id: {
                    type: "string",
                    id: 11
                }
            },
            nested: {
                AnimeType: {
                    values: {
                        NewUser: 0,
                        OldUser: 1,
                        SClassBigSale: 2,
                        SSClassBigSale: 3
                    }
                },
                ShortTouchIconSkin: {
                    fields: {
                        open_bright_icon: {
                            type: "webcast.data.Image",
                            id: 1
                        },
                        open_dark_icon: {
                            type: "webcast.data.Image",
                            id: 2
                        },
                        close_bright_icon: {
                            type: "webcast.data.Image",
                            id: 3
                        },
                        close_dark_icon: {
                            type: "webcast.data.Image",
                            id: 4
                        }
                    }
                }
            }
        }
    }
    ,
    996129: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                action_data: {
                    type: "webcast.data.UnifyBaseActionData",
                    id: 2
                },
                extra: {
                    type: "ShortTouchExtra",
                    id: 3
                }
            }
        }
    }
    ,
    675801: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                poll_id: {
                    type: "string",
                    id: 1
                },
                poll_end_time: {
                    type: "int64",
                    id: 2
                },
                poll_show_result: {
                    type: "bool",
                    id: 3
                },
                user_type: {
                    type: "string",
                    id: 4
                }
            }
        }
    }
    ,
    72372: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                preview_schema: {
                    type: "string",
                    id: 1
                },
                preview_show_time: {
                    type: "int64",
                    id: 2
                },
                preview_image: {
                    type: "webcast.data.Image",
                    id: 3
                },
                amount_text: {
                    type: "string",
                    id: 4
                },
                discount_text: {
                    type: "string",
                    id: 5
                }
            }
        }
    }
    ,
    180658: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                duration_per_guest: {
                    type: "int64",
                    id: 1
                },
                allow_open_mic_freely: {
                    type: "bool",
                    id: 2
                },
                transition_duration_of_config: {
                    type: "int64",
                    id: 3
                }
            }
        }
    }
    ,
    525355: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                room_id: {
                    type: "int64",
                    id: 1
                },
                channel_id: {
                    type: "int64",
                    id: 2
                },
                show_id: {
                    type: "int64",
                    id: 3
                },
                show_status: {
                    type: "int32",
                    id: 4
                },
                version: {
                    type: "int64",
                    id: 5
                },
                show_create_time: {
                    type: "int64",
                    id: 6
                },
                show_config: {
                    type: "ShowConfig",
                    id: 7
                },
                showing_and_ready_list: {
                    rule: "repeated",
                    type: "ShowListUser",
                    id: 9
                },
                finished_list: {
                    rule: "repeated",
                    type: "ShowListUser",
                    id: 10
                },
                transition_info: {
                    type: "TransitionInfo",
                    id: 11
                }
            }
        }
    }
    ,
    583684: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                show_start_time: {
                    type: "int64",
                    id: 1
                },
                show_end_time: {
                    type: "int64",
                    id: 2
                },
                anchors: {
                    rule: "repeated",
                    type: "webcast.data.User",
                    id: 3
                },
                show_introduction: {
                    type: "string",
                    id: 4
                }
            }
        }
    }
    ,
    126927: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                user_id: {
                    type: "int64",
                    id: 1
                },
                status: {
                    type: "int32",
                    id: 2
                },
                order: {
                    type: "int32",
                    id: 3
                },
                show_start_time: {
                    type: "int64",
                    id: 4
                },
                nickname: {
                    type: "string",
                    id: 5
                },
                avatar_thumb: {
                    type: "webcast.data.Image",
                    id: 6
                },
                score: {
                    type: "int64",
                    id: 7
                },
                linkmic_id_str: {
                    type: "string",
                    id: 8
                }
            }
        }
    }
    ,
    61589: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                banned: {
                    type: "bool",
                    id: 1
                }
            }
        }
    }
    ,
    841008: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                ShowUserFinishReason_Unknown: 0,
                ShowUserFinishReason_TimerOverNormally: 1,
                ShowUserFinishReason_HostFinishShowingGuest: 2,
                ShowUserFinishReason_SelfFinishShowingGuest: 3,
                ShowUserFinishReason_Leave: 4,
                ShowUserFinishReason_KickOut: 5,
                ShowUserFinishReason_RtcCallbackLeave: 6,
                ShowUserFinishReason_HostEndShow: 7,
                ShowUserFinishReason_MultiGuestClosed: 8,
                ShowUserFinishReason_MultiGuestResumed: 9,
                ShowUserFinishReason_KickOutAllGuests: 10,
                ShowUserFinishReason_ModeratorFinishShowingGuest: 11,
                ShowUserFinishReason_ModeratorEndShow: 12
            }
        }
    }
    ,
    982166: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                id: {
                    type: "string",
                    id: 1
                },
                type: {
                    type: "webcast.data.PinCardType",
                    id: 3
                },
                content: {
                    type: "string",
                    id: 4
                },
                audit_status: {
                    type: "AuditStatus",
                    id: 5
                }
            }
        }
    }
    ,
    475236: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                user_id: {
                    type: "int64",
                    id: 1
                },
                nickname: {
                    type: "string",
                    id: 2
                },
                display_id: {
                    type: "string",
                    id: 3
                },
                avatar_thumb: {
                    type: "webcast.data.Image",
                    id: 4
                }
            }
        }
    }
    ,
    243984: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                account: {
                    type: "SkinHostAccount",
                    id: 1
                },
                drawer_entrance: {
                    type: "SkinDrawerEntrance",
                    id: 2
                },
                scene: {
                    type: "string",
                    id: 3
                }
            }
        }
    }
    ,
    542207: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                style: {
                    type: "int64",
                    id: 1
                },
                cover: {
                    type: "webcast.data.Image",
                    id: 2
                },
                title: {
                    type: "string",
                    id: 3
                },
                title_key: {
                    type: "string",
                    id: 4
                }
            }
        }
    }
    ,
    289003: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                style: {
                    type: "int64",
                    id: 1
                },
                bg_image: {
                    type: "webcast.data.Image",
                    id: 2
                }
            }
        }
    }
    ,
    706788: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                sku_id: {
                    type: "string",
                    id: 1
                },
                stock_num: {
                    type: "int64",
                    id: 2
                },
                price: {
                    type: "int64",
                    id: 3
                },
                coupon_price: {
                    type: "int64",
                    id: 4
                }
            }
        }
    }
    ,
    512357: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                SLIDE_WAY_PAGEUP: 0,
                SLIDE_WAY_PAGEDOWN: 1,
                SLIDE_WAY_PAGEUPDOWN: 2
            }
        }
    }
    ,
    706702: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                start_time_ms: {
                    type: "string",
                    id: 1
                },
                end_time_ms: {
                    type: "string",
                    id: 2
                },
                duration: {
                    type: "string",
                    id: 3
                },
                new_fans: {
                    type: "string",
                    id: 4
                },
                active_fans: {
                    type: "string",
                    id: 5
                }
            }
        }
    }
    ,
    869050: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                card_name_key: {
                    type: "string",
                    id: 1
                },
                card_image: {
                    type: "webcast.data.Image",
                    id: 2
                },
                send_time_sec: {
                    type: "int64",
                    id: 3
                },
                send_user: {
                    type: "BattleUserInfo",
                    id: 4
                },
                effect_last_duration: {
                    type: "int64",
                    id: 5
                },
                rule_url: {
                    type: "string",
                    id: 6
                },
                effect_time_sec: {
                    type: "int64",
                    id: 7
                },
                to_anchor_id: {
                    type: "int64",
                    id: 12
                },
                to_anchor_id_str: {
                    type: "string",
                    id: 13
                }
            }
        }
    }
    ,
    915280: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                multi_live: {
                    type: "MultiLive",
                    id: 1
                },
                linkmic_scene_linker: {
                    keyType: "int32",
                    type: "int64",
                    id: 2
                },
                cohost: {
                    type: "Cohost",
                    id: 3
                }
            }
        }
    }
    ,
    51627: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                user: {
                    type: "webcast.data.User",
                    id: 2
                },
                share_type: {
                    type: "int64",
                    id: 3
                },
                action: {
                    type: "int64",
                    id: 4
                },
                share_target: {
                    type: "string",
                    id: 5
                },
                follow_count: {
                    type: "int64",
                    id: 6
                },
                share_display_style: {
                    type: "int64",
                    id: 7
                },
                share_count: {
                    type: "int64",
                    id: 8
                },
                public_area_message_common: {
                    type: "PublicAreaMessageCommon",
                    id: 9
                },
                signature: {
                    type: "string",
                    id: 10
                },
                signature_version: {
                    type: "string",
                    id: 11
                },
                show_duration_ms: {
                    type: "int64",
                    id: 12
                }
            }
        }
    }
    ,
    257312: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                SOURCE_TYPE_UNKNOWN: 0,
                SOURCE_TYPE_FRIEND_LIST: 1,
                SOURCE_TYPE_RECOMMEND_LIST: 2,
                SOURCE_TYPE_RECENT: 3,
                SOURCE_TYPE_OTHER_FOLLOW: 4,
                SOURCE_TYPE_QUICK_PAIR: 5,
                SOURCE_TYPE_ACTIVITY: 6,
                SOURCE_TYPE_QUICK_RECOMMEND: 7,
                SOURCE_TYPE_OFFICIAL_CHANNEL: 8,
                SOURCE_TYPE_BEST_TEAMMATE: 9,
                SOURCE_TYPE_RESERVATION: 10,
                SOURCE_TYPE_PAIRING: 11,
                SOURCE_TYPE_PAIRING_ON_RESERVATION: 12,
                SOURCE_TYPE_TOPIC_QUICK_PAIR: 13,
                SOURCE_TYPE_TOPIC_QUICK_RECOMMEND: 14,
                SOURCE_TYPE_ONLINE_FRIEND_CAPSULE: 15,
                SOURCE_TYPE_WEEKLY_RANK: 20,
                SOURCE_TYPE_HOURLY_RANK: 21,
                SOURCE_TYPE_WEEKLY_RISING: 23,
                SOURCE_TYPE_WEEKLY_ROOKIE: 24,
                SOURCE_TYPE_CONNECTION_LIST: 25,
                SOURCE_TYPE_DAILY_RANK: 26,
                SOURCE_TYPE_DAILY_RANK_HALL_OF_FAME: 27,
                SOURCE_TYPE_RESERVATION_BUBBLE: 28,
                SOURCE_TYPE_PAIRING_BUBBLE: 29,
                SOURCE_TYPE_LEAGUE_PHASE_ONE: 30,
                SOURCE_TYPE_LEAGUE_PHASE_TWO: 31,
                SOURCE_TYPE_LEAGUE_PHASE_THREE: 32,
                SOURCE_TYPE_DAILY_ROOKIE: 33,
                SOURCE_TYPE_MAY_KNOW_LIST: 34,
                SOURCE_TYPE_BANNER: 35,
                SOURCE_TYPE_FANS_TEAM_RANK: 36,
                SOURCE_TYPE_SEARCH: 37,
                SOURCE_TYPE_EOY_RANK_LIST: 38,
                SOURCE_TYPE_LEAGUE_CAMPAIGN_RANK: 39,
                SOURCE_TYPE_CREATOR_CLASS_RANK: 40,
                SOURCE_TYPE_HISTORY: 41,
                SOURCE_TYPE_QUICK_RECOMMEND_DURING_COHOST: 43
            }
        }
    }
    ,
    795441: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                }
            }
        }
    }
    ,
    40773: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                card_name_key: {
                    type: "string",
                    id: 1
                },
                card_image: {
                    type: "webcast.data.Image",
                    id: 2
                },
                send_time_sec: {
                    type: "int64",
                    id: 3
                },
                send_user: {
                    type: "BattleUserInfo",
                    id: 4
                },
                effect_last_duration: {
                    type: "int64",
                    id: 5
                },
                rule_url: {
                    type: "string",
                    id: 6
                },
                effect_time_sec: {
                    type: "int64",
                    id: 7
                },
                to_anchor_id: {
                    type: "int64",
                    id: 8
                },
                to_anchor_id_str: {
                    type: "string",
                    id: 9
                }
            }
        }
    }
    ,
    565: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                effect_id: {
                    type: "string",
                    id: 1
                }
            }
        }
    }
    ,
    907871: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                score: {
                    type: "int64",
                    id: 1
                },
                from_user_id: {
                    type: "int64",
                    id: 2
                },
                to_anchor_id: {
                    type: "int64",
                    id: 3
                },
                affected_anchor_pairs: {
                    rule: "repeated",
                    type: "AnchorPair",
                    id: 4
                }
            }
        }
    }
    ,
    820043: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                content: {
                    type: "string",
                    id: 2
                },
                color: {
                    type: "string",
                    id: 3
                },
                traceid: {
                    type: "string",
                    id: 4
                },
                icon: {
                    type: "webcast.data.Image",
                    id: 5
                },
                action_content: {
                    type: "string",
                    id: 6
                },
                action_type: {
                    type: "int64",
                    id: 7
                },
                push_message_display_time: {
                    type: "int64",
                    id: 8
                }
            }
        }
    }
    ,
    901782: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                uid: {
                    type: "int64",
                    id: 1
                },
                display_text: {
                    type: "webcast.data.Text",
                    id: 2
                }
            }
        }
    }
    ,
    799277: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                item_list: {
                    rule: "repeated",
                    type: "SpotlightItem",
                    id: 2
                }
            }
        }
    }
    ,
    23474: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                id: {
                    type: "int64",
                    id: 1
                },
                image: {
                    type: "webcast.data.Image",
                    id: 2
                },
                review_status: {
                    type: "SpotlightReviewStatus",
                    id: 3
                },
                is_pinned: {
                    type: "bool",
                    id: 4
                },
                create_time_second: {
                    type: "int64",
                    id: 5
                },
                audit_info: {
                    type: "data.AuditInfo",
                    id: 6
                }
            }
        }
    }
    ,
    880587: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                SpotlightReviewStatusUnknown: 0,
                SpotlightReviewStatusApproved: 1,
                SpotlightReviewStatusUnderReview: 2,
                SpotlightReviewStatusRejected: 3
            }
        }
    }
    ,
    74692: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                sprite_url: {
                    type: "string",
                    id: 1
                },
                total_num: {
                    type: "int32",
                    id: 2
                },
                x_num: {
                    type: "int32",
                    id: 3
                },
                y_num: {
                    type: "int32",
                    id: 4
                },
                image_height: {
                    type: "int32",
                    id: 5
                },
                image_width: {
                    type: "int32",
                    id: 6
                },
                url: {
                    type: "string",
                    id: 7
                },
                sprite_num: {
                    type: "int64",
                    id: 8
                },
                image_x_num: {
                    type: "int64",
                    id: 9
                },
                image_y_num: {
                    type: "int64",
                    id: 10
                },
                fps: {
                    type: "int64",
                    id: 11
                }
            }
        }
    }
    ,
    750480: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                url: {
                    type: "string",
                    id: 1
                },
                sprite_num: {
                    type: "int64",
                    id: 2
                },
                image_x_num: {
                    type: "int64",
                    id: 3
                },
                image_y_num: {
                    type: "int64",
                    id: 4
                },
                image_height: {
                    type: "int64",
                    id: 5
                },
                image_width: {
                    type: "int64",
                    id: 6
                },
                fps: {
                    type: "int64",
                    id: 7
                }
            }
        }
    }
    ,
    943846: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                type: {
                    type: "int32",
                    id: 1
                },
                id: {
                    type: "string",
                    id: 2
                },
                title: {
                    type: "string",
                    id: 3
                },
                open_url: {
                    type: "string",
                    id: 4
                },
                web_url: {
                    type: "string",
                    id: 5
                },
                icon: {
                    type: "webcast.data.Image",
                    id: 6
                },
                status: {
                    type: "StampStatus",
                    id: 7
                },
                description: {
                    type: "string",
                    id: 8
                },
                thumbnail: {
                    type: "webcast.data.Image",
                    id: 9
                },
                extra: {
                    type: "string",
                    id: 98
                },
                log_extra: {
                    type: "string",
                    id: 99
                }
            }
        }
    }
    ,
    802411: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                stamps: {
                    rule: "repeated",
                    type: "webcast.data.StampInfo",
                    id: 2
                }
            }
        }
    }
    ,
    454232: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                id: {
                    type: "string",
                    id: 1
                },
                type: {
                    type: "int32",
                    id: 2
                }
            }
        }
    }
    ,
    264156: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                Stamp_Default: 0,
                Stamp_Explaining: 1,
                Stamp_Removed: 2
            }
        }
    }
    ,
    144406: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                money: {
                    type: "int64",
                    id: 1
                },
                currency_name: {
                    type: "string",
                    id: 2
                },
                currency_character: {
                    type: "string",
                    id: 3
                },
                money_str: {
                    type: "string",
                    id: 4
                },
                exchange_rate: {
                    type: "float",
                    id: 5
                }
            }
        }
    }
    ,
    74538: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                STAR_COMMENT_ACTION_UNKNOWN: 0,
                STAR_COMMENT_ACTION_DELETED: 1,
                STAR_COMMENT_ACTION_POLLING: 2
            }
        }
    }
    ,
    21714: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                star_comment_switch: {
                    type: "bool",
                    id: 1
                },
                grant_group: {
                    type: "GrantGroup",
                    id: 2
                },
                grant_level: {
                    type: "int32",
                    id: 3
                },
                star_comment_qualification: {
                    type: "bool",
                    id: 4
                },
                display_lock: {
                    type: "bool",
                    id: 5
                }
            }
        }
    }
    ,
    56189: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                star_comment_id: {
                    type: "string",
                    id: 1
                },
                user: {
                    type: "webcast.data.User",
                    id: 2
                },
                content: {
                    type: "string",
                    id: 3
                },
                duration: {
                    type: "int64",
                    id: 4
                },
                start_time_ms: {
                    type: "int64",
                    id: 5
                },
                comment_option: {
                    type: "webcast.data.StarCommentOption",
                    id: 6
                },
                content_language: {
                    type: "string",
                    id: 7
                }
            }
        }
    }
    ,
    584024: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                star_comment_action: {
                    type: "StarCommentAction",
                    id: 2
                },
                msg_id: {
                    type: "int64",
                    id: 3
                },
                operator: {
                    type: "webcast.data.User",
                    id: 4
                },
                star_comment_message: {
                    type: "StarCommentMessage",
                    id: 5
                }
            }
        }
    }
    ,
    285601: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                STAR_COMMENT_OPTION_UNKNOWN: 0,
                STAR_COMMENT_OPTION_V1BASIC: 10,
                STAR_COMMENT_OPTION_V1ELEVATED: 20
            }
        }
    }
    ,
    988809: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                queue_version: {
                    type: "int32",
                    id: 2
                },
                current: {
                    type: "StarCommentMessage",
                    id: 3
                },
                next: {
                    type: "StarCommentMessage",
                    id: 4
                }
            }
        }
    }
    ,
    663327: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                scene: {
                    type: "int32",
                    id: 1
                },
                app_id: {
                    type: "int64",
                    id: 2
                },
                live_id: {
                    type: "int64",
                    id: 3
                },
                myself: {
                    type: "Player",
                    id: 4
                },
                channel_id: {
                    type: "int64",
                    id: 5
                }
            }
        }
    }
    ,
    174360: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                STATE_INVALID: 0,
                STATE_LAYOUT: 1,
                STATE_ONLINE_USER_STATE: 2,
                STATE_AUDIO_MUTE: 3,
                STATE_VIDEO_MUTE: 4,
                STATE_RTC_CONNECTION: 5,
                STATE_NETWORK: 6,
                STATE_BACKGROUND_IMAGE: 7,
                STATE_SCREEN_ORIENTATION: 8,
                STATE_AVATAR_ID: 9
            }
        }
    }
    ,
    624836: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                NoMute: 0,
                MuteAll: 1,
                MuteAllTemporary: 2,
                MuteFriends: 3,
                MuteFriendsTemporary: 4,
                MuteSuggestion: 5,
                MuteSuggestionTemporary: 6,
                MatureTheme: 21
            }
        }
    }
    ,
    917255: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                STICKER_ASSET_VARIANT_UNKNOWN: 0,
                STICKER_ASSET_VARIANT_NORMAL: 1,
                STICKER_ASSET_VARIANT_DOWNGRADE: 2,
                STICKER_ASSET_VARIANT_FALLBACK: 3
            }
        }
    }
    ,
    268899: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                STICKER_ASSET_VARIANT_REASON_UNKNOWN: 0,
                STICKER_ASSET_VARIANT_REASON_APP_VERSION: 1,
                STICKER_ASSET_VARIANT_REASON_DEVICE_IN_BLACKLIST: 2,
                STICKER_ASSET_VARIANT_REASON_DEVICE_NOT_IN_WHITELIST: 3,
                STICKER_ASSET_VARIANT_REASON_SDK_VERSION: 4,
                STICKER_ASSET_VARIANT_REASON_ES_VERSWION: 5,
                STICKER_ASSET_VARIANT_REASON_DEVICE_SCORE: 6
            }
        }
    }
    ,
    92561: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                im_extra_decorations: {
                    rule: "repeated",
                    type: "webcast.data.Decoration",
                    id: 2
                }
            }
        }
    }
    ,
    451071: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                UnknownType: 0,
                SoldOut: 1,
                Replenishment: 2
            }
        }
    }
    ,
    538565: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                control_params: {
                    type: "string",
                    id: 2
                }
            }
        }
    }
    ,
    981810: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                indicator: {
                    type: "webcast.data.Indicator",
                    id: 1
                },
                goal: {
                    type: "webcast.data.Goal",
                    id: 2
                }
            }
        }
    }
    ,
    564578: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                lead_text: {
                    type: "string",
                    id: 1
                },
                reasonable_rec: {
                    type: "ReasonableGoalRec",
                    id: 2
                }
            }
        }
    }
    ,
    861267: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                stream_id: {
                    type: "int64",
                    id: 1
                },
                pre_status: {
                    type: "StreamStatusType",
                    id: 2
                },
                cur_status: {
                    type: "StreamStatusType",
                    id: 3
                },
                change_timestamp: {
                    type: "int64",
                    id: 4
                }
            }
        }
    }
    ,
    981460: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                streams: {
                    rule: "repeated",
                    type: "StreamStatusChangeInfo",
                    id: 2
                }
            }
        }
    }
    ,
    962191: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                STREAM_STATUS_TYPE_UNKNOWN: 0,
                STREAM_STATUS_TYPE_CREATE: 1,
                STREAM_STATUS_TYPE_LIVING: 2,
                STREAM_STATUS_TYPE_STOPED: 3
            }
        }
    }
    ,
    521715: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                is_gated_room: {
                    type: "bool",
                    id: 1
                },
                is_paid_event: {
                    type: "bool",
                    id: 2
                }
            }
        }
    }
    ,
    822196: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                provider: {
                    type: "int64",
                    id: 1
                },
                id: {
                    type: "int64",
                    id: 2
                },
                id_str: {
                    type: "string",
                    id: 3
                },
                resolution_name: {
                    keyType: "string",
                    type: "string",
                    id: 4
                },
                default_resolution: {
                    type: "string",
                    id: 5
                },
                extra: {
                    type: "StreamUrlExtra",
                    id: 6
                },
                rtmp_push_url: {
                    type: "string",
                    id: 7
                },
                rtmp_pull_url: {
                    type: "string",
                    id: 8
                },
                flv_pull_url: {
                    keyType: "string",
                    type: "string",
                    id: 9
                },
                candidate_resolution: {
                    rule: "repeated",
                    type: "string",
                    id: 10
                },
                hls_pull_url: {
                    type: "string",
                    id: 11
                },
                hls_pull_url_params: {
                    type: "string",
                    id: 12
                },
                rtmp_pull_url_params: {
                    type: "string",
                    id: 13
                },
                flv_pull_url_params: {
                    keyType: "string",
                    type: "string",
                    id: 14
                },
                rtmp_push_url_params: {
                    type: "string",
                    id: 15
                },
                push_urls: {
                    rule: "repeated",
                    type: "string",
                    id: 16
                },
                live_core_sdk_data: {
                    type: "LiveCoreSDKData",
                    id: 17
                },
                hls_pull_url_map: {
                    keyType: "string",
                    type: "string",
                    id: 18
                },
                complete_push_urls: {
                    rule: "repeated",
                    type: "string",
                    id: 19
                },
                stream_control_type: {
                    type: "int32",
                    id: 20
                },
                vr_type: {
                    type: "int32",
                    id: 21
                },
                stream_delay_ms: {
                    type: "int64",
                    id: 22
                },
                push_resolution: {
                    type: "string",
                    id: 23
                },
                stream_app_id: {
                    type: "int64",
                    id: 24
                },
                alive_timestamp: {
                    type: "int64",
                    id: 25
                },
                stream_size_width: {
                    type: "int64",
                    id: 26
                },
                stream_size_height: {
                    type: "int64",
                    id: 27
                },
                drm_type: {
                    type: "DrmType",
                    id: 28
                }
            },
            nested: {
                StreamUrlExtra: {
                    fields: {
                        height: {
                            type: "int64",
                            id: 1
                        },
                        width: {
                            type: "int64",
                            id: 2
                        },
                        fps: {
                            type: "int64",
                            id: 3
                        },
                        max_bitrate: {
                            type: "int64",
                            id: 4
                        },
                        min_bitrate: {
                            type: "int64",
                            id: 5
                        },
                        default_bitrate: {
                            type: "int64",
                            id: 6
                        },
                        bitrate_adapt_strategy: {
                            type: "int64",
                            id: 7
                        },
                        anchor_interact_profile: {
                            type: "int64",
                            id: 8
                        },
                        audience_interact_profile: {
                            type: "int64",
                            id: 9
                        },
                        hardware_encode: {
                            type: "bool",
                            id: 10
                        },
                        video_profile: {
                            type: "int64",
                            id: 12
                        },
                        super_resolution: {
                            type: "SuperResolution",
                            id: 14
                        },
                        deprecated1: {
                            type: "bool",
                            id: 15
                        },
                        gop_sec: {
                            type: "int64",
                            id: 16
                        },
                        bframe_enable: {
                            type: "bool",
                            id: 17
                        },
                        roi: {
                            type: "bool",
                            id: 18
                        },
                        sw_roi: {
                            type: "bool",
                            id: 19
                        },
                        bytevc1_enable: {
                            type: "bool",
                            id: 20
                        },
                        anchor_client_info: {
                            type: "AnchorClientInfo",
                            id: 21
                        }
                    },
                    nested: {
                        SuperResolution: {
                            fields: {
                                enable: {
                                    type: "bool",
                                    id: 1
                                },
                                strength: {
                                    type: "int64",
                                    id: 2
                                },
                                antialiasing: {
                                    type: "bool",
                                    id: 3
                                }
                            }
                        },
                        AnchorClientInfo: {
                            fields: {
                                custom_info: {
                                    type: "string",
                                    id: 1
                                }
                            }
                        }
                    }
                },
                LiveCoreSDKData: {
                    fields: {
                        pull_data: {
                            type: "PullData",
                            id: 1
                        },
                        push_data: {
                            type: "PushData",
                            id: 2
                        }
                    },
                    nested: {
                        PullData: {
                            fields: {
                                stream_data: {
                                    type: "string",
                                    id: 1
                                }
                            },
                            nested: {
                                Options: {
                                    fields: {
                                        default_quality: {
                                            type: "Quality",
                                            id: 1
                                        },
                                        qualities: {
                                            rule: "repeated",
                                            type: "Quality",
                                            id: 2
                                        },
                                        default_preview_quality: {
                                            type: "Quality",
                                            id: 3
                                        },
                                        show_quality_button: {
                                            type: "bool",
                                            id: 4
                                        }
                                    },
                                    nested: {
                                        Quality: {
                                            fields: {
                                                name: {
                                                    type: "string",
                                                    id: 1
                                                },
                                                sdk_key: {
                                                    type: "string",
                                                    id: 2
                                                },
                                                v_codec: {
                                                    type: "string",
                                                    id: 3
                                                },
                                                resolution: {
                                                    type: "string",
                                                    id: 4
                                                },
                                                level: {
                                                    type: "int32",
                                                    id: 5
                                                },
                                                icon_type: {
                                                    type: "int32",
                                                    id: 6
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        PushData: {
                            fields: {
                                resolution_params: {
                                    keyType: "string",
                                    type: "ResolutionParams",
                                    id: 1
                                },
                                push_stream_level: {
                                    type: "int32",
                                    id: 2
                                },
                                stream_data: {
                                    type: "string",
                                    id: 3
                                }
                            },
                            nested: {
                                ResolutionParams: {
                                    fields: {
                                        width: {
                                            type: "int64",
                                            id: 1
                                        },
                                        height: {
                                            type: "int64",
                                            id: 2
                                        },
                                        default_bitrate: {
                                            type: "int64",
                                            id: 3
                                        },
                                        min_bitrate: {
                                            type: "int64",
                                            id: 4
                                        },
                                        max_bitrate: {
                                            type: "int64",
                                            id: 5
                                        },
                                        fps: {
                                            type: "int64",
                                            id: 6
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                DrmType: {
                    values: {
                        None: 0,
                        Standard: 1,
                        SelfBuilt: 2
                    }
                }
            }
        }
    }
    ,
    38873: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                display_type: {
                    type: "BadgeDisplayType",
                    id: 1
                },
                str: {
                    type: "string",
                    id: 2
                }
            }
        }
    }
    ,
    547142: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                STYLE_STATUS_UNKNOWN: 0,
                STYLE_STATUS_SUCCESS: 1,
                STYLE_STATUS_FAILED: 2,
                STYLE_STATUS_FAILED_PICTURE: 3,
                STYLE_STATUS_FAILED_REVIEW: 4
            }
        }
    }
    ,
    173443: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                allow_pin_perk: {
                    type: "bool",
                    id: 1
                }
            }
        }
    }
    ,
    439256: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                benefit_type: {
                    type: "BenefitType",
                    id: 1
                },
                benefit_image: {
                    type: "webcast.data.Image",
                    id: 2
                },
                benefit_description: {
                    type: "string",
                    id: 3
                },
                background_color: {
                    type: "string",
                    id: 4
                }
            }
        }
    }
    ,
    831409: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                SubBenefitBlockStatusUnblock: 0,
                SubBenefitBlockStatusByShark: 1
            }
        }
    }
    ,
    674832: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                SubBenefitConfigStatusUnknown: 0,
                SubBenefitConfigStatusNoNeed: 1,
                SubBenefitConfigStatusNeed: 2,
                SubBenefitConfigStatusDone: 3
            }
        }
    }
    ,
    517353: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                SubBenefitEnableStatusUnknown: 0,
                SubBenefitEnableStatusEnable: 1,
                SubBenefitEnableStatusPending: 2,
                SubBenefitEnableStatusDisable: 3,
                SubBenefitEnableStatusLackPermission: 10
            }
        }
    }
    ,
    465351: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                SubBenefitUserConfigStatusUnknown: 0,
                SubBenefitUserConfigStatusNoNeed: 1,
                SubBenefitUserConfigStatusNeed: 2,
                SubBenefitUserConfigStatusDone: 3
            }
        }
    }
    ,
    637973: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                description: {
                    type: "webcast.data.Text",
                    id: 2
                },
                btn_name: {
                    type: "webcast.data.Text",
                    id: 3
                },
                btn_url: {
                    type: "string",
                    id: 4
                },
                capsule_scene: {
                    type: "string",
                    id: 5
                },
                from_user_id: {
                    type: "int64",
                    id: 6
                }
            }
        }
    }
    ,
    505959: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                SubCircle_Unknown: 0,
                SubCircle_OneTime: 1,
                SubCircle_MonthCircle: 2,
                SubCircle_BiMonthly: 3,
                SubCircle_Quarterly: 4,
                SubCircle_SemiAnnually: 5,
                SubCircle_Annually: 6,
                SubCircle_Weekly: 255
            }
        }
    }
    ,
    33580: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                data: {
                    type: "PushContractStatusResult",
                    id: 2
                },
                extra: {
                    type: "ResponseExtra",
                    id: 3
                }
            },
            nested: {
                ResponseExtra: {
                    fields: {
                        now: {
                            type: "int64",
                            id: 1
                        }
                    }
                }
            }
        }
    }
    ,
    78769: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                group_info_list: {
                    rule: "repeated",
                    type: "GroupInfo",
                    id: 1
                }
            }
        }
    }
    ,
    643511: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                benefit_id_str: {
                    type: "string",
                    id: 1
                },
                original_benefit_id_str: {
                    type: "string",
                    id: 2
                },
                official_template_id_str: {
                    type: "string",
                    id: 3
                },
                benefit_type: {
                    type: "SubCustomizedBenefitType",
                    id: 10
                },
                benefit_media: {
                    type: "SubCustomizedBenefitMedia",
                    id: 11
                },
                audit_status: {
                    type: "AuditStatus",
                    id: 20
                },
                config_status: {
                    type: "SubBenefitConfigStatus",
                    id: 21
                },
                enable_status: {
                    type: "SubBenefitEnableStatus",
                    id: 22
                },
                block_status: {
                    type: "SubBenefitBlockStatus",
                    id: 23
                },
                user_config_status: {
                    type: "SubBenefitUserConfigStatus",
                    id: 24
                },
                perk_details: {
                    type: "PerkDetails",
                    id: 25
                },
                audit_info: {
                    type: "data.AuditInfo",
                    id: 26
                },
                perk_tags: {
                    rule: "repeated",
                    type: "PerkTag",
                    id: 27
                },
                take_effect_at: {
                    type: "int64",
                    id: 28
                },
                cooling_down_type: {
                    type: "CoolingDownType",
                    id: 29
                },
                is_strategy_recommended: {
                    type: "bool",
                    id: 30
                }
            }
        }
    }
    ,
    827225: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                show_entrance: {
                    type: "bool",
                    id: 1
                },
                last_audit_status: {
                    type: "AuditStatus",
                    id: 2
                },
                last_benefit_id: {
                    type: "int64",
                    id: 3
                },
                figures: {
                    type: "int64",
                    id: 4
                },
                enabled_perks: {
                    rule: "repeated",
                    type: "Perk",
                    id: 5
                },
                max_perks_cnt: {
                    type: "int64",
                    id: 6
                },
                last_audit_info: {
                    type: "data.AuditInfo",
                    id: 7
                },
                show_progressive_benefit_prompt: {
                    type: "bool",
                    id: 8
                }
            }
        }
    }
    ,
    920419: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                icon_img: {
                    type: "webcast.data.Image",
                    id: 1
                },
                title: {
                    type: "string",
                    id: 2
                },
                content: {
                    type: "string",
                    id: 3
                },
                url: {
                    type: "string",
                    id: 4
                },
                background_color: {
                    type: "string",
                    id: 5
                },
                prompts: {
                    rule: "repeated",
                    type: "string",
                    id: 6
                },
                is_edited: {
                    type: "bool",
                    id: 7
                },
                icon_img_dark: {
                    type: "webcast.data.Image",
                    id: 8
                }
            }
        }
    }
    ,
    360735: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                SubCustomizedBenefitTypeUnknown: 0,
                SubCustomizedBenefitTypeText: 1,
                SubCustomizedBenefitTypeDiscord: 2,
                SubCustomizedBenefitTypeDefaultTemplate: 3,
                SubCustomizedBenefitTypeGamingTemplate: 4,
                SubCustomizedBenefitTypeSubOnlyVideo: 5,
                SubCustomizedBenefitTypeFansGroup: 6,
                SubCustomizedBenefitTypeSubOnlySpace: 7
            }
        }
    }
    ,
    769310: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                NotEligible: 0,
                LOP_0: 1,
                LOP_1: 2,
                PGC_Creator: 3
            }
        }
    }
    ,
    423997: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                send_sub_gift_notice: {
                    type: "string",
                    id: 1
                },
                send_url: {
                    type: "string",
                    id: 2
                },
                sub_gift_num: {
                    type: "int64",
                    id: 3
                },
                show_entrance: {
                    type: "bool",
                    id: 4
                }
            }
        }
    }
    ,
    249421: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                UnknownSubGiftType: 0,
                TrayDynamicGift: 1,
                AudioEffectGift: 2,
                SUB_GIFT_TYPE_BANNER_FLY_GIFT: 3,
                SUB_GIFT_TYPE_ANIMATION_FLY_GIFT: 4
            }
        }
    }
    ,
    36580: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            oneofs: {
                extra: {
                    oneof: ["gift"]
                }
            },
            fields: {
                type: {
                    type: "SubGoalType",
                    id: 1
                },
                id: {
                    type: "int64",
                    id: 2
                },
                progress: {
                    type: "int64",
                    id: 3
                },
                target: {
                    type: "int64",
                    id: 4
                },
                gift: {
                    type: "GiftSubGoal",
                    id: 5
                },
                id_str: {
                    type: "string",
                    id: 6
                },
                pin_info: {
                    type: "SubGoalPinInfo",
                    id: 7
                },
                source: {
                    type: "GetSource",
                    id: 8
                },
                recommended_text: {
                    type: "string",
                    id: 9
                },
                recommended_header: {
                    type: "string",
                    id: 10
                }
            }
        }
    }
    ,
    116662: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                id: {
                    type: "string",
                    id: 1
                },
                contribution_count: {
                    type: "int64",
                    id: 2
                }
            }
        }
    }
    ,
    550636: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                indicator: {
                    type: "webcast.data.Indicator",
                    id: 1
                },
                goal: {
                    type: "webcast.data.Goal",
                    id: 2
                }
            }
        }
    }
    ,
    826555: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                goal_id: {
                    type: "int64",
                    id: 1
                },
                time_to_live: {
                    type: "int64",
                    id: 2
                },
                desc: {
                    type: "SubPinCardText",
                    id: 3
                },
                target: {
                    type: "int64",
                    id: 4
                },
                progress: {
                    type: "int64",
                    id: 5
                }
            }
        }
    }
    ,
    272353: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                pin_start_time: {
                    type: "int64",
                    id: 1
                },
                pin_end_time: {
                    type: "int64",
                    id: 2
                },
                pin_ready_time: {
                    type: "int64",
                    id: 3
                }
            }
        }
    }
    ,
    516588: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            oneofs: {
                extra: {
                    oneof: ["subscription_rec_extra", "stream_goal_rec_extra"]
                }
            },
            fields: {
                type: {
                    type: "SubGoalType",
                    id: 1
                },
                items: {
                    rule: "repeated",
                    type: "SubGoal",
                    id: 2
                },
                description: {
                    type: "string",
                    id: 3
                },
                subscription_rec_extra: {
                    type: "SubscriptionGoalRecExtra",
                    id: 4
                },
                stream_goal_rec_extra: {
                    type: "StreamGoalRecExtra",
                    id: 5
                },
                description_type: {
                    type: "DescriptionType",
                    id: 6
                }
            }
        }
    }
    ,
    659836: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                SubGoalTypeUnknown: 0,
                SubGoalTypeGift: 1,
                SubGoalTypeSubscription: 2
            }
        }
    }
    ,
    458416: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                type: {
                    type: "SubGoalType",
                    id: 1
                },
                id: {
                    type: "int64",
                    id: 2
                },
                progress: {
                    type: "int64",
                    id: 3
                },
                target: {
                    type: "int64",
                    id: 4
                },
                gift: {
                    type: "GiftSubGoal",
                    id: 5
                },
                id_str: {
                    type: "string",
                    id: 6
                },
                pin_info: {
                    type: "SubGoalPinInfo",
                    id: 7
                }
            }
        }
    }
    ,
    931043: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                name: {
                    type: "string",
                    id: 1
                },
                id: {
                    type: "int64",
                    id: 2
                },
                main_event_id: {
                    type: "int64",
                    id: 3
                },
                start_end_time: {
                    rule: "repeated",
                    type: "TimeRange",
                    id: 4
                },
                country_whitelist: {
                    rule: "repeated",
                    type: "string",
                    id: 5
                },
                country_blacklist: {
                    rule: "repeated",
                    type: "string",
                    id: 6
                },
                gift_ids: {
                    rule: "repeated",
                    type: "int32",
                    id: 7
                },
                mp4_template_name: {
                    type: "string",
                    id: 8
                },
                template_duration: {
                    type: "float",
                    id: 9
                },
                publish_page_info: {
                    type: "PublishPageInfo",
                    id: 10
                },
                detailed_page_info: {
                    type: "DetailedPageInfo",
                    id: 11
                },
                quota: {
                    type: "int64",
                    id: 12
                },
                duration: {
                    type: "Duration",
                    id: 13
                }
            },
            nested: {
                Duration: {
                    fields: {
                        min: {
                            type: "int32",
                            id: 1
                        },
                        max: {
                            type: "int32",
                            id: 2
                        }
                    }
                },
                DetailedPageInfo: {
                    fields: {
                        display_icon: {
                            type: "string",
                            id: 1
                        },
                        title: {
                            type: "HighlightInfo",
                            id: 2
                        },
                        sub_title: {
                            type: "HighlightInfo",
                            id: 3
                        },
                        pop_up_page_info: {
                            type: "HighlightInfo",
                            id: 4
                        }
                    }
                },
                PublishPageInfo: {
                    fields: {
                        hashtag: {
                            rule: "repeated",
                            type: "HighlightInfo",
                            id: 1
                        }
                    }
                }
            }
        }
    }
    ,
    466879: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                user_id: {
                    type: "string",
                    id: 1
                },
                anchor_id: {
                    type: "string",
                    id: 2
                },
                sub_start_time: {
                    type: "int64",
                    id: 3
                },
                sub_end_time: {
                    type: "int64",
                    id: 4
                },
                next_renew_time: {
                    type: "int64",
                    id: 5
                },
                subscribed_month: {
                    type: "int32",
                    id: 6
                },
                is_subscribing: {
                    type: "bool",
                    id: 7
                },
                sub_level: {
                    type: "SubLevel",
                    id: 8
                },
                status: {
                    type: "PayStatus",
                    id: 9
                },
                sub_info_not_found: {
                    type: "bool",
                    id: 10
                },
                sku_name: {
                    type: "string",
                    id: 11
                },
                pay_channel: {
                    type: "PayChannel",
                    id: 12
                },
                grace_info: {
                    type: "GraceInfo",
                    id: 13
                },
                statistics_info: {
                    type: "SubStatisticsData",
                    id: 14
                },
                subscribed_days: {
                    type: "int32",
                    id: 15
                },
                price_change_info: {
                    type: "PriceChangeInfo",
                    id: 16
                },
                last_operation: {
                    type: "SubOperation",
                    id: 17
                },
                package_id: {
                    type: "string",
                    id: 18
                },
                sub_circle: {
                    type: "int64",
                    id: 19
                },
                renewal_period: {
                    type: "int32",
                    id: 20
                },
                is_mocked: {
                    type: "bool",
                    id: 21
                }
            }
        }
    }
    ,
    921438: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                item_id: {
                    type: "string",
                    id: 1
                },
                cover: {
                    type: "webcast.data.Image",
                    id: 2
                },
                play_url: {
                    type: "string",
                    id: 3
                },
                duration: {
                    type: "int64",
                    id: 4
                },
                creator: {
                    type: "webcast.data.User",
                    id: 5
                },
                description: {
                    type: "string",
                    id: 6
                }
            }
        }
    }
    ,
    589581: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                level: {
                    type: "int32",
                    id: 1
                },
                desc: {
                    type: "string",
                    id: 2
                },
                month_limit: {
                    type: "int32",
                    id: 3
                },
                badge: {
                    type: "LevelBadge",
                    id: 4
                },
                badge_struct: {
                    type: "webcast.data.BadgeStruct",
                    id: 5
                }
            }
        }
    }
    ,
    865665: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                show_entrance: {
                    type: "bool",
                    id: 1
                },
                milestone_tier: {
                    type: "int32",
                    id: 2
                },
                subscribers_to_next_tier: {
                    type: "int32",
                    id: 3
                },
                extra_monthly_payout_rate: {
                    type: "int32",
                    id: 4
                },
                icon: {
                    type: "webcast.data.Image",
                    id: 5
                },
                entrance_message: {
                    type: "string",
                    id: 6
                }
            }
        }
    }
    ,
    982283: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                user: {
                    type: "webcast.data.User",
                    id: 2
                },
                exhibition_type: {
                    type: "ExhibitionType",
                    id: 3
                },
                sub_month: {
                    type: "int64",
                    id: 4
                },
                subscribe_type: {
                    type: "SubscribeType",
                    id: 5
                },
                old_subscribe_status: {
                    type: "OldSubscribeStatus",
                    id: 6
                },
                message_type: {
                    type: "MessageType",
                    id: 7
                },
                subscribing_status: {
                    type: "SubscribingStatus",
                    id: 8
                },
                is_send: {
                    type: "bool",
                    id: 9
                },
                is_custom: {
                    type: "bool",
                    id: 10
                },
                gift_source: {
                    type: "GiftSource",
                    id: 11
                },
                message_display_style: {
                    type: "MessageDisplayStyle",
                    id: 12
                },
                public_area_message_common: {
                    type: "PublicAreaMessageCommon",
                    id: 13
                },
                package_id: {
                    type: "string",
                    id: 14
                }
            }
        }
    }
    ,
    118309: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                total_count_str: {
                    type: "string",
                    id: 1
                },
                total_count: {
                    type: "int32",
                    id: 2
                },
                sov_brief_info: {
                    rule: "repeated",
                    type: "SOVBriefInfo",
                    id: 3
                },
                creator_status: {
                    type: "SOVStatus",
                    id: 4
                },
                schema: {
                    type: "string",
                    id: 5
                },
                is_sov_adjustments_enabled_for_consumer: {
                    type: "bool",
                    id: 6
                }
            }
        }
    }
    ,
    954862: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                operation_type: {
                    type: "SubOperationType",
                    id: 1
                },
                operation_time: {
                    type: "int64",
                    id: 2
                }
            }
        }
    }
    ,
    652902: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                OPERATION_TYPE_UNKNOWN: 0,
                OPERATION_TYPE_NEW_SUBSCRIPTION: 1,
                OPERATION_TYPE_SINGLE_RENEWAL: 2,
                OPERATION_TYPE_AUTO_RENEWAL: 3,
                OPERATION_TYPE_UPGRADE: 4,
                OPERATION_TYPE_CANCELLATION: 5
            }
        }
    }
    ,
    959707: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                summary: {
                    type: "SubPackageSummary",
                    id: 1
                },
                badge_detail: {
                    type: "BadgeDetail",
                    id: 2
                },
                emote_count: {
                    type: "int32",
                    id: 3
                },
                benefit_list: {
                    rule: "repeated",
                    type: "SubCustomizedBenefit",
                    id: 4
                },
                subscriber_count: {
                    type: "int32",
                    id: 5
                }
            }
        }
    }
    ,
    561596: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                package_summary: {
                    type: "SubPackageSummary",
                    id: 1
                },
                badge_detail: {
                    type: "BadgeDetail",
                    id: 2
                }
            }
        }
    }
    ,
    351753: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                badge: {
                    type: "Badge",
                    id: 1
                }
            }
        }
    }
    ,
    939240: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                package_summary: {
                    type: "SubPackageSummary",
                    id: 1
                },
                customized_benefits: {
                    rule: "repeated",
                    type: "SubCustomizedBenefit",
                    id: 2
                },
                benefit_config: {
                    type: "BenefitConfig",
                    id: 3
                },
                progressive_benefit_info: {
                    type: "ProgressiveBenefitInfo",
                    id: 4
                }
            }
        }
    }
    ,
    70083: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                package_summary: {
                    type: "SubPackageSummary",
                    id: 1
                },
                emote_detail: {
                    type: "EmoteDetail",
                    id: 2
                },
                emote_config: {
                    type: "EmoteConfig",
                    id: 3
                }
            }
        }
    }
    ,
    601070: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                emote_list: {
                    rule: "repeated",
                    type: "Emote",
                    id: 1
                }
            }
        }
    }
    ,
    582122: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                price_tier_id: {
                    type: "int64",
                    id: 1
                },
                usd_price_amount_micros: {
                    type: "int64",
                    id: 2
                },
                local_price_amount_micros: {
                    type: "int64",
                    id: 3
                },
                local_currency: {
                    type: "string",
                    id: 4
                },
                price_group: {
                    type: "PriceGroup",
                    id: 5
                },
                local_currency_symbol: {
                    type: "string",
                    id: 6
                }
            }
        }
    }
    ,
    895412: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                package_summary: {
                    type: "SubPackageSummary",
                    id: 1
                },
                all_levels: {
                    rule: "repeated",
                    type: "SubLevel",
                    id: 2
                },
                badge: {
                    type: "Badge",
                    id: 3
                },
                emote_detail: {
                    type: "EmoteDetail",
                    id: 4
                },
                customized_benefits: {
                    rule: "repeated",
                    type: "SubCustomizedBenefit",
                    id: 5
                },
                progressive_benefit_info: {
                    type: "ProgressiveBenefitInfo",
                    id: 6
                },
                badge_detail: {
                    type: "BadgeDetail",
                    id: 7
                }
            }
        }
    }
    ,
    79667: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                id: {
                    type: "string",
                    id: 1
                },
                price_info: {
                    type: "SubPackagePriceInfo",
                    id: 2
                },
                name: {
                    type: "string",
                    id: 3
                },
                desc: {
                    type: "string",
                    id: 4
                },
                name_audit_status: {
                    type: "AuditStatus",
                    id: 5
                },
                desc_audit_status: {
                    type: "AuditStatus",
                    id: 6
                },
                is_pinned: {
                    type: "bool",
                    id: 7
                },
                is_hidden: {
                    type: "bool",
                    id: 8
                },
                is_default_package: {
                    type: "bool",
                    id: 9
                },
                badge_icon: {
                    type: "webcast.data.Image",
                    id: 10
                },
                custom_promotion: {
                    type: "CustomPromotion",
                    id: 11
                }
            }
        }
    }
    ,
    865662: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                time_to_live: {
                    type: "int64",
                    id: 1
                },
                title: {
                    type: "Text",
                    id: 2
                },
                desc: {
                    type: "Text",
                    id: 3
                },
                image: {
                    type: "Image",
                    id: 4
                },
                type: {
                    type: "PinCardType",
                    id: 5
                },
                id: {
                    type: "int64",
                    id: 6
                },
                template_id: {
                    type: "int64",
                    id: 7
                },
                goal_pin_card: {
                    type: "SubGoalPinCard",
                    id: 8
                },
                action_schema: {
                    type: "string",
                    id: 9
                },
                last_pin_timestamp: {
                    type: "int64",
                    id: 10
                }
            },
            nested: {
                Text: {
                    fields: {
                        type: {
                            type: "TextType",
                            id: 1
                        },
                        Content: {
                            type: "string",
                            id: 2
                        }
                    },
                    nested: {
                        TextType: {
                            values: {
                                UnknownTextType: 0,
                                OriginalText: 1,
                                StarlingKey: 2
                            }
                        }
                    }
                }
            }
        }
    }
    ,
    659465: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                type: {
                    type: "TextType",
                    id: 1
                },
                Content: {
                    type: "string",
                    id: 2
                }
            },
            nested: {
                TextType: {
                    values: {
                        TEXT_TYPE_UNKNOWN: 0,
                        TEXT_TYPE_ORIGINAL: 1,
                        TEXT_TYPE_STARLING_KEY: 2
                    }
                }
            }
        }
    }
    ,
    585071: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                action_type: {
                    type: "ActionType",
                    id: 2
                },
                card: {
                    type: "webcast.data.SubPinCard",
                    id: 3
                },
                operator_user_id: {
                    type: "int64",
                    id: 4
                }
            },
            nested: {
                ActionType: {
                    values: {
                        Unknown: 0,
                        Pin: 1,
                        UnPin: 2
                    }
                }
            }
        }
    }
    ,
    980202: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                rank_type: {
                    type: "ProfitRankType",
                    id: 1
                },
                title_text: {
                    type: "webcast.data.Text",
                    id: 2
                },
                icon: {
                    type: "webcast.data.Image",
                    id: 3
                }
            }
        }
    }
    ,
    109284: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                first_sub_start_time: {
                    type: "int64",
                    id: 1
                },
                first_sub_end_time: {
                    type: "int64",
                    id: 2
                },
                last_sub_start_time: {
                    type: "int64",
                    id: 3
                },
                last_sub_end_time: {
                    type: "int64",
                    id: 4
                },
                active_subscribe_days: {
                    type: "int32",
                    id: 5
                }
            }
        }
    }
    ,
    39890: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                sub_user_task: {
                    type: "SubUserTask",
                    id: 1
                }
            }
        }
    }
    ,
    126424: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                SubTaskStatusUnknown: 0,
                SubTaskStatusNormal: 1,
                SubTaskStatusFirstOnBoarding: 2,
                SubTaskStatusFinishedOnBoarding: 3
            }
        }
    }
    ,
    628731: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                type: {
                    type: "SubTimerStickerChangeType",
                    id: 1
                },
                timer_id: {
                    type: "int64",
                    id: 2
                },
                op_type: {
                    type: "TimerOpType",
                    id: 3
                },
                timer_status: {
                    type: "TimerStatus",
                    id: 4
                },
                anchor_side_title: {
                    type: "string",
                    id: 5
                },
                user_side_title: {
                    type: "string",
                    id: 6
                },
                sub_increase_count: {
                    type: "int32",
                    id: 7
                },
                time_increase_per_sub: {
                    type: "int64",
                    id: 8
                },
                time_increase: {
                    type: "int64",
                    id: 9
                },
                total_time: {
                    type: "int64",
                    id: 10
                },
                remaining_time: {
                    type: "int64",
                    id: 11
                },
                timestamp: {
                    type: "int64",
                    id: 12
                },
                sticker_x: {
                    type: "int64",
                    id: 13
                },
                sticker_y: {
                    type: "int64",
                    id: 14
                },
                screen_w: {
                    type: "int64",
                    id: 15
                },
                screen_h: {
                    type: "int64",
                    id: 16
                }
            }
        }
    }
    ,
    782091: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                TitleChange: 0,
                StatusChange: 1,
                PositionChange: 2,
                SubIncrease: 3,
                Align: 4
            }
        }
    }
    ,
    983104: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                sticker: {
                    type: "webcast.data.SubTimerSticker",
                    id: 2
                }
            }
        }
    }
    ,
    777666: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                DefaultSubType: 0,
                EnterSuccess: 1,
                DrawResultWin: 2,
                DrawResultNotWin: 3
            }
        }
    }
    ,
    606938: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                upsell_method: {
                    type: "webcast.data.UpsellMethod",
                    id: 1
                },
                schema: {
                    type: "string",
                    id: 2
                }
            }
        }
    }
    ,
    751553: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                SubUserTaskUnknown: 0,
                SubUserTaskSendEmotes: 1,
                SubUserTaskLiveAppointment: 2,
                SubUserTaskSendSubGift: 3,
                SubUserTaskInteractionComments: 4,
                SubUserTaskRenewSubscription: 5,
                SubUserTaskSubInGracePeriod: 6,
                SubUserTaskJoinDiscord: 7,
                SubUserTaskPriceChange: 8,
                SubUserTaskPlanChange: 9
            }
        }
    }
    ,
    117481: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                emote_list: {
                    rule: "repeated",
                    type: "webcast.data.Emote",
                    id: 2
                }
            }
        }
    }
    ,
    89574: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                sub_wave_im_msg: {
                    type: "webcast.data.SubWaveImMsg",
                    id: 1
                }
            }
        }
    }
    ,
    534339: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                msg_type: {
                    type: "SubWaveImMsgType",
                    id: 1
                },
                new_come_subscriber_info: {
                    type: "SubWaveSubscriberInfo",
                    id: 2
                },
                sub_wave_info_common: {
                    type: "SubWaveInfoCommon",
                    id: 3
                },
                wave_reward: {
                    type: "WaveReward",
                    id: 4
                },
                current_strike_round: {
                    type: "SubWaveStrikeInfo",
                    id: 5
                },
                strike_enabled: {
                    type: "bool",
                    id: 6
                }
            }
        }
    }
    ,
    64667: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                SUB_WAVE_IM_MSG_TYPE_WAVE_START: 0,
                SUB_WAVE_IM_MSG_TYPE_NEW_COME_SUBSCRIBER: 1,
                SUB_WAVE_IM_MSG_TYPE_WAVE_FINISH: 2,
                SUB_WAVE_IM_MSG_TYPE_RECEIVE_REWARD: 3,
                SUB_WAVE_IM_MSG_TYPE_WAVE_FINISH_STRIKE_START: 4,
                SUB_WAVE_IM_MSG_TYPE_STRIKE_FINISH: 5,
                SUB_WAVE_IM_MSG_TYPE_STRIKE_FINISH_NEXT_STRIKE_START: 6,
                SUB_WAVE_IM_MSG_TYPE_REWARD_SENT: 7
            }
        }
    }
    ,
    253614: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                is_user_wave_member: {
                    type: "bool",
                    id: 1
                },
                user_wave_reward: {
                    type: "WaveReward",
                    id: 2
                },
                sub_wave_info_common: {
                    type: "SubWaveInfoCommon",
                    id: 3
                },
                has_sub_wave_custom_emote: {
                    type: "bool",
                    id: 4
                }
            }
        }
    }
    ,
    237515: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                sub_wave_settings: {
                    type: "AnchorSubWaveCurrentSettings",
                    id: 1
                },
                wave_sub_count: {
                    type: "int64",
                    id: 2
                },
                total_sub_count: {
                    type: "int64",
                    id: 3
                },
                start_time: {
                    type: "int64",
                    id: 4
                },
                end_time: {
                    type: "int64",
                    id: 5
                },
                wave_status: {
                    type: "WaveStatus",
                    id: 6
                },
                thanks_list: {
                    rule: "repeated",
                    type: "SubWaveSubscriberInfo",
                    id: 7
                },
                wave_target_sub_count: {
                    type: "int64",
                    id: 8
                },
                wave_open_record_id: {
                    type: "int64",
                    id: 9
                },
                sub_wave_strikes: {
                    rule: "repeated",
                    type: "SubWaveStrikeInfo",
                    id: 10
                }
            }
        }
    }
    ,
    263779: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                sub_wave_im_msg: {
                    type: "webcast.data.SubWaveImMsg",
                    id: 2
                }
            }
        }
    }
    ,
    877864: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                start_time: {
                    type: "int64",
                    id: 1
                },
                end_time: {
                    type: "int64",
                    id: 2
                },
                round: {
                    type: "int64",
                    id: 3
                },
                status: {
                    type: "WaveStatus",
                    id: 4
                },
                emote_list: {
                    rule: "repeated",
                    type: "webcast.data.Emote",
                    id: 5
                },
                strike_reward: {
                    type: "WaveReward",
                    id: 6
                },
                strike_target_count: {
                    type: "int64",
                    id: 8
                },
                strike_record_id: {
                    type: "int64",
                    id: 7
                }
            }
        }
    }
    ,
    681100: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                user_id: {
                    type: "int64",
                    id: 1
                },
                avatar: {
                    type: "webcast.data.Image",
                    id: 2
                },
                display_id: {
                    type: "string",
                    id: 3
                },
                user_id_str: {
                    type: "string",
                    id: 4
                },
                badge_list: {
                    rule: "repeated",
                    type: "webcast.data.BadgeStruct",
                    id: 5
                }
            }
        }
    }
    ,
    400270: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                top_offset: {
                    type: "float",
                    id: 1
                },
                center_offset: {
                    type: "float",
                    id: 2
                },
                expire_time: {
                    type: "int64",
                    id: 3
                }
            }
        }
    }
    ,
    822853: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                SubscribeType_Once: 0,
                SubscribeType_Auto: 1,
                SubscribeType_Default: 100
            }
        }
    }
    ,
    935356: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                SubscribingStatus_Unknown: 0,
                SubscribingStatus_Once: 1,
                SubscribingStatus_Circle: 2,
                SubscribingStatus_CircleCancel: 3,
                SubscribingStatus_Refund: 4,
                SubscribingStatus_InGracePeriod: 5,
                SubscribingStatus_NotInGracePeriod: 6
            }
        }
    }
    ,
    156068: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                SubscriptionFontStyle_Normal: 0,
                SubscriptionFontStyle_Bold: 1
            }
        }
    }
    ,
    7775: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                subscription_count: {
                    type: "int32",
                    id: 1
                }
            }
        }
    }
    ,
    700708: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                current_status: {
                    type: "AuditStatus",
                    id: 1
                }
            }
        }
    }
    ,
    544110: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                user: {
                    type: "webcast.data.User",
                    id: 2
                },
                exhibition_type: {
                    type: "ExhibitionType",
                    id: 3
                }
            }
        }
    }
    ,
    233008: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                text: {
                    type: "string",
                    id: 1
                },
                font_style: {
                    type: "SubscriptionFontStyle",
                    id: 2
                },
                placeholder_params: {
                    rule: "repeated",
                    type: "SubscriptionTextContainer",
                    id: 3
                }
            }
        }
    }
    ,
    634280: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                SUBSCRIPTION_TYPE_AUTO_RENEWAL: 0,
                SUBSCRIPTION_TYPE_FOR_MONTHS: 1
            }
        }
    }
    ,
    144981: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                content: {
                    type: "string",
                    id: 2
                },
                duration: {
                    type: "int64",
                    id: 3
                },
                after_content: {
                    type: "string",
                    id: 4
                },
                message_type: {
                    type: "int64",
                    id: 5
                },
                schema: {
                    type: "string",
                    id: 6
                },
                extra: {
                    type: "string",
                    id: 7
                },
                style: {
                    type: "string",
                    id: 8
                },
                after_display_text: {
                    type: "webcast.data.Text",
                    id: 9
                },
                rank: {
                    type: "int64",
                    id: 10
                },
                rich_content: {
                    type: "string",
                    id: 11
                },
                user_side_content: {
                    type: "string",
                    id: 12
                },
                content_type: {
                    type: "int64",
                    id: 13
                },
                city_code: {
                    type: "string",
                    id: 14
                },
                rank_stage: {
                    type: "RankStage",
                    id: 15
                },
                ranks: {
                    rule: "repeated",
                    type: "RankInfo",
                    id: 16
                },
                begin_time: {
                    type: "int64",
                    id: 17
                },
                delta_time: {
                    type: "int64",
                    id: 18
                },
                entrance_appearing_text: {
                    type: "webcast.data.Text",
                    id: 19
                },
                display_text_v2: {
                    type: "webcast.data.Text",
                    id: 20
                },
                after_display_text_v2: {
                    type: "webcast.data.Text",
                    id: 21
                },
                duration_v2: {
                    type: "int64",
                    id: 22
                }
            },
            nested: {
                RankStage: {
                    values: {
                        TYPE_NORMAL: 0,
                        TYPE_WARMUP: 1,
                        TYPE_SPRINT: 2
                    }
                },
                RankInfo: {
                    fields: {
                        rank_type: {
                            type: "int64",
                            id: 1
                        },
                        rank: {
                            type: "int64",
                            id: 2
                        }
                    }
                }
            }
        }
    }
    ,
    230225: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                key: {
                    type: "int64",
                    id: 1
                },
                value: {
                    type: "bool",
                    id: 2
                }
            }
        }
    }
    ,
    412042: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                schema_for_check: {
                    type: "string",
                    id: 1
                }
            }
        }
    }
    ,
    276108: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                schema_for_open: {
                    type: "string",
                    id: 1
                }
            }
        }
    }
    ,
    240278: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                name: {
                    type: "string",
                    id: 2
                }
            }
        }
    }
    ,
    248822: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                from_region: {
                    type: "string",
                    id: 1
                },
                next_regions: {
                    keyType: "string",
                    type: "SyncType",
                    id: 2
                }
            }
        }
    }
    ,
    684489: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                route_name: {
                    type: "string",
                    id: 1
                },
                source: {
                    type: "string",
                    id: 2
                },
                sync_topology: {
                    keyType: "string",
                    type: "SyncInfo",
                    id: 3
                }
            }
        }
    }
    ,
    356710: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                SYNC_TYPE_UNKNOWN: 0,
                SYNC_TYPE_RPC: 1,
                SYNC_TYPE_MQ: 2
            }
        }
    }
    ,
    267441: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                content: {
                    type: "string",
                    id: 2
                }
            },
            nested: {
                Common: {
                    fields: {
                        method: {
                            type: "string",
                            id: 1
                        },
                        msg_id: {
                            type: "int64",
                            id: 2
                        },
                        room_id: {
                            type: "int64",
                            id: 3
                        },
                        create_time: {
                            type: "int64",
                            id: 4
                        },
                        monitor: {
                            type: "int32",
                            id: 5
                        }
                    }
                }
            }
        }
    }
    ,
    182737: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                TTS_PROBATION_MODE_DEFAULT: 0,
                TTS_PROBATION_MODE_PROBATION: 1,
                TTS_PROBATION_MODE_NON_PROBATION: 2
            }
        }
    }
    ,
    309995: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                is_idle: {
                    type: "bool",
                    id: 1
                },
                state_desc: {
                    type: "string",
                    id: 2
                }
            }
        }
    }
    ,
    56665: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                tag_type: {
                    type: "int32",
                    id: 1
                },
                tag_value: {
                    type: "string",
                    id: 2
                },
                tag_text: {
                    type: "string",
                    id: 3
                }
            }
        }
    }
    ,
    423769: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                TAG_TYPE_CREATOR_CRM_TAG_TYPE_UNKNOWN: 0,
                TAG_TYPE_CREATOR_CRM_TAG_TYPE_USER_GRADE: 1,
                TAG_TYPE_CREATOR_CRM_TAG_TYPE_FANS_LEVEL: 2,
                TAG_TYPE_CREATOR_CRM_TAG_TYPE_WATCH_ME_DAYS_AGO: 3,
                TAG_TYPE_CREATOR_CRM_TAG_TYPE_CUSTOM: 4,
                TAG_TYPE_CREATOR_CRM_TAG_TYPE_TITLE_GIFT: 5,
                TAG_TYPE_CREATOR_CRM_TAG_TYPE_FIRST_JOINED_TEAM: 6,
                TAG_TYPE_CREATOR_CRM_TAG_TYPE_PAY_ACCOMPANY_DAYS: 7,
                TAG_TYPE_CREATOR_CRM_TAG_TYPE_SPONSOR_GIFT_LAST_ROOM: 8,
                TAG_TYPE_CREATOR_CRM_TAG_TYPE_MATCH_MVP_LAST_ROOM: 9,
                TAG_TYPE_CREATOR_CRM_TAG_TYPE_LARGE_AMOUNT_GIFT_LAST_ROOM: 10,
                TAG_TYPE_CREATOR_CRM_TAG_TYPE_COMMENT_LAST_ROOM: 11,
                TAG_TYPE_CREATOR_CRM_TAG_TYPE_RECENT_TITLED_GIFT: 12,
                TAG_TYPE_CREATOR_CRM_TAG_TYPE_MEET_ANNIVERSARY: 13,
                TAG_TYPE_CREATOR_CRM_TAG_TYPE_FANS_SLEEP: 14,
                TAG_TYPE_CREATOR_CRM_TAG_TYPE_NOT_SEND_HEART_ME: 15,
                TAG_TYPE_CREATOR_CRM_TAG_TYPE_NOT_JOIN_TEAM: 16,
                TAG_TYPE_CREATOR_CRM_TAG_TYPE_FIRST_WATCH_LIVE: 17,
                TAG_TYPE_CREATOR_CRM_TAG_TYPE_RECENT_COMMENT: 18,
                TAG_TYPE_CREATOR_CRM_TAG_TYPE_RECENT_GIFT_TIMES: 19,
                TAG_TYPE_CREATOR_CRM_TAG_TYPE_RECENT_WATCH_LIVE_DURATION: 20,
                TAG_TYPE_CREATOR_CRM_TAG_TYPE_RECENT_GIFT: 21,
                TAG_TYPE_CREATOR_CRM_TAG_TYPE_RECENT_LIVE_CONTRIBUTION_TOP: 22,
                TAG_TYPE_CREATOR_CRM_TAG_TYPE_JUST_UPGRADE: 28,
                TAG_TYPE_CREATOR_CRM_TAG_TYPE_FAN_TOTAL_WATCH_DURATION: 29,
                TAG_TYPE_CREATOR_CRM_TAG_TYPE_FAN_TOTAL_COMMENT_NUM: 30,
                TAG_TYPE_CREATOR_CRM_TAG_TYPE_FAN_TOTAL_GIFT_SENT_NUM: 31
            }
        }
    }
    ,
    257217: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            oneofs: {
                content: {
                    oneof: ["second_degree_relation_content", "cohost_history_day"]
                }
            },
            fields: {
                tag_classification: {
                    type: "TagClassification",
                    id: 1
                },
                tag_type: {
                    type: "int32",
                    id: 2
                },
                tag_value: {
                    type: "string",
                    id: 3
                },
                starling_key: {
                    type: "string",
                    id: 4
                },
                second_degree_relation_content: {
                    type: "SecondDegreeRelationContent",
                    id: 10
                },
                cohost_history_day: {
                    type: "int64",
                    id: 11
                },
                similar_interest_content: {
                    type: "SimilarInterestContent",
                    id: 12
                }
            },
            nested: {
                SecondDegreeRelationContent: {
                    fields: {
                        related_users: {
                            rule: "repeated",
                            type: "UserInfo",
                            id: 1
                        },
                        total_related_user_cnt: {
                            type: "int64",
                            id: 2
                        }
                    },
                    nested: {
                        UserInfo: {
                            fields: {
                                user_id: {
                                    type: "int64",
                                    id: 1
                                },
                                nick_name: {
                                    type: "string",
                                    id: 2
                                },
                                avatar_thumb: {
                                    type: "webcast.data.Image",
                                    id: 3
                                }
                            }
                        }
                    }
                },
                TagClassification: {
                    values: {
                        Unknown: 0,
                        CohostHistory: 1,
                        FirstDegreeRelation: 2,
                        SecondDegreeRelation: 3,
                        Rank: 4,
                        SimilarInterests: 5
                    }
                },
                SimilarInterestContent: {
                    fields: {
                        content_id: {
                            type: "int64",
                            id: 1
                        },
                        display_text: {
                            type: "string",
                            id: 2
                        }
                    }
                }
            }
        }
    }
    ,
    355789: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            oneofs: {
                status_info: {
                    oneof: ["started_info", "final_call_info", "victory_lap_info"]
                }
            },
            fields: {
                take_the_stage_status: {
                    type: "TakeTheStageStatus",
                    id: 1
                },
                take_the_stage_start_time: {
                    type: "int64",
                    id: 2
                },
                started_info: {
                    type: "StartedInfo",
                    id: 100
                },
                final_call_info: {
                    type: "FinalCallInfo",
                    id: 101
                },
                victory_lap_info: {
                    type: "VictoryLapInfo",
                    id: 3
                }
            },
            nested: {
                StartedInfo: {
                    fields: {
                        performance_start_time: {
                            type: "int64",
                            id: 1
                        },
                        order_info: {
                            type: "data.TakeTheStageOrderInfo",
                            id: 2
                        }
                    }
                },
                FinalCallInfo: {
                    fields: {
                        planned_settlement_end_time: {
                            type: "int64",
                            id: 1
                        },
                        extra_time_interval: {
                            type: "int64",
                            id: 2
                        }
                    }
                },
                VictoryLapInfo: {
                    fields: {
                        planned_finish_time: {
                            type: "int64",
                            id: 1
                        }
                    }
                }
            }
        }
    }
    ,
    429269: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                anchors: {
                    rule: "repeated",
                    type: "AnchorInfo",
                    id: 1
                },
                initiator: {
                    type: "CompetitionUserBase",
                    id: 2
                },
                switch_turn_reason: {
                    type: "SwitchTurnReason",
                    id: 3
                }
            },
            nested: {
                AnchorInfo: {
                    fields: {
                        user_id: {
                            type: "int64",
                            id: 1
                        }
                    }
                },
                SwitchTurnReason: {
                    values: {
                        SWITCH_TURN_REASON_UNKNOWN: 0,
                        SWITCH_TURN_REASON_USER_CLICK: 1,
                        SWITCH_TURN_REASON_USER_LEFT: 2
                    }
                }
            }
        }
    }
    ,
    302179: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                TAKE_THE_STAGE_STATUS_UNKNOWN: 0,
                TAKE_THE_STAGE_STATUS_NOT_STARTED: 1,
                TAKE_THE_STAGE_STATUS_CANCELLED: 2,
                TAKE_THE_STAGE_STATUS_STARTED: 3,
                TAKE_THE_STAGE_STATUS_FINAL_CALL: 4,
                TAKE_THE_STAGE_STATUS_VICTORY_LAP: 5,
                TAKE_THE_STAGE_STATUS_FINISHED: 6
            }
        }
    }
    ,
    699001: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                TargetGroup_Unknown: 0,
                TargetGroup_LowAge: 1,
                TargetGroup_Creator: 2,
                TargetGroup_OfficialLiveRoom: 3,
                TargetGroup_QuizRoom: 4,
                TargetGroup_LineupRoom: 5
            }
        }
    }
    ,
    243147: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                view_report_scene: {
                    type: "int32",
                    id: 1
                },
                view_through_url: {
                    type: "string",
                    id: 2
                },
                cpp_url: {
                    type: "string",
                    id: 3
                }
            }
        }
    }
    ,
    491669: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                completion_num: {
                    type: "int64",
                    id: 1
                },
                is_max_completion_num: {
                    type: "bool",
                    id: 2
                },
                contributed_points: {
                    type: "int64",
                    id: 3
                },
                unit_points: {
                    type: "int64",
                    id: 4
                }
            }
        }
    }
    ,
    942355: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                CPS: 0,
                CPA: 1,
                Event: 3,
                DropsEvent: 4,
                TASK_MODE_CPM: 10,
                TASK_MODE_MaxCPTAndCPM: 11,
                TASK_MODE_CPTAndCPM: 12
            }
        }
    }
    ,
    344698: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                game_task: {
                    type: "BriefGameTask",
                    id: 1
                },
                profit_info: {
                    type: "ProfitInfo",
                    id: 2
                }
            }
        }
    }
    ,
    787278: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                Unpublish: 0,
                Promoting: 1,
                Ended: 2,
                EndedByCPPunish: 3
            }
        }
    }
    ,
    880706: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                refresh_gap: {
                    type: "int32",
                    id: 1
                },
                show_countdown_time: {
                    type: "int32",
                    id: 2
                },
                red_point_show_time: {
                    type: "int32",
                    id: 3
                }
            }
        }
    }
    ,
    534620: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                TAX_TYPE_UNKNOWN: 0,
                TAX_TYPE_W9: 1,
                TAX_TYPE_VAT: 2,
                TAX_TYPE_IDN: 3,
                TAX_TYPE_TH: 4,
                TAX_TYPE_KR: 5,
                TAX_TYPE_JP: 6,
                TAX_TYPE_CA: 7,
                TAX_TYPE_AU: 8,
                TAX_TYPE_W8: 9,
                TAX_TYPE_NO_NEED: 101
            }
        }
    }
    ,
    967324: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                level1_tag: {
                    rule: "repeated",
                    type: "string",
                    id: 1
                },
                level2_tag: {
                    type: "string",
                    id: 2
                }
            }
        }
    }
    ,
    832635: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                team_id: {
                    type: "int64",
                    id: 1
                },
                team_user: {
                    rule: "repeated",
                    type: "TeamUser",
                    id: 2
                },
                result: {
                    type: "Result",
                    id: 3
                },
                total_score: {
                    type: "int64",
                    id: 4
                }
            },
            nested: {
                Result: {
                    values: {
                        WIN: 0,
                        LOSE: 1,
                        DRAW: 2
                    }
                }
            }
        }
    }
    ,
    387325: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                best_teammate_relation: {
                    rule: "repeated",
                    type: "BestTeammateRelation",
                    id: 1
                },
                start_SFX_team_id: {
                    rule: "repeated",
                    type: "int64",
                    id: 2
                },
                has_team_match_mvp_SFX: {
                    type: "bool",
                    id: 3
                }
            }
        }
    }
    ,
    941746: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                team_mission_details: {
                    type: "FansClubTeamMissionDetails",
                    id: 1
                }
            }
        }
    }
    ,
    99788: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                no_fan: {
                    type: "NoFanCardData",
                    id: 2
                },
                in_competent_ranking: {
                    type: "AnchorPopularityTask",
                    id: 3
                },
                competent_ranking: {
                    type: "PopularityRankCard",
                    id: 4
                }
            }
        }
    }
    ,
    718161: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                current_number: {
                    type: "int32",
                    id: 1
                },
                target_number: {
                    type: "int32",
                    id: 2
                },
                gift_ids: {
                    rule: "repeated",
                    type: "int64",
                    id: 3
                },
                timestamp: {
                    type: "int64",
                    id: 4
                },
                add_score: {
                    type: "int32",
                    id: 5
                },
                contributed_score: {
                    type: "int32",
                    id: 6
                }
            }
        }
    }
    ,
    672411: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                user_id: {
                    type: "int64",
                    id: 1
                },
                score: {
                    type: "int64",
                    id: 2
                },
                user_id_str: {
                    type: "string",
                    id: 3
                }
            }
        }
    }
    ,
    521346: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                team_id: {
                    type: "int64",
                    id: 1
                },
                team_user: {
                    rule: "repeated",
                    type: "TeamUser",
                    id: 2
                },
                team_total_score: {
                    type: "int64",
                    id: 3
                },
                user_armies: {
                    type: "UserArmies",
                    id: 4
                },
                host_rank: {
                    type: "int64",
                    id: 5
                }
            }
        }
    }
    ,
    226534: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                template_id: {
                    type: "int64",
                    id: 1
                },
                template_id_str: {
                    type: "string",
                    id: 2
                },
                status: {
                    type: "webcast.data.PollTemplateStatus",
                    id: 3
                },
                poll_kind: {
                    type: "webcast.data.PollKind",
                    id: 4
                },
                appeal_status: {
                    type: "webcast.data.PollAppealStatus",
                    id: 5
                },
                violation_id_str: {
                    type: "string",
                    id: 6
                }
            }
        }
    }
    ,
    92207: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                TplType_UnKnown: 0,
                TplType_OneTime: 1,
                TplType_AutoDeduction: 2
            }
        }
    }
    ,
    293442: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                value: {
                    type: "string",
                    id: 1
                }
            }
        }
    }
    ,
    144062: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                }
            }
        }
    }
    ,
    673182: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                key: {
                    type: "string",
                    id: 1
                },
                default_pattern: {
                    type: "string",
                    id: 2
                },
                default_format: {
                    type: "TextFormat",
                    id: 3
                },
                pieces: {
                    rule: "repeated",
                    type: "TextPiece",
                    id: 4
                }
            }
        }
    }
    ,
    288271: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                display_type: {
                    type: "BadgeDisplayType",
                    id: 1
                },
                key: {
                    type: "string",
                    id: 2
                },
                default_pattern: {
                    type: "string",
                    id: 3
                },
                pieces: {
                    rule: "repeated",
                    type: "string",
                    id: 4
                }
            }
        }
    }
    ,
    311821: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                color: {
                    type: "string",
                    id: 1
                },
                bold: {
                    type: "bool",
                    id: 2
                },
                italic: {
                    type: "bool",
                    id: 3
                },
                weight: {
                    type: "int32",
                    id: 4
                },
                italic_angle: {
                    type: "int32",
                    id: 5
                },
                font_size: {
                    type: "int32",
                    id: 6
                },
                use_heigh_light_color: {
                    type: "bool",
                    id: 7
                },
                use_remote_clor: {
                    type: "bool",
                    id: 8
                }
            }
        }
    }
    ,
    695574: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                type: {
                    type: "int32",
                    id: 1
                },
                format: {
                    type: "TextFormat",
                    id: 2
                },
                string_value: {
                    type: "string",
                    id: 11
                },
                user_value: {
                    type: "TextPieceUser",
                    id: 21
                },
                gift_value: {
                    type: "TextPieceGift",
                    id: 22
                },
                heart_value: {
                    type: "TextPieceHeart",
                    id: 23
                },
                pattern_ref_value: {
                    type: "TextPiecePatternRef",
                    id: 24
                },
                image_value: {
                    type: "TextPieceImage",
                    id: 25
                }
            }
        }
    }
    ,
    284500: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                gift_id: {
                    type: "int64",
                    id: 1
                },
                name_ref: {
                    type: "PatternRef",
                    id: 2
                },
                show_type: {
                    type: "GiftShowType",
                    id: 3
                },
                color_id: {
                    type: "int64",
                    id: 4
                }
            }
        }
    }
    ,
    114320: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                color: {
                    type: "string",
                    id: 1
                }
            }
        }
    }
    ,
    587229: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                image: {
                    type: "webcast.data.Image",
                    id: 1
                }
            }
        }
    }
    ,
    100089: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                key: {
                    type: "string",
                    id: 1
                },
                default_pattern: {
                    type: "string",
                    id: 2
                }
            }
        }
    }
    ,
    912309: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                user: {
                    type: "User",
                    id: 1
                },
                with_colon: {
                    type: "bool",
                    id: 2
                }
            }
        }
    }
    ,
    423229: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                text: {
                    type: "string",
                    id: 1
                },
                text_style: {
                    type: "TextStyle",
                    id: 2
                },
                color_hex: {
                    type: "string",
                    id: 3
                },
                center_x: {
                    type: "double",
                    id: 4
                },
                center_y: {
                    type: "double",
                    id: 5
                }
            }
        }
    }
    ,
    521753: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                TEXT_STYLE_DEFAULT: 0,
                TEXT_STYLE_STROKE: 1,
                TEXT_STYLE_BACKGROUND: 2,
                TEXT_STYLE_ALPHA_BACKGROUND: 3,
                TEXT_STYLE_COUNT: 4
            }
        }
    }
    ,
    599472: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                client_start_ms: {
                    type: "int64",
                    id: 1
                },
                api_recv_time_ms: {
                    type: "int64",
                    id: 2
                },
                api_send_to_goim_ms: {
                    type: "int64",
                    id: 3
                }
            }
        }
    }
    ,
    604631: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                TIME_OP_TYPE_UNKNOW: 0,
                TIME_OP_TYPE_ADD: 1,
                TIME_OP_TYPE_DEDUCT: 2
            }
        }
    }
    ,
    135235: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                start: {
                    type: "int64",
                    id: 1
                },
                end: {
                    type: "int64",
                    id: 2
                }
            }
        }
    }
    ,
    452393: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                timestamp: {
                    type: "int64",
                    id: 1
                },
                timezone: {
                    type: "string",
                    id: 2
                },
                str_time: {
                    type: "string",
                    id: 3
                }
            }
        }
    }
    ,
    446230: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                operation_time: {
                    type: "int64",
                    id: 1
                }
            }
        }
    }
    ,
    163406: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                TIME_UNIT_DAY: 0,
                TIME_UNIT_HOUR: 1,
                TIME_UNIT_MINUTE: 2
            }
        }
    }
    ,
    139862: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                max_title_length: {
                    type: "int32",
                    id: 1
                },
                default_start_countdown_time_s: {
                    type: "int64",
                    id: 2
                },
                max_start_countdown_time_s: {
                    type: "int64",
                    id: 3
                },
                default_time_increase_per_sub_s: {
                    type: "int64",
                    id: 4
                },
                default_time_increase_cap_s: {
                    type: "int64",
                    id: 5
                },
                max_time_increase_cap_s: {
                    type: "int64",
                    id: 6
                },
                bottom_button_text: {
                    type: "string",
                    id: 7
                }
            }
        }
    }
    ,
    880497: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                timer_id: {
                    type: "int64",
                    id: 1
                },
                anchor_id: {
                    type: "int64",
                    id: 2
                },
                start_timestamp_s: {
                    type: "int64",
                    id: 3
                },
                start_countdown_time_s: {
                    type: "int64",
                    id: 4
                },
                anchor_side_title: {
                    type: "string",
                    id: 5
                },
                user_side_title: {
                    type: "string",
                    id: 6
                },
                time_increase_per_sub_s: {
                    type: "int64",
                    id: 7
                },
                time_increase_cap_s: {
                    type: "int64",
                    id: 8
                },
                sub_count: {
                    type: "int32",
                    id: 9
                },
                time_increase_reach_cap: {
                    type: "bool",
                    id: 10
                },
                total_pause_time_s: {
                    type: "int64",
                    id: 11
                },
                last_pause_timestamp_s: {
                    type: "int64",
                    id: 12
                },
                total_time_s: {
                    type: "int64",
                    id: 13
                },
                remaining_time_s: {
                    type: "int64",
                    id: 14
                },
                timestamp_s: {
                    type: "int64",
                    id: 15
                },
                sticker_x: {
                    type: "int64",
                    id: 16
                },
                sticker_y: {
                    type: "int64",
                    id: 17
                },
                screen_w: {
                    type: "int64",
                    id: 18
                },
                screen_h: {
                    type: "int64",
                    id: 19
                },
                timer_status: {
                    type: "TimerStatus",
                    id: 20
                },
                antidirt_status: {
                    type: "AntidirtStatus",
                    id: 21
                },
                audit_status: {
                    type: "AuditStatus",
                    id: 22
                },
                audit_info: {
                    type: "AuditInfo",
                    id: 23
                }
            },
            nested: {
                AntidirtStatus: {
                    values: {
                        Pass: 0,
                        Failed: 1
                    }
                },
                AuditStatus: {
                    values: {
                        AuditStatusUnknown: 0,
                        AuditStatusPass: 1,
                        AuditStatusFailed: 2,
                        AuditStatusReviewing: 3,
                        AuditStatusForbidden: 4
                    }
                },
                AuditTaskType: {
                    values: {
                        AUDIT_TASK_TYPE_DEFAULT: 0,
                        AUDIT_TASK_TYPE_APPEAL: 1
                    }
                },
                AuditInfo: {
                    fields: {
                        violation_id: {
                            type: "int64",
                            id: 1
                        },
                        task_type: {
                            type: "AuditTaskType",
                            id: 2
                        }
                    }
                }
            }
        }
    }
    ,
    980087: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                TimerOpTypeStart: 0,
                TimerOpTypePause: 1,
                TimerOpTypeResume: 2,
                TimerOpTypeCancel: 3
            }
        }
    }
    ,
    20722: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                TimerStatusNotStarted: 0,
                TimerStatusRunning: 1,
                TimerStatusPaused: 2,
                TimerStatusCancelled: 3,
                TimerStatusFinished: 4
            }
        }
    }
    ,
    857444: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                id: {
                    type: "int64",
                    id: 1
                },
                title: {
                    type: "string",
                    id: 2
                },
                tip_type: {
                    type: "TipType",
                    id: 3
                },
                random_texts: {
                    rule: "repeated",
                    type: "string",
                    id: 4
                },
                tip_card_type: {
                    type: "TipCardType",
                    id: 5
                },
                tip_data: {
                    type: "TipData",
                    id: 11
                }
            },
            nested: {
                TipData: {
                    fields: {
                        task_detail_card_data: {
                            type: "TaskDetailCardData",
                            id: 1
                        }
                    },
                    nested: {
                        TaskDetailCardData: {
                            fields: {
                                task_data: {
                                    keyType: "int64",
                                    type: "TaskDetailData",
                                    id: 1
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    ,
    704074: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                TipCardTypeCommon: 0,
                TipCardTypeTeamMission: 1
            }
        }
    }
    ,
    948924: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                TipTypeUnKnown: 0,
                NoMember: 1,
                NoEU_GiftPoints: 2,
                NoEU_WatchPoints: 3,
                NoEU_NewFans: 4,
                EU_Consume: 5,
                EU_GiftPoints: 6,
                EU_CommentPoints: 7,
                EU_NewFans: 8,
                DailyTaskProgress: 9,
                DailyTaskComplete: 10,
                FansClubEditName: 11,
                TaskDetailCard: 12,
                TeamMissionTip: 13
            }
        }
    }
    ,
    975603: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                TipsTypeUnknown: 0,
                TipsTypeFlare: 2,
                TipsTypeViewer70Per: 3,
                TipsTypeIncome70Per: 4,
                TipsTypeExcellent: 5,
                TipsTypeRandom: 6
            }
        }
    }
    ,
    174279: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                text: {
                    type: "string",
                    id: 1
                }
            }
        }
    }
    ,
    474199: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                display_duration_millisecond: {
                    type: "int64",
                    id: 2
                },
                delay_display_duration_millisecond: {
                    type: "int64",
                    id: 3
                },
                scene: {
                    type: "string",
                    id: 4
                }
            }
        }
    }
    ,
    291310: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                ToolBarDefault: 0,
                ToolBarInteract: 1,
                ToolBarShare: 2
            }
        }
    }
    ,
    822931: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                TbUndefined: 0,
                Bubble: 1
            }
        }
    }
    ,
    31672: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                TbUnknown: 0,
                GiftToolbarItem: 1,
                SpeedyGiftToolbarItem: 2
            }
        }
    }
    ,
    832750: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                toolbar_item_id: {
                    type: "webcast.data.ToolbarItemId",
                    id: 2
                },
                action_type: {
                    type: "ToolbarItemActionType",
                    id: 3
                },
                bubble_config: {
                    type: "BubbleConfig",
                    id: 4
                },
                extra: {
                    keyType: "string",
                    type: "string",
                    id: 5
                }
            }
        }
    }
    ,
    511249: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                fan_ticket: {
                    type: "int64",
                    id: 1
                },
                user: {
                    type: "webcast.data.User",
                    id: 2
                }
            }
        }
    }
    ,
    478241: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                id: {
                    type: "int64",
                    id: 1
                },
                title: {
                    type: "string",
                    id: 2
                },
                schema: {
                    type: "string",
                    id: 3
                },
                show_list: {
                    rule: "repeated",
                    type: "ShowInfo",
                    id: 4
                },
                id_str: {
                    type: "string",
                    id: 5
                }
            }
        }
    }
    ,
    447116: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                rank_type: {
                    type: "string",
                    id: 1
                },
                top_index: {
                    type: "int64",
                    id: 2
                }
            }
        }
    }
    ,
    875547: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                info_text: {
                    type: "string",
                    id: 1
                }
            }
        }
    }
    ,
    464352: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                TOPIC_ACTION_TYPE_UNKNOWN: 0,
                TOPIC_ACTION_TYPE_FOLLOW: 1
            }
        }
    }
    ,
    757126: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                start_time_sec: {
                    type: "int64",
                    id: 1
                },
                end_time_sec: {
                    type: "int64",
                    id: 2
                },
                all_rivals: {
                    type: "int64",
                    id: 3
                },
                all_rivals_avatar: {
                    rule: "repeated",
                    type: "webcast.data.Image",
                    id: 4
                }
            }
        }
    }
    ,
    276182: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                session_id: {
                    type: "int64",
                    id: 1
                },
                session_heat: {
                    type: "int64",
                    id: 2
                }
            }
        }
    }
    ,
    868455: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                action: {
                    type: "Action",
                    id: 1
                },
                channel_id: {
                    type: "int64",
                    id: 2
                },
                set_user_id: {
                    type: "int64",
                    id: 3
                },
                set_succ_time: {
                    type: "int64",
                    id: 4
                },
                enter_scene: {
                    type: "EnterScene",
                    id: 5
                }
            },
            nested: {
                Action: {
                    values: {
                        ACTION_ENTER: 0,
                        ACTION_LEAVE: 1
                    }
                },
                EnterScene: {
                    values: {
                        ENTER_SCENE_MANUAL_SET: 0,
                        ENTER_SCENE_TOPIC_PAIR: 1,
                        ENTER_SCENE_JOIN_GROUP: 2
                    }
                }
            }
        }
    }
    ,
    388653: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                data: {
                    rule: "repeated",
                    type: "Room",
                    id: 1
                },
                large_image: {
                    rule: "repeated",
                    type: "webcast.data.Image",
                    id: 2
                }
            }
        }
    }
    ,
    74844: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                operate_time: {
                    type: "int64",
                    id: 1
                },
                arrival_time: {
                    type: "int64",
                    id: 2
                },
                send_time: {
                    type: "int64",
                    id: 3
                }
            }
        }
    }
    ,
    686588: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                TRANSCODE_STATUS_NOT_HIT_AB: 0,
                TRANSCODE_STATUS_NOT_STARTED: 7,
                TRANSCODE_STATUS_PROCESSING: 8,
                TRANSCODE_STATUS_READY: 9,
                TRANSCODE_STATUS_FAILED: 10,
                TRANSCODE_STATUS_UNAVAILABLE: 11
            }
        }
    }
    ,
    914628: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                config_id: {
                    type: "int64",
                    id: 1
                },
                resource_image: {
                    type: "data.Image",
                    id: 2
                }
            }
        }
    }
    ,
    816446: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                user_id: {
                    type: "int64",
                    id: 1
                },
                linkmic_id_str: {
                    type: "string",
                    id: 2
                },
                nickname: {
                    type: "string",
                    id: 3
                },
                avatar_thumb: {
                    type: "webcast.data.Image",
                    id: 4
                },
                transition_duration_of_current: {
                    type: "int64",
                    id: 5
                },
                transition_start_time: {
                    type: "int64",
                    id: 6
                }
            }
        }
    }
    ,
    550506: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                user: {
                    type: "webcast.data.User",
                    id: 2
                },
                title: {
                    type: "webcast.data.Text",
                    id: 3
                },
                describe: {
                    type: "webcast.data.Text",
                    id: 4
                },
                combo_count: {
                    type: "int64",
                    id: 5
                },
                group_count: {
                    type: "int64",
                    id: 6
                },
                image: {
                    type: "webcast.data.Image",
                    id: 7
                }
            }
        }
    }
    ,
    417184: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                uplink_detect_http: {
                    type: "bool",
                    id: 1
                },
                uplink_detect_websocket: {
                    type: "bool",
                    id: 2
                },
                detect_p2p_msg: {
                    type: "bool",
                    id: 3
                },
                detect_room_msg: {
                    type: "bool",
                    id: 4
                },
                http_optimize: {
                    type: "bool",
                    id: 5
                }
            }
        }
    }
    ,
    845541: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                burst_time_remain_seconds: {
                    type: "int64",
                    id: 2
                },
                multiple: {
                    type: "int64",
                    id: 3
                },
                property_definition_id: {
                    type: "int64",
                    id: 4
                },
                property_icon: {
                    type: "webcast.data.Image",
                    id: 5
                }
            }
        }
    }
    ,
    318446: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                action: {
                    type: "int32",
                    id: 2
                },
                nick_name_prefix: {
                    type: "webcast.data.Text",
                    id: 3
                },
                nick_name: {
                    type: "string",
                    id: 4
                },
                enter_text: {
                    type: "webcast.data.Text",
                    id: 5
                },
                public_area_common: {
                    type: "PublicAreaMessageCommon",
                    id: 6
                }
            }
        }
    }
    ,
    332973: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                UNIFY_BASE_ACTION_UNKNOWN: 0,
                UNIFY_BASE_ACTION_ADD: 1,
                UNIFY_BASE_ACTION_DELETE: 2,
                UNIFY_BASE_ACTION_REFRESH: 3,
                UNIFY_BASE_ACTION_CLEAN: 4
            }
        }
    }
    ,
    119661: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                unify_base_id: {
                    type: "UnifyBaseType",
                    id: 1
                },
                name: {
                    type: "string",
                    id: 2
                },
                business_id: {
                    type: "string",
                    id: 3
                },
                action: {
                    type: "UnifyBaseAction",
                    id: 4
                }
            }
        }
    }
    ,
    190351: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                UNIFY_BASE_TYPE_UNKNOWN: 0,
                UNIFY_BASE_TYPE_SHORT_TOUCH: 1,
                UNIFY_BASE_TYPE_BANNER: 2,
                UNIFY_BASE_TYPE_MIDDLE: 3
            }
        }
    }
    ,
    5136: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                ongoing_goal: {
                    type: "GoalV2",
                    id: 1
                },
                pin: {
                    type: "Pin",
                    id: 2
                },
                anchor_onboard_permit: {
                    type: "AnchorOnBoardPermit",
                    id: 3
                },
                owner: {
                    type: "GoalOwner",
                    id: 4
                }
            },
            nested: {
                Pin: {
                    fields: {
                        cold_down: {
                            type: "bool",
                            id: 1
                        },
                        ready_time: {
                            type: "int64",
                            id: 2
                        },
                        pin_end_time: {
                            type: "int64",
                            id: 3
                        }
                    }
                },
                AnchorOnBoardPermit: {
                    fields: {
                        anchor_onboard_permit: {
                            type: "bool",
                            id: 1
                        },
                        permit_tips: {
                            type: "string",
                            id: 2
                        }
                    }
                }
            }
        }
    }
    ,
    355878: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                union_type: {
                    type: "UnionAnimationInfoType",
                    id: 1
                },
                rank_type_array: {
                    rule: "repeated",
                    type: "webcast.data.ProfitRankType",
                    id: 2
                },
                supported_version: {
                    type: "int64",
                    id: 3
                }
            }
        }
    }
    ,
    728590: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                NoUnionAnimation: 0,
                Loop: 1,
                Lock: 2
            }
        }
    }
    ,
    277187: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                director_icon: {
                    type: "webcast.data.Image",
                    id: 2
                },
                cur_round_index: {
                    type: "int32",
                    id: 3
                },
                status: {
                    type: "int32",
                    id: 4
                },
                director_schema_url: {
                    type: "string",
                    id: 5
                }
            }
        }
    }
    ,
    145392: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                typeUndefined: 0,
                typeStart: 1,
                typeEnable: 2,
                typeDisable: 3,
                typeStop: 4
            }
        }
    }
    ,
    224840: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                is_valid: {
                    type: "bool",
                    id: 1
                },
                label: {
                    type: "string",
                    id: 2
                },
                price: {
                    type: "string",
                    id: 3
                },
                pic: {
                    type: "string",
                    id: 4
                },
                start_time: {
                    type: "string",
                    id: 5
                },
                end_time: {
                    type: "string",
                    id: 6
                },
                time_start_label: {
                    type: "string",
                    id: 7
                },
                time_end_label: {
                    type: "string",
                    id: 8
                },
                user_limit: {
                    type: "string",
                    id: 9
                },
                is_preheat: {
                    type: "string",
                    id: 10
                },
                campaign_id: {
                    type: "string",
                    id: 11
                }
            }
        }
    }
    ,
    242e3: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                tag: {
                    type: "string",
                    id: 1
                },
                coupon_url: {
                    type: "string",
                    id: 2
                },
                coupon_applet: {
                    type: "string",
                    id: 3
                },
                is_valid: {
                    type: "bool",
                    id: 4
                },
                coupon_meta_id: {
                    type: "string",
                    id: 5
                }
            }
        }
    }
    ,
    600947: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                price: {
                    type: "int64",
                    id: 1
                },
                title: {
                    type: "string",
                    id: 2
                },
                cover: {
                    type: "string",
                    id: 3
                }
            }
        }
    }
    ,
    176601: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                skus: {
                    keyType: "string",
                    type: "SkuInfo",
                    id: 1
                },
                min_price: {
                    type: "int64",
                    id: 2
                },
                max_price: {
                    type: "int64",
                    id: 3
                },
                unuse_min_price: {
                    type: "int64",
                    id: 4
                },
                coupon_price: {
                    type: "int64",
                    id: 5
                }
            }
        }
    }
    ,
    448342: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "webcast.im.Common",
                    id: 1
                },
                text: {
                    type: "webcast.data.Text",
                    id: 2
                }
            }
        }
    }
    ,
    945210: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                msg_type: {
                    type: "int64",
                    id: 2
                },
                title: {
                    type: "webcast.data.Text",
                    id: 3
                },
                content: {
                    type: "webcast.data.Text",
                    id: 4
                },
                tips_title: {
                    type: "webcast.data.Text",
                    id: 5
                },
                tips_url: {
                    type: "string",
                    id: 6
                }
            }
        }
    }
    ,
    647176: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                reply_content: {
                    type: "string",
                    id: 1
                }
            }
        }
    }
    ,
    303132: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                id: {
                    type: "string",
                    id: 1
                },
                content: {
                    type: "string",
                    id: 2
                },
                create_time_sec: {
                    type: "int64",
                    id: 3
                },
                audit_status: {
                    type: "AuditStatus",
                    id: 4
                },
                auto_reply: {
                    type: "UpsellConsultationAutoReply",
                    id: 5
                },
                leads_form: {
                    type: "LeadsForm",
                    id: 6
                }
            }
        }
    }
    ,
    301009: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                id: {
                    type: "string",
                    id: 1
                },
                content: {
                    type: "string",
                    id: 2
                }
            }
        }
    }
    ,
    365377: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                UPSELL_METHOD_UNKNOWN: 0,
                UPSELL_METHOD_DIRECT_MESSAGE: 1,
                UPSELL_METHOD_LEADS_GEN: 2
            }
        }
    }
    ,
    803887: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                UPSELL_METHOD_STATUS_UNKNOWN: 0,
                UPSELL_METHOD_STATUS_ENABLE: 1,
                UPSELL_METHOD_STATUS_DISABLE: 2
            }
        }
    }
    ,
    526946: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                UPSELL_STATUS_UNKNOWN: 0,
                UPSELL_STATUS_OPT_IN: 1,
                UPSELL_STATUS_OPT_OUT: 2
            }
        }
    }
    ,
    151219: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                card_info: {
                    type: "webcast.data.CriticalStrikeCardInfo",
                    id: 1
                },
                anchor_id: {
                    type: "int64",
                    id: 2
                },
                display_content: {
                    type: "webcast.data.Text",
                    id: 3
                }
            }
        }
    }
    ,
    54005: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                card_info: {
                    type: "webcast.data.ExtraTimeCardInfo",
                    id: 1
                },
                anchor_id: {
                    type: "int64",
                    id: 2
                },
                display_content: {
                    type: "webcast.data.Text",
                    id: 3
                }
            }
        }
    }
    ,
    869723: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                card_info: {
                    type: "webcast.data.PotionCardInfo",
                    id: 1
                },
                anchor_id: {
                    type: "int64",
                    id: 2
                },
                display_content: {
                    type: "webcast.data.Text",
                    id: 3
                }
            }
        }
    }
    ,
    486215: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                card_info: {
                    type: "webcast.data.SmokeCardInfo",
                    id: 1
                },
                anchor_id: {
                    type: "int64",
                    id: 2
                },
                display_content: {
                    type: "webcast.data.Text",
                    id: 3
                }
            }
        }
    }
    ,
    220388: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                card_info: {
                    type: "webcast.data.SpecialEffectCardInfo",
                    id: 1
                },
                anchor_id: {
                    type: "int64",
                    id: 2
                },
                display_content: {
                    type: "webcast.data.Text",
                    id: 3
                },
                affected_anchor_pairs: {
                    rule: "repeated",
                    type: "AnchorPair",
                    id: 4
                }
            }
        }
    }
    ,
    264121: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                card_info: {
                    type: "webcast.data.WaveCardInfo",
                    id: 1
                },
                anchor_id: {
                    type: "int64",
                    id: 2
                },
                display_content: {
                    type: "webcast.data.Text",
                    id: 3
                }
            }
        }
    }
    ,
    840674: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                id: {
                    type: "int64",
                    id: 1
                },
                deprecated1: {
                    type: "int64",
                    id: 2
                },
                nickname: {
                    type: "string",
                    id: 3
                },
                deprecated2: {
                    type: "int32",
                    id: 4
                },
                bio_description: {
                    type: "string",
                    id: 5
                },
                deprecated3: {
                    type: "int32",
                    id: 6
                },
                deprecated4: {
                    type: "int64",
                    id: 7
                },
                deprecated5: {
                    type: "string",
                    id: 8
                },
                avatar_thumb: {
                    type: "Image",
                    id: 9
                },
                avatar_medium: {
                    type: "Image",
                    id: 10
                },
                avatar_large: {
                    type: "Image",
                    id: 11
                },
                verified: {
                    type: "bool",
                    id: 12
                },
                deprecated6: {
                    type: "int32",
                    id: 13
                },
                deprecated7: {
                    type: "string",
                    id: 14
                },
                status: {
                    type: "int32",
                    id: 15
                },
                create_time: {
                    type: "int64",
                    id: 16
                },
                modify_time: {
                    type: "int64",
                    id: 17
                },
                secret: {
                    type: "int32",
                    id: 18
                },
                share_qrcode_uri: {
                    type: "string",
                    id: 19
                },
                deprecated8: {
                    type: "int32",
                    id: 20
                },
                badge_image_list: {
                    rule: "repeated",
                    type: "Image",
                    id: 21
                },
                follow_info: {
                    type: "FollowInfo",
                    id: 22
                },
                pay_grade: {
                    type: "PayGrade",
                    id: 23
                },
                fans_club: {
                    type: "FansClub",
                    id: 24
                },
                border: {
                    type: "Border",
                    id: 25
                },
                special_id: {
                    type: "string",
                    id: 26
                },
                avatar_border: {
                    type: "Image",
                    id: 27
                },
                medal: {
                    type: "Image",
                    id: 28
                },
                real_time_icons: {
                    rule: "repeated",
                    type: "Image",
                    id: 29
                },
                new_real_time_icons: {
                    rule: "repeated",
                    type: "Image",
                    id: 30
                },
                top_vip_no: {
                    type: "int64",
                    id: 31
                },
                user_attr: {
                    type: "UserAttr",
                    id: 32
                },
                own_room: {
                    type: "OwnRoom",
                    id: 33
                },
                pay_score: {
                    type: "int64",
                    id: 34
                },
                ticket_count: {
                    type: "int64",
                    id: 35
                },
                anchor_info: {
                    type: "AnchorInfo",
                    id: 36
                },
                link_mic_stats: {
                    type: "webcast.data.LinkmicStatus",
                    id: 37
                },
                display_id: {
                    type: "string",
                    id: 38
                },
                with_commerce_permission: {
                    type: "bool",
                    id: 39
                },
                with_fusion_shop_entry: {
                    type: "bool",
                    id: 40
                },
                deprecated21: {
                    type: "int64",
                    id: 41
                },
                webcast_anchor_level: {
                    type: "AnchorLevel",
                    id: 42
                },
                verified_content: {
                    type: "string",
                    id: 43
                },
                author_stats: {
                    type: "AuthorStats",
                    id: 44
                },
                top_fans: {
                    rule: "repeated",
                    type: "User",
                    id: 45
                },
                sec_uid: {
                    type: "string",
                    id: 46
                },
                user_role: {
                    type: "int32",
                    id: 47
                },
                deprecated9: {
                    type: "DeprecatedType1",
                    id: 48
                },
                activity_reward: {
                    type: "ActivityInfo",
                    id: 49
                },
                deprecated10: {
                    type: "DeprecatedType4",
                    id: 50
                },
                deprecated11: {
                    type: "DeprecatedType5",
                    id: 51
                },
                personal_card: {
                    type: "Image",
                    id: 52
                },
                authentication_info: {
                    type: "AuthenticationInfo",
                    id: 53
                },
                deprecated12: {
                    type: "int32",
                    id: 54
                },
                deprecated13: {
                    type: "int32",
                    id: 55
                },
                deprecated14: {
                    type: "DeprecatedType6",
                    id: 56
                },
                media_badge_image_list: {
                    rule: "repeated",
                    type: "Image",
                    id: 57
                },
                deprecated15: {
                    type: "int32",
                    id: 58
                },
                user_vip_info: {
                    type: "webcast.data.UserVIPInfo",
                    id: 59
                },
                commerce_webcast_config_ids: {
                    rule: "repeated",
                    type: "int64",
                    id: 60
                },
                border_list: {
                    rule: "repeated",
                    type: "Border",
                    id: 61
                },
                combo_badge_info: {
                    type: "ComboBadgeInfo",
                    id: 62
                },
                subscribe_info: {
                    type: "SubscribeInfo",
                    id: 63
                },
                badge_list: {
                    rule: "repeated",
                    type: "BadgeStruct",
                    id: 64
                },
                mint_type_label: {
                    rule: "repeated",
                    type: "int64",
                    id: 65
                },
                fans_club_info: {
                    type: "FansClubInfo",
                    id: 66
                },
                deprecated19: {
                    type: "bool",
                    id: 1001
                },
                allow_find_by_contacts: {
                    type: "bool",
                    id: 1002
                },
                allow_others_download_video: {
                    type: "bool",
                    id: 1003
                },
                allow_others_download_when_sharing_video: {
                    type: "bool",
                    id: 1004
                },
                allow_share_show_profile: {
                    type: "bool",
                    id: 1005
                },
                allow_show_in_gossip: {
                    type: "bool",
                    id: 1006
                },
                allow_show_my_action: {
                    type: "bool",
                    id: 1007
                },
                allow_strange_comment: {
                    type: "bool",
                    id: 1008
                },
                allow_unfollower_comment: {
                    type: "bool",
                    id: 1009
                },
                allow_use_linkmic: {
                    type: "bool",
                    id: 1010
                },
                anchor_level: {
                    type: "AnchorLevel",
                    id: 1011
                },
                avatar_jpg: {
                    type: "Image",
                    id: 1012
                },
                bg_img_url: {
                    type: "string",
                    id: 1013
                },
                deprecated18: {
                    type: "string",
                    id: 1014
                },
                deprecated16: {
                    type: "bool",
                    id: 1015
                },
                block_status: {
                    type: "int32",
                    id: 1016
                },
                comment_restrict: {
                    type: "int32",
                    id: 1017
                },
                constellation: {
                    type: "string",
                    id: 1018
                },
                disable_ichat: {
                    type: "int32",
                    id: 1019
                },
                enable_ichat_img: {
                    type: "int64",
                    id: 1020
                },
                exp: {
                    type: "int32",
                    id: 1021
                },
                fan_ticket_count: {
                    type: "int64",
                    id: 1022
                },
                fold_stranger_chat: {
                    type: "bool",
                    id: 1023
                },
                follow_status: {
                    type: "int64",
                    id: 1024
                },
                deprecated28: {
                    type: "bool",
                    id: 1025
                },
                deprecated29: {
                    type: "string",
                    id: 1026
                },
                ichat_restrict_type: {
                    type: "int32",
                    id: 1027
                },
                id_str: {
                    type: "string",
                    id: 1028
                },
                is_follower: {
                    type: "bool",
                    id: 1029
                },
                is_following: {
                    type: "bool",
                    id: 1030
                },
                need_profile_guide: {
                    type: "bool",
                    id: 1031
                },
                pay_scores: {
                    type: "int64",
                    id: 1032
                },
                push_comment_status: {
                    type: "bool",
                    id: 1033
                },
                push_digg: {
                    type: "bool",
                    id: 1034
                },
                push_follow: {
                    type: "bool",
                    id: 1035
                },
                push_friend_action: {
                    type: "bool",
                    id: 1036
                },
                push_ichat: {
                    type: "bool",
                    id: 1037
                },
                push_status: {
                    type: "bool",
                    id: 1038
                },
                push_video_post: {
                    type: "bool",
                    id: 1039
                },
                push_video_recommend: {
                    type: "bool",
                    id: 1040
                },
                stats: {
                    type: "UserStats",
                    id: 1041
                },
                deprecated17: {
                    type: "bool",
                    id: 1042
                },
                verified_reason: {
                    type: "string",
                    id: 1043
                },
                with_car_management_permission: {
                    type: "bool",
                    id: 1044
                },
                upcoming_event_list: {
                    rule: "repeated",
                    type: "webcast.data.LiveEventInfo",
                    id: 1045
                },
                scm_label: {
                    type: "string",
                    id: 1046
                },
                ecommerce_entrance: {
                    type: "EcommerceEntrance",
                    id: 1047
                },
                is_block: {
                    type: "bool",
                    id: 1048
                },
                is_subscribe: {
                    type: "bool",
                    id: 1090
                },
                is_anchor_marked: {
                    type: "bool",
                    id: 1091
                }
            },
            nested: {
                FollowInfo: {
                    fields: {
                        following_count: {
                            type: "int64",
                            id: 1
                        },
                        follower_count: {
                            type: "int64",
                            id: 2
                        },
                        follow_status: {
                            type: "int64",
                            id: 3
                        },
                        push_status: {
                            type: "int64",
                            id: 4
                        }
                    }
                },
                PayGrade: {
                    fields: {
                        deprecated20: {
                            type: "int64",
                            id: 1
                        },
                        diamond_icon: {
                            type: "Image",
                            id: 2
                        },
                        name: {
                            type: "string",
                            id: 3
                        },
                        icon: {
                            type: "Image",
                            id: 4
                        },
                        next_name: {
                            type: "string",
                            id: 5
                        },
                        level: {
                            type: "int64",
                            id: 6
                        },
                        next_icon: {
                            type: "Image",
                            id: 7
                        },
                        deprecated22: {
                            type: "int64",
                            id: 8
                        },
                        deprecated23: {
                            type: "int64",
                            id: 9
                        },
                        deprecated24: {
                            type: "int64",
                            id: 10
                        },
                        deprecated25: {
                            type: "int64",
                            id: 11
                        },
                        deprecated26: {
                            type: "int64",
                            id: 12
                        },
                        grade_describe: {
                            type: "string",
                            id: 13
                        },
                        grade_icon_list: {
                            rule: "repeated",
                            type: "GradeIcon",
                            id: 14
                        },
                        screen_chat_type: {
                            type: "int64",
                            id: 15
                        },
                        im_icon: {
                            type: "Image",
                            id: 16
                        },
                        im_icon_with_level: {
                            type: "Image",
                            id: 17
                        },
                        live_icon: {
                            type: "Image",
                            id: 18
                        },
                        new_im_icon_with_level: {
                            type: "Image",
                            id: 19
                        },
                        new_live_icon: {
                            type: "Image",
                            id: 20
                        },
                        upgrade_need_consume: {
                            type: "int64",
                            id: 21
                        },
                        next_privileges: {
                            type: "string",
                            id: 22
                        },
                        background: {
                            type: "Image",
                            id: 23
                        },
                        background_back: {
                            type: "Image",
                            id: 24
                        },
                        score: {
                            type: "int64",
                            id: 25
                        },
                        grade_banner: {
                            type: "string",
                            id: 1001
                        },
                        profile_dialog_bg: {
                            type: "Image",
                            id: 1002
                        },
                        profile_dialog_bg_back: {
                            type: "Image",
                            id: 1003
                        }
                    },
                    nested: {
                        GradeIcon: {
                            fields: {
                                icon: {
                                    type: "Image",
                                    id: 1
                                },
                                icon_diamond: {
                                    type: "int64",
                                    id: 2
                                },
                                level: {
                                    type: "int64",
                                    id: 3
                                },
                                level_str: {
                                    type: "string",
                                    id: 4
                                }
                            }
                        }
                    }
                },
                FansClub: {
                    fields: {
                        data: {
                            type: "FansClubData",
                            id: 1
                        },
                        prefer_data: {
                            keyType: "int32",
                            type: "FansClubData",
                            id: 2
                        }
                    },
                    nested: {
                        FansClubData: {
                            fields: {
                                club_name: {
                                    type: "string",
                                    id: 1
                                },
                                level: {
                                    type: "int32",
                                    id: 2
                                },
                                user_fans_club_status: {
                                    type: "UserFansClubStatus",
                                    id: 3
                                },
                                badge: {
                                    type: "UserBadge",
                                    id: 4
                                },
                                available_gift_ids: {
                                    rule: "repeated",
                                    type: "int64",
                                    id: 5
                                },
                                anchor_id: {
                                    type: "int64",
                                    id: 6
                                }
                            },
                            nested: {
                                BadgeIcon: {
                                    values: {
                                        Unknown: 0,
                                        Icon: 1,
                                        SmallIcon: 2
                                    }
                                },
                                UserBadge: {
                                    fields: {
                                        icons: {
                                            keyType: "int32",
                                            type: "data.Image",
                                            id: 1
                                        },
                                        title: {
                                            type: "string",
                                            id: 2
                                        }
                                    }
                                },
                                UserFansClubStatus: {
                                    values: {
                                        NotJoined: 0,
                                        Active: 1,
                                        Inactive: 2
                                    }
                                }
                            }
                        },
                        PreferntialType: {
                            values: {
                                PresonalProfile: 0,
                                OtherRoom: 1
                            }
                        }
                    }
                },
                Border: {
                    fields: {
                        icon: {
                            type: "Image",
                            id: 1
                        },
                        level: {
                            type: "int64",
                            id: 2
                        },
                        source: {
                            type: "string",
                            id: 3
                        },
                        profile_decoration_ribbon: {
                            type: "Image",
                            id: 4
                        },
                        border_privilege_log_extra: {
                            type: "PrivilegeLogExtra",
                            id: 5
                        },
                        profile_privilege_log_extra: {
                            type: "PrivilegeLogExtra",
                            id: 6
                        },
                        avatar_background_color: {
                            type: "string",
                            id: 7
                        },
                        avatar_background_border_color: {
                            type: "string",
                            id: 8
                        }
                    }
                },
                UserAttr: {
                    fields: {
                        is_muted: {
                            type: "bool",
                            id: 1
                        },
                        is_admin: {
                            type: "bool",
                            id: 2
                        },
                        is_super_admin: {
                            type: "bool",
                            id: 3
                        },
                        mute_duration: {
                            type: "int64",
                            id: 4
                        },
                        admin_permissions: {
                            keyType: "int32",
                            type: "int32",
                            id: 5
                        },
                        has_voting_function: {
                            type: "bool",
                            id: 6
                        },
                        is_channel_admin: {
                            type: "bool",
                            id: 7
                        }
                    }
                },
                OwnRoom: {
                    fields: {
                        room_ids: {
                            rule: "repeated",
                            type: "int64",
                            id: 1
                        },
                        room_ids_str: {
                            rule: "repeated",
                            type: "string",
                            id: 2
                        }
                    }
                },
                AnchorInfo: {
                    fields: {
                        level: {
                            type: "int64",
                            id: 1
                        }
                    }
                },
                AnchorLevel: {
                    fields: {
                        level: {
                            type: "int64",
                            id: 1
                        },
                        experience: {
                            type: "int64",
                            id: 2
                        },
                        lowest_experience_this_level: {
                            type: "int64",
                            id: 3
                        },
                        highest_experience_this_level: {
                            type: "int64",
                            id: 4
                        },
                        task_start_experience: {
                            type: "int64",
                            id: 5
                        },
                        task_start_time: {
                            type: "int64",
                            id: 6
                        },
                        task_decrease_experience: {
                            type: "int64",
                            id: 7
                        },
                        task_target_experience: {
                            type: "int64",
                            id: 8
                        },
                        task_end_time: {
                            type: "int64",
                            id: 9
                        },
                        profile_dialog_bg: {
                            type: "Image",
                            id: 10
                        },
                        profile_dialog_bg_back: {
                            type: "Image",
                            id: 11
                        },
                        stage_level: {
                            type: "Image",
                            id: 12
                        },
                        small_icon: {
                            type: "Image",
                            id: 13
                        }
                    }
                },
                AuthorStats: {
                    fields: {
                        video_total_count: {
                            type: "int64",
                            id: 1
                        },
                        video_total_play_count: {
                            type: "int64",
                            id: 2
                        },
                        video_total_share_count: {
                            type: "int64",
                            id: 3
                        },
                        video_total_series_count: {
                            type: "int64",
                            id: 4
                        },
                        variety_show_play_count: {
                            type: "int64",
                            id: 5
                        },
                        video_total_favorite_count: {
                            type: "int64",
                            id: 6
                        }
                    }
                },
                DeprecatedType1: {
                    fields: {
                        deprecated1: {
                            type: "string",
                            id: 1
                        },
                        deprecated2: {
                            type: "int64",
                            id: 2
                        },
                        deprecated3: {
                            type: "int64",
                            id: 3
                        },
                        deprecated4: {
                            type: "string",
                            id: 4
                        },
                        deprecated5: {
                            type: "string",
                            id: 5
                        },
                        deprecated6: {
                            type: "bool",
                            id: 6
                        },
                        deprecated7: {
                            type: "DeprecatedType2",
                            id: 7
                        }
                    },
                    nested: {
                        DeprecatedType2: {
                            fields: {
                                deprecated1: {
                                    type: "string",
                                    id: 1
                                },
                                deprecated2: {
                                    type: "string",
                                    id: 2
                                },
                                deprecated3: {
                                    type: "DeprecatedType3",
                                    id: 3
                                }
                            },
                            nested: {
                                DeprecatedType3: {
                                    fields: {
                                        deprecated1: {
                                            type: "string",
                                            id: 1
                                        },
                                        deprecated2: {
                                            type: "string",
                                            id: 2
                                        },
                                        deprecated3: {
                                            type: "string",
                                            id: 3
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                ActivityInfo: {
                    fields: {
                        Badge: {
                            type: "Image",
                            id: 1
                        },
                        StoryTag: {
                            type: "Image",
                            id: 2
                        }
                    }
                },
                DeprecatedType4: {
                    fields: {
                        deprecated1: {
                            type: "Image",
                            id: 1
                        },
                        deprecated2: {
                            type: "int64",
                            id: 2
                        },
                        deprecated3: {
                            type: "Image",
                            id: 3
                        },
                        deprecated4: {
                            type: "string",
                            id: 4
                        },
                        deprecated5: {
                            type: "int64",
                            id: 5
                        },
                        deprecated6: {
                            type: "Image",
                            id: 6
                        },
                        deprecated7: {
                            type: "Image",
                            id: 7
                        },
                        deprecated8: {
                            type: "Image",
                            id: 8
                        },
                        deprecated9: {
                            rule: "repeated",
                            type: "string",
                            id: 9
                        }
                    }
                },
                DeprecatedType5: {
                    fields: {
                        deprecated1: {
                            type: "string",
                            id: 1
                        },
                        deprecated2: {
                            type: "int64",
                            id: 2
                        },
                        deprecated3: {
                            type: "Image",
                            id: 3
                        },
                        deprecated4: {
                            type: "string",
                            id: 4
                        }
                    }
                },
                AuthenticationInfo: {
                    fields: {
                        custom_verify: {
                            type: "string",
                            id: 1
                        },
                        enterprise_verify_reason: {
                            type: "string",
                            id: 2
                        },
                        authentication_badge: {
                            type: "Image",
                            id: 3
                        },
                        has_cert: {
                            type: "bool",
                            id: 4
                        }
                    }
                },
                DeprecatedType6: {
                    fields: {
                        deprecated1: {
                            type: "bool",
                            id: 1
                        },
                        deprecated2: {
                            type: "int64",
                            id: 2
                        },
                        deprecated3: {
                            type: "string",
                            id: 3
                        },
                        deprecated4: {
                            type: "string",
                            id: 4
                        }
                    }
                },
                ComboBadgeInfo: {
                    fields: {
                        icon: {
                            type: "Image",
                            id: 1
                        },
                        combo_count: {
                            type: "int64",
                            id: 2
                        }
                    }
                },
                SubscribeBadge: {
                    fields: {
                        origin_img: {
                            type: "webcast.data.Image",
                            id: 3
                        },
                        preview_img: {
                            type: "webcast.data.Image",
                            id: 4
                        },
                        is_customized: {
                            type: "bool",
                            id: 5
                        }
                    }
                },
                SubscribeInfo: {
                    fields: {
                        qualification: {
                            type: "bool",
                            id: 1
                        },
                        is_subscribe: {
                            type: "bool",
                            id: 2
                        },
                        badge: {
                            type: "SubscribeBadge",
                            id: 3
                        },
                        enable_subscription: {
                            type: "bool",
                            id: 4
                        },
                        subscriber_count: {
                            type: "int64",
                            id: 5
                        },
                        is_in_grace_period: {
                            type: "bool",
                            id: 6
                        },
                        is_subscribed_to_anchor: {
                            type: "bool",
                            id: 7
                        },
                        timer_detail: {
                            type: "webcast.data.TimerDetail",
                            id: 8
                        },
                        user_gift_sub_auth: {
                            type: "bool",
                            id: 9
                        },
                        anchor_gift_sub_auth: {
                            type: "bool",
                            id: 10
                        },
                        status: {
                            type: "PayStatus",
                            id: 11
                        },
                        sub_end_time: {
                            type: "int64",
                            id: 12
                        },
                        package_id: {
                            type: "string",
                            id: 13
                        },
                        sol_room_display_text: {
                            type: "string",
                            id: 14
                        },
                        is_sol_eligible: {
                            type: "bool",
                            id: 15
                        }
                    },
                    nested: {
                        PayStatus: {
                            values: {
                                SubStatus_Unknown: 0,
                                SubStatus_OneTime: 1,
                                SubStatus_AutoDeduction: 2,
                                SubStatus_AutoDeductionCanceled: 3,
                                SubStatus_Revoke: 4
                            }
                        }
                    }
                },
                FansClubInfo: {
                    fields: {
                        is_sleeping: {
                            type: "bool",
                            id: 1
                        },
                        fans_level: {
                            type: "int64",
                            id: 2
                        },
                        fans_score: {
                            type: "int64",
                            id: 3
                        },
                        badge: {
                            type: "webcast.data.Image",
                            id: 4
                        },
                        fans_count: {
                            type: "int64",
                            id: 5
                        },
                        fans_club_name: {
                            type: "string",
                            id: 6
                        }
                    }
                },
                UserStats: {
                    fields: {
                        id: {
                            type: "int64",
                            id: 1
                        },
                        id_str: {
                            type: "string",
                            id: 2
                        },
                        following_count: {
                            type: "int64",
                            id: 3
                        },
                        follower_count: {
                            type: "int64",
                            id: 4
                        },
                        record_count: {
                            type: "int64",
                            id: 5
                        },
                        total_duration: {
                            type: "int64",
                            id: 6
                        },
                        daily_fan_ticket_count: {
                            type: "int64",
                            id: 7
                        },
                        daily_income: {
                            type: "int64",
                            id: 8
                        },
                        item_count: {
                            type: "int64",
                            id: 9
                        },
                        favorite_item_count: {
                            type: "int64",
                            id: 10
                        },
                        deprecated27: {
                            type: "int64",
                            id: 11
                        },
                        diamond_consumed_count: {
                            type: "int64",
                            id: 12
                        },
                        tuwen_item_count: {
                            type: "int64",
                            id: 13
                        }
                    }
                },
                EcommerceEntrance: {
                    fields: {
                        entrance_type: {
                            type: "EntranceType",
                            id: 1
                        },
                        creator_type: {
                            type: "CreatorType",
                            id: 2
                        },
                        schema: {
                            type: "string",
                            id: 3
                        },
                        shop_entrance_info: {
                            type: "ShopEntranceInfo",
                            id: 4
                        },
                        showcase_entrance_info: {
                            type: "ShowcaseEntranceInfo",
                            id: 5
                        },
                        view_version: {
                            type: "ViewVersion",
                            id: 6
                        }
                    },
                    nested: {
                        EntranceType: {
                            values: {
                                Profile: 0,
                                Showcase: 1,
                                Shop: 2
                            }
                        },
                        CreatorType: {
                            values: {
                                Undefined: 0,
                                Official: 1,
                                Market: 2,
                                Normal: 3
                            }
                        },
                        SellingPoint: {
                            fields: {
                                show_text: {
                                    type: "string",
                                    id: 1
                                },
                                selling_point_type: {
                                    type: "LiveSellingPointType",
                                    id: 2
                                }
                            },
                            nested: {
                                LiveSellingPointType: {
                                    values: {
                                        UNDEFINED: 0,
                                        QUALITY: 1,
                                        SOLD: 2,
                                        TRUST_BETTER_THAN_OTHER_SHOP: 3,
                                        TRUST_REPLY_IN_TIME: 4,
                                        TRUST_CREATE_SHIP_IN_TIME: 5,
                                        TRUST_POSITIVE_REVIEW_RATE: 6
                                    }
                                }
                            }
                        },
                        ShopEntranceInfo: {
                            fields: {
                                shop_id: {
                                    type: "string",
                                    id: 1
                                },
                                shop_name: {
                                    type: "string",
                                    id: 2
                                },
                                shop_rating: {
                                    type: "string",
                                    id: 3
                                },
                                store_label: {
                                    type: "StoreLabel",
                                    id: 4
                                },
                                format_sold_count: {
                                    type: "string",
                                    id: 5
                                },
                                sold_count: {
                                    type: "int64",
                                    id: 6
                                },
                                exp_rate_percentile: {
                                    type: "int32",
                                    id: 7
                                },
                                exp_rate_top_display: {
                                    type: "string",
                                    id: 8
                                },
                                rate_display_style: {
                                    type: "int32",
                                    id: 9
                                },
                                show_rate_not_applicable: {
                                    type: "bool",
                                    id: 10
                                },
                                selling_point: {
                                    rule: "repeated",
                                    type: "SellingPoint",
                                    id: 11
                                }
                            },
                            nested: {
                                StoreLabel: {
                                    fields: {
                                        official_label: {
                                            type: "StoreOfficialLabel",
                                            id: 1
                                        },
                                        is_bytemall: {
                                            type: "bool",
                                            id: 2
                                        }
                                    },
                                    nested: {
                                        StoreBrandLabelType: {
                                            values: {
                                                None: 0,
                                                Official: 1,
                                                Authorized: 2,
                                                STORE_BRAND_LABEL_TYPE_BLUE_V: 3,
                                                STORE_BRAND_LABEL_TYPE_TOP_CHOICE: 4,
                                                STORE_BRAND_LABEL_TYPE_MALL: 5
                                            }
                                        },
                                        StoreOfficialLabel: {
                                            fields: {
                                                label_image_light: {
                                                    type: "ShopLabelImage",
                                                    id: 1
                                                },
                                                label_image_dark: {
                                                    type: "ShopLabelImage",
                                                    id: 2
                                                },
                                                label_type: {
                                                    type: "StoreBrandLabelType",
                                                    id: 3
                                                },
                                                label_type_str: {
                                                    type: "string",
                                                    id: 4
                                                }
                                            },
                                            nested: {
                                                ShopLabelImage: {
                                                    fields: {
                                                        height: {
                                                            type: "int32",
                                                            id: 1
                                                        },
                                                        width: {
                                                            type: "int32",
                                                            id: 2
                                                        },
                                                        minetype: {
                                                            type: "string",
                                                            id: 3
                                                        },
                                                        thumb_uri: {
                                                            type: "string",
                                                            id: 4
                                                        },
                                                        thumb_uri_list: {
                                                            rule: "repeated",
                                                            type: "string",
                                                            id: 5
                                                        },
                                                        uri: {
                                                            type: "string",
                                                            id: 6
                                                        },
                                                        url_list: {
                                                            rule: "repeated",
                                                            type: "string",
                                                            id: 7
                                                        },
                                                        color: {
                                                            type: "string",
                                                            id: 8
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        ShowcaseEntranceInfo: {
                            fields: {
                                format_sold_count: {
                                    type: "string",
                                    id: 1
                                },
                                sold_count: {
                                    type: "int64",
                                    id: 2
                                },
                                showcase_name: {
                                    type: "string",
                                    id: 3
                                },
                                selling_point: {
                                    rule: "repeated",
                                    type: "SellingPoint",
                                    id: 11
                                }
                            }
                        },
                        ViewVersion: {
                            values: {
                                VIEW_VERSION_UNKNOWN: 0,
                                VIEW_VERSION_STAR_SHOP: 1
                            }
                        }
                    }
                }
            }
        }
    }
    ,
    238075: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                user_armies: {
                    rule: "repeated",
                    type: "UserArmy",
                    id: 1
                },
                hostScore: {
                    type: "int64",
                    id: 2
                },
                anchor_id_str: {
                    type: "string",
                    id: 3
                }
            },
            nested: {
                UserArmy: {
                    fields: {
                        user_id: {
                            type: "int64",
                            id: 1
                        },
                        score: {
                            type: "int64",
                            id: 2
                        },
                        nickname: {
                            type: "string",
                            id: 3
                        },
                        avatar_thumb: {
                            type: "webcast.data.Image",
                            id: 4
                        },
                        diamond_score: {
                            type: "int64",
                            id: 5
                        },
                        user_id_str: {
                            type: "string",
                            id: 6
                        }
                    }
                }
            }
        }
    }
    ,
    648924: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                key: {
                    type: "int64",
                    id: 1
                },
                value: {
                    type: "webcast.data.UserArmies",
                    id: 2
                }
            }
        }
    }
    ,
    1977: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                user_id: {
                    type: "int64",
                    id: 1
                },
                rank: {
                    type: "int64",
                    id: 2
                },
                score: {
                    type: "int64",
                    id: 3
                },
                nickname: {
                    type: "string",
                    id: 4
                },
                avatar_thumb: {
                    type: "webcast.data.Image",
                    id: 5
                }
            }
        }
    }
    ,
    653599: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                countdown_id: {
                    type: "int64",
                    id: 1
                },
                score: {
                    type: "int64",
                    id: 2
                },
                target_score: {
                    type: "int64",
                    id: 3
                },
                completion_progress_percent: {
                    type: "int32",
                    id: 4
                }
            }
        }
    }
    ,
    943490: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                countdown_id: {
                    type: "int64",
                    id: 1
                },
                status: {
                    type: "int32",
                    id: 2
                },
                duration: {
                    type: "int64",
                    id: 3
                },
                start_time: {
                    type: "int64",
                    id: 4
                },
                end_time: {
                    type: "int64",
                    id: 5
                },
                score: {
                    type: "int64",
                    id: 6
                },
                target_score: {
                    type: "int64",
                    id: 7
                },
                achieved: {
                    type: "bool",
                    id: 8
                }
            }
        }
    }
    ,
    651604: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                user_id: {
                    type: "int64",
                    id: 1
                },
                emote_id: {
                    type: "int64",
                    id: 2
                },
                user_emote_upload_source: {
                    type: "UserEmoteUploadSource",
                    id: 3
                },
                image: {
                    type: "webcast.data.Image",
                    id: 4
                },
                valid_start_time: {
                    type: "int64",
                    id: 5
                },
                valid_expire_time: {
                    type: "int64",
                    id: 6
                },
                audit_status: {
                    type: "AuditStatus",
                    id: 7
                },
                audit_info: {
                    type: "AuditInfo",
                    id: 8
                },
                user_info: {
                    type: "webcast.data.User",
                    id: 9
                },
                badge_list: {
                    rule: "repeated",
                    type: "webcast.data.BadgeStruct",
                    id: 10
                },
                emote_id_str: {
                    type: "string",
                    id: 11
                }
            }
        }
    }
    ,
    944645: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                user_upload_limit: {
                    type: "int64",
                    id: 1
                },
                reach_anchor_upload_limit: {
                    type: "bool",
                    id: 2
                }
            }
        }
    }
    ,
    903596: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                EMOTE_UPLOAD_SOURCE_ANCHOR: 0,
                EMOTE_UPLOAD_SOURCE_SUBSCRIBER: 1,
                EMOTE_UPLOAD_SOURCE_MODERATOR: 2
            }
        }
    }
    ,
    858845: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                user_emote: {
                    type: "UserEmote",
                    id: 1
                },
                added_emote_id: {
                    type: "int64",
                    id: 2
                }
            }
        }
    }
    ,
    739469: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                user_id: {
                    type: "int64",
                    id: 1
                },
                fan_ticket: {
                    type: "int64",
                    id: 2
                },
                match_total_score: {
                    type: "int64",
                    id: 3
                },
                match_rank: {
                    type: "int32",
                    id: 4
                },
                countdown_info: {
                    type: "UserCountdownInfo",
                    id: 5
                },
                play_info: {
                    type: "UserPlayInfo",
                    id: 6
                },
                icon_name: {
                    type: "string",
                    id: 7
                },
                animation_name: {
                    type: "string",
                    id: 8
                }
            }
        }
    }
    ,
    675212: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                is_gift_giver_of_anchor: {
                    type: "bool",
                    id: 1
                },
                is_subscriber_of_anchor: {
                    type: "bool",
                    id: 2
                },
                is_mutual_following_with_anchor: {
                    type: "bool",
                    id: 3
                },
                is_follower_of_anchor: {
                    type: "bool",
                    id: 4
                },
                is_moderator_of_anchor: {
                    type: "bool",
                    id: 5
                },
                is_anchor: {
                    type: "bool",
                    id: 6
                }
            }
        }
    }
    ,
    841658: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                live_event_id: {
                    type: "string",
                    id: 1
                },
                quiz_id: {
                    type: "string",
                    id: 2
                },
                is_subscribed: {
                    type: "bool",
                    id: 3
                }
            }
        }
    }
    ,
    185192: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                user_id: {
                    type: "int64",
                    id: 1
                },
                model_prediction_data: {
                    keyType: "string",
                    type: "double",
                    id: 2
                }
            }
        }
    }
    ,
    482311: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                is_one_wallet_user: {
                    type: "bool",
                    id: 1
                },
                finished_ow_onboarding: {
                    type: "bool",
                    id: 2
                },
                finished_me_onboarding: {
                    type: "bool",
                    id: 3
                }
            }
        }
    }
    ,
    856087: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                USER_ONLINE_STATUS_UNKNOWN: 0,
                USER_ONLINE_STATUS_ONLINE: 1,
                USER_ONLINE_STATUS_OFFLINE: 2
            }
        }
    }
    ,
    311344: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                play_id: {
                    type: "int64",
                    id: 1
                },
                play_scene: {
                    type: "webcast.data.multi_guest_play.PlayScene",
                    id: 2
                },
                score: {
                    type: "int64",
                    id: 3
                },
                rank: {
                    type: "int32",
                    id: 4
                },
                target_score: {
                    type: "int64",
                    id: 5
                },
                user_tag: {
                    type: "webcast.data.multi_guest_play.PlayUserTag",
                    id: 6
                }
            }
        }
    }
    ,
    694740: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                cur_contribute_gift_num: {
                    type: "int64",
                    id: 1
                },
                limit_contribute_gift_num: {
                    type: "int64",
                    id: 2
                },
                watch_live_task_unlocked: {
                    type: "bool",
                    id: 3
                },
                watch_live_minutes: {
                    type: "int64",
                    id: 4
                },
                watch_live_points: {
                    type: "int64",
                    id: 5
                },
                is_watch_live_task_done: {
                    type: "bool",
                    id: 6
                },
                watch_live_total_contributed_points: {
                    type: "int64",
                    id: 7
                }
            }
        }
    }
    ,
    837406: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                RELATION_UNKNOWN: 0,
                RELATION_FRIENDs: 1,
                RELATION_FANSCLUB: 2,
                RELATION_FANS: 3
            }
        }
    }
    ,
    809209: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                type: {
                    type: "int64",
                    id: 1
                },
                room: {
                    type: "string",
                    id: 2
                },
                user: {
                    type: "string",
                    id: 3
                }
            }
        }
    }
    ,
    206447: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                content: {
                    type: "string",
                    id: 2
                },
                user_id: {
                    type: "int64",
                    id: 3
                },
                action_type: {
                    type: "int64",
                    id: 4
                }
            }
        }
    }
    ,
    712778: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                anchor: 0,
                audience: 1
            }
        }
    }
    ,
    925711: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                vip_level: {
                    type: "int64",
                    id: 1
                },
                vip_level_name: {
                    type: "string",
                    id: 2
                },
                status: {
                    type: "VIPStatus",
                    id: 3
                },
                start_time: {
                    type: "int64",
                    id: 4
                },
                end_time: {
                    type: "int64",
                    id: 5
                },
                remaining_days: {
                    type: "int64",
                    id: 6
                },
                total_consume: {
                    type: "int64",
                    id: 7
                },
                target_consume: {
                    type: "int64",
                    id: 8
                },
                badge: {
                    type: "VIPBadge",
                    id: 9
                },
                privileges: {
                    keyType: "int64",
                    type: "bool",
                    id: 10
                }
            }
        }
    }
    ,
    376754: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                has_voted: {
                    type: "bool",
                    id: 1
                },
                vote_option_index: {
                    type: "int64",
                    id: 2
                },
                vote_option_list: {
                    rule: "repeated",
                    type: "UserVoteOptionInfo",
                    id: 3
                }
            }
        }
    }
    ,
    261539: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                vote_option_index: {
                    type: "int64",
                    id: 1
                },
                vote_count: {
                    type: "int64",
                    id: 2
                }
            }
        }
    }
    ,
    277339: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                icons: {
                    keyType: "int64",
                    type: "webcast.data.Image",
                    id: 1
                }
            }
        }
    }
    ,
    944515: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                VIPBadgeType_Unknown: 0,
                VIPDefault: 1,
                RankBigBadge: 2
            }
        }
    }
    ,
    518207: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                user_vip_info: {
                    type: "webcast.data.UserVIPInfo",
                    id: 2
                },
                action: {
                    type: "int64",
                    id: 3
                }
            }
        }
    }
    ,
    549502: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                open_price: {
                    type: "int64",
                    id: 1
                },
                renew_price: {
                    type: "int64",
                    id: 2
                }
            }
        }
    }
    ,
    686554: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                VIPPrivilegeDefinition_Unknown: 0,
                VideoBadge: 1,
                LiveBadge: 201,
                RoomNotify: 202,
                VIPSeat: 203,
                VIPRank: 204,
                ExclusiveVIPGift: 205,
                EnterEffect: 206,
                LiveCommentShading: 207,
                ExclusiveCustomerService: 208,
                AllRoomNotify: 209,
                PreventKickOff: 210
            }
        }
    }
    ,
    266016: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                top_users: {
                    rule: "repeated",
                    type: "webcast.data.User",
                    id: 2
                },
                total_count: {
                    type: "int64",
                    id: 3
                }
            }
        }
    }
    ,
    225168: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                VIPStatus_Unknown: 0,
                Renewing: 1,
                RenewSuccess: 2,
                Protective: 3
            }
        }
    }
    ,
    284356: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                id: {
                    type: "int64",
                    id: 2
                },
                duration: {
                    type: "int64",
                    id: 3
                }
            }
        }
    }
    ,
    169550: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                UnknowAction: 0,
                CloseChat: 3,
                OpenChat: 4,
                CloseDanmaku: 5,
                OpenDanmaku: 6,
                CloseGift: 7,
                OpenGift: 8,
                CloseDigg: 12,
                OpenDigg: 13,
                ChangeTitle: 21,
                ChangeShortTitle: 22,
                ChangeIntroduction: 23,
                CloseBanner: 24,
                OpenBanner: 25,
                OpenAudioChat: 26,
                CloseAudioCHat: 27,
                OpenAudioChatAutoPlay: 28,
                CloseAudioChatAutoPly: 29,
                OpenRank: 30,
                CloseRank: 31,
                OpenUserCount: 32,
                CloseUserCount: 33,
                OpenViewers: 34,
                CloseViewers: 35,
                OpenChatSubOnly: 36,
                CloseChatSubOnly: 37,
                OpenExplore: 38,
                CloseExplore: 39,
                OpenStarCommentPermission: 40,
                CloseStarCommentPermission: 41
            }
        }
    }
    ,
    825804: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                VerticalPaddingRuleUseDefault: 0,
                VerticalPaddingRuleUseTopAndBottom: 1
            }
        }
    }
    ,
    948117: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                rcmd_coupon_id: {
                    type: "int64",
                    id: 2
                }
            }
        }
    }
    ,
    62495: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                user: {
                    type: "webcast.data.User",
                    id: 2
                },
                goods_order: {
                    type: "GoodsOrder",
                    id: 3
                }
            },
            nested: {
                GoodsOrder: {
                    fields: {
                        goods_room_order: {
                            type: "int64",
                            id: 1
                        },
                        order_num: {
                            type: "int64",
                            id: 2
                        },
                        order_money: {
                            type: "int64",
                            id: 3
                        },
                        order_id: {
                            type: "string",
                            id: 4
                        }
                    }
                }
            }
        }
    }
    ,
    483987: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                rcmd_goods_id: {
                    type: "int64",
                    id: 2
                }
            }
        }
    }
    ,
    662083: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                url: {
                    type: "string",
                    id: 1
                },
                height: {
                    type: "int64",
                    id: 2
                },
                width: {
                    type: "int64",
                    id: 3
                },
                size: {
                    type: "int64",
                    id: 4
                },
                duration: {
                    type: "float",
                    id: 5
                }
            }
        }
    }
    ,
    179918: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                video_type_name: {
                    type: "string",
                    id: 1
                },
                video_url: {
                    type: "Image",
                    id: 2
                },
                video_md5: {
                    type: "string",
                    id: 3
                }
            }
        }
    }
    ,
    980867: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                VIOLATION_END_STATUS_ONGOING: 0,
                VIOLATION_END_STATUS_END: 1
            }
        }
    }
    ,
    884833: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                ViolationTypeWarn: 0,
                NotRecommendEntirely: 1,
                NotRecommendShortly: 2,
                VIOLATION_TYPE_PERMANENT: 3
            }
        }
    }
    ,
    210624: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                send_user_id: {
                    type: "int64",
                    id: 1
                },
                send_timestamp: {
                    type: "int64",
                    id: 2
                },
                avatars: {
                    rule: "repeated",
                    type: "webcast.data.Image",
                    id: 3
                }
            }
        }
    }
    ,
    763726: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                user_id: {
                    type: "int64",
                    id: 1
                },
                nick_name: {
                    type: "string",
                    id: 2
                },
                avatar_thumb: {
                    type: "Image",
                    id: 3
                },
                vote_count: {
                    type: "int64",
                    id: 4
                }
            }
        }
    }
    ,
    492306: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                msg_type: {
                    type: "WalletLiveRewardsRatioImMsgType",
                    id: 1
                },
                notification_data: {
                    type: "WalletLiveRewardsRatioImMsgNotification",
                    id: 2
                }
            }
        }
    }
    ,
    646749: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                display_text: {
                    type: "string",
                    id: 1
                }
            }
        }
    }
    ,
    136538: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                WALLET_LIVE_REWARDS_RATIO_IM_MSG_TYPE_RATIO_CHANGE: 0
            }
        }
    }
    ,
    867238: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                im_msg: {
                    type: "WalletLiveRewardsRatioImMsg",
                    id: 2
                }
            }
        }
    }
    ,
    253822: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                room_id: {
                    type: "int64",
                    id: 1
                },
                channel_id: {
                    type: "int64",
                    id: 2
                },
                wallpaper_id: {
                    type: "int64",
                    id: 3
                },
                status: {
                    type: "int32",
                    id: 4
                },
                send_timestamp: {
                    type: "int64",
                    id: 5
                },
                play_user_id: {
                    type: "int64",
                    id: 6
                },
                wallpaper_url: {
                    type: "string",
                    id: 7
                },
                finished_user_list: {
                    rule: "repeated",
                    type: "WallpaperContext",
                    id: 8
                },
                play_user_list: {
                    rule: "repeated",
                    type: "WallpaperContext",
                    id: 9
                }
            }
        }
    }
    ,
    985112: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                user_id: {
                    type: "int64",
                    id: 1
                },
                wallpaper_start_time: {
                    type: "int64",
                    id: 2
                },
                nickname: {
                    type: "string",
                    id: 3
                },
                avatar_thumb: {
                    type: "webcast.data.Image",
                    id: 4
                },
                user_keywords: {
                    type: "string",
                    id: 5
                },
                linkmic_id_str: {
                    type: "string",
                    id: 6
                }
            }
        }
    }
    ,
    594982: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                image_url: {
                    type: "string",
                    id: 1
                }
            }
        }
    }
    ,
    322604: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                message_type: {
                    type: "WallpaperMessageType",
                    id: 2
                },
                wallpaper_content: {
                    type: "webcast.data.multi_guest_play.WallpaperContent",
                    id: 3
                }
            }
        }
    }
    ,
    674708: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                WALLPAPER_UNKNOWN: 0,
                WALLPAPER_CREATE_GAME: 1,
                WALLPAPER_NEXT_USER: 2,
                WALLPAPER_END_GAME: 3,
                WALLPAPER_USER_LIST_CHANGE: 4,
                WALLPAPER_LIST_CHANGE: 5
            }
        }
    }
    ,
    510256: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                ai_pic_url: {
                    type: "string",
                    id: 2
                },
                review_result: {
                    type: "int64",
                    id: 3
                },
                context_keywords: {
                    type: "string",
                    id: 4
                },
                keywords: {
                    type: "string",
                    id: 5
                },
                room_id: {
                    type: "int64",
                    id: 6
                },
                channel_id: {
                    type: "int64",
                    id: 7
                },
                wallpaper_id: {
                    type: "int64",
                    id: 8
                }
            }
        }
    }
    ,
    543221: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                text: {
                    type: "webcast.data.Text",
                    id: 1
                },
                duration: {
                    type: "int64",
                    id: 2
                },
                tag_source: {
                    type: "TagSource",
                    id: 3
                },
                punish_info: {
                    type: "webcast.data.PunishEventInfo",
                    id: 4
                },
                style: {
                    type: "int32",
                    id: 5
                },
                detail_url: {
                    type: "string",
                    id: 6
                },
                icon_type: {
                    type: "webcast.data.PerceptionDialogIconType",
                    id: 7
                }
            },
            nested: {
                TagSource: {
                    values: {
                        CurrentRoom: 0,
                        CoHostRoom: 1
                    }
                }
            }
        }
    }
    ,
    243484: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                watch_status_none: 0,
                watch_status_not_ready: 1,
                watch_status_ready: 2,
                watch_status_unavailable: 3
            }
        }
    }
    ,
    646867: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                algorithm_version: {
                    type: "string",
                    id: 1
                },
                is_alg_hit: {
                    type: "bool",
                    id: 2
                },
                predict_score: {
                    type: "string",
                    id: 3
                },
                is_rewatch: {
                    type: "bool",
                    id: 4
                },
                is_follow: {
                    type: "bool",
                    id: 5
                }
            }
        }
    }
    ,
    698930: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                card_name_key: {
                    type: "string",
                    id: 1
                },
                card_image: {
                    type: "webcast.data.Image",
                    id: 2
                },
                send_time_sec: {
                    type: "int64",
                    id: 3
                },
                send_user: {
                    type: "BattleUserInfo",
                    id: 4
                },
                effect_last_duration: {
                    type: "int64",
                    id: 5
                },
                rule_url: {
                    type: "string",
                    id: 6
                },
                effect_time_sec: {
                    type: "int64",
                    id: 7
                },
                to_anchor_id: {
                    type: "int64",
                    id: 8
                }
            }
        }
    }
    ,
    461175: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                emote: {
                    type: "Emote",
                    id: 1
                },
                emotes: {
                    rule: "repeated",
                    type: "Emote",
                    id: 2
                }
            }
        }
    }
    ,
    194834: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                WAVE_STATUS_RUNNING: 0,
                WAVE_STATUS_FINISHED: 1,
                WAVE_STATUS_FAILED: 2,
                WAVE_STATUS_STRIKE: 3
            }
        }
    }
    ,
    957872: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                game_id: {
                    type: "int64",
                    id: 2
                },
                message_type: {
                    type: "int64",
                    id: 3
                },
                extra: {
                    type: "string",
                    id: 4
                },
                user: {
                    type: "webcast.data.User",
                    id: 5
                }
            }
        }
    }
    ,
    200373: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                user_access_status: {
                    type: "bool",
                    id: 1
                },
                is_upgrade_restricted: {
                    type: "bool",
                    id: 2
                },
                punish_detail_url: {
                    type: "string",
                    id: 3
                },
                upgrade_restriction_end_day: {
                    type: "string",
                    id: 4
                }
            }
        }
    }
    ,
    320010: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                popular_card_info: {
                    type: "PopularCardInfo",
                    id: 2
                }
            },
            nested: {
                PopularCardInfo: {
                    fields: {
                        status: {
                            type: "int32",
                            id: 1
                        },
                        start_time: {
                            type: "int64",
                            id: 2
                        },
                        end_time: {
                            type: "int64",
                            id: 3
                        },
                        enter_number: {
                            type: "int32",
                            id: 4
                        }
                    }
                }
            }
        }
    }
    ,
    542696: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                user_id: {
                    type: "int64",
                    id: 1
                },
                avatar_border: {
                    type: "webcast.data.User.Border",
                    id: 2
                },
                common: {
                    type: "Common",
                    id: 3
                },
                msg: {
                    type: "webcast.im.NotifyMessage",
                    id: 4
                }
            }
        }
    }
    ,
    391570: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                id: {
                    type: "string",
                    id: 1
                },
                content: {
                    type: "string",
                    id: 2
                },
                create_time_sec: {
                    type: "int64",
                    id: 3
                },
                audit_status: {
                    type: "AuditStatus",
                    id: 4
                }
            }
        }
    }
    ,
    373750: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            oneofs: {
                extra: {
                    oneof: ["gift"]
                }
            },
            fields: {
                type: {
                    type: "WishType",
                    id: 1
                },
                id: {
                    type: "int64",
                    id: 2
                },
                progress: {
                    type: "int64",
                    id: 3
                },
                target: {
                    type: "int64",
                    id: 4
                },
                gift: {
                    type: "GiftWish",
                    id: 5
                }
            }
        }
    }
    ,
    42613: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                user_id: {
                    type: "int64",
                    id: 1
                },
                sec_user_id: {
                    type: "string",
                    id: 2
                },
                avatar: {
                    type: "webcast.data.Image",
                    id: 3
                },
                display_id: {
                    type: "string",
                    id: 4
                },
                score: {
                    type: "int64",
                    id: 5
                },
                user_id_str: {
                    type: "string",
                    id: 6
                }
            }
        }
    }
    ,
    187006: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                WishTypeUnknown: 0,
                WishTypeGift: 1
            }
        }
    }
    ,
    617930: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                status: {
                    type: "WishlistStatus",
                    id: 1
                },
                wishes: {
                    rule: "repeated",
                    type: "Wish",
                    id: 2
                },
                contributors: {
                    rule: "repeated",
                    type: "WishContributor",
                    id: 3
                },
                contributors_length: {
                    type: "int32",
                    id: 4
                },
                description: {
                    type: "string",
                    id: 5
                },
                audit_status: {
                    type: "int32",
                    id: 6
                }
            }
        }
    }
    ,
    294704: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                WishlistUnknown: 0,
                WishlistNotSet: 1,
                WishlistOngoing: 2,
                WishlistFinished: 3
            }
        }
    }
    ,
    686060: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                list: {
                    type: "webcast.data.Wishlist",
                    id: 2
                }
            }
        }
    }
    ,
    366444: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                FansDataSectionUnknown: 0,
                FansDataSectionLatestRoom: 1,
                FansDataSectionLast7Day: 2,
                FansDataSectionLast28Day: 3
            }
        }
    }
    ,
    768384: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                lottery_info: {
                    type: "webcast.data.LotteryInfo",
                    id: 2
                }
            }
        }
    }
}]);
