"use strict";
(globalThis.__TIKTOK_CHUNKS__ = globalThis.__TIKTOK_CHUNKS__ || []).push([[801], {
    335221: (t, e, i) => {
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
    855527: (t, e, i) => {
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
    769269: (t, e, i) => {
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
    591765: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {}
        }
    }
    ,
    733542: (t, e, i) => {
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
    166261: (t, e, i) => {
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
    118529: (t, e, i) => {
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
    353483: (t, e, i) => {
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
    999661: (t, e, i) => {
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
    471951: (t, e, i) => {
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
    40605: (t, e, i) => {
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
    498022: (t, e, i) => {
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
    732400: (t, e, i) => {
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
    560714: (t, e, i) => {
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
    634227: (t, e, i) => {
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
    640968: (t, e, i) => {
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
    195560: (t, e, i) => {
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
    600767: (t, e, i) => {
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
    206167: (t, e, i) => {
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
    144628: (t, e, i) => {
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
    265683: (t, e, i) => {
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
    652754: (t, e, i) => {
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
    817528: (t, e, i) => {
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
    490035: (t, e, i) => {
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
    709188: (t, e, i) => {
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
    687495: (t, e, i) => {
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
    493174: (t, e, i) => {
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
    188809: (t, e, i) => {
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
    137662: (t, e, i) => {
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
    202838: (t, e, i) => {
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
    839519: (t, e, i) => {
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
    731970: (t, e, i) => {
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
    600259: (t, e, i) => {
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
    87697: (t, e, i) => {
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
    341101: (t, e, i) => {
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
    406664: (t, e, i) => {
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
    803390: (t, e, i) => {
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
    633313: (t, e, i) => {
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
    228644: (t, e, i) => {
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
    892342: (t, e, i) => {
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
    965247: (t, e, i) => {
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
    731725: (t, e, i) => {
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
    206363: (t, e, i) => {
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
    754254: (t, e, i) => {
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
    525192: (t, e, i) => {
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
    64979: (t, e, i) => {
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
    306852: (t, e, i) => {
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
    114958: (t, e, i) => {
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
    709078: (t, e, i) => {
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
    476856: (t, e, i) => {
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
    578238: (t, e, i) => {
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
    587393: (t, e, i) => {
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
    773645: (t, e, i) => {
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
    144895: (t, e, i) => {
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
    886020: (t, e, i) => {
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
    243912: (t, e, i) => {
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
    644822: (t, e, i) => {
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
    111794: (t, e, i) => {
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
    235697: (t, e, i) => {
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
    887448: (t, e, i) => {
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
    72600: (t, e, i) => {
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
    453712: (t, e, i) => {
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
    196405: (t, e, i) => {
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
    922995: (t, e, i) => {
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
    618027: (t, e, i) => {
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
    81094: (t, e, i) => {
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
    414610: (t, e, i) => {
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
    62051: (t, e, i) => {
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
    632816: (t, e, i) => {
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
    477865: (t, e, i) => {
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
    432735: (t, e, i) => {
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
    706713: (t, e, i) => {
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
    904352: (t, e, i) => {
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
    624479: (t, e, i) => {
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
    818468: (t, e, i) => {
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
    407287: (t, e, i) => {
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
    37948: (t, e, i) => {
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
    748039: (t, e, i) => {
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
    4526: (t, e, i) => {
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
    544421: (t, e, i) => {
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
    333104: (t, e, i) => {
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
    537676: (t, e, i) => {
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
    988826: (t, e, i) => {
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
    353137: (t, e, i) => {
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
    357070: (t, e, i) => {
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
    567060: (t, e, i) => {
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
    335880: (t, e, i) => {
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
    598321: (t, e, i) => {
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
    687531: (t, e, i) => {
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
    277671: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {}
        }
    }
    ,
    832757: (t, e, i) => {
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
    782667: (t, e, i) => {
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
    831858: (t, e, i) => {
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
    517120: (t, e, i) => {
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
    637144: (t, e, i) => {
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
    70912: (t, e, i) => {
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
    798022: (t, e, i) => {
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
    9332: (t, e, i) => {
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
    498892: (t, e, i) => {
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
    263590: (t, e, i) => {
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
    173198: (t, e, i) => {
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
    437409: (t, e, i) => {
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
    130282: (t, e, i) => {
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
    446025: (t, e, i) => {
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
    62158: (t, e, i) => {
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
    768390: (t, e, i) => {
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
    219423: (t, e, i) => {
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
    745335: (t, e, i) => {
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
    968303: (t, e, i) => {
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
    592847: (t, e, i) => {
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
    799782: (t, e, i) => {
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
    55697: (t, e, i) => {
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
    11202: (t, e, i) => {
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
    767757: (t, e, i) => {
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
    547173: (t, e, i) => {
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
    699236: (t, e, i) => {
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
    491523: (t, e, i) => {
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
    979741: (t, e, i) => {
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
    229908: (t, e, i) => {
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
    722343: (t, e, i) => {
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
    244687: (t, e, i) => {
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
    568681: (t, e, i) => {
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
    294891: (t, e, i) => {
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
    242508: (t, e, i) => {
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
    359676: (t, e, i) => {
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
    506312: (t, e, i) => {
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
    644524: (t, e, i) => {
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
    822402: (t, e, i) => {
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
    834793: (t, e, i) => {
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
    319536: (t, e, i) => {
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
    312307: (t, e, i) => {
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
    925316: (t, e, i) => {
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
    816476: (t, e, i) => {
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
    580695: (t, e, i) => {
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
    309499: (t, e, i) => {
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
    158287: (t, e, i) => {
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
    243356: (t, e, i) => {
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
    121002: (t, e, i) => {
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
    558741: (t, e, i) => {
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
    829557: (t, e, i) => {
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
    536104: (t, e, i) => {
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
    856186: (t, e, i) => {
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
    531775: (t, e, i) => {
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
    233010: (t, e, i) => {
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
    387243: (t, e, i) => {
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
    477980: (t, e, i) => {
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
    478855: (t, e, i) => {
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
    733867: (t, e, i) => {
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
    545331: (t, e, i) => {
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
    878981: (t, e, i) => {
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
    584966: (t, e, i) => {
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
    474525: (t, e, i) => {
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
    317466: (t, e, i) => {
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
    455376: (t, e, i) => {
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
    926797: (t, e, i) => {
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
    488466: (t, e, i) => {
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
    438096: (t, e, i) => {
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
    338403: (t, e, i) => {
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
    221054: (t, e, i) => {
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
    758663: (t, e, i) => {
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
    374975: (t, e, i) => {
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
    794073: (t, e, i) => {
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
    667371: (t, e, i) => {
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
    766229: (t, e, i) => {
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
    956025: (t, e, i) => {
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
    157956: (t, e, i) => {
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
    321826: (t, e, i) => {
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
    452144: (t, e, i) => {
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
    117912: (t, e, i) => {
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
    455885: (t, e, i) => {
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
    263280: (t, e, i) => {
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
    339559: (t, e, i) => {
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
    383854: (t, e, i) => {
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
    826680: (t, e, i) => {
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
    692330: (t, e, i) => {
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
    204895: (t, e, i) => {
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
    521919: (t, e, i) => {
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
    591917: (t, e, i) => {
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
    363967: (t, e, i) => {
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
    40925: (t, e, i) => {
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
    32533: (t, e, i) => {
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
    718946: (t, e, i) => {
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
    99623: (t, e, i) => {
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
    835819: (t, e, i) => {
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
    227144: (t, e, i) => {
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
    389045: (t, e, i) => {
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
    145694: (t, e, i) => {
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
    447804: (t, e, i) => {
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
    718388: (t, e, i) => {
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
    80885: (t, e, i) => {
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
    375184: (t, e, i) => {
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
    231414: (t, e, i) => {
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
    392792: (t, e, i) => {
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
    508889: (t, e, i) => {
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
    340950: (t, e, i) => {
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
    838434: (t, e, i) => {
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
    768591: (t, e, i) => {
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
    223665: (t, e, i) => {
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
    408577: (t, e, i) => {
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
    376588: (t, e, i) => {
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
    529197: (t, e, i) => {
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
    180334: (t, e, i) => {
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
    394467: (t, e, i) => {
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
    566353: (t, e, i) => {
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
    890004: (t, e, i) => {
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
    833471: (t, e, i) => {
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
    867: (t, e, i) => {
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
    233293: (t, e, i) => {
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
    19760: (t, e, i) => {
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
    24683: (t, e, i) => {
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
    85266: (t, e, i) => {
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
    588378: (t, e, i) => {
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
    898061: (t, e, i) => {
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
    938810: (t, e, i) => {
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
    792565: (t, e, i) => {
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
    559781: (t, e, i) => {
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
    904291: (t, e, i) => {
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
    419892: (t, e, i) => {
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
    861642: (t, e, i) => {
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
    846942: (t, e, i) => {
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
    174069: (t, e, i) => {
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
    789627: (t, e, i) => {
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
    811618: (t, e, i) => {
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
    759787: (t, e, i) => {
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
    274057: (t, e, i) => {
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
    909419: (t, e, i) => {
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
    846835: (t, e, i) => {
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
    912140: (t, e, i) => {
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
    909572: (t, e, i) => {
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
    802989: (t, e, i) => {
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
    932320: (t, e, i) => {
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
    991322: (t, e, i) => {
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
    206838: (t, e, i) => {
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
    706460: (t, e, i) => {
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
    488210: (t, e, i) => {
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
    951363: (t, e, i) => {
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
    942768: (t, e, i) => {
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
    320510: (t, e, i) => {
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
    791017: (t, e, i) => {
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
    963849: (t, e, i) => {
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
    581189: (t, e, i) => {
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
    655997: (t, e, i) => {
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
    65298: (t, e, i) => {
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
    488614: (t, e, i) => {
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
    463140: (t, e, i) => {
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
    721539: (t, e, i) => {
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
    802765: (t, e, i) => {
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
    939325: (t, e, i) => {
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
    221224: (t, e, i) => {
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
    95267: (t, e, i) => {
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
    175575: (t, e, i) => {
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
    800431: (t, e, i) => {
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
    516606: (t, e, i) => {
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
    813336: (t, e, i) => {
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
    685501: (t, e, i) => {
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
    560667: (t, e, i) => {
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
    323339: (t, e, i) => {
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
    232997: (t, e, i) => {
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
    307928: (t, e, i) => {
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
    888463: (t, e, i) => {
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
    35822: (t, e, i) => {
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
    601440: (t, e, i) => {
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
    426577: (t, e, i) => {
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
    183235: (t, e, i) => {
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
    914204: (t, e, i) => {
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
    233590: (t, e, i) => {
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
    738897: (t, e, i) => {
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
    88193: (t, e, i) => {
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
    419392: (t, e, i) => {
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
    97002: (t, e, i) => {
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
    167575: (t, e, i) => {
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
    738852: (t, e, i) => {
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
    615644: (t, e, i) => {
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
    313880: (t, e, i) => {
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
    511231: (t, e, i) => {
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
    495251: (t, e, i) => {
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
    636347: (t, e, i) => {
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
    400440: (t, e, i) => {
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
    489652: (t, e, i) => {
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
    895629: (t, e, i) => {
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
    337628: (t, e, i) => {
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
    474129: (t, e, i) => {
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
    410716: (t, e, i) => {
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
    854605: (t, e, i) => {
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
    223340: (t, e, i) => {
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
    954599: (t, e, i) => {
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
    722753: (t, e, i) => {
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
    593166: (t, e, i) => {
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
    77170: (t, e, i) => {
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
    726700: (t, e, i) => {
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
    435726: (t, e, i) => {
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
    901136: (t, e, i) => {
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
    337947: (t, e, i) => {
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
    357361: (t, e, i) => {
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
    642117: (t, e, i) => {
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
    395806: (t, e, i) => {
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
    666463: (t, e, i) => {
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
    179205: (t, e, i) => {
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
    872999: (t, e, i) => {
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
    793879: (t, e, i) => {
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
    786227: (t, e, i) => {
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
    522186: (t, e, i) => {
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
    845183: (t, e, i) => {
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
    48306: (t, e, i) => {
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
    616716: (t, e, i) => {
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
    932284: (t, e, i) => {
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
    198760: (t, e, i) => {
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
    393683: (t, e, i) => {
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
    755524: (t, e, i) => {
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
    2221: (t, e, i) => {
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
    48091: (t, e, i) => {
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
    893052: (t, e, i) => {
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
    16692: (t, e, i) => {
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
    483588: (t, e, i) => {
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
    767221: (t, e, i) => {
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
    448392: (t, e, i) => {
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
    282250: (t, e, i) => {
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
    711375: (t, e, i) => {
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
    961909: (t, e, i) => {
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
    611751: (t, e, i) => {
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
    244296: (t, e, i) => {
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
    306726: (t, e, i) => {
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
    765663: (t, e, i) => {
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
    727782: (t, e, i) => {
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
    537770: (t, e, i) => {
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
    466355: (t, e, i) => {
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
    420382: (t, e, i) => {
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
    146189: (t, e, i) => {
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
    504455: (t, e, i) => {
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
    23200: (t, e, i) => {
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
    386317: (t, e, i) => {
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
    703998: (t, e, i) => {
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
    838330: (t, e, i) => {
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
    861707: (t, e, i) => {
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
    951137: (t, e, i) => {
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
    562662: (t, e, i) => {
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
    279040: (t, e, i) => {
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
    165145: (t, e, i) => {
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
    289359: (t, e, i) => {
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
    359608: (t, e, i) => {
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
    185418: (t, e, i) => {
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
    399049: (t, e, i) => {
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
    82015: (t, e, i) => {
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
    106132: (t, e, i) => {
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
    724294: (t, e, i) => {
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
    183689: (t, e, i) => {
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
    103391: (t, e, i) => {
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
    358417: (t, e, i) => {
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
    613279: (t, e, i) => {
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
    996476: (t, e, i) => {
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
    583121: (t, e, i) => {
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
    573385: (t, e, i) => {
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
    647878: (t, e, i) => {
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
    222887: (t, e, i) => {
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
    335633: (t, e, i) => {
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
    670284: (t, e, i) => {
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
    901952: (t, e, i) => {
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
    300989: (t, e, i) => {
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
    489286: (t, e, i) => {
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
    323888: (t, e, i) => {
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
    458626: (t, e, i) => {
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
    539604: (t, e, i) => {
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
    666401: (t, e, i) => {
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
    322823: (t, e, i) => {
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
    199239: (t, e, i) => {
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
    442091: (t, e, i) => {
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
    499692: (t, e, i) => {
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
    851768: (t, e, i) => {
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
    622269: (t, e, i) => {
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
    705396: (t, e, i) => {
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
    991469: (t, e, i) => {
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
    847586: (t, e, i) => {
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
    695437: (t, e, i) => {
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
    581009: (t, e, i) => {
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
    839447: (t, e, i) => {
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
    975615: (t, e, i) => {
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
    474366: (t, e, i) => {
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
    738839: (t, e, i) => {
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
    940762: (t, e, i) => {
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
    75157: (t, e, i) => {
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
    792381: (t, e, i) => {
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
    476446: (t, e, i) => {
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
    9853: (t, e, i) => {
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
    602527: (t, e, i) => {
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
    76783: (t, e, i) => {
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
    871710: (t, e, i) => {
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
    131974: (t, e, i) => {
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
    575838: (t, e, i) => {
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
    17780: (t, e, i) => {
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
    721007: (t, e, i) => {
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
    184645: (t, e, i) => {
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
    335538: (t, e, i) => {
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
    87690: (t, e, i) => {
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
    938225: (t, e, i) => {
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
    640571: (t, e, i) => {
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
    587279: (t, e, i) => {
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
    659416: (t, e, i) => {
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
    856181: (t, e, i) => {
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
    548715: (t, e, i) => {
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
    809360: (t, e, i) => {
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
    101149: (t, e, i) => {
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
    966152: (t, e, i) => {
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
    534513: (t, e, i) => {
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
    197985: (t, e, i) => {
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
    563887: (t, e, i) => {
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
    911354: (t, e, i) => {
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
    682578: (t, e, i) => {
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
    924054: (t, e, i) => {
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
    366172: (t, e, i) => {
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
    284562: (t, e, i) => {
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
    696929: (t, e, i) => {
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
    233882: (t, e, i) => {
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
    791774: (t, e, i) => {
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
    962863: (t, e, i) => {
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
    972065: (t, e, i) => {
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
    763821: (t, e, i) => {
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
    387904: (t, e, i) => {
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
    800294: (t, e, i) => {
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
    950246: (t, e, i) => {
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
    142956: (t, e, i) => {
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
    265373: (t, e, i) => {
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
    162449: (t, e, i) => {
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
    866739: (t, e, i) => {
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
    746600: (t, e, i) => {
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
    208914: (t, e, i) => {
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
    115655: (t, e, i) => {
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
    705343: (t, e, i) => {
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
    883874: (t, e, i) => {
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
    671137: (t, e, i) => {
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
    942480: (t, e, i) => {
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
    841036: (t, e, i) => {
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
    719303: (t, e, i) => {
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
    820873: (t, e, i) => {
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
    74925: (t, e, i) => {
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
    260346: (t, e, i) => {
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
    108772: (t, e, i) => {
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
    817688: (t, e, i) => {
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
    612350: (t, e, i) => {
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
    986323: (t, e, i) => {
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
    528800: (t, e, i) => {
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
    494603: (t, e, i) => {
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
    503059: (t, e, i) => {
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
    301163: (t, e, i) => {
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
    923974: (t, e, i) => {
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
    282463: (t, e, i) => {
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
    967854: (t, e, i) => {
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
    114764: (t, e, i) => {
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
    657333: (t, e, i) => {
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
    598735: (t, e, i) => {
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
    579328: (t, e, i) => {
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
    969971: (t, e, i) => {
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
    419933: (t, e, i) => {
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
    148718: (t, e, i) => {
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
    80214: (t, e, i) => {
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
    573126: (t, e, i) => {
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
    395749: (t, e, i) => {
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
    442312: (t, e, i) => {
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
    236282: (t, e, i) => {
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
    260726: (t, e, i) => {
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
    86770: (t, e, i) => {
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
    987270: (t, e, i) => {
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
    837422: (t, e, i) => {
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
    58819: (t, e, i) => {
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
    309132: (t, e, i) => {
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
    546361: (t, e, i) => {
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
    699303: (t, e, i) => {
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
    239138: (t, e, i) => {
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
    780605: (t, e, i) => {
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
    829874: (t, e, i) => {
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
    38870: (t, e, i) => {
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
    866993: (t, e, i) => {
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
    482137: (t, e, i) => {
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
    195010: (t, e, i) => {
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
    334399: (t, e, i) => {
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
    66564: (t, e, i) => {
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
    22496: (t, e, i) => {
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
    850975: (t, e, i) => {
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
    871856: (t, e, i) => {
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
    565287: (t, e, i) => {
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
    457558: (t, e, i) => {
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
    5162: (t, e, i) => {
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
    667487: (t, e, i) => {
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
    204864: (t, e, i) => {
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
    269921: (t, e, i) => {
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
    396355: (t, e, i) => {
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
    693811: (t, e, i) => {
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
    376468: (t, e, i) => {
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
    67288: (t, e, i) => {
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
    988105: (t, e, i) => {
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
    777e3: (t, e, i) => {
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
    731330: (t, e, i) => {
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
    740715: (t, e, i) => {
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
    764019: (t, e, i) => {
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
    430978: (t, e, i) => {
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
    837535: (t, e, i) => {
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
    107856: (t, e, i) => {
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
    182087: (t, e, i) => {
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
    847392: (t, e, i) => {
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
    906201: (t, e, i) => {
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
    574818: (t, e, i) => {
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
    13101: (t, e, i) => {
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
    903573: (t, e, i) => {
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
    887653: (t, e, i) => {
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
    630693: (t, e, i) => {
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
    363067: (t, e, i) => {
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
    307657: (t, e, i) => {
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
    583407: (t, e, i) => {
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
    359587: (t, e, i) => {
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
    59187: (t, e, i) => {
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
    740680: (t, e, i) => {
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
    30741: (t, e, i) => {
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
    133990: (t, e, i) => {
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
    587618: (t, e, i) => {
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
    634751: (t, e, i) => {
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
    916594: (t, e, i) => {
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
    631045: (t, e, i) => {
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
    560154: (t, e, i) => {
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
    294952: (t, e, i) => {
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
    61120: (t, e, i) => {
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
    688567: (t, e, i) => {
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
    346073: (t, e, i) => {
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
    665473: (t, e, i) => {
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
    700604: (t, e, i) => {
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
    217530: (t, e, i) => {
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
    467267: (t, e, i) => {
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
    554348: (t, e, i) => {
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
    538375: (t, e, i) => {
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
    76573: (t, e, i) => {
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
    174120: (t, e, i) => {
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
    394494: (t, e, i) => {
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
    937932: (t, e, i) => {
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
    434680: (t, e, i) => {
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
    996679: (t, e, i) => {
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
    991875: (t, e, i) => {
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
    396332: (t, e, i) => {
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
    215469: (t, e, i) => {
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
    972806: (t, e, i) => {
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
    650946: (t, e, i) => {
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
    750232: (t, e, i) => {
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
    44723: (t, e, i) => {
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
    564760: (t, e, i) => {
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
    509257: (t, e, i) => {
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
    822589: (t, e, i) => {
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
    639981: (t, e, i) => {
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
    548215: (t, e, i) => {
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
    544451: (t, e, i) => {
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
    246766: (t, e, i) => {
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
    637522: (t, e, i) => {
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
    128410: (t, e, i) => {
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
    587907: (t, e, i) => {
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
    220652: (t, e, i) => {
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
    488680: (t, e, i) => {
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
    487694: (t, e, i) => {
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
    84867: (t, e, i) => {
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
    743120: (t, e, i) => {
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
    787892: (t, e, i) => {
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
    59854: (t, e, i) => {
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
    485602: (t, e, i) => {
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
    897226: (t, e, i) => {
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
    276773: (t, e, i) => {
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
    864528: (t, e, i) => {
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
    809033: (t, e, i) => {
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
    791137: (t, e, i) => {
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
    623431: (t, e, i) => {
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
    928944: (t, e, i) => {
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
    498511: (t, e, i) => {
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
    54507: (t, e, i) => {
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
    498425: (t, e, i) => {
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
    397239: (t, e, i) => {
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
    81085: (t, e, i) => {
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
    89850: (t, e, i) => {
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
    255482: (t, e, i) => {
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
    256459: (t, e, i) => {
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
    952828: (t, e, i) => {
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
    522983: (t, e, i) => {
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
    722123: (t, e, i) => {
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
    874556: (t, e, i) => {
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
    404654: (t, e, i) => {
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
    453179: (t, e, i) => {
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
    377072: (t, e, i) => {
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
    475497: (t, e, i) => {
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
    289656: (t, e, i) => {
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
    551873: (t, e, i) => {
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
    468655: (t, e, i) => {
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
    107837: (t, e, i) => {
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
    519087: (t, e, i) => {
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
    940404: (t, e, i) => {
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
    73593: (t, e, i) => {
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
    496655: (t, e, i) => {
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
    293425: (t, e, i) => {
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
    902187: (t, e, i) => {
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
    101575: (t, e, i) => {
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
    277382: (t, e, i) => {
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
    420245: (t, e, i) => {
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
    494453: (t, e, i) => {
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
    461196: (t, e, i) => {
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
    551646: (t, e, i) => {
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
    726388: (t, e, i) => {
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
    120371: (t, e, i) => {
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
    874377: (t, e, i) => {
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
    80404: (t, e, i) => {
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
    569908: (t, e, i) => {
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
    507736: (t, e, i) => {
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
    142952: (t, e, i) => {
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
    953143: (t, e, i) => {
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
    926838: (t, e, i) => {
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
    549189: (t, e, i) => {
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
    500889: (t, e, i) => {
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
    293395: (t, e, i) => {
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
    940829: (t, e, i) => {
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
    515174: (t, e, i) => {
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
    726350: (t, e, i) => {
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
    833315: (t, e, i) => {
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
    449012: (t, e, i) => {
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
    543937: (t, e, i) => {
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
    806848: (t, e, i) => {
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
    395963: (t, e, i) => {
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
    618086: (t, e, i) => {
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
    707074: (t, e, i) => {
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
    499164: (t, e, i) => {
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
    621243: (t, e, i) => {
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
    354454: (t, e, i) => {
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
    582289: (t, e, i) => {
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
    594183: (t, e, i) => {
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
    378354: (t, e, i) => {
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
    90956: (t, e, i) => {
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
    357818: (t, e, i) => {
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
    303056: (t, e, i) => {
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
    935336: (t, e, i) => {
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
    662938: (t, e, i) => {
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
    685682: (t, e, i) => {
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
    16505: (t, e, i) => {
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
    847969: (t, e, i) => {
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
    997262: (t, e, i) => {
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
    139211: (t, e, i) => {
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
    54355: (t, e, i) => {
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
    530246: (t, e, i) => {
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
    42611: (t, e, i) => {
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
    906955: (t, e, i) => {
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
    225568: (t, e, i) => {
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
    475764: (t, e, i) => {
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
    139270: (t, e, i) => {
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
    470413: (t, e, i) => {
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
    451476: (t, e, i) => {
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
    331756: (t, e, i) => {
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
    683271: (t, e, i) => {
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
    594572: (t, e, i) => {
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
    40006: (t, e, i) => {
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
    638504: (t, e, i) => {
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
    817328: (t, e, i) => {
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
    477133: (t, e, i) => {
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
    728185: (t, e, i) => {
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
    676002: (t, e, i) => {
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
    373924: (t, e, i) => {
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
    877502: (t, e, i) => {
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
    33214: (t, e, i) => {
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
    946689: (t, e, i) => {
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
    748590: (t, e, i) => {
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
    922857: (t, e, i) => {
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
    517577: (t, e, i) => {
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
    979459: (t, e, i) => {
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
    662005: (t, e, i) => {
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
    728253: (t, e, i) => {
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
    998747: (t, e, i) => {
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
    898801: (t, e, i) => {
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
    369139: (t, e, i) => {
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
    610365: (t, e, i) => {
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
    919611: (t, e, i) => {
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
    944498: (t, e, i) => {
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
    876086: (t, e, i) => {
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
    703818: (t, e, i) => {
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
    131108: (t, e, i) => {
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
    997652: (t, e, i) => {
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
    148259: (t, e, i) => {
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
    999781: (t, e, i) => {
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
    795738: (t, e, i) => {
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
    355444: (t, e, i) => {
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
    245865: (t, e, i) => {
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
    289379: (t, e, i) => {
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
    892650: (t, e, i) => {
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
    997310: (t, e, i) => {
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
    353431: (t, e, i) => {
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
    13206: (t, e, i) => {
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
    379781: (t, e, i) => {
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
    393105: (t, e, i) => {
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
    928088: (t, e, i) => {
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
    345743: (t, e, i) => {
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
    977211: (t, e, i) => {
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
    354081: (t, e, i) => {
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
    889118: (t, e, i) => {
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
    393958: (t, e, i) => {
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
    16956: (t, e, i) => {
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
    193650: (t, e, i) => {
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
    51844: (t, e, i) => {
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
    565611: (t, e, i) => {
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
    393455: (t, e, i) => {
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
    732303: (t, e, i) => {
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
    559526: (t, e, i) => {
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
    837003: (t, e, i) => {
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
    206784: (t, e, i) => {
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
    608134: (t, e, i) => {
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
    359273: (t, e, i) => {
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
    762937: (t, e, i) => {
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
    943411: (t, e, i) => {
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
    44287: (t, e, i) => {
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
    338901: (t, e, i) => {
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
    655668: (t, e, i) => {
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
    123268: (t, e, i) => {
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
    958108: (t, e, i) => {
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
    343990: (t, e, i) => {
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
    825330: (t, e, i) => {
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
    385224: (t, e, i) => {
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
    664701: (t, e, i) => {
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
    295958: (t, e, i) => {
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
    164277: (t, e, i) => {
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
    132405: (t, e, i) => {
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
    5527: (t, e, i) => {
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
    435400: (t, e, i) => {
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
    651438: (t, e, i) => {
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
    402406: (t, e, i) => {
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
    28523: (t, e, i) => {
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
    728120: (t, e, i) => {
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
    19e4: (t, e, i) => {
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
    16472: (t, e, i) => {
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
    36331: (t, e, i) => {
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
    588273: (t, e, i) => {
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
    30558: (t, e, i) => {
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
    311250: (t, e, i) => {
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
    281203: (t, e, i) => {
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
    65524: (t, e, i) => {
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
    889881: (t, e, i) => {
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
    632969: (t, e, i) => {
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
    287351: (t, e, i) => {
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
    577274: (t, e, i) => {
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
    617483: (t, e, i) => {
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
    99773: (t, e, i) => {
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
    136163: (t, e, i) => {
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
    383471: (t, e, i) => {
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
    61148: (t, e, i) => {
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
    192801: (t, e, i) => {
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
    860563: (t, e, i) => {
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
    25636: (t, e, i) => {
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
    843393: (t, e, i) => {
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
    328951: (t, e, i) => {
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
    474938: (t, e, i) => {
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
    179228: (t, e, i) => {
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
    59485: (t, e, i) => {
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
    590116: (t, e, i) => {
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
    940245: (t, e, i) => {
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
    451269: (t, e, i) => {
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
    670532: (t, e, i) => {
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
    617154: (t, e, i) => {
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
    314496: (t, e, i) => {
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
    849407: (t, e, i) => {
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
    209695: (t, e, i) => {
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
    543768: (t, e, i) => {
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
    688156: (t, e, i) => {
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
    997414: (t, e, i) => {
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
    395617: (t, e, i) => {
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
    549828: (t, e, i) => {
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
    490354: (t, e, i) => {
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
    511626: (t, e, i) => {
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
    13691: (t, e, i) => {
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
    68519: (t, e, i) => {
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
    586360: (t, e, i) => {
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
    313372: (t, e, i) => {
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
    953558: (t, e, i) => {
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
    513693: (t, e, i) => {
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
    807319: (t, e, i) => {
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
    763675: (t, e, i) => {
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
    505707: (t, e, i) => {
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
    243174: (t, e, i) => {
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
    987019: (t, e, i) => {
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
    270118: (t, e, i) => {
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
    302006: (t, e, i) => {
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
}]);
