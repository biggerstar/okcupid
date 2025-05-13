"use strict";
(globalThis.__TIKTOK_CHUNKS__ = globalThis.__TIKTOK_CHUNKS__ || []).push([[5029], {
    71222: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                version: {
                    type: "string",
                    id: 1
                },
                requirement: {
                    rule: "repeated",
                    type: "string",
                    id: 2
                },
                model_names: {
                    type: "string",
                    id: 3
                },
                sdk_extra: {
                    type: "string",
                    id: 4
                }
            }
        }
    }
    ,
    208906: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                user_fan_ticket: {
                    rule: "repeated",
                    type: "UserFanTicket",
                    id: 1
                },
                total_linkmic_fan_ticket: {
                    type: "int64",
                    id: 2
                },
                match_id: {
                    type: "int64",
                    id: 3
                },
                event_time: {
                    type: "int64",
                    id: 4
                },
                fan_ticket_icon_url: {
                    type: "string",
                    id: 5
                },
                play_id: {
                    type: "int64",
                    id: 6
                },
                play_scene: {
                    type: "webcast.data.multi_guest_play.PlayScene",
                    id: 7
                }
            }
        }
    }
    ,
    760787: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                text: {
                    type: "string",
                    id: 1
                },
                right_icon: {
                    type: "webcast.data.Image",
                    id: 2
                },
                background_icon: {
                    type: "webcast.data.Image",
                    id: 3
                },
                schema: {
                    type: "string",
                    id: 4
                }
            }
        }
    }
    ,
    28521: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                content: {
                    type: "string",
                    id: 1
                }
            }
        }
    }
    ,
    912393: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                type: {
                    type: "FansClubBannerBackGroundType",
                    id: 1
                },
                color: {
                    type: "string",
                    id: 2
                },
                image: {
                    type: "webcast.data.Image",
                    id: 3
                }
            }
        }
    }
    ,
    455657: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                FansClubBannerBackGroundTypeUnknown: 0,
                FansClubBannerBackGroundTypeColor: 1,
                FansClubBannerBackGroundTypeImage: 2
            }
        }
    }
    ,
    253964: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                banner_id: {
                    type: "int64",
                    id: 9
                },
                title: {
                    type: "FansClubBannerText",
                    id: 2
                },
                desc: {
                    type: "FansClubBannerText",
                    id: 3
                },
                schema: {
                    type: "string",
                    id: 4
                },
                icon: {
                    type: "webcast.data.Image",
                    id: 5
                },
                back_ground: {
                    type: "FansClubBannerBackGround",
                    id: 7
                },
                da_info_map: {
                    keyType: "string",
                    type: "DAInfoValue",
                    id: 8
                }
            }
        }
    }
    ,
    618004: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                type: {
                    type: "FansClubBannerType",
                    id: 1
                },
                title: {
                    type: "FansClubBannerText",
                    id: 2
                },
                desc: {
                    type: "FansClubBannerText",
                    id: 3
                },
                schema: {
                    type: "string",
                    id: 4
                },
                icon: {
                    type: "webcast.data.Image",
                    id: 5
                },
                count_down: {
                    type: "FansClubBannerCountDown",
                    id: 6
                },
                back_ground: {
                    type: "FansClubBannerBackGround",
                    id: 7
                },
                da_info_map: {
                    keyType: "string",
                    type: "DAInfoValue",
                    id: 8
                },
                banner_id: {
                    type: "int64",
                    id: 9
                },
                full_page_type: {
                    type: "FansClubBannerContentFullPage",
                    id: 101
                }
            }
        }
    }
    ,
    226290: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                common: {
                    type: "FansClubBannerCommonData",
                    id: 1
                }
            }
        }
    }
    ,
    12006: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                text: {
                    type: "FansClubBannerText",
                    id: 1
                },
                time: {
                    type: "int64",
                    id: 2
                },
                time_text_color: {
                    type: "string",
                    id: 3
                },
                time_bg_color: {
                    type: "string",
                    id: 4
                },
                time_dot_color: {
                    type: "string",
                    id: 5
                },
                day_text: {
                    type: "FansClubBannerText",
                    id: 6
                }
            }
        }
    }
    ,
    480086: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                text: {
                    type: "string",
                    id: 1
                },
                color: {
                    type: "string",
                    id: 2
                }
            }
        }
    }
    ,
    687113: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                FansClubBannerTypeUnknown: 0,
                FansClubBannerTypeNormal: 1,
                FansClubBannerTypeComplex: 2,
                FansClubBannerTypeFullPage: 3
            }
        }
    }
    ,
    827320: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                active_fans_count: {
                    type: "int64",
                    id: 1
                },
                total_fans_count: {
                    type: "int64",
                    id: 2
                }
            }
        }
    }
    ,
    821148: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                fans_club_name: {
                    type: "string",
                    id: 1
                },
                review_status: {
                    type: "FansClubNameReviewStatus",
                    id: 2
                },
                editable_status: {
                    type: "FansClubValidateNameStatus",
                    id: 3
                },
                tns_violation_id: {
                    type: "string",
                    id: 4
                },
                next_allow_time: {
                    type: "int64",
                    id: 5
                }
            }
        }
    }
    ,
    789094: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                FansClubNameReviewStatusUnknown: 0,
                FansClubNameReviewStatusUnderReview: 1,
                FansClubNameReviewStatusPassed: 2,
                FansClubNameReviewStatusRejected: 3,
                FansClubNameReviewStatusAppealUnderReview: 4,
                FansClubNameReviewStatusAppealPassed: 5,
                FansClubNameReviewStatusAppealRejected: 6
            }
        }
    }
    ,
    468566: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                top_joiner_avatars: {
                    rule: "repeated",
                    type: "webcast.data.Image",
                    id: 1
                },
                current_progress: {
                    type: "int64",
                    id: 2
                },
                mission_stages: {
                    rule: "repeated",
                    type: "FansClubTeamMissionStage",
                    id: 3
                },
                join_status: {
                    type: "MissionJoinStatus",
                    id: 100
                }
            }
        }
    }
    ,
    604054: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                target_progress: {
                    type: "int64",
                    id: 1
                },
                in_celebration_time: {
                    type: "bool",
                    id: 2
                },
                gift: {
                    type: "Gift",
                    id: 3
                }
            },
            nested: {
                Gift: {
                    fields: {
                        gift_id: {
                            type: "int64",
                            id: 1
                        },
                        gift_image: {
                            type: "webcast.data.Image",
                            id: 2
                        },
                        gift_name: {
                            type: "string",
                            id: 3
                        }
                    }
                }
            }
        }
    }
    ,
    826364: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                FansClubNameCanEdit: 0,
                FansClubNameCannotEditMonthFrequency: 1,
                FansClubNameCannotEditYearFrequency: 2,
                FansClubNameCannotEditUnderReview: 3,
                FansClubNameCannotEditNameConflict: 4,
                FansClubNameCannotEditNameTooLong: 5
            }
        }
    }
    ,
    690901: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                fans_score_rule: {
                    type: "FansScoreRule",
                    id: 1
                },
                update_dynamic_effect: {
                    type: "FansUpgradeDynamicEffectConfig",
                    id: 2
                },
                update_barrage_effect: {
                    type: "FansUpgradeBarrageEffectConfig",
                    id: 3
                },
                show_config: {
                    type: "FansLevelShowConfig",
                    id: 4
                },
                banner_config: {
                    type: "FansBannerConfig",
                    id: 5
                }
            }
        }
    }
    ,
    764624: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                guild_id_str: {
                    type: "string",
                    id: 1
                },
                guild_name: {
                    type: "string",
                    id: 2
                },
                guild_icon: {
                    type: "string",
                    id: 3
                },
                owner_id_str: {
                    type: "string",
                    id: 4
                },
                reconnect_url: {
                    type: "string",
                    id: 5
                },
                roles: {
                    rule: "repeated",
                    type: "FansDiscordRoleInfo",
                    id: 6
                },
                guild_icon_image: {
                    type: "webcast.data.Image",
                    id: 7
                }
            }
        }
    }
    ,
    415311: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                role_id_str: {
                    type: "string",
                    id: 1
                },
                role_name: {
                    type: "string",
                    id: 2
                },
                permissions: {
                    type: "string",
                    id: 3
                },
                is_position_above_bot: {
                    type: "bool",
                    id: 4
                },
                is_permission_higher_bot: {
                    type: "bool",
                    id: 5
                },
                is_fans_func_normal_role: {
                    type: "bool",
                    id: 6
                }
            }
        }
    }
    ,
    21787: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                new_fans_data: {
                    type: "NewFansData",
                    id: 1
                },
                task_complete_data: {
                    type: "TaskCompleteData",
                    id: 2
                },
                get_unclaimed_points: {
                    type: "GetUnclaimedPoints",
                    id: 3
                },
                team_rank_update: {
                    type: "TeamRankUpdate",
                    id: 4
                },
                exp_change_data: {
                    type: "ExpChangeData",
                    id: 5
                },
                entrance_guidance_data: {
                    type: "EntranceGuidanceData",
                    id: 6
                },
                trigger_task_types: {
                    rule: "repeated",
                    type: "webcast.data.FansTaskType",
                    id: 101
                }
            },
            nested: {
                NewFansData: {
                    fields: {
                        fans_count: {
                            type: "int64",
                            id: 1
                        }
                    }
                },
                TaskCompleteData: {
                    fields: {
                        task_type: {
                            type: "webcast.data.FansTaskType",
                            id: 1
                        },
                        is_clear_today: {
                            type: "bool",
                            id: 2
                        }
                    }
                },
                GetUnclaimedPoints: {
                    fields: {
                        unclaimed_points: {
                            type: "int64",
                            id: 1
                        },
                        expire_timestamp: {
                            type: "int64",
                            id: 2
                        }
                    }
                },
                TeamRankUpdate: {
                    fields: {
                        updated_rank: {
                            type: "int64",
                            id: 1
                        },
                        updated_score: {
                            type: "int64",
                            id: 2
                        }
                    }
                },
                ExpChangeData: {
                    fields: {
                        claimed_all_points: {
                            type: "bool",
                            id: 1
                        }
                    }
                },
                EntranceGuidanceData: {
                    fields: {
                        text: {
                            type: "data.Text",
                            id: 1
                        },
                        icon: {
                            type: "data.Image",
                            id: 2
                        },
                        guidance_type: {
                            type: "EntranceGuidanceType",
                            id: 5
                        },
                        freq_control_key: {
                            type: "string",
                            id: 6
                        },
                        freq_control_duration: {
                            type: "int64",
                            id: 7
                        },
                        freq_control_value: {
                            type: "int32",
                            id: 8
                        }
                    }
                }
            }
        }
    }
    ,
    892760: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                user: {
                    type: "webcast.data.User",
                    id: 2
                },
                event_type: {
                    type: "FansEventType",
                    id: 11
                },
                fans_level_info: {
                    type: "webcast.data.FansLevelInfo",
                    id: 12
                },
                fans_level_upgrade_info: {
                    type: "webcast.data.FansLevelUpgradeInfo",
                    id: 13
                },
                data: {
                    type: "FansEventData",
                    id: 21
                }
            }
        }
    }
    ,
    762603: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                FansEventType_Unknown: 0,
                FansEventType_NewFans: 1,
                FansEventType_ExpChange: 2,
                FansEventType_TaskComplete: 3,
                FansEventType_LevelUpgrade: 4,
                FANS_EVENT_TYPE_GET_UNCLAIMED_POINTS: 5,
                FANS_EVENT_TYPE_TEAM_RANK_UPDATE: 6,
                FANS_EVENT_TYPE_ENTRANCE_GUIDANCE: 7,
                FANS_EVENT_TYPE_FANS_LEVEL_UPGRADE: 8,
                FANS_EVENT_TYPE_REFRESH_TASK_PAGE: 1001
            }
        }
    }
    ,
    460573: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                userID: {
                    type: "int64",
                    id: 1
                },
                anchorID: {
                    type: "int64",
                    id: 2
                },
                score: {
                    type: "int64",
                    id: 3
                },
                level: {
                    type: "int64",
                    id: 4
                },
                is_sleeping: {
                    type: "bool",
                    id: 5
                },
                time_to_sleep: {
                    type: "int64",
                    id: 6
                },
                fans_score_rule: {
                    type: "FansScoreRule",
                    id: 7
                },
                badge: {
                    type: "webcast.data.BadgeStruct",
                    id: 8
                }
            }
        }
    }
    ,
    493774: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                level: {
                    type: "int64",
                    id: 1
                },
                badge_icon: {
                    type: "webcast.data.Image",
                    id: 2
                },
                left_up_entrance_icon: {
                    type: "webcast.data.Image",
                    id: 3
                },
                font_color_code: {
                    type: "string",
                    id: 4
                }
            }
        }
    }
    ,
    372077: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                user_id: {
                    type: "int64",
                    id: 1
                },
                anchor_id: {
                    type: "int64",
                    id: 2
                },
                level: {
                    type: "int64",
                    id: 3
                },
                level_upgrade_expired_time: {
                    type: "int64",
                    id: 4
                }
            }
        }
    }
    ,
    887716: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                fans_level_info: {
                    type: "FansLevelInfo",
                    id: 1
                },
                discord_entrance: {
                    type: "DiscordEntrance",
                    id: 2
                },
                fans_privilege_details: {
                    rule: "repeated",
                    type: "FansPrivilegeDetail",
                    id: 3
                },
                next_level_has_privilege: {
                    type: "FansScoreRule",
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
    762248: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                use_image: {
                    type: "bool",
                    id: 1
                },
                image: {
                    type: "webcast.data.Image",
                    id: 2
                },
                background_color_code: {
                    type: "string",
                    id: 3
                },
                border_color_code: {
                    type: "string",
                    id: 4
                }
            }
        }
    }
    ,
    44193: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                level: {
                    type: "int32",
                    id: 1
                },
                privilege_type: {
                    type: "FansPrivilegeType",
                    id: 2
                },
                title: {
                    type: "string",
                    id: 3
                },
                description: {
                    type: "string",
                    id: 4
                },
                rich_text: {
                    type: "FansPrivilegeRichText",
                    id: 5
                },
                privilege_gift_data: {
                    type: "FansPrivilegeGiftData",
                    id: 6
                },
                button: {
                    type: "FansPrivilegeRichText",
                    id: 7
                },
                unlocked_description: {
                    type: "string",
                    id: 8
                }
            }
        }
    }
    ,
    271050: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                gift_id: {
                    type: "int64",
                    id: 1
                }
            }
        }
    }
    ,
    385405: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                background: {
                    type: "FansPrivilegeBackground",
                    id: 1
                },
                left_icon: {
                    type: "webcast.data.Image",
                    id: 2
                },
                right_icon: {
                    type: "webcast.data.Image",
                    id: 3
                },
                description: {
                    type: "string",
                    id: 4
                },
                color_code: {
                    type: "string",
                    id: 5
                }
            }
        }
    }
    ,
    964924: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                LevelPrivilegeTypeUnknown: 0,
                LevelPrivilegeTypeBadge: 1,
                LevelPrivilegeTypeGift: 2,
                LevelPrivilegeTypeUpgradeAnnouncement: 3,
                LevelPrivilegeTypeEntranceEffects: 4,
                LevelPrivilegeTypeCelebrationGifts: 5
            }
        }
    }
    ,
    866135: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                level: {
                    type: "int64",
                    id: 1
                },
                level_min_score: {
                    type: "int64",
                    id: 2
                },
                level_max_score: {
                    type: "int64",
                    id: 3
                }
            }
        }
    }
    ,
    618866: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                task_type: {
                    type: "FansTaskType",
                    id: 1
                },
                is_done: {
                    type: "bool",
                    id: 2
                },
                task_total_progress: {
                    type: "int64",
                    id: 3
                },
                task_cur_progress: {
                    type: "int64",
                    id: 4
                },
                step_progress: {
                    type: "int64",
                    id: 5
                },
                step_reward: {
                    type: "int64",
                    id: 6
                },
                is_today_complete: {
                    type: "bool",
                    id: 7
                },
                task_config: {
                    type: "FansTaskConfig",
                    id: 10
                },
                unclaimed_points: {
                    type: "int64",
                    id: 21
                }
            }
        }
    }
    ,
    225850: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                step_progress: {
                    type: "int64",
                    id: 1
                },
                step_reward: {
                    type: "int64",
                    id: 2
                }
            }
        }
    }
    ,
    38832: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                duration_type: {
                    type: "FansTaskDurationType",
                    id: 1
                },
                reward_type: {
                    type: "FansTaskRewardType",
                    id: 10
                },
                average_reward_config: {
                    type: "FansTaskAverageRewardConfig",
                    id: 11
                },
                level_reward_config: {
                    rule: "repeated",
                    type: "FansTaskLevelRewardConfig",
                    id: 12
                }
            }
        }
    }
    ,
    21042: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                FansTaskDurationType_Unknown: 0,
                FansTaskDurationType_Daily: 1,
                FansTaskDurationType_Monthly: 2,
                FansTaskDurationType_LongTerm: 3
            }
        }
    }
    ,
    316719: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                target_progress: {
                    type: "int64",
                    id: 1
                },
                target_reward: {
                    type: "int64",
                    id: 2
                }
            }
        }
    }
    ,
    330217: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                FansTaskRewardType_Unknown: 0,
                FansTaskRewardType_Average: 1,
                FansTaskRewardType_Level: 2
            }
        }
    }
    ,
    378298: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                FansTaskType_Unknown: 0,
                FansTaskType_FansGift: 1,
                FansTaskType_WatchLive: 2,
                FansTaskType_SendingGift: 3,
                FansTaskType_Comment: 4,
                FansTaskType_MonthGift: 11,
                FansTaskType_MonthComment: 12,
                FansTaskType_LongActive: 21,
                FansTaskType_LiveNotify: 22,
                FansTaskType_LongHeartMe: 23,
                FansTaskType_LongWatch: 24,
                FansTaskType_LongComment: 25,
                FansTaskType_WeeklyTreasureBox: 31
            }
        }
    }
    ,
    831252: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                level: {
                    type: "int64",
                    id: 1
                },
                display_config: {
                    type: "int32",
                    id: 2
                }
            }
        }
    }
    ,
    306969: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                level: {
                    type: "int32",
                    id: 1
                },
                privileges: {
                    rule: "repeated",
                    type: "FansUpgradePrivilege",
                    id: 2
                }
            }
        }
    }
    ,
    23720: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                icon: {
                    type: "webcast.data.Image",
                    id: 1
                },
                description: {
                    type: "string",
                    id: 2
                },
                privilege_type: {
                    type: "FansPrivilegeType",
                    id: 3
                }
            }
        }
    }
    ,
    244980: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                title: {
                    type: "webcast.data.Text",
                    id: 2
                },
                sub_title: {
                    type: "webcast.data.Text",
                    id: 3
                }
            }
        }
    }
    ,
    795348: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
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
                user: {
                    type: "webcast.data.User",
                    id: 4
                },
                upgrade_privilege: {
                    type: "UpgradePrivilege",
                    id: 5
                }
            },
            nested: {
                UpgradePrivilege: {
                    fields: {
                        content: {
                            type: "string",
                            id: 1
                        },
                        description: {
                            type: "string",
                            id: 2
                        },
                        button_type: {
                            type: "int32",
                            id: 3
                        }
                    }
                }
            }
        }
    }
    ,
    828936: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
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
                }
            }
        }
    }
    ,
    177949: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                name: {
                    type: "string",
                    id: 2
                },
                fans_count: {
                    type: "int64",
                    id: 3
                }
            }
        }
    }
    ,
    326495: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
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
    272398: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                position: {
                    type: "int64",
                    id: 1
                },
                text: {
                    type: "webcast.data.Text",
                    id: 2
                },
                icon: {
                    type: "webcast.data.Image",
                    id: 3
                },
                log_extra: {
                    type: "string",
                    id: 4
                },
                background_color: {
                    type: "string",
                    id: 5
                },
                bg_image: {
                    type: "webcast.data.Image",
                    id: 6
                }
            }
        }
    }
    ,
    184556: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                anchor_id: {
                    type: "int64",
                    id: 3
                },
                room_id: {
                    type: "int64",
                    id: 4
                },
                room_status: {
                    type: "int64",
                    id: 5
                },
                room_time: {
                    type: "int64",
                    id: 6
                },
                stream_status: {
                    type: "int64",
                    id: 7
                }
            }
        }
    }
    ,
    281098: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                UnknownFetchBagItemListScene: 0,
                AppLaunch: 1,
                GiftPanel: 2,
                ReceiveItem: 3,
                ItemExpire: 4,
                ConsumeFailed: 5,
                Retry: 6,
                EnterRoom: 7,
                MatchGuide: 8
            }
        }
    }
    ,
    16380: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                name: {
                    type: "string",
                    id: 1
                },
                rule: {
                    type: "FilterMsgRuleType",
                    id: 2
                },
                random: {
                    type: "FilterMsgRuleParamRandom",
                    id: 3
                }
            }
        }
    }
    ,
    119672: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                percentage: {
                    type: "int32",
                    id: 1
                }
            }
        }
    }
    ,
    299076: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                Random: 0
            }
        }
    }
    ,
    294598: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                owner: {
                    type: "tikcast.linkmic.common.Player",
                    id: 1
                },
                finish_reason: {
                    type: "int64",
                    id: 2
                }
            }
        }
    }
    ,
    706190: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                FINISH_REASON_UNKNOWN: 0,
                FINISH_REASON_HOST_TRIGGER: 10001,
                FINISH_REASON_M_SEQUENCE_PERMISSION_FINISH: 10002,
                FINISH_REASON_INTERRUPT_BY_CO_HOST: 10003,
                FINISH_REASON_CLOSE_LIVE_ROOM: 10004,
                FINISH_REASON_ILLEGAL_LIVE: 10010,
                FINISH_REASON_RTC_ERR: 10011,
                FINISH_REASON_LIVE_STREAM_ERR: 10012,
                FINISH_REASON_PUNISH_CENTER_IM: 10021
            }
        }
    }
    ,
    149514: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                value: {
                    type: "int64",
                    id: 1
                },
                scale: {
                    type: "int64",
                    id: 2
                }
            }
        }
    }
    ,
    762411: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                cnt: {
                    type: "int64",
                    id: 1
                },
                end_time: {
                    type: "int64",
                    id: 2
                }
            }
        }
    }
    ,
    900040: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                status: {
                    type: "LiveFlashSaleStatus",
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
                preheat_time: {
                    type: "int64",
                    id: 4
                }
            }
        }
    }
    ,
    359692: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                product_id: {
                    type: "string",
                    id: 1
                },
                activity_id: {
                    type: "int64",
                    id: 2
                },
                flash_sale_atmosphere: {
                    type: "FlashSaleAtmosphere",
                    id: 3
                },
                flash_sale_stock: {
                    type: "FlashSaleStock",
                    id: 4
                },
                pinned_product: {
                    type: "bool",
                    id: 5
                },
                live_only_channel: {
                    type: "bool",
                    id: 6
                },
                creator_limit_type: {
                    type: "CreatorLimitType",
                    id: 7
                }
            }
        }
    }
    ,
    571424: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                activity_stock_status: {
                    type: "LiveFlashSaleActivityStockStatus",
                    id: 1
                },
                activity_stock: {
                    type: "int32",
                    id: 2
                },
                activity_stock_text: {
                    type: "string",
                    id: 3
                }
            }
        }
    }
    ,
    463346: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                path_image: {
                    type: "data.Image",
                    id: 1
                },
                mic_image: {
                    type: "data.Image",
                    id: 2
                },
                transition_configs: {
                    rule: "repeated",
                    type: "TransitionConfig",
                    id: 3
                }
            }
        }
    }
    ,
    197379: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                follow_card_id: {
                    type: "int64",
                    id: 2
                },
                max_random: {
                    type: "int64",
                    id: 3
                }
            }
        }
    }
    ,
    882343: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                avatarUrl: {
                    type: "webcast.data.Image",
                    id: 2
                },
                content: {
                    type: "string",
                    id: 3
                },
                hourRankInfo: {
                    type: "string",
                    id: 4
                },
                giftId: {
                    type: "int64",
                    id: 5
                },
                duration: {
                    type: "int64",
                    id: 6
                },
                popupReason: {
                    type: "string",
                    id: 7
                }
            }
        }
    }
    ,
    102804: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
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
        }
    }
    ,
    170507: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                reasons: {
                    rule: "repeated",
                    type: "int64",
                    id: 10
                },
                fetch_within_ms: {
                    type: "int64",
                    id: 11
                },
                strategy_context: {
                    type: "string",
                    id: 100
                }
            }
        }
    }
    ,
    666041: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                FRAGMENT_TYPE_UNKNOWN: 0,
                FRAGMENT_TYPE_GIFT: 1,
                FRAGMENT_TYPE_COMMENT: 2,
                FRAGMENT_TYPE_AUDIENCE: 3,
                FRAGMENT_TYPE_MUSIC: 4,
                FRAGMENT_TYPE_DANCE: 5,
                FRAGMENT_TYPE_GAME: 6,
                FRAGMENT_TYPE_SPECIAL_EFFECT: 7,
                FRAGMENT_TYPE_VIDEO_EDITED: 8,
                FRAGMENT_TYPE_VIDEO_POST: 9,
                FRAGMENT_TYPE_ECOMMERCE: 10,
                FRAGMENT_TYPE_GIFT_GALLERY: 11,
                FRAGMENT_TYPE_GIFT_HUB: 12,
                FRAGMENT_TYPE_EVENT: 13,
                FRAGMENT_TYPE_LIVE_RECORD: 14,
                FRAGMENT_TYPE_MULTI_GUEST_GIMME_MIC: 15,
                FRAGMENT_TYPE_GAME_MOMENT: 16,
                FRAGMENT_TYPE_CC_TEMPLATE: 17,
                FRAGMENT_TYPE_GAME_HYPE: 18,
                FRAGMENT_TYPE_AUDIO: 19,
                FRAGMENT_TYPE_PICTURE_SHARE: 20,
                FRAGMENT_TYPE_SHARED_VIDEO_POST: 21,
                FRAGMENT_TYPE_MATCH: 22,
                FRAGMENT_TYPE_HIGHLIGHT_COLLECTION_GIFT: 200,
                FRAGMENT_TYPE_HIGHLIGHT_COLLECTION_DIAMONDS: 201,
                FRAGMENT_TYPE_HIGHLIGHT_COLLECTION_COMMENTS: 202,
                FRAGMENT_TYPE_HIGHLIGHT_COLLECTION_GAMING: 203
            }
        }
    }
    ,
    651655: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                FRAGMENT_TYPE_NEW_GIFT: 0,
                FRAGMENT_TYPE_NEW_COMMENT: 1,
                FRAGMENT_TYPE_NEW_AUDIENCE: 2,
                FRAGMENT_TYPE_NEW_MUSIC: 3,
                FRAGMENT_TYPE_NEW_DANCE: 4,
                FRAGMENT_TYPE_NEW_LIVE_STUDIO: 5,
                FRAGMENT_TYPE_NEW_SPECIAL_EFFECT: 6,
                FRAGMENT_TYPE_NEW_VIDEO_EDITED: 7,
                FRAGMENT_TYPE_NEW_VIDEO_POST: 8,
                FRAGMENT_TYPE_NEW_ECOMMERCE: 9,
                FRAGMENT_TYPE_NEW_GIFT_GALLERY: 10,
                FRAGMENT_TYPE_NEW_GIFT_HUB: 11,
                FRAGMENT_TYPE_NEW_EVENT: 12,
                FRAGMENT_TYPE_NEW_LIVE_RECORD: 13,
                FRAGMENT_TYPE_NEW_MULTI_GUEST_GIMME_MIC: 14,
                FRAGMENT_TYPE_NEW_GAME_MOMENT: 15,
                FRAGMENT_TYPE_NEW_CC_TEMPLATE: 16,
                FRAGMENT_TYPE_NEW_GAME_HYPE: 17,
                FRAGMENT_TYPE_NEW_AUDIO: 18,
                FRAGMENT_TYPE_NEW_PICTURE_SHARE: 19,
                FRAGMENT_TYPE_NEW_SHARED_VIDEO_POST: 20,
                FRAGMENT_TYPE_NEW_MATCH: 21,
                FRAGMENT_TYPE_NEW_HIGHLIGHT_COLLECTION_GIFT: 200,
                FRAGMENT_TYPE_NEW_HIGHLIGHT_COLLECTION_DIAMONDS: 201,
                FRAGMENT_TYPE_NEW_HIGHLIGHT_COLLECTION_COMMENTS: 202,
                FRAGMENT_TYPE_NEW_HIGHLIGHT_COLLECTION_GAMING: 203
            }
        }
    }
    ,
    777639: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
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
                    type: "bool",
                    id: 7
                },
                deprecated8: {
                    type: "bool",
                    id: 8
                },
                deprecated9: {
                    type: "webcast.data.User",
                    id: 9
                },
                deprecated10: {
                    type: "int64",
                    id: 10
                },
                deprecated11: {
                    type: "int64",
                    id: 11
                },
                deprecated12: {
                    type: "int64",
                    id: 12
                },
                deprecated13: {
                    type: "int64",
                    id: 13
                }
            }
        }
    }
    ,
    343046: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                gift_id: {
                    type: "int64",
                    id: 2
                },
                fan_ticket_count: {
                    type: "int64",
                    id: 3
                },
                group_count: {
                    type: "int64",
                    id: 4
                },
                repeat_count: {
                    type: "int64",
                    id: 5
                },
                combo_count: {
                    type: "int64",
                    id: 6
                },
                user: {
                    type: "webcast.data.User",
                    id: 7
                },
                to_user: {
                    type: "webcast.data.User",
                    id: 8
                },
                free_cell: {
                    type: "FreeCellData",
                    id: 9
                },
                room_fan_ticket_count: {
                    type: "int64",
                    id: 10
                },
                log_id: {
                    type: "string",
                    id: 11
                },
                public_area_common: {
                    type: "PublicAreaCommon",
                    id: 12
                }
            },
            nested: {
                FreeCellData: {
                    fields: {
                        time_now_ms: {
                            type: "int64",
                            id: 1
                        },
                        time_start_ms: {
                            type: "int64",
                            id: 2
                        },
                        time_freeze_end_ms: {
                            type: "int64",
                            id: 3
                        },
                        time_double_end_ms: {
                            type: "int64",
                            id: 4
                        },
                        time_end_ms: {
                            type: "int64",
                            id: 5
                        },
                        free_cell_length: {
                            type: "int64",
                            id: 6
                        },
                        is_freeze: {
                            type: "bool",
                            id: 7
                        },
                        is_double: {
                            type: "bool",
                            id: 8
                        },
                        contribute_most_user: {
                            type: "webcast.data.User",
                            id: 9
                        },
                        contribute_most_coins: {
                            type: "int64",
                            id: 10
                        },
                        distance_from_previous_one: {
                            type: "int64",
                            id: 11
                        },
                        index_in_day_ranklist: {
                            type: "int64",
                            id: 12
                        }
                    }
                }
            }
        }
    }
    ,
    298253: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
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
                    type: "string",
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
                }
            }
        }
    }
    ,
    744322: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                user: {
                    type: "webcast.data.User",
                    id: 2
                },
                free_gift: {
                    type: "webcast.data.FreeGift",
                    id: 3
                }
            }
        }
    }
    ,
    919132: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                FREE_TRIAL_DURATION_UNITS_UNKNOWN: 0,
                FREE_TRIAL_DURATION_UNITS_DAYS: 1
            }
        }
    }
    ,
    750475: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                duration_value: {
                    type: "int64",
                    id: 1
                },
                duration_units: {
                    type: "FreeTrialDurationUnits",
                    id: 2
                }
            }
        }
    }
    ,
    681197: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                contents: {
                    rule: "repeated",
                    type: "RichContent",
                    id: 1
                }
            }
        }
    }
    ,
    897268: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                GP_ANCHOR_TASK_STATUS_UNPUBLISH: 0,
                GP_ANCHOR_TASK_STATUS_PROMOTING: 1,
                GP_ANCHOR_TASK_STATUS_CONFIRMING: 3,
                GP_ANCHOR_TASK_STATUS_REJECTED: 4
            }
        }
    }
    ,
    274031: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                progress: {
                    keyType: "int64",
                    type: "TitleData",
                    id: 1
                },
                period: {
                    type: "int64",
                    id: 2
                },
                end_time_in_ms: {
                    type: "int64",
                    id: 3
                }
            },
            nested: {
                TitleData: {
                    fields: {
                        goal_count: {
                            type: "int64",
                            id: 1
                        },
                        current_sponsor_id: {
                            type: "int64",
                            id: 2
                        }
                    }
                }
            }
        }
    }
    ,
    407951: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                prev_status: {
                    type: "int64",
                    id: 2
                },
                game_quiz_info: {
                    type: "GameQuizInfo",
                    id: 3
                }
            },
            nested: {
                GameQuizInfo: {
                    fields: {
                        id: {
                            type: "int64",
                            id: 1
                        },
                        room_id: {
                            type: "int64",
                            id: 2
                        },
                        status: {
                            type: "int64",
                            id: 3
                        }
                    }
                }
            }
        }
    }
    ,
    682017: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                action_type: {
                    type: "GameActionType",
                    id: 1
                },
                jump_page: {
                    type: "JumpPage",
                    id: 2
                },
                follow_user_id: {
                    type: "int64",
                    id: 3
                }
            }
        }
    }
    ,
    117809: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                GAME_ACTION_TYPE_SHOW: 0,
                GAME_ACTION_TYPE_JUMP: 1,
                GAME_ACTION_TYPE_FOLLOW: 2
            }
        }
    }
    ,
    822562: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                accepted_benefit_list: {
                    rule: "repeated",
                    type: "BriefBenefitInfo",
                    id: 1
                },
                unaccepted_benefit_list: {
                    rule: "repeated",
                    type: "BriefBenefitInfo",
                    id: 2
                },
                activity_groups: {
                    rule: "repeated",
                    type: "OuterActivityGroup",
                    id: 3
                }
            }
        }
    }
    ,
    975986: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                cpp_url: {
                    type: "string",
                    id: 1
                },
                view_report_scene: {
                    type: "int32",
                    id: 2
                },
                view_through_url: {
                    type: "string",
                    id: 3
                }
            }
        }
    }
    ,
    762970: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                GAME_BC_TOGGLE_STATUS_NONE: 0,
                GAME_BC_TOGGLE_STATUS_CLOSE: 1,
                GAME_BC_TOGGLE_STATUS_OPEN: 2
            }
        }
    }
    ,
    164421: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                emotes_can_not_be_used_hint: {
                    type: "string",
                    id: 1
                }
            }
        }
    }
    ,
    743219: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                game_emotes_tab: {
                    type: "data.GameEmotesTab",
                    id: 2
                }
            }
        }
    }
    ,
    46891: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                can_use_guessing_emotes: {
                    type: "bool",
                    id: 1
                },
                game_emote_config: {
                    type: "GameEmoteConfig",
                    id: 2
                },
                usable_guessing_emotes: {
                    type: "webcast.data.EmoteDetail",
                    id: 3
                },
                unusable_guessing_emotes: {
                    type: "webcast.data.EmoteDetail",
                    id: 4
                }
            }
        }
    }
    ,
    610003: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                GameEventTypeNormal: 0,
                GameEventTypeDrops: 1
            }
        }
    }
    ,
    115749: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                deprecated1: {
                    type: "MonkeyData",
                    id: 1
                }
            },
            nested: {
                MonkeyData: {
                    fields: {
                        deprecated1: {
                            type: "uint32",
                            id: 1
                        },
                        deprecated2: {
                            type: "uint32",
                            id: 2
                        },
                        deprecated3: {
                            type: "uint32",
                            id: 3
                        },
                        deprecated4: {
                            type: "string",
                            id: 4
                        },
                        deprecated5: {
                            rule: "repeated",
                            type: "Range",
                            id: 5
                        },
                        deprecated6: {
                            type: "string",
                            id: 6
                        },
                        deprecated7: {
                            type: "int32",
                            id: 7
                        },
                        deprecated8: {
                            type: "int32",
                            id: 8
                        }
                    },
                    nested: {
                        Range: {
                            fields: {
                                deprecated1: {
                                    type: "int32",
                                    id: 1
                                },
                                deprecated2: {
                                    type: "int32",
                                    id: 2
                                },
                                deprecated3: {
                                    type: "int32",
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
    607810: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                type: {
                    type: "int64",
                    id: 1
                },
                value: {
                    type: "string",
                    id: 2
                },
                regrex_pattern: {
                    type: "string",
                    id: 3
                }
            }
        }
    }
    ,
    91471: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                game_gift_guide_keyword_config: {
                    rule: "repeated",
                    type: "GameGiftGuideKeyword",
                    id: 1
                }
            }
        }
    }
    ,
    670426: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                gift_id: {
                    type: "int64",
                    id: 2
                },
                fan_ticket_count: {
                    type: "int64",
                    id: 3
                },
                user: {
                    type: "webcast.data.User",
                    id: 4
                },
                to_user: {
                    type: "webcast.data.User",
                    id: 5
                },
                normalContent: {
                    type: "string",
                    id: 6
                },
                monkey_data: {
                    type: "MonkeyData",
                    id: 8
                },
                log_id: {
                    type: "string",
                    id: 9
                },
                public_area_common: {
                    type: "PublicAreaCommon",
                    id: 10
                }
            },
            nested: {
                MonkeyData: {
                    fields: {
                        score: {
                            type: "int32",
                            id: 1
                        },
                        break_record: {
                            type: "bool",
                            id: 2
                        },
                        need_popup: {
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
        }
    }
    ,
    208464: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                game_id: {
                    type: "int64",
                    id: 2
                },
                status: {
                    type: "Status",
                    id: 3
                },
                extra: {
                    type: "string",
                    id: 4
                }
            },
            nested: {
                Status: {
                    values: {
                        Undefined: 0,
                        AchieveTarget: 1
                    }
                }
            }
        }
    }
    ,
    919614: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                view: {
                    type: "data.PinCardView",
                    id: 2
                }
            }
        }
    }
    ,
    842005: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                GAME_GUESS_TASK_STATUS_RUNNING: 0,
                GAME_GUESS_TASK_STATUS_DONE: 1
            }
        }
    }
    ,
    300712: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                round_id_str: {
                    type: "string",
                    id: 2
                },
                show_type: {
                    type: "bool",
                    id: 3
                },
                show_option_idx_str: {
                    type: "string",
                    id: 4
                },
                title_starling_key: {
                    type: "string",
                    id: 5
                },
                result_starling_key: {
                    type: "string",
                    id: 6
                },
                show_rank_str: {
                    type: "string",
                    id: 7
                },
                option_id_str: {
                    type: "string",
                    id: 8
                }
            }
        }
    }
    ,
    189638: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                guess_widgets: {
                    type: "data.GuessWidgets",
                    id: 2
                }
            }
        }
    }
    ,
    705095: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                game: {
                    type: "PartnershipGame",
                    id: 1
                },
                attribution: {
                    type: "GameAttributionInfo",
                    id: 2
                }
            }
        }
    }
    ,
    436838: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                id: {
                    type: "int64",
                    id: 1
                },
                kind: {
                    type: "int64",
                    id: 2
                },
                create_time: {
                    type: "int64",
                    id: 3
                },
                now_time: {
                    type: "int64",
                    id: 4
                },
                expire_time: {
                    type: "int64",
                    id: 5
                },
                status: {
                    type: "int64",
                    id: 6
                },
                room_id: {
                    type: "int64",
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
    36211: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                invite_item: {
                    type: "webcast.data.GameInvite",
                    id: 2
                },
                invitation_switch: {
                    type: "webcast.data.InvitationSwitch",
                    id: 3
                },
                config_extra: {
                    type: "string",
                    id: 4
                }
            }
        }
    }
    ,
    547116: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                Invalid: 0,
                Accept: 1,
                Reject: 2,
                Unsatisfied: 3,
                ResourceNotReady: 4
            }
        }
    }
    ,
    193825: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                reply: {
                    type: "webcast.data.GameInviteReply",
                    id: 2
                },
                extra: {
                    type: "string",
                    id: 3
                }
            }
        }
    }
    ,
    189001: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                GameKindUnknown: 0,
                Effect: 1,
                Wmini: 2,
                Wgamex: 3,
                Cloud: 4
            }
        }
    }
    ,
    543833: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                fragment_id: {
                    type: "int64",
                    id: 1
                },
                fragment_id_str: {
                    type: "string",
                    id: 2
                },
                room_id: {
                    type: "int64",
                    id: 3
                },
                fragment_type: {
                    type: "int32",
                    id: 4
                },
                vid: {
                    type: "string",
                    id: 5
                },
                download_url: {
                    type: "string",
                    id: 6
                },
                cover_url: {
                    type: "string",
                    id: 7
                },
                owner_user_id: {
                    type: "int64",
                    id: 8
                },
                start_time: {
                    type: "int64",
                    id: 9
                },
                end_time: {
                    type: "int64",
                    id: 10
                },
                extra: {
                    type: "string",
                    id: 11
                },
                create_time: {
                    type: "int64",
                    id: 12
                },
                update_time: {
                    type: "int64",
                    id: 13
                },
                title: {
                    type: "string",
                    id: 14
                },
                status: {
                    type: "int32",
                    id: 15
                },
                mark_time: {
                    type: "int64",
                    id: 16
                },
                op_time: {
                    type: "int64",
                    id: 17
                },
                stream_url: {
                    type: "string",
                    id: 18
                },
                preview_pic_url: {
                    type: "string",
                    id: 19
                },
                room_id_str: {
                    type: "string",
                    id: 20
                },
                owner_user_id_str: {
                    type: "string",
                    id: 21
                },
                replay_create_time: {
                    type: "int64",
                    id: 22
                },
                is_edit: {
                    type: "int32",
                    id: 23
                },
                sprite_list: {
                    rule: "repeated",
                    type: "Sprite",
                    id: 24
                },
                mp4_video_meta_info: {
                    type: "VideoMetaInfo",
                    id: 25
                },
                encode_status: {
                    type: "EncodeStatus",
                    id: 26
                },
                is_muted: {
                    type: "bool",
                    id: 27
                },
                show_info: {
                    type: "LiveFragmentShowInfo",
                    id: 28
                },
                replay_relative_time: {
                    type: "int64",
                    id: 29
                }
            }
        }
    }
    ,
    263620: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                mark_id: {
                    type: "int64",
                    id: 1
                },
                mark_id_str: {
                    type: "string",
                    id: 2
                },
                room_id: {
                    type: "int64",
                    id: 3
                },
                room_id_str: {
                    type: "string",
                    id: 4
                },
                vid: {
                    type: "string",
                    id: 5
                },
                cover_url: {
                    type: "string",
                    id: 6
                },
                download_url: {
                    type: "string",
                    id: 7
                },
                stream_url: {
                    type: "string",
                    id: 8
                },
                owner_user_id: {
                    type: "int64",
                    id: 9
                },
                owner_user_id_str: {
                    type: "string",
                    id: 10
                },
                mark_time: {
                    type: "int64",
                    id: 11
                },
                start_time: {
                    type: "int64",
                    id: 12
                },
                end_time: {
                    type: "int64",
                    id: 13
                },
                replay_create_time: {
                    type: "int64",
                    id: 14
                },
                title: {
                    type: "string",
                    id: 15
                },
                status: {
                    type: "int32",
                    id: 16
                },
                is_edit: {
                    type: "int32",
                    id: 17
                },
                op_time: {
                    type: "int64",
                    id: 18
                },
                preview_pic_url: {
                    type: "string",
                    id: 19
                },
                extra: {
                    type: "string",
                    id: 20
                },
                create_time: {
                    type: "int64",
                    id: 21
                },
                update_time: {
                    type: "int64",
                    id: 22
                }
            }
        }
    }
    ,
    658941: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                GAME_LIVE_ROOM_MODE_PHONE: 0,
                GAME_LIVE_ROOM_MODE_OBS: 1,
                GAME_LIVE_ROOM_MODE_SCREEN: 4,
                GAME_LIVE_ROOM_MODE_STUDIO: 6
            }
        }
    }
    ,
    269202: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                GAME_MOMENT_EFFECT_TYPE_UNKNOWN: 0,
                GAME_MOMENT_EFFECT_TYPE_GIFT_GUIDANCE: 1,
                GAME_MOMENT_EFFECT_TYPE_QUICK_COMMENT: 2
            }
        }
    }
    ,
    268996: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                message_type: {
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
                unique_id: {
                    type: "string",
                    id: 5
                },
                moment_effects: {
                    rule: "repeated",
                    type: "GameMomentEffectType",
                    id: 6
                }
            }
        }
    }
    ,
    916764: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                GAME_MOMENT_MESSAGE_TYPE_UNKNOWN: 0,
                GAME_MOMENT_MESSAGE_TYPE_VICTORY: 1,
                GAME_MOMENT_MESSAGE_TYPE_HIGHLIGHT: 2,
                GAME_MOMENT_MESSAGE_TYPE_DEFEAT: 3,
                GAME_MOMENT_MESSAGE_TYPE_KILL_NUM: 4,
                GAME_MOMENT_MESSAGE_TYPE_REMAIN_NUM: 5
            }
        }
    }
    ,
    194168: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                ping_value: {
                    type: "int64",
                    id: 2
                },
                is_game: {
                    type: "bool",
                    id: 3
                },
                game_fusion_label: {
                    type: "string",
                    id: 4
                },
                ping_timestamp: {
                    type: "int64",
                    id: 5
                },
                confidence: {
                    type: "double",
                    id: 6
                }
            }
        }
    }
    ,
    877673: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                msg_type: {
                    type: "MsgType",
                    id: 2
                },
                notify_text: {
                    type: "webcast.data.Text",
                    id: 3
                }
            },
            nested: {
                MsgType: {
                    values: {
                        MSG_TYPE_RANK_IN_OUT: 0,
                        MSG_TYPE_RANK_CHANGE: 1,
                        MSG_TYPE_ANCHOR_ENCOURAGE: 2,
                        MSG_TYPE_UNKNOW: 255
                    }
                }
            }
        }
    }
    ,
    266823: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                toast_context: {
                    type: "webcast.data.Text",
                    id: 2
                },
                request_cnt_str: {
                    type: "string",
                    id: 3
                },
                limit_supremacy_str: {
                    type: "string",
                    id: 4
                },
                capsule_cnt_str: {
                    type: "string",
                    id: 5
                }
            }
        }
    }
    ,
    891662: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                rule_id: {
                    type: "int64",
                    id: 1
                },
                tips_text: {
                    type: "webcast.data.Text",
                    id: 2
                },
                fillin_text: {
                    rule: "repeated",
                    type: "string",
                    id: 3
                },
                action: {
                    type: "GameAction",
                    id: 4
                },
                priority: {
                    type: "int64",
                    id: 5
                },
                show_duration_inapp: {
                    type: "int64",
                    id: 6
                },
                show_duration_outapp: {
                    type: "int64",
                    id: 7
                },
                button_text: {
                    type: "webcast.data.Text",
                    id: 8
                },
                title_text: {
                    type: "webcast.data.Text",
                    id: 9
                },
                common: {
                    type: "Common",
                    id: 100
                }
            }
        }
    }
    ,
    724662: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            oneofs: {
                content: {
                    oneof: ["top_one_notice"]
                }
            },
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                msg_type: {
                    type: "GameRoomBroadcastMsgType",
                    id: 2
                },
                top_one_notice: {
                    type: "TopOneNoticeContent",
                    id: 3
                }
            }
        }
    }
    ,
    595664: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                TYPE_UNKNOWN: 0,
                TYPE_TOP_ONE_NOTICE: 1
            }
        }
    }
    ,
    149801: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                GAME_SCORE_TYPE_UNKNOWN: 0,
                GAME_SCORE_TYPE_GUESS_SCORE: 1
            }
        }
    }
    ,
    477504: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                id: {
                    type: "int32",
                    id: 1
                },
                value: {
                    type: "string",
                    id: 2
                },
                value_map: {
                    keyType: "string",
                    type: "string",
                    id: 3
                }
            }
        }
    }
    ,
    124653: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                all_features: {
                    rule: "repeated",
                    type: "webcast.data.GameServerFeature",
                    id: 2
                }
            }
        }
    }
    ,
    468057: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                UnknownStatus: 0,
                Start: 1,
                Stop: 2
            }
        }
    }
    ,
    626134: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                gameID: {
                    type: "int64",
                    id: 2
                },
                status: {
                    type: "GameStatus",
                    id: 3
                },
                config_extra: {
                    type: "string",
                    id: 4
                }
            }
        }
    }
    ,
    94713: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                common: {
                    type: "Common",
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
                game_kind: {
                    type: "webcast.data.GameKind",
                    id: 4
                },
                game_id: {
                    type: "int64",
                    id: 5
                },
                round_id: {
                    type: "int64",
                    id: 6
                },
                event_time: {
                    type: "int32",
                    id: 7
                },
                present_msg_type: {
                    type: "int32",
                    id: 8
                },
                config_extra: {
                    type: "string",
                    id: 9
                },
                play_kind: {
                    type: "int64",
                    id: 10
                },
                switch_id: {
                    type: "int64",
                    id: 11
                }
            }
        }
    }
    ,
    990747: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                game_name: {
                    type: "string",
                    id: 1
                }
            }
        }
    }
    ,
    698878: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                game_tag_id: {
                    type: "int64",
                    id: 1
                },
                game_tag_name: {
                    type: "string",
                    id: 2
                },
                preview_game_moment_enable: {
                    type: "bool",
                    id: 3
                },
                starling_key: {
                    type: "string",
                    id: 4
                },
                display_name: {
                    type: "string",
                    id: 5
                }
            }
        }
    }
    ,
    573818: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                game: {
                    type: "PartnershipGame",
                    id: 1
                },
                task: {
                    type: "PartnershipTask",
                    id: 2
                },
                accepted_benefit_list: {
                    rule: "repeated",
                    type: "BriefBenefitInfo",
                    id: 3
                },
                unaccepted_benefit_list: {
                    rule: "repeated",
                    type: "BriefBenefitInfo",
                    id: 4
                }
            }
        }
    }
    ,
    525130: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                task_id: {
                    type: "string",
                    id: 1
                },
                status: {
                    type: "GameTaskStatus",
                    id: 2
                },
                current_value: {
                    type: "int32",
                    id: 3
                },
                target_value: {
                    type: "int32",
                    id: 4
                },
                reward_info: {
                    type: "GameTaskRewardInfo",
                    id: 5
                },
                task_type: {
                    type: "int32",
                    id: 6
                }
            }
        }
    }
    ,
    970985: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                reward_id: {
                    type: "string",
                    id: 1
                },
                status: {
                    type: "RewardStatus",
                    id: 2
                },
                reward_value: {
                    type: "string",
                    id: 3
                }
            }
        }
    }
    ,
    881280: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                GAME_TASK_STATUS_UNKNOWN: 0,
                GAME_TASK_STATUS_LOCKED: 1,
                GAME_TASK_STATUS_READY: 2,
                GAME_TASK_STATUS_RUNNING: 3,
                GAME_TASK_STATUS_DONE: 4,
                GAME_TASK_STATUS_FAILED: 5
            }
        }
    }
    ,
    354530: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                event_id_str: {
                    type: "string",
                    id: 1
                },
                game_id_str: {
                    type: "string",
                    id: 2
                },
                game_name: {
                    type: "string",
                    id: 3
                },
                game_icon: {
                    type: "string",
                    id: 4
                },
                event_name: {
                    type: "string",
                    id: 5
                },
                config_time: {
                    type: "int64",
                    id: 6
                },
                max_amount: {
                    type: "string",
                    id: 7
                },
                event_detail_url: {
                    type: "string",
                    id: 8
                }
            }
        }
    }
    ,
    61365: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                GAMEPAD_SHOW_STATUS_SHOW: 0,
                GAMEPAD_SHOW_STATUS_HIDE: 1
            }
        }
    }
    ,
    711631: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                GAMEPAD_TASK_TYPE_PARTNERSHIP: 0,
                GAMEPAD_TASK_TYPE_PUBLISHER: 1,
                GAMEPAD_TASK_TYPE_EVENT: 2
            }
        }
    }
    ,
    178400: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                is_gaming_host: {
                    type: "bool",
                    id: 1
                }
            }
        }
    }
    ,
    73581: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                gecko_channel: {
                    type: "string",
                    id: 1
                },
                file_name: {
                    type: "string",
                    id: 2
                }
            }
        }
    }
    ,
    151692: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                GetSourceUnknown: 0,
                GetSourceGoLivePage: 1,
                GetSourceClientEnterRoom: 2,
                GetSourceClientBuildIndicator: 3,
                GetSourceGiftGalleryPage: 4,
                GetSourceLiveGoalDetailPage: 5
            }
        }
    }
    ,
    624548: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                GIFT_BADGE_TYPE_DEFAULT_GIFT_BADGE: 0,
                GIFT_BADGE_TYPE_CAMPAIGN_GIFT_BADGE: 1,
                GIFT_BADGE_TYPE_TRENDING_GIFT_BADGE: 2,
                GIFT_BADGE_TYPE_NEW_GIFT_BADGE: 3,
                GIFT_BADGE_TYPE_RANDOM_GIFT_BADGE: 4,
                GIFT_BADGE_TYPE_COLOR_GIFT_BADGE: 5,
                GIFT_BADGE_TYPE_AUDIO_GIFT_BADGE: 6,
                GIFT_BADGE_TYPE_UNIVERSE_GIFT_BADGE: 7,
                GIFT_BADGE_TYPE_GLUP_GIFT_BADGE: 8,
                GIFT_BADGE_TYPE_FANS_CLUB_GIFT_BADGE: 9,
                GIFT_BADGE_TYPE_PARTNERSHIP_GIFT_BADGE: 10,
                GIFT_BADGE_TYPE_CHRISTMAS_GIFT_BADGE: 11,
                GIFT_BADGE_TYPE_CUSTOM_GIFT_BADGE: 12,
                GIFT_BADGE_TYPE_GALLERY_GIFTER: 13,
                GIFT_BADGE_TYPE_PK: 14,
                GIFT_BADGE_TYPE_VAULT: 15,
                GIFT_BADGE_TYPE_LIVE_GOAL: 16
            }
        }
    }
    ,
    565941: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                display_text: {
                    type: "webcast.data.Text",
                    id: 1
                },
                display_text_bg_color: {
                    type: "string",
                    id: 2
                },
                box_img: {
                    type: "data.Image",
                    id: 3
                },
                bg_img: {
                    type: "data.Image",
                    id: 4
                },
                scheme_url: {
                    type: "string",
                    id: 5
                },
                animate: {
                    type: "bool",
                    id: 6
                },
                deprecated1: {
                    type: "int64",
                    id: 7
                },
                deprecated2: {
                    type: "int64",
                    id: 8
                }
            }
        }
    }
    ,
    177686: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                capacity: {
                    type: "int64",
                    id: 1
                },
                is_primary_box: {
                    type: "bool",
                    id: 2
                },
                scheme_url: {
                    type: "string",
                    id: 3
                },
                gift_infos_in_box: {
                    rule: "repeated",
                    type: "GiftInfoInBox",
                    id: 4
                }
            }
        }
    }
    ,
    822785: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                from_user_id: {
                    type: "int64",
                    id: 2
                },
                left_icon: {
                    type: "webcast.data.Image",
                    id: 3
                },
                notify: {
                    type: "webcast.im.NotifyMessage",
                    id: 4
                }
            }
        }
    }
    ,
    882145: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                status: {
                    type: "GiftChallengeStatus",
                    id: 1
                },
                current_points: {
                    type: "int64",
                    id: 2
                },
                stage_data: {
                    rule: "repeated",
                    type: "StageData",
                    id: 3
                },
                challenge_id: {
                    type: "int64",
                    id: 4
                }
            },
            nested: {
                StageData: {
                    fields: {
                        total_points: {
                            type: "int64",
                            id: 1
                        },
                        gift_id: {
                            type: "int64",
                            id: 2
                        }
                    }
                }
            }
        }
    }
    ,
    477244: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                GIFT_CHALLENGE_STATUS_UNKNOWN: 0,
                GIFT_CHALLENGE_STATUS_NOT_JOINED: 1,
                GIFT_CHALLENGE_STATUS_JOINED: 2,
                GIFT_CHALLENGE_STATUS_COMPLETED: 3
            }
        }
    }
    ,
    789071: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                gift_collection: {
                    type: "GiftCollection",
                    id: 2
                }
            },
            nested: {
                GiftCollection: {
                    fields: {
                        round: {
                            type: "int64",
                            id: 1
                        },
                        effect_name_key: {
                            type: "string",
                            id: 2
                        },
                        gift: {
                            type: "webcast.data.GiftStruct",
                            id: 3
                        },
                        type: {
                            type: "int64",
                            id: 4
                        },
                        filter_host: {
                            type: "bool",
                            id: 5
                        },
                        schema_url: {
                            type: "string",
                            id: 6
                        }
                    }
                }
            }
        }
    }
    ,
    939188: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                color_id: {
                    type: "int64",
                    id: 1
                },
                color_name: {
                    type: "string",
                    id: 2
                },
                color_values: {
                    rule: "repeated",
                    type: "string",
                    id: 3
                },
                color_image: {
                    type: "data.Image",
                    id: 4
                },
                gift_image: {
                    type: "data.Image",
                    id: 5
                },
                color_effect_id: {
                    type: "int64",
                    id: 6
                },
                is_default: {
                    type: "bool",
                    id: 7
                }
            }
        }
    }
    ,
    870629: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                config_type: {
                    type: "GiftConfigType",
                    id: 1
                },
                role_config: {
                    type: "RoleConfig",
                    id: 2
                }
            },
            nested: {
                RoleConfig: {
                    fields: {
                        viewer: {
                            type: "string",
                            id: 1
                        },
                        anchor: {
                            type: "string",
                            id: 2
                        },
                        gifter: {
                            type: "string",
                            id: 3
                        }
                    }
                }
            }
        }
    }
    ,
    373445: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                GIFT_CONFIG_TYPE_UNKNOWN: 0,
                GIFT_CONFIG_TYPE_AUDIO: 1
            }
        }
    }
    ,
    17104: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                config_infos: {
                    rule: "repeated",
                    type: "GiftConfigInfo",
                    id: 1
                }
            }
        }
    }
    ,
    374788: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                Unused: 0,
                Chat: 1,
                Tray: 2,
                Effect: 4
            }
        }
    }
    ,
    956619: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                dynamic_restriction: {
                    type: "data.DynamicRestriction",
                    id: 2
                }
            }
        }
    }
    ,
    612298: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                gift_info: {
                    type: "GiftInfo",
                    id: 2
                },
                user: {
                    type: "webcast.data.User",
                    id: 3
                },
                to_user: {
                    type: "webcast.data.User",
                    id: 4
                },
                msg_type: {
                    type: "GiftGalleryMsgType",
                    id: 5
                },
                all_sponsored: {
                    type: "bool",
                    id: 21
                },
                priority: {
                    type: "webcast.data.GiftIMPriority",
                    id: 51
                },
                log_id: {
                    type: "string",
                    id: 52
                }
            },
            nested: {
                GiftInfo: {
                    fields: {
                        lighted_up_gift_id: {
                            type: "int64",
                            id: 1
                        },
                        high_value: {
                            type: "bool",
                            id: 2
                        },
                        gift: {
                            type: "webcast.data.GiftStruct",
                            id: 3
                        },
                        unlighted_gift_icon: {
                            type: "string",
                            id: 4
                        }
                    }
                }
            }
        }
    }
    ,
    541204: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                GIFT_GALLERY_MSG_TYPE_UNUSED: 0,
                GIFT_GALLERY_MSG_TYPE_LIGHT_UP: 1,
                GIFT_GALLERY_MSG_TYPE_ALL_SPONSORED: 2,
                GIFT_GALLERY_MSG_TYPE_SPONSOR_CHANGE: 3,
                GIFT_GALLERY_MSG_TYPE_LONG_TERM_RECALL: 4
            }
        }
    }
    ,
    147896: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                content: {
                    type: "webcast.data.Text",
                    id: 2
                },
                gift_id: {
                    type: "int64",
                    id: 3
                },
                has_sent_before: {
                    type: "bool",
                    id: 4
                },
                guide_type: {
                    type: "string",
                    id: 5
                },
                display_seconds: {
                    type: "int64",
                    id: 6
                },
                trigger_name: {
                    type: "string",
                    id: 7
                },
                schema_url: {
                    type: "string",
                    id: 8
                },
                should_use_config: {
                    type: "bool",
                    id: 9
                },
                guide_page_resources: {
                    rule: "repeated",
                    type: "GuidePageResource",
                    id: 10
                },
                template_type: {
                    type: "string",
                    id: 11
                },
                guide_target: {
                    type: "GuideTarget",
                    id: 12
                },
                biz: {
                    type: "string",
                    id: 13
                },
                tags: {
                    rule: "repeated",
                    type: "string",
                    id: 14
                },
                gift_ids: {
                    rule: "repeated",
                    type: "int64",
                    id: 15
                },
                use_server_config: {
                    type: "bool",
                    id: 16
                },
                sub_trigger_name: {
                    type: "string",
                    id: 17
                }
            }
        }
    }
    ,
    231965: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                queue_sizes: {
                    rule: "repeated",
                    type: "int64",
                    id: 1
                },
                self_queue_priority: {
                    type: "int64",
                    id: 2
                },
                priority: {
                    type: "int64",
                    id: 3
                }
            }
        }
    }
    ,
    137453: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                SYSTEM: 0,
                SELF_SENT: 1,
                VALUABLE_GIFT: 2,
                COMMON_GIFT: 3
            }
        }
    }
    ,
    159758: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                gift_id: {
                    type: "int64",
                    id: 1
                },
                color_id: {
                    type: "int64",
                    id: 2
                }
            }
        }
    }
    ,
    712231: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                gift_id: {
                    type: "int64",
                    id: 1
                },
                effect_id: {
                    type: "int64",
                    id: 2
                },
                color_id: {
                    type: "int64",
                    id: 3
                },
                remain_times: {
                    type: "int32",
                    id: 4
                },
                asset: {
                    type: "data.AssetStruct",
                    id: 5
                }
            }
        }
    }
    ,
    354328: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                id_str: {
                    type: "string",
                    id: 1
                },
                name: {
                    type: "string",
                    id: 2
                },
                count: {
                    type: "int64",
                    id: 3
                },
                icon_url: {
                    type: "string",
                    id: 4
                }
            }
        }
    }
    ,
    468900: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                lock: {
                    type: "bool",
                    id: 1
                },
                lock_type: {
                    type: "int32",
                    id: 2
                },
                gift_level: {
                    type: "int32",
                    id: 3
                },
                highlight_enabled: {
                    type: "bool",
                    id: 4
                },
                unlock_button_text: {
                    type: "string",
                    id: 5
                },
                unlock_schema: {
                    type: "string",
                    id: 6
                }
            }
        }
    }
    ,
    892288: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                gift_id: {
                    type: "int64",
                    id: 2
                },
                fan_ticket_count: {
                    type: "int64",
                    id: 3
                },
                group_count: {
                    type: "int64",
                    id: 4
                },
                repeat_count: {
                    type: "int64",
                    id: 5
                },
                combo_count: {
                    type: "int64",
                    id: 6
                },
                user: {
                    type: "webcast.data.User",
                    id: 7
                },
                to_user: {
                    type: "webcast.data.User",
                    id: 8
                },
                repeat_end: {
                    type: "int32",
                    id: 9
                },
                text_effect: {
                    type: "TextEffect",
                    id: 10
                },
                group_id: {
                    type: "int64",
                    id: 11
                },
                income_taskgifts: {
                    type: "int64",
                    id: 12
                },
                room_fan_ticket_count: {
                    type: "int64",
                    id: 13
                },
                priority: {
                    type: "webcast.data.GiftIMPriority",
                    id: 14
                },
                gift: {
                    type: "webcast.data.GiftStruct",
                    id: 15
                },
                log_id: {
                    type: "string",
                    id: 16
                },
                send_type: {
                    type: "int64",
                    id: 17
                },
                public_area_common: {
                    type: "PublicAreaCommon",
                    id: 18
                },
                tray_display_text: {
                    type: "webcast.data.Text",
                    id: 19
                },
                banned_display_effects: {
                    type: "int64",
                    id: 20
                },
                tray_info: {
                    type: "data.GiftTrayInfo",
                    id: 21
                },
                monitor_extra: {
                    type: "string",
                    id: 22
                },
                monitor_info: {
                    type: "GiftMonitorInfo",
                    id: 23
                },
                color_id: {
                    type: "int64",
                    id: 24
                },
                is_first_sent: {
                    type: "bool",
                    id: 25
                },
                display_text_for_anchor: {
                    type: "webcast.data.Text",
                    id: 26
                },
                display_text_for_audience: {
                    type: "webcast.data.Text",
                    id: 27
                },
                order_id: {
                    type: "string",
                    id: 28
                },
                gifts_in_box: {
                    type: "webcast.data.GiftsInBox",
                    id: 29
                },
                msg_filter: {
                    type: "webcast.data.MsgFilter",
                    id: 30
                },
                lynx_extra: {
                    rule: "repeated",
                    type: "data.LynxGiftExtra",
                    id: 31
                },
                user_identity: {
                    type: "webcast.data.UserIdentity",
                    id: 32
                },
                match_info: {
                    type: "data.MatchInfo",
                    id: 33
                },
                linkmic_gift_expression_strategy: {
                    type: "data.LinkmicGiftExpressionStrategy",
                    id: 34
                },
                flying_mic_resources: {
                    type: "data.FlyingMicResources",
                    id: 35
                },
                disable_gift_tracking: {
                    type: "bool",
                    id: 36
                },
                asset: {
                    type: "data.AssetStruct",
                    id: 37
                },
                version: {
                    type: "GiftMessageVersion",
                    id: 38
                },
                sponsorship_info: {
                    rule: "repeated",
                    type: "SponsorshipInfo",
                    id: 39
                },
                flying_mic_resources_v2: {
                    type: "data.FlyingMicResources",
                    id: 40
                },
                public_area_message_common: {
                    type: "PublicAreaMessageCommon",
                    id: 41
                },
                signature: {
                    type: "string",
                    id: 42
                },
                signature_version: {
                    type: "string",
                    id: 43
                },
                multi_generate_message: {
                    type: "bool",
                    id: 44
                },
                to_member_id: {
                    type: "string",
                    id: 45
                },
                to_member_id_int: {
                    type: "int64",
                    id: 46
                },
                to_member_nickname: {
                    type: "string",
                    id: 47
                },
                interactive_gift_info: {
                    type: "InteractiveGiftInfo",
                    id: 48
                }
            },
            nested: {
                TextEffect: {
                    fields: {
                        portrait: {
                            type: "Detail",
                            id: 1
                        },
                        landscape: {
                            type: "Detail",
                            id: 2
                        }
                    },
                    nested: {
                        Detail: {
                            fields: {
                                text: {
                                    type: "webcast.data.Text",
                                    id: 1
                                },
                                text_font_size: {
                                    type: "int32",
                                    id: 2
                                },
                                background: {
                                    type: "webcast.data.Image",
                                    id: 3
                                },
                                start: {
                                    type: "int32",
                                    id: 4
                                },
                                duration: {
                                    type: "int32",
                                    id: 5
                                },
                                x: {
                                    type: "int32",
                                    id: 6
                                },
                                y: {
                                    type: "int32",
                                    id: 7
                                },
                                width: {
                                    type: "int32",
                                    id: 8
                                },
                                height: {
                                    type: "int32",
                                    id: 9
                                },
                                shadow_dx: {
                                    type: "int32",
                                    id: 10
                                },
                                shadow_dy: {
                                    type: "int32",
                                    id: 11
                                },
                                shadow_radius: {
                                    type: "int32",
                                    id: 12
                                },
                                shadow_color: {
                                    type: "string",
                                    id: 13
                                },
                                stroke_color: {
                                    type: "string",
                                    id: 14
                                },
                                stroke_width: {
                                    type: "int32",
                                    id: 15
                                }
                            }
                        }
                    }
                },
                SponsorshipInfo: {
                    fields: {
                        gift_id: {
                            type: "int64",
                            id: 1
                        },
                        sponsor_id: {
                            type: "int64",
                            id: 2
                        },
                        light_gift_up: {
                            type: "bool",
                            id: 3
                        },
                        unlighted_gift_icon: {
                            type: "string",
                            id: 4
                        },
                        gift_gallery_detail_page_scheme_url: {
                            type: "string",
                            id: 5
                        },
                        gift_gallery_click_sponsor: {
                            type: "bool",
                            id: 6
                        },
                        become_all_sponsored: {
                            type: "bool",
                            id: 21
                        }
                    }
                },
                InteractiveGiftInfo: {
                    fields: {
                        cross_screen_delay: {
                            type: "int64",
                            id: 1
                        },
                        cross_screen_role: {
                            type: "int64",
                            id: 2
                        },
                        ignore_config: {
                            type: "GiftMessageIgnoreConfig",
                            id: 3
                        },
                        uniq_id: {
                            type: "int64",
                            id: 4
                        },
                        to_user_team_id: {
                            type: "int64",
                            id: 5
                        }
                    }
                }
            }
        }
    }
    ,
    748584: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                GIFT_MESSAGE_IGNORE_CONFIG_NOT_IGNORE: 0,
                GIFT_MESSAGE_IGNORE_CONFIG_IGNORE_TRAY: 1,
                GIFT_MESSAGE_IGNORE_CONFIG_IGNORE_PSM: 2,
                GIFT_MESSAGE_IGNORE_CONFIG_IGNORE_TRAY_AND_PSM: 3
            }
        }
    }
    ,
    363006: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                GIFT_MESSAGE_VERSION_0: 0,
                GIFT_MESSAGE_VERSION_1: 1
            }
        }
    }
    ,
    814836: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                gift_id: {
                    type: "int64",
                    id: 1
                },
                gift_name: {
                    type: "string",
                    id: 2
                },
                gift_icon_image: {
                    type: "webcast.data.Image",
                    id: 3
                },
                gift_price: {
                    type: "int64",
                    id: 4
                },
                gift_background_image: {
                    type: "webcast.data.Image",
                    id: 5
                },
                release_version: {
                    type: "int64",
                    id: 6
                },
                has_flash_effect: {
                    type: "bool",
                    id: 7
                },
                event_icon_image: {
                    type: "webcast.data.Image",
                    id: 8
                },
                label_text: {
                    type: "string",
                    id: 9
                }
            }
        }
    }
    ,
    414597: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                gift_id: {
                    type: "int64",
                    id: 1
                },
                gift_name_key: {
                    type: "string",
                    id: 2
                },
                gift_icon_image: {
                    type: "webcast.data.Image",
                    id: 3
                },
                gift_mode_desc: {
                    type: "webcast.data.Text",
                    id: 4
                }
            }
        }
    }
    ,
    742653: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                anchor_id: {
                    type: "int64",
                    id: 1
                },
                profitapi_message_dur: {
                    type: "int64",
                    id: 2
                },
                send_gift_profit_api_start_ms: {
                    type: "int64",
                    id: 3
                },
                send_gift_profit_core_start_ms: {
                    type: "int64",
                    id: 4
                },
                send_gift_req_start_ms: {
                    type: "int64",
                    id: 5
                },
                send_gift_send_message_success_ms: {
                    type: "int64",
                    id: 6
                },
                send_profitapi_dur: {
                    type: "int64",
                    id: 7
                },
                to_user_id: {
                    type: "int64",
                    id: 8
                },
                send_gift_start_client_local_ms: {
                    type: "int64",
                    id: 9
                },
                from_platform: {
                    type: "string",
                    id: 10
                },
                from_version: {
                    type: "string",
                    id: 11
                }
            }
        }
    }
    ,
    351324: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                gift_notice: {
                    type: "GiftNotice",
                    id: 2
                }
            },
            nested: {
                NoticeType: {
                    values: {
                        Unknown_Notice: 0,
                        Bubble: 1,
                        Popup: 2,
                        Animation: 3
                    }
                },
                BizType: {
                    values: {
                        Unknown_Biz: 0,
                        WeeklyRank: 1
                    }
                },
                GiftNotice: {
                    fields: {
                        notice_type: {
                            type: "NoticeType",
                            id: 1
                        },
                        gift_id: {
                            type: "int64",
                            id: 2
                        },
                        icon: {
                            type: "webcast.data.Image",
                            id: 3
                        },
                        biz_type: {
                            type: "BizType",
                            id: 4
                        },
                        period_id: {
                            type: "int64",
                            id: 5
                        }
                    }
                }
            }
        }
    }
    ,
    155007: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                lynx_url: {
                    type: "string",
                    id: 1
                },
                lynx_extra: {
                    type: "string",
                    id: 2
                },
                type: {
                    type: "GiftPanelBeaconBubbleType",
                    id: 3
                }
            }
        }
    }
    ,
    786199: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                GIFT_PANEL_BEACON_BUBBLE_TYPE_UNKNOWN: 0,
                GIFT_PANEL_BEACON_BUBBLE_TYPE_DEFAULT: 1,
                GIFT_PANEL_BEACON_BUBBLE_TYPE_LYNX_DEFAULT: 2,
                GIFT_PANEL_BEACON_BUBBLE_TYPE_LIVE_GOAL: 3,
                GIFT_PANEL_BEACON_BUBBLE_TYPE_GIFT_GALLERY: 4
            }
        }
    }
    ,
    632932: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                left_image: {
                    type: "data.Image",
                    id: 1
                },
                right_image: {
                    type: "data.Image",
                    id: 2
                },
                title: {
                    type: "string",
                    id: 3
                },
                title_color: {
                    type: "string",
                    id: 4
                },
                title_size: {
                    type: "int64",
                    id: 5
                },
                scheme_url: {
                    type: "string",
                    id: 6
                },
                event_name: {
                    type: "string",
                    id: 7
                }
            }
        }
    }
    ,
    609709: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                room_id: {
                    type: "int64",
                    id: 2
                },
                timestamp: {
                    type: "int64",
                    id: 3
                },
                gallery_data: {
                    type: "GalleryData",
                    id: 10
                },
                goal_data: {
                    type: "GoalData",
                    id: 11
                },
                room_based_gift_data: {
                    type: "RoomBasedGiftData",
                    id: 12
                },
                strategy_context: {
                    type: "string",
                    id: 100
                }
            }
        }
    }
    ,
    791688: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                UnknownType: 0,
                NoGiftPermission: 1,
                AnchorClose: 2,
                HasGiftPermission: 3,
                AnchorBanned: 4
            }
        }
    }
    ,
    287097: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                progress_type: {
                    type: "string",
                    id: 2
                },
                progress: {
                    rule: "repeated",
                    type: "ProgressStruct",
                    id: 3
                }
            },
            nested: {
                ProgressStruct: {
                    fields: {
                        progress_id: {
                            type: "int64",
                            id: 1
                        },
                        progress_value: {
                            type: "int64",
                            id: 2
                        },
                        progress_status: {
                            type: "int32",
                            id: 3
                        }
                    }
                }
            }
        }
    }
    ,
    175138: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                title: {
                    type: "string",
                    id: 2
                },
                body: {
                    type: "string",
                    id: 3
                },
                block_num_days: {
                    type: "int32",
                    id: 4
                },
                order_id: {
                    type: "string",
                    id: 5
                },
                order_timestamp: {
                    type: "int64",
                    id: 6
                }
            }
        }
    }
    ,
    683628: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                extra: {
                    type: "string",
                    id: 2
                }
            }
        }
    }
    ,
    846679: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                fans_gift_toast: {
                    type: "string",
                    id: 1
                }
            }
        }
    }
    ,
    664466: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                GiftSource_Unknown: 0,
                GiftSource_Platform: 1,
                GiftSource_UserBuyRandom: 2,
                GiftSource_UserBuySpecific: 3
            }
        }
    }
    ,
    449598: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                image: {
                    type: "Image",
                    id: 1
                },
                describe: {
                    type: "string",
                    id: 2
                },
                duration: {
                    type: "int64",
                    id: 4
                },
                id: {
                    type: "int64",
                    id: 5
                },
                for_linkmic: {
                    type: "bool",
                    id: 7
                },
                combo: {
                    type: "bool",
                    id: 10
                },
                type: {
                    type: "int32",
                    id: 11
                },
                diamond_count: {
                    type: "int32",
                    id: 12
                },
                is_displayed_on_panel: {
                    type: "bool",
                    id: 13
                },
                primary_effect_id: {
                    type: "int64",
                    id: 14
                },
                gift_label_icon: {
                    type: "Image",
                    id: 15
                },
                name: {
                    type: "string",
                    id: 16
                },
                icon: {
                    type: "Image",
                    id: 21
                },
                gold_effect: {
                    type: "string",
                    id: 24
                },
                preview_image: {
                    type: "data.Image",
                    id: 47
                },
                gift_panel_banner: {
                    type: "GiftPanelBanner",
                    id: 48
                },
                beacon_bubble: {
                    type: "GiftPanelBeaconBubble",
                    id: 120
                },
                is_broadcast_gift: {
                    type: "bool",
                    id: 49
                },
                is_effect_befview: {
                    type: "bool",
                    id: 50
                },
                is_random_gift: {
                    type: "bool",
                    id: 51
                },
                is_box_gift: {
                    type: "bool",
                    id: 52
                },
                can_put_in_gift_box: {
                    type: "bool",
                    id: 53
                },
                gift_box_info: {
                    type: "GiftBoxInfo",
                    id: 54
                },
                tracker_params: {
                    keyType: "string",
                    type: "string",
                    id: 100
                },
                lock_info: {
                    type: "GiftLockInfo",
                    id: 101
                },
                color_infos: {
                    rule: "repeated",
                    type: "GiftColorInfo",
                    id: 102
                },
                gift_rank_recommend_info: {
                    type: "string",
                    id: 103
                },
                random_effect_info: {
                    type: "GiftRandomEffectInfo",
                    id: 104
                },
                gift_sub_type: {
                    type: "int32",
                    id: 105
                },
                gift_vertical_scenarios: {
                    rule: "repeated",
                    type: "int32",
                    id: 106
                },
                group_in_tab: {
                    type: "int32",
                    id: 107
                },
                is_gallery_gift: {
                    type: "bool",
                    id: 108
                },
                disable_gallery_banner: {
                    type: "bool",
                    id: 117
                },
                gift_sponsor_info: {
                    type: "GiftSponsorInfo",
                    id: 109
                },
                gift_skins: {
                    rule: "repeated",
                    type: "GiftSkin",
                    id: 110
                },
                gift_label_type: {
                    type: "GiftBadgeType",
                    id: 111
                },
                gift_texts: {
                    rule: "repeated",
                    type: "GiftText",
                    id: 112
                },
                gift_skin_to_gift_texts_infos: {
                    rule: "repeated",
                    type: "GiftSkinToGiftTextsInfo",
                    id: 113
                },
                expiration_timestamp: {
                    type: "int64",
                    id: 114
                },
                batch_gift_info: {
                    type: "BatchGiftInfo",
                    id: 115
                },
                is_global_gift: {
                    type: "bool",
                    id: 116
                },
                ug_gift_info: {
                    type: "UGGiftStructInfo",
                    id: 118
                },
                cross_screen_effect_info: {
                    type: "CrossScreenEffectInfo",
                    id: 119
                }
            },
            nested: {
                RandomGiftPanelBanner: {
                    fields: {
                        bg_image: {
                            type: "data.Image",
                            id: 1
                        },
                        shading_image: {
                            type: "data.Image",
                            id: 2
                        },
                        target_num: {
                            type: "int64",
                            id: 3
                        },
                        collect_num: {
                            type: "int64",
                            id: 4
                        },
                        display_text: {
                            type: "string",
                            id: 5
                        },
                        left_icon: {
                            type: "data.Image",
                            id: 6
                        },
                        schema_url: {
                            type: "string",
                            id: 7
                        },
                        bg_color_values: {
                            rule: "repeated",
                            type: "string",
                            id: 8
                        },
                        round: {
                            type: "int64",
                            id: 9
                        },
                        banner_priority: {
                            type: "int32",
                            id: 10
                        }
                    }
                },
                RandomGiftBubble: {
                    fields: {
                        display_text: {
                            type: "string",
                            id: 1
                        },
                        icon_dynamic_effect: {
                            type: "data.Image",
                            id: 2
                        }
                    }
                },
                GiftRandomEffectInfo: {
                    fields: {
                        random_gift_panel_banner: {
                            type: "RandomGiftPanelBanner",
                            id: 1
                        },
                        effect_ids: {
                            rule: "repeated",
                            type: "int64",
                            id: 2
                        },
                        host_key: {
                            type: "string",
                            id: 3
                        },
                        audience_key: {
                            type: "string",
                            id: 4
                        },
                        random_gift_bubble: {
                            type: "RandomGiftBubble",
                            id: 5
                        }
                    }
                },
                GiftPanelBanner: {
                    fields: {
                        display_text: {
                            type: "webcast.data.Text",
                            id: 1
                        },
                        left_icon: {
                            type: "data.Image",
                            id: 2
                        },
                        schema_url: {
                            type: "string",
                            id: 3
                        },
                        deprecated: {
                            type: "string",
                            id: 4
                        },
                        bg_color_values: {
                            rule: "repeated",
                            type: "string",
                            id: 5
                        },
                        banner_lynx_url: {
                            type: "string",
                            id: 6
                        },
                        banner_priority: {
                            type: "int32",
                            id: 7
                        },
                        banner_lynx_extra: {
                            type: "string",
                            id: 8
                        },
                        bg_image: {
                            type: "data.Image",
                            id: 9
                        }
                    }
                },
                GiftSponsorInfo: {
                    fields: {
                        sponsor_id: {
                            type: "int64",
                            id: 1
                        },
                        sponsor_count: {
                            type: "int64",
                            id: 2
                        },
                        current_count: {
                            type: "int64",
                            id: 3
                        },
                        left_count_to_sponsor: {
                            type: "int64",
                            id: 4
                        },
                        can_sponsor: {
                            type: "bool",
                            id: 5
                        }
                    }
                },
                GiftSkin: {
                    fields: {
                        gift_skin_id: {
                            type: "int64",
                            id: 1
                        },
                        gift_skin_name: {
                            type: "string",
                            id: 2
                        },
                        static_image: {
                            type: "Image",
                            id: 3
                        },
                        animated_image: {
                            type: "Image",
                            id: 4
                        }
                    }
                },
                GiftText: {
                    fields: {
                        gift_text_id: {
                            type: "int64",
                            id: 1
                        },
                        gift_text_name: {
                            type: "string",
                            id: 2
                        }
                    }
                },
                GiftSkinToGiftTextsInfo: {
                    fields: {
                        gift_skin_id: {
                            type: "int64",
                            id: 1
                        },
                        gift_text_ids: {
                            rule: "repeated",
                            type: "int64",
                            id: 2
                        }
                    }
                },
                BatchGiftInfo: {
                    fields: {
                        can_batch_send: {
                            type: "bool",
                            id: 1
                        },
                        available_counts: {
                            rule: "repeated",
                            type: "int64",
                            id: 2
                        }
                    }
                },
                UGGiftStructInfo: {
                    fields: {
                        is_ug_gift: {
                            type: "bool",
                            id: 1
                        },
                        ug_points_cost: {
                            type: "int64",
                            id: 2
                        }
                    }
                },
                CrossScreenEffectInfo: {
                    fields: {
                        single_action_effect_ids: {
                            keyType: "int64",
                            type: "int32",
                            id: 1
                        },
                        action_effect_ids: {
                            keyType: "int64",
                            type: "int32",
                            id: 2
                        },
                        reaction_effect_ids: {
                            keyType: "int64",
                            type: "int32",
                            id: 3
                        }
                    }
                }
            }
        }
    }
    ,
    241642: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                name: {
                    type: "string",
                    id: 1
                },
                icon: {
                    type: "webcast.data.Image",
                    id: 2
                },
                diamond_count: {
                    type: "int64",
                    id: 3
                },
                type: {
                    type: "int32",
                    id: 4
                }
            }
        }
    }
    ,
    257758: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                status: {
                    type: "int32",
                    id: 1
                },
                toast: {
                    type: "string",
                    id: 2
                },
                end_time: {
                    type: "int64",
                    id: 3
                }
            }
        }
    }
    ,
    449559: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                tray_dynamic_img: {
                    type: "data.Image",
                    id: 1
                },
                can_mirror: {
                    type: "bool",
                    id: 2
                },
                tray_normal_bg_img: {
                    type: "data.Image",
                    id: 3
                },
                tray_normal_bg_color: {
                    rule: "repeated",
                    type: "string",
                    id: 4
                },
                tray_small_bg_img: {
                    type: "data.Image",
                    id: 5
                },
                tray_small_bg_color: {
                    rule: "repeated",
                    type: "string",
                    id: 6
                },
                right_tag_text: {
                    type: "data.Text",
                    id: 7
                },
                right_tag_bg_img: {
                    type: "data.Image",
                    id: 8
                },
                right_tag_bg_color: {
                    rule: "repeated",
                    type: "string",
                    id: 9
                },
                tray_name_text_color: {
                    type: "string",
                    id: 10
                },
                tray_desc_text_color: {
                    type: "string",
                    id: 11
                },
                right_tag_jump_schema: {
                    type: "string",
                    id: 12
                }
            }
        }
    }
    ,
    853539: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                GIFT_TYPE_CD_KEY: 0,
                GIFT_TYPE_UNIFORM_KEY: 1,
                GIFT_TYPE_GAME_PROP: 2,
                GIFT_TYPE_CUSTOM_ACCOUNT_INPUT: 3
            }
        }
    }
    ,
    507764: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                UnknownGiftType: 0,
                SmallGiftType: 1,
                BigGiftType: 2,
                LuckyMoneyGiftType: 3,
                FaceRecognitionGiftType: 4
            }
        }
    }
    ,
    818812: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                gifts: {
                    rule: "repeated",
                    type: "data.GiftStruct",
                    id: 2
                },
                bubble_text: {
                    type: "data.Text",
                    id: 3
                }
            }
        }
    }
    ,
    723891: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                update_type: {
                    type: "int32",
                    id: 2
                }
            }
        }
    }
    ,
    886067: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                UnknownGiftVerticalScenario: 0,
                LokiGift: 1,
                LynxGift: 2,
                GiftBox: 3,
                RandomTravelGift: 4,
                ColorGift: 5,
                InGiftBoxGift: 6,
                PreviewStreaming: 7,
                PremiumShopGift: 8,
                NonVotingGift: 9,
                CrossScreenGift: 28
            }
        }
    }
    ,
    611284: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                msg_type: {
                    type: "int64",
                    id: 2
                },
                vote_id: {
                    type: "int64",
                    id: 3
                },
                results: {
                    rule: "repeated",
                    type: "Result",
                    id: 4
                },
                finish_time: {
                    type: "int64",
                    id: 5
                }
            },
            nested: {
                Result: {
                    fields: {
                        text: {
                            type: "string",
                            id: 1
                        },
                        count: {
                            type: "int64",
                            id: 2
                        },
                        icon: {
                            type: "webcast.data.Image",
                            id: 3
                        },
                        gift_id: {
                            type: "int64",
                            id: 4
                        }
                    }
                }
            }
        }
    }
    ,
    730188: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                NONE: 0,
                UPDATE: 1,
                FINISH: 2
            }
        }
    }
    ,
    784768: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                name: {
                    type: "string",
                    id: 1
                },
                icon: {
                    type: "webcast.data.Image",
                    id: 2
                },
                diamond_count: {
                    type: "int64",
                    id: 3
                },
                type: {
                    type: "int32",
                    id: 4
                }
            }
        }
    }
    ,
    535872: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                gifts_info_in_box: {
                    rule: "repeated",
                    type: "GiftInfoInBox",
                    id: 1
                }
            }
        }
    }
    ,
    182554: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                winner: {
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
    881458: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                id: {
                    type: "int64",
                    id: 1
                },
                type: {
                    type: "GoalType",
                    id: 2
                },
                status: {
                    type: "GoalStatus",
                    id: 3
                },
                sub_goals: {
                    rule: "repeated",
                    type: "SubGoal",
                    id: 4
                },
                description: {
                    type: "string",
                    id: 5
                },
                audit_status: {
                    type: "int32",
                    id: 6
                },
                cycle_type: {
                    type: "CycleType",
                    id: 7
                },
                start_time: {
                    type: "int64",
                    id: 8
                },
                expire_time: {
                    type: "int64",
                    id: 9
                },
                real_finish_time: {
                    type: "int64",
                    id: 10
                },
                contributors: {
                    rule: "repeated",
                    type: "GoalContributor",
                    id: 11
                },
                contributors_length: {
                    type: "int32",
                    id: 12
                },
                id_str: {
                    type: "string",
                    id: 13
                },
                audit_description: {
                    type: "string",
                    id: 14
                },
                stats: {
                    type: "GoalStats",
                    id: 15
                },
                goal_extra_info: {
                    type: "string",
                    id: 16
                },
                mode: {
                    type: "GoalMode",
                    id: 17
                },
                audit_info: {
                    type: "AuditInfo",
                    id: 18
                },
                description_type: {
                    type: "DescriptionType",
                    id: 19
                },
                challenge_type: {
                    type: "string",
                    id: 20
                }
            },
            nested: {
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
                    },
                    nested: {
                        AuditTaskType: {
                            values: {
                                AUDIT_TASK_TYPE_DEFAULT: 0,
                                AUDIT_TASK_TYPE_APPEAL: 1
                            }
                        }
                    }
                }
            }
        }
    }
    ,
    342945: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                GoalAutoCreateUnknown: 0,
                GoalAutoCreateOn: 1,
                GoalAutoCreateOff: 2
            }
        }
    }
    ,
    583255: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                coins_incr: {
                    type: "int64",
                    id: 1
                },
                contributor_incr: {
                    type: "int64",
                    id: 2
                }
            }
        }
    }
    ,
    309529: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
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
                score: {
                    type: "int64",
                    id: 4
                },
                user_id_str: {
                    type: "string",
                    id: 5
                },
                in_room: {
                    type: "bool",
                    id: 6
                },
                is_friend: {
                    type: "bool",
                    id: 7
                },
                badge_list: {
                    rule: "repeated",
                    type: "webcast.data.BadgeStruct",
                    id: 8
                },
                follow_by_owner: {
                    type: "bool",
                    id: 9
                },
                is_fist_contribute: {
                    type: "bool",
                    id: 10
                },
                sub_goal_contributions: {
                    rule: "repeated",
                    type: "SubGoalContribution",
                    id: 11
                }
            }
        }
    }
    ,
    229810: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                status: {
                    type: "Status",
                    id: 1
                },
                goal_progress: {
                    keyType: "int64",
                    type: "Progress",
                    id: 2
                }
            },
            nested: {
                Status: {
                    values: {
                        Unknown: 0,
                        NotStart: 1,
                        Ongoing: 2,
                        Finished: 3,
                        Deleted: 4
                    }
                },
                Progress: {
                    fields: {
                        current_progress: {
                            type: "int64",
                            id: 1
                        },
                        target: {
                            type: "int64",
                            id: 2
                        },
                        expired_timestamp_in_ms: {
                            type: "int64",
                            id: 3
                        }
                    }
                }
            }
        }
    }
    ,
    593170: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                show_entrance: {
                    type: "bool",
                    id: 1
                },
                set_goal_notice: {
                    type: "string",
                    id: 2
                },
                manage_goal_url: {
                    type: "string",
                    id: 3
                },
                audit_status: {
                    type: "AuditStatus",
                    id: 4
                },
                goal_schema_scene: {
                    type: "GoalSchemaScene",
                    id: 8
                },
                target: {
                    type: "int64",
                    id: 5
                },
                progress: {
                    type: "int64",
                    id: 6
                },
                need_show_sub_only_goal: {
                    type: "bool",
                    id: 10
                },
                audit_info: {
                    type: "AuditInfo",
                    id: 11
                },
                has_ongoing_goal: {
                    type: "bool",
                    id: 12
                }
            }
        }
    }
    ,
    706566: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                GoalMessageSourceUnknown: 0,
                GoalMessageSourceCommit: 1,
                GoalMessageSourceProgressUpdate: 2,
                GoalMessageSourcePin: 3,
                GoalMessageSourceUnPin: 4,
                GoalMessageSourceReviewCallback: 5,
                GoalMessageSourceSuspend: 6,
                GoalMessageSourceChallengePrompt: 7
            }
        }
    }
    ,
    920673: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                GoalModeSingleSubGoal: 0,
                GoalModeMultiSubGoal: 1
            }
        }
    }
    ,
    843431: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                need_commit_guide: {
                    type: "bool",
                    id: 1
                },
                legal_limit: {
                    type: "bool",
                    id: 2
                }
            }
        }
    }
    ,
    391235: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                pin: {
                    type: "bool",
                    id: 1
                },
                unpin: {
                    type: "bool",
                    id: 2
                },
                pin_end_time: {
                    type: "int64",
                    id: 3
                },
                sub_goal_id: {
                    type: "int64",
                    id: 4
                },
                sub_goal_id_str: {
                    type: "string",
                    id: 5
                }
            }
        }
    }
    ,
    191565: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                GoalSchemaUnknown: 0,
                GoalSchemaShowEdit: 1,
                GoalSchemaShowDetail: 2,
                GoalSchemaShowManage: 3,
                GoalSchemaShowInit: 4
            }
        }
    }
    ,
    146175: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                total_coins: {
                    type: "int64",
                    id: 1
                },
                total_contributor: {
                    type: "int64",
                    id: 2
                },
                comparison: {
                    type: "GoalComparison",
                    id: 3
                },
                total_new_fans: {
                    type: "int64",
                    id: 4
                }
            }
        }
    }
    ,
    813592: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                GoalStatusUnknown: 0,
                GoalStatusNotStart: 1,
                GoalStatusOngoing: 2,
                GoalStatusFinished: 3,
                GoalStatusDeleted: 4,
                GoalStatusAchieved: 5,
                GoalStatusExpired: 6
            }
        }
    }
    ,
    375162: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                GoalTypeUnknown: 0,
                GoalTypeStream: 1,
                GoalTypeSubscription: 2
            }
        }
    }
    ,
    261460: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                indicator: {
                    type: "webcast.data.Indicator",
                    id: 2
                },
                goal: {
                    type: "webcast.data.Goal",
                    id: 3
                },
                contributor_id: {
                    type: "int64",
                    id: 4
                },
                contributor_avatar: {
                    type: "webcast.data.Image",
                    id: 5
                },
                contributor_display_id: {
                    type: "string",
                    id: 6
                },
                contribute_subgoal: {
                    type: "webcast.data.SubGoal",
                    id: 7
                },
                contribute_count: {
                    type: "int64",
                    id: 9
                },
                contribute_score: {
                    type: "int64",
                    id: 10
                },
                gift_repeat_count: {
                    type: "int64",
                    id: 11
                },
                contributor_id_str: {
                    type: "string",
                    id: 12
                },
                pin: {
                    type: "bool",
                    id: 13
                },
                unpin: {
                    type: "bool",
                    id: 14
                },
                pin_info: {
                    type: "webcast.data.GoalPinInfo",
                    id: 15
                },
                update_source: {
                    type: "webcast.data.GoalMessageSource",
                    id: 16
                },
                goal_extra: {
                    type: "string",
                    id: 17
                }
            }
        }
    }
    ,
    52646: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                id: {
                    type: "int64",
                    id: 1
                },
                type: {
                    type: "GoalType",
                    id: 2
                },
                status: {
                    type: "GoalStatus",
                    id: 3
                },
                sub_goals: {
                    rule: "repeated",
                    type: "SubGoalV2",
                    id: 4
                },
                description: {
                    type: "string",
                    id: 5
                },
                audit_status: {
                    type: "int32",
                    id: 6
                },
                cycle_type: {
                    type: "CycleType",
                    id: 7
                },
                start_time: {
                    type: "int64",
                    id: 8
                },
                expire_time: {
                    type: "int64",
                    id: 9
                },
                real_finish_time: {
                    type: "int64",
                    id: 10
                },
                contributors: {
                    rule: "repeated",
                    type: "GoalContributor",
                    id: 11
                },
                contributors_length: {
                    type: "int32",
                    id: 12
                },
                id_str: {
                    type: "string",
                    id: 13
                },
                audit_description: {
                    type: "string",
                    id: 14
                },
                stats: {
                    type: "GoalStats",
                    id: 15
                },
                goal_extra_info: {
                    type: "string",
                    id: 16
                },
                mode: {
                    type: "GoalMode",
                    id: 17
                },
                audit_info: {
                    type: "AuditInfo",
                    id: 18
                },
                description_type: {
                    type: "DescriptionType",
                    id: 19
                },
                challenge_type: {
                    type: "string",
                    id: 20
                }
            },
            nested: {
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
                    },
                    nested: {
                        AuditTaskType: {
                            values: {
                                AUDIT_TASK_TYPE_DEFAULT: 0,
                                AUDIT_TASK_TYPE_APPEAL: 1
                            }
                        }
                    }
                }
            }
        }
    }
    ,
    524394: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                recall_end_time: {
                    type: "int64",
                    id: 1
                }
            }
        }
    }
    ,
    383066: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                goody_bag_id: {
                    type: "string",
                    id: 1
                },
                biz: {
                    type: "GoodyBagBiz",
                    id: 2
                },
                room_id: {
                    type: "string",
                    id: 3
                },
                common_detail: {
                    type: "GoodyBagCommonDetail",
                    id: 4
                },
                coin_detail: {
                    type: "GoodyBagCoinDetail",
                    id: 5
                }
            }
        }
    }
    ,
    343386: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                GoodyBagBizUnknown: 0,
                GoodyBagBizNormalCoin: 1,
                GoodyBagBizFansClub: 2,
                GoodyBagBizPlatformNormal: 100,
                GoodyBagBizPlatformFansClub: 101
            }
        }
    }
    ,
    689879: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                total_coin: {
                    type: "int32",
                    id: 1
                }
            }
        }
    }
    ,
    578059: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                winner_headcount: {
                    type: "int32",
                    id: 1
                },
                joined_headcount: {
                    type: "int32",
                    id: 2
                },
                participate_method: {
                    type: "ParticipateMethod",
                    id: 3
                },
                participate_method_content: {
                    type: "string",
                    id: 4
                },
                open_at: {
                    type: "int32",
                    id: 5
                },
                count_down_minutes: {
                    type: "int32",
                    id: 6
                },
                participate_threshold_selected: {
                    type: "ParticipateThresholdSelected",
                    id: 7
                }
            }
        }
    }
    ,
    819947: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                winner_headcount: {
                    type: "int32",
                    id: 1
                },
                participate_method: {
                    type: "ParticipateMethod",
                    id: 2
                },
                participate_method_content: {
                    type: "string",
                    id: 3
                },
                countdown_minute: {
                    type: "int32",
                    id: 4
                },
                participate_threshold_selected: {
                    type: "ParticipateThresholdSelected",
                    id: 5
                }
            }
        }
    }
    ,
    57784: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                base_info: {
                    type: "data.GoodyBagBaseInfo",
                    id: 2
                },
                winners: {
                    rule: "repeated",
                    type: "data.GoodyBagWinnerInfo",
                    id: 3
                },
                type: {
                    type: "GoodyBagMessageType",
                    id: 4
                }
            }
        }
    }
    ,
    456704: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                GoodyBagMessageTypeUnknown: 0,
                GoodyBagMessageTypeSend: 1,
                GoodyBagMessageTypeJoin: 2,
                GoodyBagMessageTypeWinnersInfo: 3
            }
        }
    }
    ,
    530281: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                GoodyBagStatusUnknown: 0,
                GoodyBagStatusSent: 1,
                GoodyBagStatusOpened: 2
            }
        }
    }
    ,
    257480: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                user_id: {
                    type: "string",
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
                avatar: {
                    type: "Image",
                    id: 4
                }
            }
        }
    }
    ,
    899692: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                user_info: {
                    type: "GoodyBagUserInfo",
                    id: 1
                },
                coins: {
                    type: "int32",
                    id: 2
                }
            }
        }
    }
    ,
    49073: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                is_in_grace_period: {
                    type: "bool",
                    id: 1
                },
                grace_end_time: {
                    type: "int64",
                    id: 2
                },
                is_package_deleted: {
                    type: "bool",
                    id: 3
                }
            }
        }
    }
    ,
    598748: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                GRANT_GROUP_UNKNOWN: 0,
                GRANT_GROUP_ALL_USER: 1,
                GRANT_GROUP_USER_LEVEL: 2,
                GRANT_GROUP_FANS_LEVEL: 3
            }
        }
    }
    ,
    964971: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                user_identity: {
                    type: "webcast.data.UserIdentity",
                    id: 2
                },
                enter_msg_id: {
                    type: "int64",
                    id: 3
                },
                greeting_text: {
                    type: "webcast.data.Text",
                    id: 4
                },
                guide_text: {
                    type: "webcast.data.Text",
                    id: 5
                },
                wave_algorithm_data: {
                    type: "WaveAlgorithmData",
                    id: 6
                }
            }
        }
    }
    ,
    440778: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                id: {
                    type: "int64",
                    id: 1
                },
                name: {
                    type: "string",
                    id: 2
                },
                uri: {
                    type: "string",
                    id: 3
                },
                icon: {
                    type: "data.Image",
                    id: 4
                }
            }
        }
    }
    ,
    27585: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                group_user: {
                    type: "tikcast.linkmic.common.GroupChannelAllUser",
                    id: 1
                },
                linked_user_ui_positions: {
                    rule: "repeated",
                    type: "string",
                    id: 2
                }
            }
        }
    }
    ,
    158231: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                group_channel_id: {
                    type: "int64",
                    id: 1
                },
                user: {
                    rule: "repeated",
                    type: "GroupChannelUser",
                    id: 2
                },
                content_version: {
                    type: "int64",
                    id: 3
                }
            }
        }
    }
    ,
    241272: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                channel_id: {
                    type: "int64",
                    id: 1
                },
                status: {
                    type: "GroupStatus",
                    id: 2
                },
                type: {
                    type: "JoinType",
                    id: 3
                },
                all_user: {
                    type: "AllListUser",
                    id: 4
                },
                join_time: {
                    type: "int64",
                    id: 5
                },
                linked_time: {
                    type: "int64",
                    id: 6
                },
                owner_user: {
                    type: "GroupPlayer",
                    id: 7
                },
                group_linkmic_id: {
                    type: "string",
                    id: 8
                }
            }
        }
    }
    ,
    390975: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                user_info: {
                    type: "User",
                    id: 1
                },
                linked_seconds: {
                    type: "int64",
                    id: 2
                }
            }
        }
    }
    ,
    55702: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                GROUP_CHAT_LIVE_ENTRANCE_STATUS_UNKNOWN: 0,
                GROUP_CHAT_LIVE_ENTRANCE_STATUS_HIDE: 1,
                GROUP_CHAT_LIVE_ENTRANCE_STATUS_GO_LIVE: 2,
                GROUP_CHAT_LIVE_ENTRANCE_STATUS_WATCH_LIVE: 3
            }
        }
    }
    ,
    40474: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                conv_short_id: {
                    type: "int64",
                    id: 1
                },
                conv_id: {
                    type: "string",
                    id: 2
                },
                group_name: {
                    type: "string",
                    id: 3
                },
                avatar_thumb: {
                    type: "string",
                    id: 4
                },
                group_member_count: {
                    type: "int32",
                    id: 5
                },
                group_desc: {
                    type: "string",
                    id: 6
                },
                additional_data: {
                    type: "AdditionalData",
                    id: 7
                }
            }
        }
    }
    ,
    295108: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                group_show: {
                    type: "webcast.data.CompetitionInfo",
                    id: 1
                }
            }
        }
    }
    ,
    303058: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                user_id: {
                    type: "int64",
                    id: 1
                },
                nickname: {
                    type: "string",
                    id: 3
                },
                avatar: {
                    type: "webcast.data.Image",
                    id: 4
                }
            }
        }
    }
    ,
    794492: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                host_user_id: {
                    type: "int64",
                    id: 2
                },
                member_info: {
                    rule: "repeated",
                    type: "MemberInfo",
                    id: 3
                }
            }
        }
    }
    ,
    684694: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                is_group_live_session: {
                    type: "bool",
                    id: 1
                },
                last_visit_time: {
                    type: "int64",
                    id: 2
                },
                group_live_members: {
                    rule: "repeated",
                    type: "GroupLiveMember",
                    id: 3
                }
            }
        }
    }
    ,
    361267: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                channel_id: {
                    type: "int64",
                    id: 1
                },
                user: {
                    type: "Player",
                    id: 2
                }
            }
        }
    }
    ,
    417237: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                GROUP_SHOW_STATUS_UNKNOWN: 0,
                GROUP_SHOW_STATUS_STARTED: 1,
                GROUP_SHOW_STATUS_FINISHED: 10
            }
        }
    }
    ,
    531632: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                UnknownStatus: 0,
                CanJoin: 1,
                InGroup: 2,
                NotQualified: 3,
                InvitationSent: 4,
                Full: 5
            }
        }
    }
    ,
    640470: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                member_num: {
                    type: "int64",
                    id: 1
                },
                points_num: {
                    type: "int64",
                    id: 2
                },
                bonus_odds: {
                    type: "float",
                    id: 3
                }
            }
        }
    }
    ,
    925572: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                text: {
                    type: "GuessText",
                    id: 1
                },
                guess_option_stats: {
                    type: "GuessOptionStats",
                    id: 2
                },
                serial_num: {
                    type: "int64",
                    id: 3
                },
                option_id_str: {
                    type: "string",
                    id: 4
                }
            }
        }
    }
    ,
    878123: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                pin_card_status: {
                    type: "GuessPinCardStatus",
                    id: 1
                },
                pin_interval: {
                    type: "int64",
                    id: 2
                },
                unpin_span: {
                    type: "int64",
                    id: 3
                },
                pin_times: {
                    type: "int64",
                    id: 4
                },
                allow_pin_per_guess: {
                    type: "int64",
                    id: 5
                },
                unpin_left_time: {
                    type: "int64",
                    id: 6
                },
                last_pin_timestamp: {
                    type: "int64",
                    id: 7
                },
                freeze_pin_left_time: {
                    type: "int64",
                    id: 8
                }
            }
        }
    }
    ,
    99885: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                GUESS_PIN_CARD_STATUS_PIN: 0,
                GUESS_PIN_CARD_STATUS_UNPIN: 1,
                GUESS_PIN_CARD_STATUS_FROZEN: 2
            }
        }
    }
    ,
    817141: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                GUESS_PIN_TYPE_PIN: 0,
                GUESS_PIN_TYPE_UNPIN: 1,
                GUESS_PIN_TYPE_FROZEN: 2
            }
        }
    }
    ,
    337942: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                guess_template: {
                    type: "data.GuessTemplate",
                    id: 2
                }
            }
        }
    }
    ,
    39273: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                avatar_uri: {
                    type: "string",
                    id: 1
                }
            }
        }
    }
    ,
    377426: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                title: {
                    type: "GuessText",
                    id: 1
                },
                round_id_str: {
                    type: "string",
                    id: 2
                },
                guess_options: {
                    rule: "repeated",
                    type: "GuessOptions",
                    id: 3
                },
                win_option: {
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
                guess_status: {
                    type: "GuessStatus",
                    id: 7
                },
                room_id_str: {
                    type: "string",
                    id: 8
                },
                live_id: {
                    type: "int64",
                    id: 9
                },
                guess_round_stats: {
                    type: "GuessRoundStats",
                    id: 10
                },
                corrected_option: {
                    type: "string",
                    id: 11
                },
                anchor_id: {
                    type: "string",
                    id: 12
                },
                creator_id: {
                    type: "string",
                    id: 13
                },
                operator_id: {
                    type: "string",
                    id: 14
                },
                operator_name: {
                    type: "string",
                    id: 15
                },
                settle_finish_time: {
                    type: "int64",
                    id: 16
                },
                is_auto_pin: {
                    type: "bool",
                    id: 17
                },
                server_time: {
                    type: "int64",
                    id: 100
                }
            }
        }
    }
    ,
    531487: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                member_nums: {
                    type: "int64",
                    id: 1
                },
                points_num: {
                    type: "int64",
                    id: 2
                },
                points_split_num: {
                    type: "int64",
                    id: 3
                },
                points_voted_to_anchor: {
                    type: "int64",
                    id: 4
                }
            }
        }
    }
    ,
    263155: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                guess_round: {
                    type: "GuessRound",
                    id: 1
                },
                bet_stats: {
                    type: "BetStats",
                    id: 2
                },
                anchor_info: {
                    type: "AnchorInfo",
                    id: 3
                },
                bet_stats_list: {
                    rule: "repeated",
                    type: "BetStats",
                    id: 4
                }
            }
        }
    }
    ,
    195110: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                GUESS_STATUS_BETTING: 0,
                GUESS_STATUS_STOPBETTING: 1,
                GUESS_STATUS_SETTLING: 2,
                GUESS_STATUS_SETTLED: 3,
                GUESS_STATUS_INVALID: 20
            }
        }
    }
    ,
    884068: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                tasks_info: {
                    rule: "repeated",
                    type: "webcast.data.GameTaskInfo",
                    id: 1
                },
                config: {
                    type: "TaskWidgetConfig",
                    id: 2
                }
            }
        }
    }
    ,
    359154: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                task_id: {
                    type: "string",
                    id: 1
                },
                subtitle_starling_key: {
                    type: "string",
                    id: 2
                },
                emote_url: {
                    type: "string",
                    id: 3
                },
                target_score_str: {
                    type: "string",
                    id: 4
                },
                task_status: {
                    type: "GameGuessTaskStatus",
                    id: 5
                }
            }
        }
    }
    ,
    363535: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                GUESS_TASK_ACTION_TYPE_UNKNOWN: 0,
                GUESS_TASK_ACTION_TYPE_SHARE_ROOM: 1
            }
        }
    }
    ,
    364245: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                GUESS_TASK_TYPE_UNKNOWN: 0,
                GUESS_TASK_TYPE_WATCH_DURATION_TASK: 1,
                GUESS_TASK_TYPE_SHARE_ROOM: 2
            }
        }
    }
    ,
    604354: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                template_id_str: {
                    type: "int64",
                    id: 1
                },
                title: {
                    type: "GuessText",
                    id: 2
                },
                guess_options: {
                    rule: "repeated",
                    type: "GuessOptions",
                    id: 3
                },
                game_type_name: {
                    type: "string",
                    id: 4
                },
                audit_status: {
                    type: "int64",
                    id: 5
                },
                audit_detail: {
                    type: "int64",
                    id: 6
                }
            }
        }
    }
    ,
    235403: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                key: {
                    type: "string",
                    id: 1
                },
                desc: {
                    type: "string",
                    id: 2
                },
                type: {
                    type: "int64",
                    id: 3
                }
            }
        }
    }
    ,
    616584: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                version_id: {
                    type: "int64",
                    id: 1
                },
                guess_round: {
                    type: "GuessRound",
                    id: 2
                },
                bet_stats: {
                    rule: "repeated",
                    type: "BetStats",
                    id: 3
                }
            }
        }
    }
    ,
    451991: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                guess_widgets: {
                    rule: "repeated",
                    type: "GuessWidget",
                    id: 1
                },
                user_rank: {
                    rule: "repeated",
                    type: "GuessRankUserInfo",
                    id: 2
                }
            }
        }
    }
    ,
    887679: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                guess_widgets: {
                    type: "webcast.data.GuessWidgets",
                    id: 1
                }
            }
        }
    }
    ,
    650268: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                expire_time_for_anchor: {
                    keyType: "int64",
                    type: "int64",
                    id: 1
                },
                rewarded_time: {
                    type: "int64",
                    id: 2
                }
            }
        }
    }
    ,
    372879: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                invitee_avatar: {
                    rule: "repeated",
                    type: "webcast.data.Image",
                    id: 2
                }
            }
        }
    }
    ,
    8789: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                room_id: {
                    type: "int64",
                    id: 2
                },
                inviter_user_id: {
                    type: "int64",
                    id: 3
                },
                inviter_nickname: {
                    type: "string",
                    id: 4
                },
                inviter_avatar: {
                    type: "webcast.data.Image",
                    id: 5
                }
            }
        }
    }
    ,
    694845: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                CHANGE_SCENE_UNKNOWN: 0,
                LIVE_SHOW_BY_ANCHOR_AUTO: 1,
                LIVE_SHOW_BY_SERVER_NORMAL: 2,
                LIVE_SHOW_BY_SHOW_END: 3
            }
        }
    }
    ,
    392933: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                OPEN_MIC: 0,
                OPEN_CAMERA: 1,
                CLOSE_MIC: 2,
                CLOSE_CAMERA: 3,
                CLOSE_MIC_PUNISH: 4
            }
        }
    }
    ,
    712864: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                GUEST_SHOWDOWN_CLOSED_REASON_UNKNOWN: 0,
                GUEST_SHOWDOWN_CLOSED_REASON_HOST_CLOSE: 1,
                GUEST_SHOWDOWN_CLOSED_REASON_HOST_START_AGAIN: 2,
                GUEST_SHOWDOWN_CLOSED_REASON_MODERATOR_CLOSE: 3,
                GUEST_SHOWDOWN_CLOSED_REASON_LAST_PLAYER_LEAVE: 4,
                GUEST_SHOWDOWN_CLOSED_REASON_MULTI_GUEST_CLOSED: 5,
                GUEST_SHOWDOWN_CLOSED_REASON_KICK_OUT_ALL_GUESTS: 6,
                GUEST_SHOWDOWN_CLOSED_REASON_MULTI_GUEST_RESUMED: 7,
                GUEST_SHOWDOWN_CLOSED_REASON_PLAY_EXCLUSIVE: 8
            }
        }
    }
    ,
    460250: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                duration: {
                    type: "int64",
                    id: 1
                },
                loser_num: {
                    type: "int32",
                    id: 2
                }
            }
        }
    }
    ,
    654354: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                update_loser_num: {
                    type: "bool",
                    id: 1
                },
                loser_num: {
                    type: "int32",
                    id: 2
                },
                update_add_duration: {
                    type: "bool",
                    id: 3
                },
                add_duration: {
                    type: "int64",
                    id: 4
                }
            }
        }
    }
    ,
    320099: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                room_id: {
                    type: "int64",
                    id: 1
                },
                channel_id: {
                    type: "int64",
                    id: 2
                },
                play_id: {
                    type: "int64",
                    id: 3
                },
                play_status: {
                    type: "GuestShowdownStatus",
                    id: 4
                },
                version: {
                    type: "int64",
                    id: 5
                },
                party_start_time: {
                    type: "int64",
                    id: 6
                },
                punishment_start_time: {
                    type: "int64",
                    id: 7
                },
                play_config: {
                    type: "GuestShowdownConfig",
                    id: 8
                },
                running_play_users: {
                    rule: "repeated",
                    type: "GuestShowdownUser",
                    id: 9
                },
                leave_play_users: {
                    rule: "repeated",
                    type: "GuestShowdownUser",
                    id: 10
                },
                stream_id: {
                    type: "string",
                    id: 11
                }
            }
        }
    }
    ,
    542677: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                message_type: {
                    type: "GuestShowdownMessageType",
                    id: 2
                },
                play_content: {
                    type: "webcast.data.multi_guest_play.GuestShowdownContent",
                    id: 3
                },
                operator_user_info: {
                    type: "tikcast.linkmic.common.LinkerMediaChangeOperator",
                    id: 4
                },
                play_closed_reason: {
                    type: "GuestShowdownClosedReason",
                    id: 5
                },
                to_calculating_reason: {
                    type: "GuestShowdownToCalculatingReason",
                    id: 6
                },
                guest_showdown_config_change: {
                    type: "webcast.data.multi_guest_play.GuestShowdownConfigChange",
                    id: 7
                }
            }
        }
    }
    ,
    198261: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                GUEST_SHOWDOWN_MESSAGE_TYPE_UNKNOWN: 0,
                GUEST_SHOWDOWN_MESSAGE_TYPE_READY: 1,
                GUEST_SHOWDOWN_MESSAGE_TYPE_START: 2,
                GUEST_SHOWDOWN_MESSAGE_TYPE_CALCULATING: 3,
                GUEST_SHOWDOWN_MESSAGE_TYPE_PUNISHMENT: 4,
                GUEST_SHOWDOWN_MESSAGE_TYPE_CONTENT_SYNC: 5,
                GUEST_SHOWDOWN_MESSAGE_TYPE_UPDATE_CONFIG: 6,
                GUEST_SHOWDOWN_MESSAGE_TYPE_CLOSED: 7
            }
        }
    }
    ,
    816366: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                GUEST_SHOWDOWN_STATUS_UNKNOWN: 0,
                GUEST_SHOWDOWN_STATUS_READY: 1,
                GUEST_SHOWDOWN_STATUS_ONGOING: 2,
                GUEST_SHOWDOWN_STATUS_CALCULATING: 3,
                GUEST_SHOWDOWN_STATUS_PUNISHMENT_PERIOD: 4,
                GUEST_SHOWDOWN_STATUS_CLOSED: 5
            }
        }
    }
    ,
    717406: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                GUEST_SHOWDOWN_TO_CALCULATING_REASON_UNKNOWN: 0,
                GUEST_SHOWDOWN_TO_CALCULATING_REASON_TIMER_OVER_NORMALLY: 1,
                GUEST_SHOWDOWN_TO_CALCULATING_REASON_HOST_FINISH: 2
            }
        }
    }
    ,
    412479: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                user_id: {
                    type: "int64",
                    id: 1
                },
                linkmic_id: {
                    type: "string",
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
                nickname: {
                    type: "string",
                    id: 5
                },
                display_id: {
                    type: "string",
                    id: 6
                },
                avatar_thumb: {
                    type: "webcast.data.Image",
                    id: 7
                },
                user_tag: {
                    type: "PlayUserTag",
                    id: 8
                },
                icon_name: {
                    type: "string",
                    id: 9
                }
            }
        }
    }
    ,
    763654: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                guide_type: {
                    type: "int64",
                    id: 2
                },
                gift_id: {
                    type: "int64",
                    id: 3
                },
                description: {
                    type: "string",
                    id: 4
                },
                duration: {
                    type: "int64",
                    id: 5
                },
                display_style: {
                    type: "int64",
                    id: 6
                },
                scene: {
                    type: "string",
                    id: 7
                }
            }
        }
    }
    ,
    311726: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                GUIDE_MESSAGE_UNDEFINED: 0,
                GIFT_GUIDE: 1,
                FOLLOW_GUIDE: 2,
                VCOIN_GUIDE: 3,
                VIDEO_CHAT_GUIDE: 4
            }
        }
    }
    ,
    96102: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                texts: {
                    rule: "repeated",
                    type: "webcast.data.Text",
                    id: 1
                },
                icons: {
                    rule: "repeated",
                    type: "webcast.data.Image",
                    id: 2
                },
                animations: {
                    rule: "repeated",
                    type: "webcast.data.Image",
                    id: 3
                },
                badges: {
                    rule: "repeated",
                    type: "webcast.data.BadgeStruct",
                    id: 4
                }
            }
        }
    }
    ,
    49020: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                target_id: {
                    type: "int64",
                    id: 1
                },
                target_type: {
                    type: "string",
                    id: 2
                },
                period_id: {
                    type: "int64",
                    id: 3
                }
            }
        }
    }
    ,
    183981: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                biz_name: {
                    type: "string",
                    id: 2
                },
                operation_types: {
                    rule: "repeated",
                    type: "OperationType",
                    id: 3
                },
                remind_area_text: {
                    type: "webcast.data.Text",
                    id: 5
                },
                remind_type: {
                    type: "string",
                    id: 6
                },
                display_second: {
                    type: "int64",
                    id: 7
                },
                task_type: {
                    type: "int64",
                    id: 8
                }
            }
        }
    }
    ,
    252810: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                hashtag: {
                    type: "webcast.data.Hashtag",
                    id: 2
                }
            }
        }
    }
    ,
    796148: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                text: {
                    type: "string",
                    id: 1
                },
                center_x: {
                    type: "double",
                    id: 2
                },
                center_y: {
                    type: "double",
                    id: 3
                }
            }
        }
    }
    ,
    953985: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                channel_id: {
                    type: "int64",
                    id: 1
                },
                from_user_id: {
                    type: "int64",
                    id: 2
                },
                updated_heat: {
                    type: "int64",
                    id: 3
                },
                update_source: {
                    type: "UpdateSource",
                    id: 4
                }
            },
            nested: {
                UpdateSource: {
                    values: {
                        UPDATE_SOURCE_GIFT: 0,
                        UPDATE_SOURCE_DIGG: 1
                    }
                }
            }
        }
    }
    ,
    957918: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                normal_control_applied: {
                    type: "bool",
                    id: 1
                },
                threshold: {
                    type: "int64",
                    id: 2
                },
                origin_display_to_user_list: {
                    rule: "repeated",
                    type: "int64",
                    id: 3
                }
            }
        }
    }
    ,
    296561: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                event_name: {
                    type: "string",
                    id: 1
                },
                id: {
                    type: "int64",
                    id: 2
                },
                sub_activities: {
                    rule: "repeated",
                    type: "SubHighlightEvent",
                    id: 3
                },
                region_type: {
                    type: "EventRegionType",
                    id: 4
                }
            }
        }
    }
    ,
    79359: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                activities: {
                    rule: "repeated",
                    type: "HighlightEvent",
                    id: 1
                },
                test_config: {
                    type: "TestConfig",
                    id: 2
                }
            },
            nested: {
                TestConfig: {
                    fields: {
                        uid_whitelist: {
                            rule: "repeated",
                            type: "int64",
                            id: 1
                        },
                        gift_ids: {
                            rule: "repeated",
                            type: "int64",
                            id: 2
                        },
                        start_end_time: {
                            rule: "repeated",
                            type: "TimeRange",
                            id: 3
                        }
                    }
                }
            }
        }
    }
    ,
    117837: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                fragment_list: {
                    rule: "repeated",
                    type: "LiveFragmentDetail",
                    id: 1
                }
            }
        }
    }
    ,
    451447: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                live_fragment: {
                    type: "webcast.data.GameLiveFragment",
                    id: 2
                }
            }
        }
    }
    ,
    844317: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                info: {
                    type: "string",
                    id: 1
                },
                type: {
                    type: "HighlightInfoType",
                    id: 2
                }
            }
        }
    }
    ,
    632301: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                HIGHLIGHT_INFO_TYPE_TEXT: 0,
                HIGHLIGHT_INFO_TYPE_STARLING_KEY: 1
            }
        }
    }
    ,
    911573: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                HOST_CENTER_APPEAL_TYPE_REGULAR: 0,
                HOST_CENTER_APPEAL_TYPE_WITH_OPTIONS: 1
            }
        }
    }
    ,
    334641: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                business: {
                    type: "string",
                    id: 1
                },
                room_id: {
                    type: "int64",
                    id: 2
                },
                is_hot: {
                    type: "bool",
                    id: 3
                },
                action: {
                    type: "HotRoomStateAction",
                    id: 4
                },
                reason: {
                    type: "HotRoomStateReason",
                    id: 5
                },
                timestamp: {
                    type: "uint64",
                    id: 6
                },
                hot_room_state: {
                    rule: "repeated",
                    type: "HotRoomState",
                    id: 7
                }
            },
            nested: {
                HotRoomState: {
                    fields: {
                        reason: {
                            type: "HotRoomStateReason",
                            id: 1
                        },
                        enter_ts: {
                            type: "uint64",
                            id: 2
                        }
                    }
                },
                HotRoomStateAction: {
                    values: {
                        HOT_ROOM_STATE_ACTION_UNUSED2: 0,
                        HOT_ROOM_STATE_ACTION_START: 1,
                        HOT_ROOM_STATE_ACTION_END: 2
                    }
                }
            }
        }
    }
    ,
    303614: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                data: {
                    type: "HotRoomData",
                    id: 2
                }
            }
        }
    }
    ,
    267652: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                HOT_ROOM_STATE_REASON_UNUSED1: 0,
                HOT_ROOM_STATE_REASON_ACU: 1,
                HOT_ROOM_STATE_REASON_WATCH_PV: 2,
                HOT_ROOM_STATE_REASON_ENTER_QPS: 3,
                HOT_ROOM_STATE_REASON_COMMENT_QPS: 4,
                HOT_ROOM_STATE_REASON_GIFT_MESSAGE_QPS: 5,
                HOT_ROOM_STATE_REASON_PCU: 6,
                HOT_ROOM_STATE_REASON_LIKE_QPS: 7
            }
        }
    }
    ,
    669100: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                show_entrance: {
                    type: "bool",
                    id: 1
                },
                slides: {
                    rule: "repeated",
                    type: "HourlyRankSlidePage",
                    id: 2
                },
                countdown: {
                    type: "int64",
                    id: 3
                },
                default_content: {
                    type: "webcast.data.Text",
                    id: 4
                },
                sprint_prompt: {
                    type: "HourlyRankSprintPrompt",
                    id: 5
                },
                rank_type: {
                    type: "ProfitRankType",
                    id: 6
                },
                anchor_on_list: {
                    type: "bool",
                    id: 7
                },
                roll_duration: {
                    type: "int64",
                    id: 8
                },
                block_message: {
                    type: "bool",
                    id: 9
                },
                show_entrance_animation: {
                    type: "bool",
                    id: 10
                }
            }
        }
    }
    ,
    487951: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                entrance: {
                    type: "webcast.data.HourlyRankEntrance",
                    id: 2
                },
                rank_type: {
                    type: "webcast.data.ProfitRankType",
                    id: 3
                }
            }
        }
    }
    ,
    428574: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                winners: {
                    rule: "repeated",
                    type: "RewardInfo",
                    id: 2
                }
            },
            nested: {
                RewardInfo: {
                    fields: {
                        user_id: {
                            type: "int64",
                            id: 1
                        },
                        asset_id: {
                            type: "int64",
                            id: 2
                        },
                        notify: {
                            type: "webcast.im.NotifyMessage",
                            id: 3
                        },
                        avatar_border: {
                            type: "webcast.data.User.Border",
                            id: 4
                        }
                    }
                }
            }
        }
    }
    ,
    536962: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                duration: {
                    type: "int64",
                    id: 1
                },
                content: {
                    type: "webcast.data.Text",
                    id: 2
                },
                background_color: {
                    type: "string",
                    id: 3
                },
                scheme_link: {
                    type: "string",
                    id: 4
                }
            }
        }
    }
    ,
    203620: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
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
                owner_rank: {
                    type: "int64",
                    id: 6
                }
            }
        }
    }
    ,
    284942: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                recv_delay: {
                    type: "PackLatency",
                    id: 1
                },
                recv_qps: {
                    type: "double",
                    id: 2
                }
            }
        }
    }
    ,
    696381: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                region: {
                    type: "string",
                    id: 2
                },
                timestamp: {
                    type: "int64",
                    id: 3
                },
                sync_route_mapping: {
                    keyType: "string",
                    type: "SyncRoute",
                    id: 4
                },
                route_metrics_data: {
                    type: "RouteMetricsData",
                    id: 5
                }
            }
        }
    }
    ,
    60781: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                delete_msg_ids: {
                    rule: "repeated",
                    type: "int64",
                    id: 2
                },
                delete_user_ids: {
                    rule: "repeated",
                    type: "int64",
                    id: 3
                }
            }
        }
    }
    ,
    784262: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                key: {
                    type: "string",
                    id: 1
                },
                width: {
                    type: "int32",
                    id: 2
                },
                height: {
                    type: "int32",
                    id: 3
                },
                url: {
                    type: "string",
                    id: 4
                }
            }
        }
    }
    ,
    196499: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                position: {
                    type: "PositionType",
                    id: 2
                },
                data: {
                    type: "webcast.data.BannerData",
                    id: 3
                }
            }
        }
    }
    ,
    466384: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                extra: {
                    type: "string",
                    id: 2
                },
                position: {
                    type: "PositionType",
                    id: 3
                },
                action_type: {
                    type: "ActionType",
                    id: 4
                }
            },
            nested: {
                PositionType: {
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
        }
    }
    ,
    123304: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                count: {
                    type: "int64",
                    id: 2
                },
                banner_id: {
                    type: "int64",
                    id: 3
                },
                show_type: {
                    type: "int64",
                    id: 4
                }
            }
        }
    }
    ,
    546129: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                max_delay_seconds: {
                    type: "int64",
                    id: 2
                },
                only_anchor: {
                    type: "bool",
                    id: 3
                }
            }
        }
    }
    ,
    852056: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                key: {
                    type: "string",
                    id: 1
                },
                op: {
                    type: "IndicatorOp",
                    id: 2
                }
            }
        }
    }
    ,
    375947: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                IndicatorOpUnknown: 0,
                IndicatorOpAdd: 1,
                IndicatorOpRemove: 2,
                IndicatorOpUpdate: 3,
                IndicatorOpPin: 4,
                IndicatorOpUnPin: 5
            }
        }
    }
    ,
    748652: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                DISABLED_TOOL_PERMISSION: 0,
                ENABLED_TOOL_PERMISSION: 1
            }
        }
    }
    ,
    250848: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                GREEN: 0,
                GREY: 1,
                RED: 2
            }
        }
    }
    ,
    585193: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                industry_id: {
                    type: "int64",
                    id: 1
                },
                dm_permission: {
                    type: "IndustryPermission",
                    id: 2
                },
                leads_form_permission: {
                    type: "IndustryPermission",
                    id: 3
                },
                risk_level: {
                    type: "IndustryRiskLevel",
                    id: 4
                },
                can_reselect: {
                    type: "bool",
                    id: 5
                }
            }
        }
    }
    ,
    206488: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                sticker_id: {
                    type: "string",
                    id: 1
                },
                center_x: {
                    type: "double",
                    id: 2
                },
                center_y: {
                    type: "double",
                    id: 3
                }
            }
        }
    }
    ,
    822128: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                command_type: {
                    type: "int32",
                    id: 2
                },
                open_schema_command: {
                    type: "OpenSchemaCommand",
                    id: 11
                }
            }
        }
    }
    ,
    407672: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                Unknown: 0,
                Follow: 1,
                Video: 2
            }
        }
    }
    ,
    537430: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                interaction_goal: {
                    type: "webcast.data.Text",
                    id: 2
                },
                interaction_tips: {
                    type: "webcast.data.Text",
                    id: 3
                },
                interaction_goal_type: {
                    type: "webcast.data.InteractionHubGoalType",
                    id: 4
                },
                interaction_goal_source: {
                    type: "webcast.data.InteractionHubGoalSource",
                    id: 5
                },
                new_gift_info: {
                    type: "webcast.data.GiftStruct",
                    id: 6
                },
                has_new_gift: {
                    type: "bool",
                    id: 7
                }
            }
        }
    }
    ,
    361753: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                has_recommend: {
                    type: "bool",
                    id: 1
                },
                has_quick_answer: {
                    type: "bool",
                    id: 2
                },
                question_and_answer_entry: {
                    type: "QuestionAnswerEntryType",
                    id: 3
                },
                has_lightning_strengthen: {
                    type: "bool",
                    id: 4
                }
            },
            nested: {
                QuestionAnswerEntryType: {
                    values: {
                        HasQuestionAnswerEntry: 0,
                        SplitQuestionAnswerEntry: 1,
                        MergeQuestionAnswerEntry: 2,
                        OnlyQuickAnswerEntry: 3,
                        NoQuestionAnswerEntry: 4
                    }
                }
            }
        }
    }
    ,
    343453: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                trigger_data: {
                    type: "string",
                    id: 2
                }
            }
        }
    }
    ,
    278066: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                id: {
                    type: "int64",
                    id: 1
                },
                game_kind: {
                    type: "GameKind",
                    id: 2
                },
                game_id: {
                    type: "int64",
                    id: 3
                },
                play_kind: {
                    type: "int64",
                    id: 4
                },
                status: {
                    type: "int64",
                    id: 5
                },
                message: {
                    type: "string",
                    id: 6
                },
                extra_base: {
                    type: "SwitchExtraBase",
                    id: 7
                },
                extra_for_open: {
                    type: "SwitchExtraForOpen",
                    id: 8
                },
                id_str: {
                    type: "string",
                    id: 9
                }
            }
        }
    }
    ,
    147494: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                anchor_setting_info: {
                    type: "webcast.data.LinkmicUserSettingInfo",
                    id: 1
                },
                invite_source: {
                    type: "ContentInviteSource",
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
                invitee_user_info: {
                    type: "webcast.data.User",
                    id: 5
                },
                share_revenue_setting: {
                    type: "webcast.data.LinkmicShareRevenueSetting",
                    id: 6
                }
            }
        }
    }
    ,
    514239: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                invitor: {
                    type: "tikcast.linkmic.common.Player",
                    id: 1
                },
                invitee_rtc_ext_info: {
                    type: "tikcast.linkmic.common.RTCExtraInfo",
                    id: 2
                },
                invitor_link_mic_id: {
                    type: "string",
                    id: 3
                },
                invitee_link_mic_id: {
                    type: "string",
                    id: 4
                },
                is_owner: {
                    type: "bool",
                    id: 5
                },
                pos: {
                    type: "tikcast.linkmic.common.Position",
                    id: 6
                },
                dsl: {
                    type: "tikcast.linkmic.common.DSLConfig",
                    id: 7
                },
                invitee: {
                    type: "tikcast.linkmic.common.Player",
                    id: 8
                },
                operator: {
                    type: "tikcast.linkmic.common.Player",
                    id: 9
                }
            }
        }
    }
    ,
    873035: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
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
    543208: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                INVITER_ROLE_UNKNOWN: 0,
                INVITER_ROLE_ANCHOR: 1,
                INVITER_ROLE_ADMIN: 2,
                INVITER_ROLE_GUEST: 3
            }
        }
    }
    ,
    320130: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                category: {
                    type: "string",
                    id: 1
                },
                issues: {
                    rule: "repeated",
                    type: "string",
                    id: 2
                }
            }
        }
    }
    ,
    167694: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                field_type: {
                    type: "JSONSchemaFieldType",
                    id: 1
                },
                title: {
                    type: "string",
                    id: 2
                },
                desc: {
                    type: "string",
                    id: 3
                },
                key: {
                    type: "string",
                    id: 4
                },
                object_field_info_list: {
                    rule: "repeated",
                    type: "JSONSchemaFieldInfo",
                    id: 20
                },
                array_field_info: {
                    type: "JSONSchemaFieldInfo",
                    id: 21
                },
                map_key_field_info: {
                    type: "JSONSchemaFieldInfo",
                    id: 22
                },
                map_value_field_info: {
                    type: "JSONSchemaFieldInfo",
                    id: 23
                },
                select_list: {
                    rule: "repeated",
                    type: "JSONSchemaFieldSelectItem",
                    id: 30
                }
            }
        }
    }
    ,
    474097: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                title: {
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
    361374: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                JSON_SCHEMA_FIELD_TYPE_UN_KNOW: 0,
                JSON_SCHEMA_FIELD_TYPE_STRING: 1,
                JSON_SCHEMA_FIELD_TYPE_NUMBER: 2,
                JSON_SCHEMA_FIELD_TYPE_BOOL: 3,
                JSON_SCHEMA_FIELD_TYPE_OBJECT: 4,
                JSON_SCHEMA_FIELD_TYPE_ARRAY: 5,
                JSON_SCHEMA_FIELD_TYPE_MAP: 6
            }
        }
    }
    ,
    935218: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                reply_im_msg_id: {
                    type: "int64",
                    id: 1
                },
                outside_room_invite_source: {
                    type: "webcast.data.MultiGuestOutsideRoomInviteSource",
                    id: 2
                }
            }
        }
    }
    ,
    55187: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                joiner: {
                    type: "tikcast.linkmic.common.LinkLayerListUser",
                    id: 1
                },
                all_users: {
                    type: "tikcast.linkmic.common.AllListUser",
                    id: 2
                }
            }
        }
    }
    ,
    571296: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                from_room_age_restricted: {
                    type: "int32",
                    id: 1
                },
                from_tag: {
                    type: "webcast.data.Tag",
                    id: 2
                },
                dialog: {
                    type: "webcast.data.PerceptionDialogInfo",
                    id: 3
                },
                punish_info: {
                    type: "webcast.data.PunishEventInfo",
                    id: 4
                },
                topic_info: {
                    type: "webcast.data.CohostTopic",
                    id: 5
                },
                algo_request_id: {
                    type: "string",
                    id: 6
                },
                cohost_layout_mode: {
                    type: "webcast.data.CohostLayoutMode",
                    id: 7
                },
                tag: {
                    type: "webcast.data.TagV2",
                    id: 8
                },
                game_tag: {
                    type: "webcast.data.RivalsGameTag",
                    id: 9
                },
                new_user_education: {
                    type: "string",
                    id: 11
                },
                join_group_msg_extra: {
                    type: "JoinGroupMessageExtra",
                    id: 101
                }
            }
        }
    }
    ,
    314629: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                group_user: {
                    type: "tikcast.linkmic.common.GroupChannelAllUser",
                    id: 1
                },
                join_user: {
                    type: "tikcast.linkmic.common.GroupPlayer",
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
                }
            }
        }
    }
    ,
    470269: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                source_type: {
                    type: "int64",
                    id: 1
                },
                extra: {
                    type: "RivalExtra",
                    id: 2
                },
                other_users: {
                    rule: "repeated",
                    type: "RivalExtra",
                    id: 3
                }
            },
            nested: {
                RivalExtra: {
                    fields: {
                        user_count: {
                            type: "int64",
                            id: 4
                        },
                        avatar_thumb: {
                            type: "webcast.data.Image",
                            id: 5
                        },
                        display_id: {
                            type: "string",
                            id: 6
                        },
                        authentication_info: {
                            type: "AuthenticationInfo",
                            id: 7
                        },
                        nickname: {
                            type: "string",
                            id: 8
                        },
                        follow_status: {
                            type: "int64",
                            id: 9
                        },
                        hashtag: {
                            type: "webcast.data.Hashtag",
                            id: 10
                        },
                        top_host_info: {
                            type: "webcast.data.TopHostInfo",
                            id: 11
                        },
                        user_id: {
                            type: "int64",
                            id: 12
                        },
                        is_best_teammate: {
                            type: "bool",
                            id: 13
                        },
                        opt_pair_info: {
                            type: "webcast.data.OptPairInfo",
                            id: 14
                        },
                        eoy_level: {
                            type: "int64",
                            id: 15
                        },
                        nudge_info: {
                            type: "webcast.data.CohostNudgeInfo",
                            id: 16
                        },
                        reservation_id: {
                            type: "int64",
                            id: 17
                        },
                        follower_count: {
                            type: "int64",
                            id: 18
                        },
                        game_tag: {
                            type: "webcast.data.RivalsGameTag",
                            id: 19
                        }
                    },
                    nested: {
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
                                    type: "webcast.data.Image",
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
    429053: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                JOIN_TYPE_UNKNOWN: 0,
                CHANNEL_APPLY: 1,
                CHANNEL_INVITE: 2,
                GROUP_APPLY: 100,
                GROUP_APPLY_FOLLOW: 101,
                GROUP_INVITE: 102,
                GROUP_INVITE_FOLLOW: 103,
                GROUP_OWNER_JOIN: 104
            }
        }
    }
    ,
    465294: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                JUMP_PAGE_GIFT_GOAL_SOURCE: 0,
                JUMP_PAGE_GIFT_ALERT_SOURCE: 1,
                JUMP_PAGE_COHOST_SETTING: 2,
                JUMP_PAGE_GIFTER_RANKLIST: 3,
                JUMP_PAGE_WEEKLY_GAME_RANKLIST: 4,
                JUMP_PAGE_FANS_CLUB: 5,
                JUMP_PAGE_GOODY_BAG_SETTING: 6,
                JUMP_PAGE_GAME_GUESS_SETTING: 7,
                JUMP_PAGE_ADMIN_SETTING: 8,
                JUMP_PAGE_GIFT_ALERT_TTS: 9,
                JUMP_PAGE_LIVE_GOAL: 10,
                JUMP_PAGE_TREASURE_BOX: 11,
                JUMP_PAGE_GAME_REWARDS: 12,
                JUMP_PAGE_POLL: 13,
                JUMP_PAGE_SUBSCRIPTION: 14,
                JUMP_PAGE_MONETIZATION_TIPS_SETTING: 15,
                JUMP_PAGE_EXTENDING_COUNTDOWN: 16,
                JUMP_PAGE_PLAY_TOGETHER: 17,
                JUMP_PAGE_MULTI_GUEST: 18,
                JUMP_PAGE_PARTNERSHIP: 19,
                JUMP_PAGE_GIFT_NOTIFICATION: 20,
                JUMP_PAGE_GIFT_GALLERY: 21
            }
        }
    }
    ,
    145923: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                song: {
                    type: "webcast.data.KaraokeSong",
                    id: 1
                },
                karaoke_status: {
                    type: "bool",
                    id: 2
                },
                karaoke_lyric_status: {
                    type: "bool",
                    id: 3
                },
                display_karaoke: {
                    type: "bool",
                    id: 4
                }
            }
        }
    }
    ,
    853625: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                type: {
                    type: "KaraokeQueueListOpType",
                    id: 2
                },
                total_queue_count: {
                    type: "int64",
                    id: 3
                },
                song_list: {
                    rule: "repeated",
                    type: "webcast.data.KaraokeSong",
                    id: 4
                },
                latest_update_time: {
                    type: "int64",
                    id: 5
                },
                operator: {
                    type: "int64",
                    id: 6
                }
            }
        }
    }
    ,
    931143: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                KARAOKE_QUEUE_LIST_OP_TYPE_OVERRIDE: 0,
                KARAOKE_QUEUE_LIST_OP_TYPE_ADD: 1,
                KARAOKE_QUEUE_LIST_OP_TYPE_REMOVE: 2,
                KARAOKE_QUEUE_LIST_OP_TYPE_PAUSE: 3,
                KARAOKE_QUEUE_LIST_OP_TYPE_CONTINUE: 4
            }
        }
    }
    ,
    173137: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                type: {
                    type: "KaraokeQueueOpType",
                    id: 2
                },
                song: {
                    type: "webcast.data.KaraokeSong",
                    id: 3
                }
            }
        }
    }
    ,
    796191: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                KARAOKE_QUEUE_OP_TYPE_PLAY: 0,
                KARAOKE_QUEUE_OP_TYPE_ADD: 1,
                KARAOKE_QUEUE_OP_TYPE_PIN: 2,
                KARAOKE_QUEUE_OP_TYPE_REMOVE: 3,
                KARAOKE_QUEUE_OP_TYPE_COMPLETE: 4
            }
        }
    }
    ,
    224810: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                host_sing_req_cumulative_count: {
                    type: "int64",
                    id: 2
                },
                you_sing_req_cumulative_count: {
                    type: "int64",
                    id: 3
                }
            }
        }
    }
    ,
    494540: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                song_list: {
                    rule: "repeated",
                    type: "webcast.data.ReqSong",
                    id: 2
                },
                total_req_count: {
                    type: "int64",
                    id: 3
                },
                req_timestamp_seconds: {
                    type: "int64",
                    id: 4
                }
            }
        }
    }
    ,
    175778: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                id: {
                    type: "int64",
                    id: 1
                },
                title: {
                    type: "string",
                    id: 2
                },
                display_artist: {
                    type: "string",
                    id: 3
                },
                album: {
                    type: "string",
                    id: 4
                },
                duration: {
                    type: "int32",
                    id: 5
                },
                prelude: {
                    type: "int32",
                    id: 6
                },
                postlude: {
                    type: "int32",
                    id: 7
                },
                cover_vid: {
                    type: "string",
                    id: 8
                },
                cover_urls: {
                    rule: "repeated",
                    type: "string",
                    id: 9
                },
                audio_info: {
                    type: "AudioStruct",
                    id: 10
                },
                accompaniment_info: {
                    type: "AccompanimentStruct",
                    id: 11
                },
                lyric_info: {
                    type: "LyricStruct",
                    id: 12
                },
                song_status: {
                    type: "KaraokeStatus",
                    id: 13
                },
                label_ids: {
                    rule: "repeated",
                    type: "int64",
                    id: 14
                },
                is_favorite: {
                    type: "bool",
                    id: 15
                },
                is_added: {
                    type: "bool",
                    id: 16
                },
                is_request: {
                    type: "bool",
                    id: 17
                },
                is_you_sing_request: {
                    type: "bool",
                    id: 18
                },
                singer: {
                    type: "webcast.data.User",
                    id: 19
                }
            }
        }
    }
    ,
    480309: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                KARAOKE_STATUS_AVAILABLE: 0,
                KARAOKE_STATUS_UNAVAILABLE: 1
            }
        }
    }
    ,
    55040: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                type: {
                    type: "KaraokeSwitchType",
                    id: 2
                },
                status: {
                    type: "KaraokeSwitchStatus",
                    id: 3
                }
            }
        }
    }
    ,
    249393: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                KARAOKE_SWITCH_STATUS_ON: 0,
                KARAOKE_SWITCH_STATUS_OFF: 1
            }
        }
    }
    ,
    517219: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                KARAOKE_SWITCH_TYPE_KARAOKE: 0,
                KARAOKE_SWITCH_TYPE_LYRIC: 1
            }
        }
    }
    ,
    378756: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                song_list: {
                    rule: "repeated",
                    type: "webcast.data.ReqSong",
                    id: 2
                },
                total_req_count: {
                    type: "int64",
                    id: 3
                },
                req_timestamp_seconds: {
                    type: "int64",
                    id: 4
                },
                type: {
                    type: "KaraokeYouSingReqOpType",
                    id: 5
                }
            }
        }
    }
    ,
    831628: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                KARAOKE_YOU_SING_REQ_OP_TYPE_OVERRIDE: 0,
                KARAOKE_YOU_SING_REQ_OP_TYPE_REMOVE: 1,
                KARAOKE_YOU_SING_REQ_OP_TYPE_ADD: 2
            }
        }
    }
    ,
    924573: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                KICK_OUT_ALL_GUESTS_REASON_UNKNOWN: 0,
                KICK_OUT_ALL_GUESTS_REASON_HOST_TRIGGER: 10001,
                KICK_OUT_ALL_GUESTS_REASON_PUNISH_CENTER_IM: 10002
            }
        }
    }
    ,
    903033: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                operator_user_info: {
                    type: "webcast.data.User",
                    id: 1
                },
                operator_link_admin_type: {
                    type: "tikcast.linkmic.common.LinkMicUserAdminType",
                    id: 2
                },
                kick_player_user_info: {
                    type: "webcast.data.User",
                    id: 3
                }
            }
        }
    }
    ,
    616170: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                offliner: {
                    type: "tikcast.linkmic.common.Player",
                    id: 1
                },
                kickout_reason: {
                    type: "tikcast.linkmic.common.KickoutReason",
                    id: 2
                },
                linked_user_ui_positions: {
                    rule: "repeated",
                    type: "string",
                    id: 3
                },
                ui_pos: {
                    rule: "repeated",
                    type: "tikcast.linkmic.common.PosIdentity",
                    id: 4
                }
            }
        }
    }
    ,
    891463: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                KICKOUT_REASON_UNKNOWN: 0,
                KICKOUT_REASON_FIRST_FRAME_TIMEOUT: 1,
                KICKOUT_REASON_BY_HOST: 2,
                KICKOUT_REASON_RTC_LOST_CONNECTION: 3,
                KICKOUT_REASON_BY_PUNISH: 4,
                KICKOUT_REASON_BY_ADMIN: 5,
                KICKOUT_REASON_HOST_REMOVE_ALL_GUESTS: 6
            }
        }
    }
    ,
    487874: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                LS_ANCHOR_TASK_ACTION_TYPE_UNKNOWN: 0,
                LS_ANCHOR_TASK_ACTION_TYPE_FINISH_NOVICE_GUIDE: 1,
                LS_ANCHOR_TASK_ACTION_TYPE_IMPROVE_LIVE_TITLE: 2,
                LS_ANCHOR_TASK_ACTION_TYPE_LIVE_USE_ALERT: 3,
                LS_ANCHOR_TASK_ACTION_TYPE_LIVE_USE_GOAL_SOURCE: 4,
                LS_ANCHOR_TASK_ACTION_TYPE_USE_OVERLAY: 5,
                LS_ANCHOR_TASK_ACTION_TYPE_SHARE_LIVE_INFO: 6,
                LS_ANCHOR_TASK_ACTION_TYPE_LAUNCH_VOTE: 7,
                LS_ANCHOR_TASK_ACTION_TYPE_LEARN_SET_ADMINISTRATOR: 8,
                LS_ANCHOR_TASK_ACTION_TYPE_LEARN_SENSITIVE_WORD_FILTER: 9,
                LS_ANCHOR_TASK_ACTION_TYPE_USE_CLIP_HIGHLIGHT: 10,
                LS_ANCHOR_TASK_ACTION_TYPE_USE_CUT_CLIP_AND_POST: 11
            }
        }
    }
    ,
    638791: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                scene: {
                    type: "int64",
                    id: 1
                },
                layout_id: {
                    type: "string",
                    id: 2
                }
            }
        }
    }
    ,
    66687: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                MAX_MIC_NUM_SETTING_SCENE_UNKNOWN: 0,
                MAX_MIC_NUM_SETTING_SCENE_FIXED_FLOW_LAYOUT: 1,
                MAX_MIC_NUM_SETTING_SCENE_FIXED_GRID_LAYOUT: 2
            }
        }
    }
    ,
    967822: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                layout_id: {
                    type: "string",
                    id: 1
                }
            }
        }
    }
    ,
    351756: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                form_id: {
                    type: "string",
                    id: 1
                }
            }
        }
    }
    ,
    151485: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                leaver: {
                    type: "tikcast.linkmic.common.Player",
                    id: 1
                },
                leave_reason: {
                    type: "int64",
                    id: 2
                },
                linked_user_ui_positions: {
                    rule: "repeated",
                    type: "string",
                    id: 3
                },
                ui_pos: {
                    rule: "repeated",
                    type: "tikcast.linkmic.common.PosIdentity",
                    id: 4
                }
            }
        }
    }
    ,
    42654: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                operator: {
                    type: "tikcast.linkmic.common.GroupPlayer",
                    id: 1
                },
                group_channel_id: {
                    type: "int64",
                    id: 2
                },
                leave_source: {
                    type: "string",
                    id: 3
                },
                linked_user_ui_positions: {
                    rule: "repeated",
                    type: "string",
                    id: 4
                }
            }
        }
    }
    ,
    608826: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                LEAVE_REASON_UNKNOWN: 0,
                LEAVE_REASON_BY_CLIENT: 1e4,
                LEAVE_REASON_CLICK_WINDOW: 10001,
                LEAVE_REASON_CLICK_PANEL: 10002,
                LEAVE_REASON_EXIT_LIVE_ROOM: 10003,
                LEAVE_REASON_FEEDBACK: 10004,
                LEAVE_REASON_ONECLICK_GO_LIVE: 10005,
                LEAVE_REASON_REENTER_ROOM: 10011,
                LEAVE_REASON_LINKMIC_SLOT_FULL: 10012,
                LEAVE_REASON_KILL_BACKGROUND_THREE_MINS: 10013,
                LEAVE_REASON_KILL_PROCESS: 10014,
                LEAVE_REASON_PIP: 10015,
                LEAVE_REASON_COPYRIGHT_WARNING: 10016,
                LEAVE_REASON_ONLY_ME: 10017,
                LEAVE_REASON_RESET_READY_OR_WAITING: 10018,
                LEAVE_REASON_REPLY_FAILURE: 10021,
                LEAVE_REASON_JOINCHANNEL_FAILURE: 10022,
                LEAVE_REASON_PERMIT_TIMEOUT: 10023,
                LEAVE_REASON_RTC_UNRECOVERABLE_ERROR: 10031,
                LEAVE_REASON_RTC_START_FAILURE: 10032,
                LEAVE_REASON_LOCAL_STREAM_TIMEOUT: 10033,
                LEAVE_REASON_ANCHOR_OFFLINE: 10034,
                LEAVE_REASON_CLOSE_APPLY_VOICE_MIC_PANEL: 10041,
                LEAVE_REASON_CLOSE_INVITED_VOICE_MIC_PANEL: 10042,
                LEAVE_REASON_CLOSE_APPLY_PREVIEW_PANEL: 10043,
                LEAVE_REASON_CLOSE_INVITED_PREVIEW_PANEL: 10044,
                LEAVE_REASON_APPLY_VOICE_MIC_PANEL_TIMEOUT: 10045,
                LEAVE_REASON_INVITED_VOICE_MIC_PANEL_TIMEOUT: 10046,
                LEAVE_REASON_APPLY_PREVIEW_PANEL_TIMEOUT: 10047,
                LEAVE_REASON_INVITED_PREVIEW_PANEL_TIMEOUT: 10048,
                LEAVE_REASON_BY_SERVER: 2e4
            }
        }
    }
    ,
    621108: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                origin_img: {
                    type: "webcast.data.Image",
                    id: 3
                },
                preview_img: {
                    type: "webcast.data.Image",
                    id: 4
                }
            }
        }
    }
    ,
    296940: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                gift_id: {
                    type: "int64",
                    id: 1
                },
                left_count_to_level_up: {
                    type: "int64",
                    id: 2
                },
                level_up_count: {
                    type: "int64",
                    id: 3
                },
                current_count: {
                    type: "int64",
                    id: 4
                },
                num_of_upgrade_gifts_left: {
                    type: "int64",
                    id: 5
                },
                show_id: {
                    type: "string",
                    id: 6
                }
            }
        }
    }
    ,
    995591: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                user: {
                    type: "webcast.data.User",
                    id: 2
                },
                pre_level: {
                    type: "int32",
                    id: 3
                },
                current_level: {
                    type: "int32",
                    id: 4
                }
            }
        }
    }
    ,
    961331: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                version: {
                    type: "int64",
                    id: 1
                },
                effect_cnt: {
                    type: "int64",
                    id: 2
                },
                effect_interval_ms: {
                    type: "int64",
                    id: 3
                },
                level: {
                    type: "int64",
                    id: 4
                }
            }
        }
    }
    ,
    213611: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                icons: {
                    rule: "repeated",
                    type: "webcast.data.Image",
                    id: 1
                },
                icons_self: {
                    rule: "repeated",
                    type: "webcast.data.Image",
                    id: 2
                },
                default_icons: {
                    rule: "repeated",
                    type: "webcast.data.Image",
                    id: 3
                }
            }
        }
    }
    ,
    28062: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                click_cnt: {
                    type: "int32",
                    id: 1
                },
                show_cnt: {
                    type: "int32",
                    id: 2
                }
            }
        }
    }
    ,
    292787: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
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
                icons: {
                    rule: "repeated",
                    type: "webcast.data.Image",
                    id: 7
                },
                specified_display_text: {
                    rule: "repeated",
                    type: "SpecifiedDisplayText",
                    id: 8
                },
                effect_cnt: {
                    type: "int64",
                    id: 9
                },
                like_effect: {
                    rule: "repeated",
                    type: "webcast.data.LikeEffect",
                    id: 10
                },
                public_area_message_common: {
                    type: "PublicAreaMessageCommon",
                    id: 11
                },
                room_message_heat_level: {
                    type: "int64",
                    id: 12
                }
            }
        }
    }
    ,
    680710: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                ShowOwner: 0,
                ShowGuest: 1
            }
        }
    }
    ,
    325121: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                channel_user: {
                    type: "webcast.data.User",
                    id: 1
                },
                event_id: {
                    type: "int32",
                    id: 2
                },
                event_name: {
                    type: "string",
                    id: 3
                },
                backup_room_id: {
                    type: "int64",
                    id: 4
                },
                backup_room_id_str: {
                    type: "string",
                    id: 5
                }
            }
        }
    }
    ,
    554122: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                err_code: {
                    type: "int64",
                    id: 1
                },
                err_msg: {
                    type: "string",
                    id: 2
                },
                extra: {
                    keyType: "string",
                    type: "bytes",
                    id: 3
                }
            }
        }
    }
    ,
    128696: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            oneofs: {
                content: {
                    oneof: ["popup_state_change_content"]
                }
            },
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                message_type: {
                    type: "MessageType",
                    id: 2
                },
                popup_state_change_content: {
                    type: "PopupStateChangeContent",
                    id: 3
                }
            },
            nested: {
                MessageType: {
                    values: {
                        MESSAGE_TYPE_UNKNOWN: 0,
                        MESSAGE_TYPE_POPUP_STATE_CHANGE: 1
                    }
                }
            }
        }
    }
    ,
    654204: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                scene: {
                    type: "int32",
                    id: 1
                },
                source: {
                    type: "string",
                    id: 200
                },
                app_id: {
                    type: "int64",
                    id: 201
                },
                live_id: {
                    type: "int64",
                    id: 202
                },
                extra: {
                    keyType: "string",
                    type: "string",
                    id: 203
                },
                centerized_idc: {
                    type: "string",
                    id: 300
                }
            }
        }
    }
    ,
    374199: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                user: {
                    type: "Player",
                    id: 1
                },
                linkmic_id: {
                    type: "string",
                    id: 2
                },
                pos: {
                    type: "Position",
                    id: 3
                },
                linked_time_nano: {
                    type: "int64",
                    id: 4
                },
                app_version: {
                    type: "string",
                    id: 5
                }
            }
        }
    }
    ,
    877605: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            oneofs: {
                common_content: {
                    oneof: ["create_channel_content", "list_change_content", "invite_content", "apply_content", "permit_apply_content", "reply_invite_content", "kick_out_content", "cancel_apply_content", "cancel_invite_content", "leave_content", "finish_content", "join_direct_content", "join_group_content", "permit_group_content", "cancel_group_content", "leave_group_content", "p2p_group_change_content", "group_change_content"]
                }
            },
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                message_type: {
                    type: "LinkLayerMessageType",
                    id: 2
                },
                channel_id: {
                    type: "int64",
                    id: 3
                },
                scene: {
                    type: "tikcast.linkmic.common.Scene",
                    id: 4
                },
                source: {
                    type: "string",
                    id: 5
                },
                centerized_idc: {
                    type: "string",
                    id: 6
                },
                rtc_room_id: {
                    type: "int64",
                    id: 7
                },
                create_channel_content: {
                    type: "CreateChannelContent",
                    id: 100
                },
                list_change_content: {
                    type: "ListChangeContent",
                    id: 102
                },
                invite_content: {
                    type: "InviteContent",
                    id: 103
                },
                apply_content: {
                    type: "ApplyContent",
                    id: 104
                },
                permit_apply_content: {
                    type: "PermitApplyContent",
                    id: 105
                },
                reply_invite_content: {
                    type: "ReplyInviteContent",
                    id: 106
                },
                kick_out_content: {
                    type: "KickOutContent",
                    id: 107
                },
                cancel_apply_content: {
                    type: "CancelApplyContent",
                    id: 108
                },
                cancel_invite_content: {
                    type: "CancelInviteContent",
                    id: 109
                },
                leave_content: {
                    type: "LeaveContent",
                    id: 110
                },
                finish_content: {
                    type: "FinishChannelContent",
                    id: 111
                },
                join_direct_content: {
                    type: "JoinDirectContent",
                    id: 112
                },
                join_group_content: {
                    type: "JoinGroupContent",
                    id: 113
                },
                permit_group_content: {
                    type: "PermitJoinGroupContent",
                    id: 114
                },
                cancel_group_content: {
                    type: "CancelJoinGroupContent",
                    id: 115
                },
                leave_group_content: {
                    type: "LeaveJoinGroupContent",
                    id: 116
                },
                p2p_group_change_content: {
                    type: "P2PGroupChangeContent",
                    id: 117
                },
                group_change_content: {
                    type: "GroupChangeContent",
                    id: 118
                },
                business_content: {
                    type: "BusinessContent",
                    id: 200
                }
            }
        }
    }
    ,
    429285: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                LINKER_UNKNOWN: 0,
                LINKER_CREATE: 1,
                LINKER_INVITE: 2,
                LINKER_APPLY: 3,
                LINKER_PERMIT: 4,
                LINKER_REPLY: 5,
                LINKER_KICK_OUT: 6,
                LINKER_CANCEL_APPLY: 7,
                LINKER_CANCEL_INVITE: 8,
                LINKER_LEAVE: 9,
                LINKER_FINISH: 10,
                LINKER_LIST_CHANGE: 11,
                LINKER_JOIN_DIRECT: 12,
                LINKER_JOIN_GROUP: 13,
                LINKER_PERMIT_GROUP: 14,
                LINKER_CANCEL_GROUP: 15,
                LINKER_LEAVE_GROUP: 16,
                LINKER_P2P_GROUP_CHANGE: 17,
                LINKER_GROUP_CHANGE: 18
            }
        }
    }
    ,
    560572: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                message_type: {
                    type: "LinkLayoutMessageType",
                    id: 2
                },
                room_id: {
                    type: "int64",
                    id: 3
                },
                channel_id: {
                    type: "int64",
                    id: 4
                },
                layout_id: {
                    type: "string",
                    id: 5
                },
                max_position: {
                    type: "int32",
                    id: 6
                },
                operator_user_info: {
                    type: "tikcast.linkmic.common.LinkerMediaChangeOperator",
                    id: 7
                }
            }
        }
    }
    ,
    459524: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                LINK_LAYOUT_UNKNOWN: 0,
                ADMIN_CHANGE_LAYOUT: 1
            }
        }
    }
    ,
    543259: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                STATUS_UNKOWN: 0,
                STATUS_WAITING: 1,
                STATUS_LINKED: 2,
                STATUS_FINISHED: 3,
                STATUS_WAITING_OR_LINKED: 4
            }
        }
    }
    ,
    702894: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            oneofs: {
                content: {
                    oneof: ["invite_content", "reply_content", "create_content", "close_content", "enter_content", "leave_content", "cancel_content", "kick_out_content", "linked_list_change_content", "update_user_content", "waiting_list_change_content", "mute_content", "random_match_content", "update_user_setting_content", "mic_idx_update_content", "list_change_content", "cohost_list_change_content", "media_change_content", "reply_accept_notice_content", "sys_kick_out_content", "user_toast_content"]
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
                linker_id: {
                    type: "int64",
                    id: 3
                },
                scene: {
                    type: "int64",
                    id: 4
                },
                invite_content: {
                    type: "LinkerInviteContent",
                    id: 5
                },
                reply_content: {
                    type: "LinkerReplyContent",
                    id: 6
                },
                create_content: {
                    type: "LinkerCreateContent",
                    id: 7
                },
                close_content: {
                    type: "LinkerCloseContent",
                    id: 8
                },
                enter_content: {
                    type: "LinkerEnterContent",
                    id: 9
                },
                leave_content: {
                    type: "LinkerLeaveContent",
                    id: 10
                },
                cancel_content: {
                    type: "LinkerCancelContent",
                    id: 11
                },
                kick_out_content: {
                    type: "LinkerKickOutContent",
                    id: 12
                },
                linked_list_change_content: {
                    type: "LinkerLinkedListChangeContent",
                    id: 13
                },
                update_user_content: {
                    type: "LinkerUpdateUserContent",
                    id: 14
                },
                waiting_list_change_content: {
                    type: "LinkerWaitingListChangeContent",
                    id: 15
                },
                mute_content: {
                    type: "LinkerMuteContent",
                    id: 16
                },
                random_match_content: {
                    type: "LinkerRandomMatchContent",
                    id: 17
                },
                update_user_setting_content: {
                    type: "LinkerUpdateUserSettingContent",
                    id: 18
                },
                mic_idx_update_content: {
                    type: "LinkerMicIdxUpdateContent",
                    id: 19
                },
                list_change_content: {
                    type: "LinkerListChangeContent",
                    id: 20
                },
                cohost_list_change_content: {
                    type: "CohostListChangeContent",
                    id: 21
                },
                media_change_content: {
                    type: "LinkerMediaChangeContent",
                    id: 22
                },
                reply_accept_notice_content: {
                    type: "LinkerAcceptNoticeContent",
                    id: 23
                },
                sys_kick_out_content: {
                    type: "LinkerSysKickOutContent",
                    id: 101
                },
                user_toast_content: {
                    type: "LinkmicUserToastContent",
                    id: 102
                },
                extra: {
                    type: "string",
                    id: 200
                },
                expire_timestamp: {
                    type: "int64",
                    id: 201
                },
                transfer_extra: {
                    type: "string",
                    id: 202
                }
            }
        }
    }
    ,
    215206: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                TPYE_LINKER_UNKNOWN: 0,
                TYPE_LINKER_CREATE: 1,
                TYPE_LINKER_CLOSE: 2,
                TYPE_LINKER_INVITE: 3,
                TYPE_LINKER_APPLY: 4,
                TYPE_LINKER_REPLY: 5,
                TPYE_LINKER_ENTER: 6,
                TPYE_LINKER_LEAVE: 7,
                TYPE_LINKER_PERMIT: 8,
                TPYE_LINKER_CANCEL_INVITE: 9,
                TYPE_LINKER_WAITING_LIST_CHANGE: 10,
                TYPE_LINKER_LINKED_LIST_CHANGE: 11,
                TYPE_LINKER_UPDATE_USER: 12,
                TPYE_LINKER_KICK_OUT: 13,
                TPYE_LINKER_CANCEL_APPLY: 14,
                TYPE_LINKER_MUTE: 15,
                TYPE_LINKER_MATCH: 16,
                TYPE_LINKER_UPDATE_USER_SETTING: 17,
                TYPE_LINKER_MIC_IDX_UPDATE: 18,
                TYPE_LINKER_LEAVE_V2: 19,
                TYPE_LINKER_WAITING_LIST_CHANGE_V2: 20,
                TYPE_LINKER_LINKED_LIST_CHANGE_V2: 21,
                TYPE_LINKER_COHOST_LIST_CHANGE: 22,
                TYPE_LINKER_MEDIA_CHANGE: 23,
                TYPE_LINKER_ACCEPT_NOTICE: 24,
                TPYE_LINKER_SYS_KICK_OUT: 101,
                TPYE_LINKMIC_USER_TOAST: 102
            }
        }
    }
    ,
    10682: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                channel_id: {
                    type: "int64",
                    id: 1
                },
                channel_info: {
                    type: "LinkMicChannelInfo",
                    id: 2
                },
                battle_scores: {
                    rule: "repeated",
                    type: "LinkMicBattleScore",
                    id: 3
                },
                battle_settings: {
                    type: "LinkMicBattleSetting",
                    id: 4
                },
                rival_anchor_id: {
                    type: "int64",
                    id: 5
                },
                audience_id_list: {
                    rule: "repeated",
                    type: "int64",
                    id: 6
                },
                show_user_list: {
                    rule: "repeated",
                    type: "webcast.data.User",
                    id: 7
                },
                followed_count: {
                    type: "int64",
                    id: 8
                },
                linked_user_list: {
                    rule: "repeated",
                    type: "webcast.data.User",
                    id: 9
                },
                battle_info: {
                    type: "BattleInfo",
                    id: 10
                },
                multi_live_enum: {
                    type: "int64",
                    id: 11
                },
                battle_meta_info: {
                    type: "BattleMetaInfo",
                    id: 12
                },
                topic_info: {
                    type: "webcast.data.CohostTopic",
                    id: 53
                },
                topic_status: {
                    type: "webcast.data.TopicSessionStatus",
                    id: 54
                },
                competition_info: {
                    type: "webcast.data.CompetitionInfo",
                    id: 60
                }
            },
            nested: {
                LinkMicChannelInfo: {
                    fields: {
                        layout: {
                            type: "int64",
                            id: 1
                        },
                        vendor: {
                            type: "int64",
                            id: 2
                        },
                        dimension: {
                            type: "int64",
                            id: 3
                        },
                        inner_channel_id: {
                            type: "int64",
                            id: 4
                        },
                        group_channel_id: {
                            type: "int64",
                            id: 5
                        }
                    }
                },
                LinkMicBattleScore: {
                    fields: {
                        user_id: {
                            type: "int64",
                            id: 1
                        },
                        score: {
                            type: "int64",
                            id: 2
                        }
                    }
                },
                LinkMicBattleSetting: {
                    fields: {
                        channel_id: {
                            type: "int64",
                            id: 1
                        },
                        duration: {
                            type: "int64",
                            id: 2
                        },
                        start_time: {
                            type: "int64",
                            id: 3
                        },
                        start_time_ms: {
                            type: "int64",
                            id: 4
                        },
                        theme: {
                            type: "string",
                            id: 5
                        },
                        finished: {
                            type: "int64",
                            id: 6
                        },
                        battle_id: {
                            type: "int64",
                            id: 7
                        },
                        match_type: {
                            type: "int64",
                            id: 8
                        }
                    }
                },
                BattleInfo: {
                    fields: {
                        channel_id: {
                            type: "int64",
                            id: 1
                        },
                        battle_id: {
                            type: "int64",
                            id: 2
                        },
                        battle_settings: {
                            type: "webcast.data.BattleSettings",
                            id: 3
                        },
                        armies: {
                            keyType: "int64",
                            type: "webcast.data.UserArmies",
                            id: 4
                        },
                        battle_result: {
                            keyType: "int64",
                            type: "webcast.data.BattleResult",
                            id: 5
                        },
                        anchors_info: {
                            keyType: "int64",
                            type: "webcast.data.BattleUserInfo",
                            id: 6
                        },
                        bubble_text: {
                            type: "string",
                            id: 7
                        },
                        supported_actions: {
                            keyType: "int64",
                            type: "bool",
                            id: 8
                        },
                        fuzzy_display_config: {
                            type: "webcast.data.DisplayConfig",
                            id: 9
                        },
                        battle_combo: {
                            keyType: "int64",
                            type: "webcast.data.BattleComboInfo",
                            id: 10
                        },
                        battle_combo_v2: {
                            keyType: "int64",
                            type: "webcast.data.BattleComboInfoV2",
                            id: 11
                        },
                        battle_task: {
                            type: "webcast.data.BattleTask",
                            id: 12
                        },
                        team_armies: {
                            keyType: "int64",
                            type: "webcast.data.TeamUserArmies",
                            id: 13
                        },
                        team_battle_result: {
                            keyType: "int64",
                            type: "webcast.data.TeamBattleResult",
                            id: 14
                        },
                        battle_truth_or_dare: {
                            type: "webcast.data.BattleTruthOrDare",
                            id: 15
                        },
                        team_match_campaign: {
                            type: "webcast.data.TeamMatchCampaign",
                            id: 16
                        },
                        battle_item_cards: {
                            keyType: "int64",
                            type: "webcast.data.EffectingCard",
                            id: 17
                        },
                        team_battle_item_cards: {
                            keyType: "int64",
                            type: "webcast.data.EffectingCard",
                            id: 18
                        },
                        channel_id_str: {
                            type: "string",
                            id: 19
                        },
                        battle_id_str: {
                            type: "string",
                            id: 20
                        },
                        fuzzy_display_config_v2: {
                            type: "webcast.data.HighScoreControlCfg",
                            id: 21
                        }
                    }
                },
                BattleMetaInfo: {
                    fields: {
                        channel_id: {
                            type: "int64",
                            id: 1
                        },
                        battle_id: {
                            type: "int64",
                            id: 2
                        },
                        battle_settings: {
                            type: "webcast.data.BattleSettings",
                            id: 3
                        },
                        anchors_info: {
                            keyType: "int64",
                            type: "webcast.data.BattleUserInfo",
                            id: 4
                        },
                        bubble_text: {
                            type: "string",
                            id: 5
                        },
                        supported_actions: {
                            keyType: "int64",
                            type: "bool",
                            id: 6
                        },
                        fuzzy_display_config: {
                            type: "webcast.data.DisplayConfig",
                            id: 7
                        }
                    }
                }
            }
        }
    }
    ,
    41746: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                room_id: {
                    type: "int64",
                    id: 1
                },
                ad_id: {
                    type: "int64",
                    id: 2
                },
                duration: {
                    type: "int64",
                    id: 3
                },
                play_times: {
                    type: "int64",
                    id: 4
                },
                url: {
                    type: "string",
                    id: 5
                }
            }
        }
    }
    ,
    737184: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                message_type: {
                    type: "LinkMicAdMessageType",
                    id: 2
                },
                link_ad_contents: {
                    rule: "repeated",
                    type: "tikcast.linkmic.common.LinkMicAdContent",
                    id: 3
                }
            }
        }
    }
    ,
    507256: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                LINK_AD_UNKNOWN: 0,
                LINK_AD_START_PLAYING: 1,
                LINK_AD_STOP_PLAYING: 2
            }
        }
    }
    ,
    150273: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                None: 0,
                NormalConnect: 1,
                QuickConnect: 2
            }
        }
    }
    ,
    904204: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                guide_content: {
                    type: "string",
                    id: 2
                },
                button_content: {
                    type: "string",
                    id: 3
                },
                connect_type: {
                    type: "LinkMicAnchorConnectType",
                    id: 4
                },
                guide_type: {
                    type: "LinkmicAnchorGuideType",
                    id: 5
                },
                user: {
                    type: "webcast.data.User",
                    id: 6
                },
                log_id: {
                    type: "string",
                    id: 7
                },
                reserve_info: {
                    type: "ReserveInfo",
                    id: 8
                },
                button_show_type: {
                    type: "webcast.data.LinkmicPlayType",
                    id: 9
                },
                opt_pair_info: {
                    type: "OptPairInfo",
                    id: 10
                },
                user_model_prediction_data: {
                    rule: "repeated",
                    type: "UserModelPredictionData",
                    id: 11
                },
                is_followed_by_rival: {
                    type: "bool",
                    id: 21
                },
                available_friend_number: {
                    type: "int64",
                    id: 22
                }
            }
        }
    }
    ,
    23827: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                battle_id: {
                    type: "int64",
                    id: 2
                },
                armies: {
                    keyType: "int64",
                    type: "webcast.data.UserArmies",
                    id: 3
                },
                channel_id: {
                    type: "int64",
                    id: 4
                },
                send_gift_success_time: {
                    type: "int64",
                    id: 5
                },
                update_battle_score_time: {
                    type: "int64",
                    id: 6
                },
                trigger_reason: {
                    type: "TriggerReason",
                    id: 7
                },
                from_user_id: {
                    type: "int64",
                    id: 8
                },
                gift_id: {
                    type: "int64",
                    id: 9
                },
                gift_count: {
                    type: "int64",
                    id: 10
                },
                gift_icon_image: {
                    type: "webcast.data.Image",
                    id: 11
                },
                total_diamond_count: {
                    type: "int64",
                    id: 12
                },
                repeat_count: {
                    type: "int64",
                    id: 13
                },
                team_armies: {
                    rule: "repeated",
                    type: "webcast.data.TeamUserArmies",
                    id: 14
                },
                trigger_critical_strike: {
                    type: "bool",
                    id: 15
                },
                has_team_match_mvp_SFX: {
                    type: "bool",
                    id: 16
                },
                log_id: {
                    type: "string",
                    id: 17
                },
                battle_settings: {
                    type: "webcast.data.BattleSettings",
                    id: 18
                },
                fuzzy_display_config_v2: {
                    type: "webcast.data.HighScoreControlCfg",
                    id: 19
                }
            },
            nested: {
                TriggerReason: {
                    values: {
                        Unknown: 0,
                        ScoreUpdate: 1,
                        BattleEnd: 2,
                        OptOutUpdate: 3,
                        KeepAlive: 4
                    }
                }
            }
        }
    }
    ,
    259352: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                battle_id: {
                    type: "int64",
                    id: 2
                },
                battle_settings: {
                    type: "webcast.data.BattleSettings",
                    id: 3
                },
                action: {
                    type: "BattleAction",
                    id: 4
                },
                battle_result: {
                    keyType: "int64",
                    type: "webcast.data.BattleResult",
                    id: 5
                },
                fuzzy_display_config: {
                    type: "webcast.data.DisplayConfig",
                    id: 6
                },
                battle_combo: {
                    keyType: "int64",
                    type: "webcast.data.BattleComboInfo",
                    id: 7
                },
                invitee_gift_permission_type: {
                    type: "webcast.data.GiftPermissionType",
                    id: 8
                },
                armies: {
                    rule: "repeated",
                    type: "UserArmiesWrapper",
                    id: 9
                },
                anchors_info: {
                    rule: "repeated",
                    type: "BattleUserInfoWrapper",
                    id: 10
                },
                bubble_text: {
                    type: "string",
                    id: 11
                },
                supported_actions: {
                    rule: "repeated",
                    type: "SupportedActionsWrapper",
                    id: 12
                },
                battle_combo_v2: {
                    keyType: "int64",
                    type: "webcast.data.BattleComboInfoV2",
                    id: 13
                },
                team_member: {
                    rule: "repeated",
                    type: "TeamUser",
                    id: 14
                },
                invitees_gift_permission_type: {
                    rule: "repeated",
                    type: "InviteeGiftPermission",
                    id: 15
                },
                action_by_user_id: {
                    type: "int64",
                    id: 16
                },
                team_battle_result: {
                    rule: "repeated",
                    type: "webcast.data.TeamBattleResult",
                    id: 17
                },
                team_armies: {
                    rule: "repeated",
                    type: "webcast.data.TeamUserArmies",
                    id: 18
                },
                ab_test_setting: {
                    rule: "repeated",
                    type: "webcast.data.BattleABTestSetting",
                    id: 19
                },
                team_match_campaign: {
                    type: "webcast.data.TeamMatchCampaign",
                    id: 20
                },
                fuzzy_display_config_v2: {
                    type: "webcast.data.HighScoreControlCfg",
                    id: 21
                }
            },
            nested: {
                BattleAction: {
                    values: {
                        UNKNOWN: 0,
                        INVITE: 1,
                        REJECT: 2,
                        CANCEL: 3,
                        OPEN: 4,
                        FINISH: 5,
                        CUT_SHORT: 6,
                        ACCEPT: 7,
                        QUIT_APPLY: 8,
                        DECLINE_QUIT: 9,
                        DECLINE_OFF_QUIT: 10,
                        LEAVE_LINKMIC: 11
                    }
                },
                TeamUser: {
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
                },
                InviteeGiftPermission: {
                    fields: {
                        user_id: {
                            type: "int64",
                            id: 1
                        },
                        gift_permission_type: {
                            type: "webcast.data.GiftPermissionType",
                            id: 2
                        }
                    }
                }
            }
        }
    }
    ,
    413405: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            oneofs: {
                content: {
                    oneof: ["card_obtain_guide", "use_critical_strike_card", "use_smoke_card", "award_card_notice", "use_extra_time_card", "use_special_effect_card", "use_potion_card", "use_wave_card", "special_effect_notice"]
                }
            },
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                battle_id: {
                    type: "int64",
                    id: 2
                },
                msg_type: {
                    type: "BattleCardMsgType",
                    id: 3
                },
                card_obtain_guide: {
                    type: "CardObtainGuide",
                    id: 4
                },
                use_critical_strike_card: {
                    type: "UseCriticalStrikeCard",
                    id: 5
                },
                use_smoke_card: {
                    type: "UseSmokeCard",
                    id: 6
                },
                award_card_notice: {
                    type: "AwardCardNotice",
                    id: 7
                },
                use_extra_time_card: {
                    type: "UseExtraTimeCard",
                    id: 8
                },
                use_special_effect_card: {
                    type: "UseSpecialEffectCard",
                    id: 9
                },
                use_potion_card: {
                    type: "UsePotionCard",
                    id: 10
                },
                use_wave_card: {
                    type: "UseWaveCard",
                    id: 11
                },
                special_effect_notice: {
                    type: "SpecialEffectNotice",
                    id: 12
                }
            }
        }
    }
    ,
    832786: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                channel_id: {
                    type: "int64",
                    id: 2
                },
                op_uid: {
                    type: "int64",
                    id: 3
                },
                reason: {
                    type: "Reason",
                    id: 4
                },
                battle_id: {
                    type: "int64",
                    id: 5
                },
                battle_settings: {
                    type: "webcast.data.BattleSettings",
                    id: 6
                }
            },
            nested: {
                Reason: {
                    values: {
                        TIME_UP: 0,
                        CUT_SHORT: 1
                    }
                }
            }
        }
    }
    ,
    533439: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            oneofs: {
                content: {
                    oneof: ["trigger_guide", "play_tips", "truth_or_dare_close_notice", "trigger_guide_v2"]
                }
            },
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                play_type: {
                    type: "BattleVictoryPlayType",
                    id: 2
                },
                trigger_guide: {
                    type: "BattleTruthOrDareTriggerGuide",
                    id: 3
                },
                play_tips: {
                    type: "BattleTruthOrDareTips",
                    id: 4
                },
                truth_or_dare_close_notice: {
                    type: "BattleTruthOrDareOptOutNotice",
                    id: 5
                },
                trigger_guide_v2: {
                    type: "BattleTruthOrDareTriggerGuideV2",
                    id: 6
                },
                anchor_region: {
                    type: "string",
                    id: 10
                },
                battle_id: {
                    type: "int64",
                    id: 11
                }
            }
        }
    }
    ,
    410796: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            oneofs: {
                content: {
                    oneof: ["trigger_guide", "play_tips", "truth_or_dare_close_notice"]
                }
            },
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                play_type: {
                    type: "BattleVictoryPlayType",
                    id: 2
                },
                trigger_guide: {
                    type: "BattleTruthOrDareTriggerGuide",
                    id: 3
                },
                play_tips: {
                    type: "BattleTruthOrDareTips",
                    id: 4
                },
                truth_or_dare_close_notice: {
                    type: "BattleTruthOrDareOptOutNotice",
                    id: 5
                }
            }
        }
    }
    ,
    845043: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                battle_settings: {
                    type: "BattleSettings",
                    id: 2
                }
            }
        }
    }
    ,
    362788: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            oneofs: {
                content: {
                    oneof: ["fan_ticket_room_notice"]
                }
            },
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                fan_ticket_room_notice: {
                    type: "FanTicketRoomNoticeContent",
                    id: 2
                }
            }
        }
    }
    ,
    63977: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                anchor_info: {
                    type: "AnchorInfo",
                    id: 2
                },
                cue_threshold: {
                    type: "int64",
                    id: 3
                },
                guideline_type: {
                    type: "int64",
                    id: 4
                }
            },
            nested: {
                AnchorInfo: {
                    fields: {
                        infoList: {
                            rule: "repeated",
                            type: "InfoItem",
                            id: 1
                        }
                    },
                    nested: {
                        InfoItem: {
                            fields: {
                                icon: {
                                    type: "webcast.data.Image",
                                    id: 1
                                },
                                content: {
                                    type: "string",
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
    845494: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                AUDIO_CHATROOM_GUIDELINE: 0,
                LINKMIC_ICON_WHEN_HIDDEN_GUIDELINE: 1
            }
        }
    }
    ,
    259: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                message_type: {
                    type: "int64",
                    id: 2
                },
                access_key: {
                    type: "string",
                    id: 3
                },
                anchor_linkmic_id: {
                    type: "int64",
                    id: 4
                },
                user_id: {
                    type: "int64",
                    id: 5
                },
                fan_ticket: {
                    type: "int64",
                    id: 6
                },
                total_linkmic_fan_ticket: {
                    type: "int64",
                    id: 7
                },
                channel_id: {
                    type: "int64",
                    id: 8
                },
                layout: {
                    type: "int64",
                    id: 9
                },
                vendor: {
                    type: "int64",
                    id: 10
                },
                dimension: {
                    type: "int64",
                    id: 11
                },
                theme: {
                    type: "string",
                    id: 12
                },
                invite_uid: {
                    type: "int64",
                    id: 13
                },
                answer: {
                    type: "int64",
                    id: 14
                },
                start_time: {
                    type: "int64",
                    id: 15
                },
                duration: {
                    type: "int64",
                    id: 16
                },
                user_scores: {
                    rule: "repeated",
                    type: "UserScores",
                    id: 17
                },
                match_type: {
                    type: "int64",
                    id: 18
                },
                win: {
                    type: "bool",
                    id: 19
                },
                prompts: {
                    type: "string",
                    id: 20
                },
                to_user_id: {
                    type: "int64",
                    id: 21
                },
                contributors: {
                    keyType: "int64",
                    type: "ContributorList",
                    id: 22
                },
                linkmic_layout: {
                    type: "int64",
                    id: 23
                },
                from_user_id: {
                    type: "int64",
                    id: 24
                },
                tips: {
                    type: "string",
                    id: 25
                },
                start_time_ms: {
                    type: "int64",
                    id: 26
                },
                confluence_type: {
                    type: "int32",
                    id: 27
                },
                from_room_id: {
                    type: "int64",
                    id: 28
                },
                invite_type: {
                    type: "int64",
                    id: 29
                },
                sub_type: {
                    type: "int64",
                    id: 30
                },
                inviter_rival_extra: {
                    type: "webcast.data.RivalExtraInfo",
                    id: 31
                },
                rtc_ext_info: {
                    type: "string",
                    id: 32
                },
                rtc_app_id: {
                    type: "string",
                    id: 33
                },
                app_id: {
                    type: "string",
                    id: 34
                },
                app_sign: {
                    type: "string",
                    id: 35
                },
                rtc_app_sign: {
                    type: "string",
                    id: 36
                },
                anchor_linkmic_id_str: {
                    type: "string",
                    id: 37
                },
                rival_anchor_id: {
                    type: "int64",
                    id: 38
                },
                rival_linkmic_id: {
                    type: "int64",
                    id: 39
                },
                rival_linkmic_id_str: {
                    type: "string",
                    id: 40
                },
                show_popup: {
                    type: "bool",
                    id: 41
                },
                sec_invite_uid: {
                    type: "int64",
                    id: 42
                },
                scene: {
                    type: "int64",
                    id: 43
                },
                sec_apply_uid: {
                    type: "int64",
                    id: 44
                },
                linked_users: {
                    rule: "repeated",
                    type: "webcast.data.User",
                    id: 45
                },
                sec_from_user_id: {
                    type: "string",
                    id: 46
                },
                reply_type: {
                    type: "webcast.data.LinkmicReplyType",
                    id: 47
                },
                reply_prompts: {
                    type: "string",
                    id: 48
                },
                sec_to_user_id: {
                    type: "string",
                    id: 49
                },
                invitor_info: {
                    type: "InvitorInfo",
                    id: 50
                },
                rtc_join_channel: {
                    type: "bool",
                    id: 51
                },
                fan_ticket_icon_type: {
                    type: "int32",
                    id: 52
                }
            },
            nested: {
                UserScores: {
                    fields: {
                        score: {
                            type: "int64",
                            id: 1
                        },
                        user_id: {
                            type: "int64",
                            id: 2
                        },
                        weekly_rank: {
                            type: "int64",
                            id: 3
                        }
                    }
                },
                Contributor: {
                    fields: {
                        score: {
                            type: "int64",
                            id: 1
                        },
                        rank: {
                            type: "int64",
                            id: 2
                        },
                        user_id: {
                            type: "int64",
                            id: 3
                        },
                        user: {
                            type: "webcast.data.User",
                            id: 4
                        }
                    }
                },
                ContributorList: {
                    fields: {
                        contributor_list: {
                            rule: "repeated",
                            type: "Contributor",
                            id: 1
                        }
                    }
                },
                InvitorInfo: {
                    fields: {
                        invitor_nick_name: {
                            type: "string",
                            id: 1
                        },
                        invitor_avatar: {
                            type: "webcast.data.Image",
                            id: 2
                        }
                    }
                }
            }
        }
    }
    ,
    966704: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                TYPE_NONE: 0,
                TYPE_TURNON: 1,
                TYPE_PERMIT: 2,
                TYPE_KICKOUTED: 3,
                TYPE_FINISH: 4,
                TYPE_WAITING_LIST_CHANGED: 5,
                TYPE_LINKED_LIST_CHANGED: 6,
                TYPE_ALL_LIST_CHANGED: 7,
                TYPE_FAN_TICKET_CHANGED: 8,
                TYPE_RANKING_UPDATE: 9,
                TYPE_SILENCE: 10,
                TYPE_UNSILENCE: 11,
                TYPE_INVITE: 12,
                TYPE_REPLY: 13,
                TYPE_AUTO_JOIN: 14,
                TYPE_AGREE_ADMIN_FIRST_INVITE: 15
            }
        }
    }
    ,
    566065: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                from_user: {
                    type: "webcast.data.User",
                    id: 2
                },
                emoji: {
                    type: "webcast.data.LinkmicAudienceEmoji",
                    id: 3
                },
                emoji_image_result: {
                    type: "webcast.data.Image",
                    id: 4
                }
            }
        }
    }
    ,
    509997: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                common: {
                    type: "Common",
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
    640598: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                UNDEFINED_TYPE: 0,
                MANAGER_TYPE: 1,
                HOST_TYPE: 2
            }
        }
    }
    ,
    756970: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                position: {
                    type: "int32",
                    id: 1
                },
                opt: {
                    type: "int32",
                    id: 2
                }
            }
        }
    }
    ,
    945729: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                TYPE_ROLE_TYPE_UNKOWN: 0,
                TYPE_LEADER: 1,
                TYPE_PLAYER: 2,
                TYPE_INVITEE: 3,
                TYPE_APPLIER: 4
            }
        }
    }
    ,
    776022: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            oneofs: {
                content: {
                    oneof: ["guest_cancel_enlarge", "enlarge_status_syn", "enlarge_pos_status_syn"]
                }
            },
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                message_type: {
                    type: "LinkScreenChangeMessageType",
                    id: 2
                },
                guest_cancel_enlarge: {
                    type: "LinkerGuestCancelEnlargeContent",
                    id: 3
                },
                enlarge_status_syn: {
                    type: "LinkerEnlargeStatusSynContent",
                    id: 4
                },
                enlarge_pos_status_syn: {
                    type: "EnlargePositionStatusSynContent",
                    id: 5
                }
            }
        }
    }
    ,
    206193: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                BIZ_TPYE_LINKER_UNKNOWN: 0,
                BIZ_TYPE_LINKER_CANCEL_ENLARGE: 1,
                BIZ_TYPE_ENLARGE_STATUS_SYN: 2,
                BIZ_TYPE_ENLARGE_POSITION_STATUS_SYN: 3
            }
        }
    }
    ,
    962001: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                settings: {
                    rule: "repeated",
                    type: "webcast.data.LinkmicSetting",
                    id: 2
                }
            }
        }
    }
    ,
    991944: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                STATUS_UNSILENCE: 0,
                STATUS_SILENCE_BY_SELF: 1,
                STATUS_SILENCE_BY_OWNER: 2
            }
        }
    }
    ,
    116477: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                channel_id: {
                    type: "int64",
                    id: 2
                },
                scene: {
                    type: "tikcast.linkmic.common.Scene",
                    id: 3
                },
                version: {
                    type: "int64",
                    id: 4
                },
                need_ack: {
                    type: "int32",
                    id: 5
                },
                layout: {
                    type: "tikcast.linkmic.common.LayoutState",
                    id: 6
                },
                user_states: {
                    rule: "repeated",
                    type: "tikcast.linkmic.common.LinkUserState",
                    id: 7
                },
                client_send_time: {
                    type: "int64",
                    id: 8
                },
                state_type: {
                    type: "tikcast.linkmic.common.StateType",
                    id: 9
                },
                background: {
                    type: "tikcast.linkmic.common.BackGroundImageState",
                    id: 10
                },
                wallpaper_url: {
                    type: "string",
                    id: 12
                },
                ui_pos: {
                    rule: "repeated",
                    type: "tikcast.linkmic.common.PosIdentity",
                    id: 13
                }
            }
        }
    }
    ,
    291809: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                TYPE_UNKNOWN: 0,
                TYPE_VIDEO: 1,
                TYPE_AUDIO: 2,
                TYPE_VIRTUAL: 3
            }
        }
    }
    ,
    152621: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                user: {
                    type: "Player",
                    id: 1
                },
                linkmic_id: {
                    type: "string",
                    id: 2
                },
                pos: {
                    type: "Position",
                    id: 3
                },
                linked_time_nano: {
                    type: "int64",
                    id: 4
                },
                online_user_state: {
                    type: "OnlineUserState",
                    id: 5
                },
                audio_muted: {
                    type: "MediaState",
                    id: 6
                },
                video_muted: {
                    type: "MediaState",
                    id: 7
                },
                rtc_connection: {
                    type: "RtcConnectionState",
                    id: 8
                },
                network_state: {
                    type: "NetworkState",
                    id: 9
                },
                avatar: {
                    type: "AvatarState",
                    id: 10
                }
            }
        }
    }
    ,
    517434: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                LINK_USER_TYPE_DEFAULT: 0,
                LINK_USER_TYPE_KARAOKE: 1
            }
        }
    }
    ,
    916513: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                from_user_id: {
                    type: "int64",
                    id: 1
                },
                from_room_id: {
                    type: "int64",
                    id: 2
                },
                to_user_id: {
                    type: "int64",
                    id: 3
                }
            }
        }
    }
    ,
    860927: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                from_user_id: {
                    type: "int64",
                    id: 1
                },
                to_user_id: {
                    type: "int64",
                    id: 2
                },
                cancel_type: {
                    type: "int64",
                    id: 3
                },
                action_id: {
                    type: "int64",
                    id: 4
                }
            }
        }
    }
    ,
    367111: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {}
        }
    }
    ,
    269494: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                user_id: {
                    type: "int64",
                    id: 2
                },
                total_score: {
                    type: "int64",
                    id: 3
                },
                user_contribute_list: {
                    rule: "repeated",
                    type: "UserContribute",
                    id: 4
                },
                micro_time_stamp: {
                    type: "int64",
                    id: 5
                },
                scene: {
                    type: "int64",
                    id: 6
                }
            }
        }
    }
    ,
    191449: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                owner_id: {
                    type: "int64",
                    id: 1
                },
                owner_room_id: {
                    type: "int64",
                    id: 2
                },
                link_type: {
                    type: "int64",
                    id: 3
                }
            }
        }
    }
    ,
    851311: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                is_enlarge: {
                    type: "int32",
                    id: 1
                },
                enlarge_linkmic_id: {
                    type: "string",
                    id: 2
                },
                scene: {
                    type: "webcast.data.EnlargeScreenScene",
                    id: 3
                },
                target_linkmic_id: {
                    type: "string",
                    id: 4
                },
                operator_info: {
                    type: "tikcast.linkmic.common.LinkerMediaChangeOperator",
                    id: 5
                },
                layout_id: {
                    type: "string",
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
    923849: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                linked_users: {
                    rule: "repeated",
                    type: "webcast.data.ListUser",
                    id: 1
                },
                anchor_multi_live_enum: {
                    type: "webcast.data.LinkmicMultiLiveEnum",
                    id: 2
                },
                anchor_setting_info: {
                    type: "webcast.data.LinkmicUserSettingInfo",
                    id: 3
                }
            }
        }
    }
    ,
    21601: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                scene: {
                    type: "webcast.data.EnlargeScreenScene",
                    id: 1
                },
                is_reject_enlarge: {
                    type: "int32",
                    id: 2
                },
                cancel_linkmic_id: {
                    type: "string",
                    id: 3
                }
            }
        }
    }
    ,
    64914: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                from_user_id: {
                    type: "int64",
                    id: 1
                },
                from_room_id: {
                    type: "int64",
                    id: 2
                },
                to_rtc_ext_info: {
                    type: "string",
                    id: 3
                },
                rtc_join_channel: {
                    type: "bool",
                    id: 4
                },
                vendor: {
                    type: "int64",
                    id: 5
                },
                sec_from_user_id: {
                    type: "string",
                    id: 6
                },
                to_linkmic_id_str: {
                    type: "string",
                    id: 7
                },
                from_user: {
                    type: "webcast.data.User",
                    id: 8
                },
                required_mic_idx: {
                    type: "int64",
                    id: 9
                },
                rtc_ext_info_map: {
                    keyType: "int64",
                    type: "string",
                    id: 10
                },
                anchor_multi_live_enum: {
                    type: "webcast.data.LinkmicMultiLiveEnum",
                    id: 11
                },
                anchor_setting_info: {
                    type: "webcast.data.LinkmicUserSettingInfo",
                    id: 12
                },
                inviter_linkmic_id_str: {
                    type: "string",
                    id: 13
                },
                from_top_host_info: {
                    type: "InviteTopHostInfo",
                    id: 16
                },
                action_id: {
                    type: "int64",
                    id: 17
                },
                linked_users: {
                    rule: "repeated",
                    type: "LinkmicUserInfo",
                    id: 18
                },
                dialog: {
                    type: "webcast.data.PerceptionDialogInfo",
                    id: 19
                },
                punish_info: {
                    type: "webcast.data.PunishEventInfo",
                    id: 20
                },
                from_room_age_restricted: {
                    type: "int32",
                    id: 21
                },
                from_tag: {
                    type: "webcast.data.Tag",
                    id: 22
                },
                ab_test_setting: {
                    rule: "repeated",
                    type: "webcast.data.CohostABTestSetting",
                    id: 23
                },
                linker_invite_msg_extra: {
                    type: "webcast.data.LinkerInviteMessageExtra",
                    id: 101
                }
            }
        }
    }
    ,
    568125: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                from_user_id: {
                    type: "int64",
                    id: 1
                },
                kickout_reason: {
                    type: "tikcast.linkmic.common.KickoutReason",
                    id: 2
                }
            }
        }
    }
    ,
    555874: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                user_id: {
                    type: "int64",
                    id: 1
                },
                linkmic_id_str: {
                    type: "string",
                    id: 2
                },
                send_leave_uid: {
                    type: "int64",
                    id: 3
                },
                leave_reason: {
                    type: "int64",
                    id: 4
                }
            }
        }
    }
    ,
    938882: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                linked_users: {
                    rule: "repeated",
                    type: "webcast.data.ListUser",
                    id: 1
                }
            }
        }
    }
    ,
    254893: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                linked_users: {
                    rule: "repeated",
                    type: "ListUser",
                    id: 1
                },
                applied_users: {
                    rule: "repeated",
                    type: "ListUser",
                    id: 2
                },
                connecting_users: {
                    rule: "repeated",
                    type: "ListUser",
                    id: 3
                }
            }
        }
    }
    ,
    960379: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                op: {
                    type: "webcast.data.GuestMicCameraManageOp",
                    id: 1
                },
                to_user_id: {
                    type: "int64",
                    id: 2
                },
                anchor_id: {
                    type: "int64",
                    id: 3
                },
                room_id: {
                    type: "int64",
                    id: 4
                },
                change_scene: {
                    type: "webcast.data.GuestMicCameraChangeScene",
                    id: 5
                },
                operator_info: {
                    type: "tikcast.linkmic.common.LinkerMediaChangeOperator",
                    id: 7
                }
            }
        }
    }
    ,
    620096: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                user_id: {
                    type: "int64",
                    id: 1
                },
                operator_type: {
                    type: "tikcast.linkmic.common.LinkMicUserAdminType",
                    id: 2
                },
                nick_name: {
                    type: "string",
                    id: 3
                },
                display_id: {
                    type: "string",
                    id: 4
                }
            }
        }
    }
    ,
    907368: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                mic_idx_update_info: {
                    type: "LinkerMicIdxUpdateInfo",
                    id: 1
                }
            }
        }
    }
    ,
    716821: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                op: {
                    type: "MicIdxOperation",
                    id: 1
                },
                user_id: {
                    type: "int64",
                    id: 2
                },
                mic_idx: {
                    type: "int64",
                    id: 3
                }
            }
        }
    }
    ,
    209526: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                user_id: {
                    type: "int64",
                    id: 1
                },
                status: {
                    type: "webcast.data.MuteStatus",
                    id: 2
                }
            }
        }
    }
    ,
    760967: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
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
                },
                match_id: {
                    type: "string",
                    id: 4
                },
                inner_channel_id: {
                    type: "int64",
                    id: 5
                }
            }
        }
    }
    ,
    687419: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                from_user_id: {
                    type: "int64",
                    id: 1
                },
                from_room_id: {
                    type: "int64",
                    id: 2
                },
                from_user_linkmic_info: {
                    type: "LinkmicInfo",
                    id: 3
                },
                to_user_id: {
                    type: "int64",
                    id: 4
                },
                to_user_linkmic_info: {
                    type: "LinkmicInfo",
                    id: 5
                },
                link_type: {
                    type: "int64",
                    id: 6
                },
                reply_status: {
                    type: "int64",
                    id: 7
                },
                linker_setting: {
                    type: "LinkerSetting",
                    id: 8
                },
                from_user: {
                    type: "webcast.data.User",
                    id: 9
                },
                to_user: {
                    type: "webcast.data.User",
                    id: 10
                },
                rtc_ext_info_map: {
                    keyType: "int64",
                    type: "string",
                    id: 11
                },
                invitee_mic_idx_update_info: {
                    type: "LinkerMicIdxUpdateInfo",
                    id: 12
                },
                applier_mic_idx_info_map: {
                    keyType: "int64",
                    type: "int64",
                    id: 13
                },
                anchor_multi_live_enum: {
                    type: "webcast.data.LinkmicMultiLiveEnum",
                    id: 14
                },
                anchor_setting_info: {
                    type: "webcast.data.LinkmicUserSettingInfo",
                    id: 15
                },
                action_id: {
                    type: "int64",
                    id: 16
                },
                linked_users: {
                    rule: "repeated",
                    type: "LinkmicUserInfo",
                    id: 17
                },
                source_type: {
                    type: "int64",
                    id: 18
                }
            }
        }
    }
    ,
    724924: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                Scene_Unknown: 0,
                Scene_PK: 1,
                Scene_AnchorLinkmic: 2,
                Scene_VirutalPK: 3,
                Scene_AudienceLinkmic: 4,
                Scene_AudioChatRoom: 5,
                Scene_CloudGame: 6,
                Scene_AnchorMultiLinkmic: 7,
                Scene_VideoChatRoom: 8,
                Scene_SocialLinkmic: 9
            }
        }
    }
    ,
    470652: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                max_member_limit: {
                    type: "int64",
                    id: 1
                },
                link_type: {
                    type: "int64",
                    id: 2
                },
                scene: {
                    type: "int64",
                    id: 3
                },
                owner_user_id: {
                    type: "int64",
                    id: 4
                },
                owner_room_id: {
                    type: "int64",
                    id: 5
                },
                vendor: {
                    type: "int64",
                    id: 6
                }
            }
        }
    }
    ,
    933158: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                user_id: {
                    type: "int64",
                    id: 1
                },
                linkmic_id_str: {
                    type: "string",
                    id: 2
                }
            }
        }
    }
    ,
    42347: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                from_user_id: {
                    type: "int64",
                    id: 1
                },
                to_user_id: {
                    type: "int64",
                    id: 2
                },
                update_info: {
                    keyType: "string",
                    type: "string",
                    id: 3
                }
            }
        }
    }
    ,
    642905: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                update_user_setting_info: {
                    type: "webcast.data.LinkmicUserSettingInfo",
                    id: 1
                }
            }
        }
    }
    ,
    665194: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {}
        }
    }
    ,
    375191: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                ANCHOR_LINKMIC_GUIDE: 0,
                ANCHOR_FOLLOW_GUIDE: 1,
                ANCHOR_FIREND_LIVING: 2,
                ANCHOR_RESERVE_NOTICE: 3,
                LINKMIC_ANCHOR_GUIDE_TYPE_OPT_PAIR_NOTICE: 4,
                LINKMIC_ANCHOR_GUIDE_TYPE_OPT_PAIR_GUIDE: 5,
                LINKMIC_ANCHOR_GUIDE_TYPE_OPT_PAIR_CHANGE_ALERT: 6,
                LINKMIC_ANCHOR_GUIDE_TYPE_RESUME_NOTICE: 7,
                ANCHOR_FOLLOW_GUIDE_V2: 8,
                OPT_PAIR_FIRST_LIVE: 9
            }
        }
    }
    ,
    992807: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            oneofs: {
                content: {
                    oneof: ["apply_animation_content"]
                }
            },
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                apply_animation_content: {
                    type: "ApplyAnimationContent",
                    id: 2
                }
            }
        }
    }
    ,
    394243: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                LINKMIC_APPLIER_SORT_SETTING_NONE: 0,
                LINKMIC_APPLIER_SORT_SETTING_BY_GIFT_SCORE: 1
            }
        }
    }
    ,
    486648: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                emoji_id: {
                    type: "int64",
                    id: 1
                },
                is_random: {
                    type: "bool",
                    id: 2
                },
                emoji_image: {
                    type: "webcast.data.Image",
                    id: 3
                },
                emoji_dynamic_image: {
                    type: "webcast.data.Image",
                    id: 4
                },
                emoji_name: {
                    type: "string",
                    id: 5
                },
                animation_duration_ms: {
                    type: "int64",
                    id: 6
                },
                emoji_result_duration_ms: {
                    type: "int64",
                    id: 7
                }
            }
        }
    }
    ,
    414332: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                content: {
                    type: "LinkmicAudienceNoticeText",
                    id: 1
                },
                button_content: {
                    type: "LinkmicAudienceNoticeText",
                    id: 2
                },
                group_member_user_ids: {
                    rule: "repeated",
                    type: "int64",
                    id: 3
                }
            }
        }
    }
    ,
    394997: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                content: {
                    type: "LinkmicAudienceNoticeText",
                    id: 1
                },
                button_content: {
                    type: "LinkmicAudienceNoticeText",
                    id: 2
                },
                user: {
                    type: "webcast.data.User",
                    id: 3
                },
                display_strategy: {
                    type: "LinkmicAudienceInviteNoticeDisplayStrategy",
                    id: 4
                },
                linkmic_audience_invite_notice_reason: {
                    type: "string",
                    id: 5
                }
            }
        }
    }
    ,
    23214: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                ALWAYS_CAPSULE: 0,
                POSITION_PRIOR_TO_CAPSULE: 1
            }
        }
    }
    ,
    241401: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            oneofs: {
                content: {
                    oneof: ["turn_on_guide", "notice_guide", "group_chat_member_invite_guide"]
                }
            },
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                notice_type: {
                    type: "LinkmicAudienceNoticeType",
                    id: 2
                },
                turn_on_guide: {
                    type: "LinkmicAudienceTurnOnGuide",
                    id: 3
                },
                notice_guide: {
                    type: "LinkmicAudienceInviteGuide",
                    id: 4
                },
                group_chat_member_invite_guide: {
                    type: "LinkmicAudienceInviteGroupChatMemberGuide",
                    id: 5
                }
            }
        }
    }
    ,
    321879: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                text: {
                    type: "string",
                    id: 1
                }
            }
        }
    }
    ,
    655036: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                TURN_ON_GUIDE: 0,
                INVITE_GUIDE: 1,
                INVITE_GROUP_CHAT_MEMBER_GUIDE: 2,
                INVITE_OUTSIDE_LIVE_ROOM_GUIDE: 3
            }
        }
    }
    ,
    516525: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                LINKMIC_AUDIENCE_PERMISSION_AS_VIEWER_NONE: 0,
                LINKMIC_AUDIENCE_PERMISSION_AS_VIEWER_OK: 1,
                LINKMIC_AUDIENCE_PERMISSION_AS_VIEWER_NOT_OK: 2
            }
        }
    }
    ,
    19362: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                LINKMIC_AUDIENCE_RT_UNKNOWN: 0,
                LINKMIC_AUDIENCE_RT_AGREE: 1,
                LINKMIC_AUDIENCE_RT_REJECT: 2
            }
        }
    }
    ,
    304206: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                LINKMIC_AUDIENCE_SHARED_INVITATION_TYPE_NONE: 0,
                LINKMIC_AUDIENCE_SHARED_INVITATION_TYPE_NORMAL_LIVE: 1,
                LINKMIC_AUDIENCE_SHARED_INVITATION_TYPE_LINK: 2
            }
        }
    }
    ,
    100490: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                AUDIENCE_STATUS_UNKOWN: 0,
                WAITING: 1,
                LINKED: 2,
                FINISHED: 3,
                WAITING_AND_LINKED: 4
            }
        }
    }
    ,
    684688: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                content: {
                    type: "LinkmicAudienceNoticeText",
                    id: 1
                },
                button_content: {
                    type: "LinkmicAudienceNoticeText",
                    id: 2
                }
            }
        }
    }
    ,
    94612: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                AUDIENCE_TYPE_UNKNOWN: 0,
                VIDEO: 1,
                AUDIO: 2
            }
        }
    }
    ,
    717269: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                LINKMIC_AUDIENCE_USER_RETURN_TYPE_NONE: 0,
                LINKMIC_AUDIENCE_USER_RETURN_TYPE_PRIVATE_MSG: 1,
                LINKMIC_AUDIENCE_USER_RETURN_TYPE_DEEPLINK: 2,
                LINKMIC_AUDIENCE_USER_RETURN_TYPE_LINEUP: 3
            }
        }
    }
    ,
    451722: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            oneofs: {
                content: {
                    oneof: ["anchor_guide", "toast", "bubble_guide", "anchor_gift_guide", "rule_guide", "common_guide", "extreme_high_score_notice"]
                }
            },
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                notice_type: {
                    type: "BattleNoticeType",
                    id: 2
                },
                anchor_guide: {
                    type: "BattleNoticeAnchorGuide",
                    id: 3
                },
                toast: {
                    type: "BattleNoticeToast",
                    id: 4
                },
                bubble_guide: {
                    type: "BattleNoticeBubbleGuide",
                    id: 5
                },
                anchor_gift_guide: {
                    type: "BattleNoticeAnchorGiftGuide",
                    id: 6
                },
                rule_guide: {
                    type: "BattleNoticeRuleGuide",
                    id: 7
                },
                common_guide: {
                    type: "BattleNoticeCommonGuide",
                    id: 8
                },
                extreme_high_score_notice: {
                    type: "BattleNoticeExtremeHighScoreNotice",
                    id: 9
                }
            }
        }
    }
    ,
    538930: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            oneofs: {
                content: {
                    oneof: ["start", "task_update", "task_settle", "reward"]
                }
            },
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                task_message_type: {
                    type: "BattleTaskMessageType",
                    id: 2
                },
                start: {
                    type: "BattleTaskStart",
                    id: 3
                },
                task_update: {
                    type: "BattleTaskUpdate",
                    id: 4
                },
                task_settle: {
                    type: "BattleTaskSettle",
                    id: 5
                },
                reward: {
                    type: "BattleRewardSettle",
                    id: 6
                },
                battle_id: {
                    type: "int64",
                    id: 20
                }
            }
        }
    }
    ,
    867091: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                ControlV1: 0,
                ExperimentV1: 1,
                ExperimentV2: 2
            }
        }
    }
    ,
    402794: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                access_key: {
                    type: "string",
                    id: 1
                },
                link_mic_id: {
                    type: "int64",
                    id: 2
                },
                joinable: {
                    type: "bool",
                    id: 3
                },
                confluence_type: {
                    type: "int32",
                    id: 4
                },
                rtc_ext_info: {
                    type: "string",
                    id: 5
                },
                rtc_app_id: {
                    type: "string",
                    id: 6
                },
                rtc_app_sign: {
                    type: "string",
                    id: 7
                },
                linkmic_id_str: {
                    type: "string",
                    id: 8
                },
                vendor: {
                    type: "int64",
                    id: 9
                }
            }
        }
    }
    ,
    817472: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                LAYOUT_UNKNOWN: 0,
                BIG: 1,
                SMALL: 8,
                BIG_PARTY: 16
            }
        }
    }
    ,
    769520: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                RT_UNKNOWN: 0,
                RT_AGREE: 1,
                RT_REJECT: 2
            }
        }
    }
    ,
    983854: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                ROLE_TYPE_UNKOWN: 0,
                LEADER: 1,
                PLAYER: 2,
                INVITEE: 3
            }
        }
    }
    ,
    987643: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                LinkMic_Version_Old: 0,
                LinkMic_Version_Generic: 1
            }
        }
    }
    ,
    640516: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                key: {
                    type: "LinkmicSettingsKey",
                    id: 1
                },
                value: {
                    type: "LinkmicSettingsValue",
                    id: 2
                }
            }
        }
    }
    ,
    877400: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                NONE: 0,
                AL_IsTurnOn: 1,
                AL_AcceptMultiLinkmic: 2,
                AL_AcceptNotFollowerInvite: 3,
                AL_AllowGiftToOtherAnchors: 4,
                PK_IsTurnOn: 5,
                PK_AcceptNotFollowerInvite: 6,
                PK_AllowGiftToOtherAnchors: 7,
                AU_IsTurnOn: 8,
                AU_BigPartyAcceptNeedVerified: 9,
                AU_BigPartyOnlyAcceptFollowerApply: 10,
                AU_BigPartyGuestCanAcceptGift: 11,
                AU_IntimateChatOnlyAcceptFollowerApply: 12,
                AU_IntimateChatGuestCanAcceptGift: 13,
                AU_IntimateChatOnlyJoinThroughInvitation: 14,
                AU_IntimateChatAcceptNeedVerified: 15,
                AU_AudioChatAcceptNeedVerified: 16,
                AU_AudioChatOnlyAcceptFollowerApply: 17,
                AU_AudioChatGuestCanAcceptGift: 18,
                AU_BigPartyAllowAdminOperateAudience: 19,
                AU_IntimateChatAllowAdminOperateAudience: 20,
                AU_AudioChatAllowAdminOperateAudience: 21,
                AU_BigPartyEmojiEntrance: 22,
                AU_AudioChatEmojiEntrance: 23,
                AU_AllowAdminOperateAudience: 24,
                AU_MultiGuestReminder: 25
            }
        }
    }
    ,
    963270: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                UNSET: 0,
                OPEN: 1,
                OFF: 2
            }
        }
    }
    ,
    794735: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                LINKMIC_SHARE_REVENUE_NOT_SET: 0,
                LINKMIC_SHARE_REVENUE_OPEN: 1,
                LINKMIC_SHARE_REVENUE_CLOSE: 2
            }
        }
    }
    ,
    919125: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                UNSILENCE: 0,
                SILENCE_BY_SELF: 1,
                SILENCE_BY_OWNER: 2
            }
        }
    }
    ,
    59009: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                content: {
                    type: "LinkmicSocialNoticeText",
                    id: 1
                },
                button_content: {
                    type: "LinkmicSocialNoticeText",
                    id: 2
                }
            }
        }
    }
    ,
    567222: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                content: {
                    type: "LinkmicSocialNoticeText",
                    id: 1
                },
                button_content: {
                    type: "LinkmicSocialNoticeText",
                    id: 2
                },
                user: {
                    type: "webcast.data.User",
                    id: 3
                }
            }
        }
    }
    ,
    471110: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            oneofs: {
                content: {
                    oneof: ["turn_on_guide", "invite_guide", "apply_guide", "permit_guide"]
                }
            },
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                notice_type: {
                    type: "LinkmicSocialNoticeType",
                    id: 2
                },
                turn_on_guide: {
                    type: "LinkmicSocialTurnOnGuide",
                    id: 3
                },
                invite_guide: {
                    type: "LinkmicSocialInviteGuide",
                    id: 4
                },
                apply_guide: {
                    type: "LinkmicSocialApplyGuide",
                    id: 5
                },
                permit_guide: {
                    type: "LinkmicSocialPermitGuide",
                    id: 6
                }
            }
        }
    }
    ,
    653334: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                text: {
                    type: "string",
                    id: 1
                }
            }
        }
    }
    ,
    860361: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                SOCIAL_TURN_ON_GUIDE: 0,
                SOCIAL_INVITE_GUIDE: 1,
                SOCIAL_APPLY_GUIDE: 2,
                SOCIAL_PERMIT_GUIDE: 3
            }
        }
    }
    ,
    597e3: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                content: {
                    type: "LinkmicSocialNoticeText",
                    id: 1
                },
                button_content: {
                    type: "LinkmicSocialNoticeText",
                    id: 2
                },
                user: {
                    type: "webcast.data.User",
                    id: 3
                }
            }
        }
    }
    ,
    529703: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                content: {
                    type: "LinkmicSocialNoticeText",
                    id: 1
                },
                button_content: {
                    type: "LinkmicSocialNoticeText",
                    id: 2
                }
            }
        }
    }
    ,
    150418: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                LINKMIC_TYPE_NONE: 0,
                LINKMIC_TYPE_COHOST: 1,
                LINKMIC_TYPE_MULTI_GUEST: 2
            }
        }
    }
    ,
    361129: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                user_id: {
                    type: "int64",
                    id: 1
                },
                room_id: {
                    type: "int64",
                    id: 2
                },
                linkmic_id_str: {
                    type: "string",
                    id: 3
                },
                nick_name: {
                    type: "string",
                    id: 4
                },
                display_id: {
                    type: "string",
                    id: 5
                },
                avatar_thumb: {
                    type: "webcast.data.Image",
                    id: 6
                },
                user_id_str: {
                    type: "string",
                    id: 7
                },
                room_id_str: {
                    type: "string",
                    id: 8
                }
            }
        }
    }
    ,
    443121: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                user_id: {
                    type: "int64",
                    id: 1
                },
                linkmic_id_str: {
                    type: "string",
                    id: 2
                },
                room_id: {
                    type: "int64",
                    id: 3
                },
                linked_time: {
                    type: "int64",
                    id: 4
                }
            }
        }
    }
    ,
    367626: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                LINKMIC_USER_SETTING_DISTRIBUTE_TOAST_STATUS_UN_SET: 0,
                LINKMIC_USER_SETTING_DISTRIBUTE_TOAST_STATUS_CLEARED: 1
            }
        }
    }
    ,
    178542: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                LINKMIC_USER_SETTING_FLOW_DISTRIBUTE_UN_SET: 0,
                LINKMIC_USER_SETTING_FLOW_DISTRIBUTE_OPEN: 1,
                LINKMIC_USER_SETTING_FLOW_DISTRIBUTE_CLOSE: 2,
                LINKMIC_USER_SETTING_FLOW_DISTRIBUTE_FOLLOWER: 3,
                LINKMIC_USER_SETTING_FLOW_DISTRIBUTE_ALL: 4
            }
        }
    }
    ,
    389764: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                LINKMIC_USER_SETTING_GUEST_CAMERA_STATUS_UN_SET: 0,
                LINKMIC_USER_SETTING_GUEST_CAMERA_STATUS_OPEN: 1,
                LINKMIC_USER_SETTING_GUEST_CAMERA_STATUS_CLOSE: 2
            }
        }
    }
    ,
    93208: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                LINKMIC_USER_SETTING_GUEST_RANK_LIST_SHOW_UN_SET: 0,
                LINKMIC_USER_SETTING_GUEST_RANK_LIST_SHOW_OPEN: 1,
                LINKMIC_USER_SETTING_GUEST_RANK_LIST_SHOW_CLOSE: 2
            }
        }
    }
    ,
    326973: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                user_id: {
                    type: "int64",
                    id: 1
                },
                layout: {
                    type: "LinkmicUserSettingLayout",
                    id: 2
                },
                fix_mic_num: {
                    type: "LinkmicUserSettingShowAction",
                    id: 3
                },
                allow_request_from_user: {
                    type: "LinkmicUserSettingShowAction",
                    id: 4
                },
                allow_request_from_follower_only: {
                    type: "LinkmicUserSettingShowAction",
                    id: 5
                },
                applier_sort_setting: {
                    type: "LinkmicApplierSortSetting",
                    id: 7
                },
                applier_sort_gift_score_threshold: {
                    type: "int64",
                    id: 8
                },
                allow_request_from_friends: {
                    type: "LinkmicUserSettingShowAction",
                    id: 9
                },
                allow_request_from_followers: {
                    type: "LinkmicUserSettingShowAction",
                    id: 10
                },
                allow_request_from_others: {
                    type: "LinkmicUserSettingShowAction",
                    id: 11
                },
                enable_show_multi_guest_layout: {
                    type: "LinkmicUserSettingShowAction",
                    id: 12
                }
            }
        }
    }
    ,
    15531: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                LINKMIC_USER_SETTING_LAYOUT_GRID: 0,
                LINKMIC_USER_SETTING_LAYOUT_FLOATING: 1
            }
        }
    }
    ,
    161822: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                LINKMIC_USER_SETTING_SHOW_ACTION_CHECKED: 0,
                LINKMIC_USER_SETTING_SHOW_ACTION_NOT_CHECKED: 1,
                LINKMIC_USER_SETTING_SHOW_ACTION_HIDE: 2,
                LINKMIC_USER_SETTING_SHOW_ACTION_OPEN: 3,
                LINKMIC_USER_SETTING_SHOW_ACTION_CLOSE: 4
            }
        }
    }
    ,
    526009: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                user_id: {
                    type: "int64",
                    id: 1
                },
                room_id: {
                    type: "int64",
                    id: 2
                },
                display_text: {
                    type: "webcast.data.Text",
                    id: 3
                },
                leaved_user_id: {
                    type: "int64",
                    id: 4
                }
            }
        }
    }
    ,
    496182: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                UPDATE_DEFAULT_SCENE: 0,
                UPDATE_BACKGROUND_SCENE: 1,
                UPDATE_SHARE_REVENUE_SCENE: 2,
                UPDATE_EMPTY_SEAT_DISPLAY_SCENE: 3
            }
        }
    }
    ,
    266503: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                user_infos: {
                    keyType: "int64",
                    type: "tikcast.linkmic.common.CohostUserInfo",
                    id: 1
                },
                waiting_users: {
                    rule: "repeated",
                    type: "webcast.data.VirtualWaitingUser",
                    id: 2
                }
            }
        }
    }
    ,
    398220: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                type: {
                    type: "ListChangeType",
                    id: 1
                },
                list: {
                    type: "tikcast.linkmic.common.AllListUser",
                    id: 2
                },
                linked_user_ui_positions: {
                    rule: "repeated",
                    type: "string",
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
    87825: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                LIST_LEAVE: 0,
                LIST_JOIN_CHANNEL: 1,
                LIST_APPLY: 2,
                LIST_INVITE: 3,
                LIST_KICK_OUT: 4,
                LIST_CANCEL_INVITE: 5,
                LIST_CANCEL_APPLY: 6,
                LIST_JOIN_DIRECT: 7,
                LIST_PERMIT: 8,
                LIST_M_UPDATE_POSITION: 9,
                LIST_CHANGE_LAYOUT: 10,
                LIST_CONTENT_POSITION_UPDATED: 11,
                LIST_INNER_STATE_CHANGE_NOTIFY: 1e6
            }
        }
    }
    ,
    259892: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                msg_type: {
                    type: "MsgType",
                    id: 2
                },
                nick_name: {
                    type: "string",
                    id: 3
                },
                purchase_cnt: {
                    type: "int64",
                    id: 4
                },
                text: {
                    type: "string",
                    id: 5
                },
                icon: {
                    type: "string",
                    id: 6
                },
                meta_id: {
                    type: "int64",
                    id: 7
                },
                server_time: {
                    type: "int64",
                    id: 8
                },
                countdown: {
                    type: "int64",
                    id: 9
                },
                activity_json_str: {
                    type: "string",
                    id: 10
                },
                coupon_type: {
                    type: "CouponType",
                    id: 11
                },
                activity_info: {
                    type: "CouponActivityInfoMessage",
                    id: 12
                },
                coupon_meta: {
                    type: "CouponMetaInfoMessage",
                    id: 13
                }
            },
            nested: {
                MsgType: {
                    values: {
                        BARRAGE_BUY: 0,
                        COUPON_START: 1,
                        COUPON_END: 2,
                        COUPON_ZERO_AMOUNT: 3
                    }
                },
                CouponType: {
                    values: {
                        COUPON: 0,
                        COUPON_COMBO: 1
                    }
                }
            }
        }
    }
    ,
    689720: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
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
                    type: "webcast.data.EventCard",
                    id: 3
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
    758803: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                LiveFlashSaleActivityStockStatus_Unknown: 0,
                LiveFlashSaleActivityStockStatus_Sufficient: 1,
                LiveFlashSaleActivityStockStatus_Insufficient: 2,
                LiveFlashSaleActivityStockStatus_Soldout: 3
            }
        }
    }
    ,
    172902: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                activity_id: {
                    type: "int64",
                    id: 1
                },
                type: {
                    type: "Type",
                    id: 2
                },
                status: {
                    type: "Status",
                    id: 3
                },
                stock_status: {
                    type: "StockStatus",
                    id: 4
                },
                available_stock: {
                    type: "int32",
                    id: 5
                }
            },
            nested: {
                Status: {
                    values: {
                        Default: 0,
                        PreLaunch: 1,
                        PreHeat: 2,
                        Launch: 3,
                        Expired: 4,
                        Deactivated: 5
                    }
                },
                Type: {
                    values: {
                        None: 0,
                        Seller: 1,
                        Creator: 2,
                        CreatorExclusiveStock: 3
                    }
                },
                StockStatus: {
                    values: {
                        Unknown: 0,
                        Sufficient: 1,
                        Insufficient: 2,
                        Soldout: 3
                    }
                }
            }
        }
    }
    ,
    33244: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                LiveFlashSaleStatus_Unknown: 0,
                LiveFlashSaleStatus_PreLaunch: 1,
                LiveFlashSaleStatus_PreHeat: 2,
                LiveFlashSaleStatus_Launch: 3,
                LiveFlashSaleStatus_Expired: 4,
                LiveFlashSaleStatus_Deactivated: 5
            }
        }
    }
    ,
    862454: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                mp4_video_meta_info: {
                    type: "webcast.data.VideoMetaInfo",
                    id: 34
                }
            }
        }
    }
    ,
    1174: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                icon: {
                    type: "string",
                    id: 1
                },
                desc: {
                    type: "string",
                    id: 2
                }
            }
        }
    }
    ,
    899580: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                content: {
                    type: "webcast.data.Text",
                    id: 2
                },
                has_rank_info: {
                    type: "bool",
                    id: 3
                }
            }
        }
    }
    ,
    975959: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                LIVE_INFO_AUDIT_CONTENT_TYPE_TITLE: 0,
                LIVE_INFO_AUDIT_CONTENT_TYPE_COVER: 1,
                LIVE_INFO_AUDIT_CONTENT_TYPE_ABOUT_ME: 2
            }
        }
    }
    ,
    546809: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                audit_content_type: {
                    type: "LiveInfoAuditContentType",
                    id: 2
                },
                audit_status: {
                    type: "LiveInfoAuditStatus",
                    id: 3
                },
                text_starling_key: {
                    type: "string",
                    id: 4
                }
            }
        }
    }
    ,
    972170: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                LIVE_INFO_AUDIT_STATUS_ONGOING: 0,
                LIVE_INFO_AUDIT_STATUS_PASS: 1,
                LIVE_INFO_AUDIT_STATUS_UNKNOWN: 2,
                LIVE_INFO_AUDIT_STATUS_REJECT: 3
            }
        }
    }
    ,
    340606: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                id: {
                    type: "int64",
                    id: 2
                },
                audit_status: {
                    type: "AuditStatus",
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
                intro_mode: {
                    type: "int32",
                    id: 6
                },
                badges: {
                    rule: "repeated",
                    type: "webcast.data.BadgeStruct",
                    id: 7
                },
                content_language: {
                    type: "string",
                    id: 8
                }
            }
        }
    }
    ,
    793948: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                task_info: {
                    type: "LiveJourneyTaskRecordInfo",
                    id: 1
                },
                week_num: {
                    type: "int64",
                    id: 2
                },
                week_start_time: {
                    type: "int64",
                    id: 3
                },
                week_end_time: {
                    type: "int64",
                    id: 4
                }
            }
        }
    }
    ,
    525043: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                task_list: {
                    rule: "repeated",
                    type: "LiveJourneyTaskRecordInfo",
                    id: 1
                }
            }
        }
    }
    ,
    557730: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                msg: {
                    type: "string",
                    id: 1
                },
                level: {
                    type: "int64",
                    id: 2
                },
                type: {
                    type: "LiveJourneyImMessageType",
                    id: 3
                }
            }
        }
    }
    ,
    934794: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                LIVE_JOURNEY_IM_MESSAGE_TYPE_UNKNOWN: 0,
                LIVE_JOURNEY_IM_MESSAGE_TYPE_FIRST_INIT: 1,
                LIVE_JOURNEY_IM_MESSAGE_TYPE_FIRST_LIVE_WEEKLY: 2,
                LIVE_JOURNEY_IM_MESSAGE_TYPE_TASK_DONE: 3,
                LIVE_JOURNEY_IM_MESSAGE_TYPE_LEVEL_UPGRADE: 4
            }
        }
    }
    ,
    621739: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                current_level: {
                    type: "int64",
                    id: 1
                },
                task_info: {
                    type: "LiveJourneyTaskInfo",
                    id: 2
                },
                level_info_list: {
                    rule: "repeated",
                    type: "LiveJourneyLevelInfo",
                    id: 3
                },
                time_zone: {
                    type: "string",
                    id: 4
                }
            }
        }
    }
    ,
    103833: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                level: {
                    type: "int64",
                    id: 1
                },
                current_exp: {
                    type: "int64",
                    id: 2
                },
                need_exp: {
                    type: "int64",
                    id: 3
                },
                status: {
                    type: "LiveJourneyLevelStatus",
                    id: 4
                },
                create_time: {
                    type: "int64",
                    id: 5
                },
                complete_time: {
                    type: "int64",
                    id: 6
                },
                reward_info: {
                    type: "LiveJourneyRewardInfo",
                    id: 7
                },
                is_final_level: {
                    type: "bool",
                    id: 8
                },
                next_level_reward_info: {
                    type: "webcast.data.AnchorGrowRewardInfo",
                    id: 9
                }
            }
        }
    }
    ,
    125519: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                LIVE_JOURNEY_LEVEL_STATUS_UNKNOWN: 0,
                LIVE_JOURNEY_LEVEL_STATUS_NOT_STARTED: 1,
                LIVE_JOURNEY_LEVEL_STATUS_IN_PROGRESS: 2,
                LIVE_JOURNEY_LEVEL_STATUS_COMPLETED: 3
            }
        }
    }
    ,
    485324: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                live_journey_im_msg: {
                    type: "webcast.data.LiveJourneyImMessage",
                    id: 2
                }
            }
        }
    }
    ,
    441608: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                reward_info: {
                    type: "webcast.data.AnchorGrowRewardInfo",
                    id: 1
                },
                receive_time: {
                    type: "int64",
                    id: 2
                },
                reward_status: {
                    type: "webcast.data.AnchorGrowRewardStatus",
                    id: 3
                },
                expire_time: {
                    type: "int64",
                    id: 4
                }
            }
        }
    }
    ,
    155343: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                LIVE_JOURNEY_TASK_ICON_TYPE_NONE: 0,
                LIVE_JOURNEY_TASK_ICON_TYPE_VIDEO_PLAY: 1,
                LIVE_JOURNEY_TASK_ICON_TYPE_ARROW_TURE_UP_RIGHT: 2,
                LIVE_JOURNEY_TASK_ICON_TYPE_COMMENT: 3,
                LIVE_JOURNEY_TASK_ICON_TYPE_PERSON: 4,
                LIVE_JOURNEY_TASK_ICON_TYPE_GIFT: 5,
                LIVE_JOURNEY_TASK_ICON_TYPE_SHIELD: 6,
                LIVE_JOURNEY_TASK_ICON_TYPE_MUSIC: 7,
                LIVE_JOURNEY_TASK_ICON_TYPE_CAMERA_STICKER: 8,
                LIVE_JOURNEY_TASK_ICON_TYPE_TEXT: 9,
                LIVE_JOURNEY_TASK_ICON_TYPE_LINES_HORIZONTAL: 10,
                LIVE_JOURNEY_TASK_ICON_TYPE_VIDEO_STACK: 11,
                LIVE_JOURNEY_TASK_ICON_TYPE_CALENDAR_STAR: 12,
                LIVE_JOURNEY_TASK_ICON_TYPE_STAR_ON_FEED: 13,
                LIVE_JOURNEY_TASK_ICON_TYPE_BOTTOM_FRIENDS: 14,
                LIVE_JOURNEY_TASK_ICON_TYPE_GO_LIVE_TOGETHER: 15,
                LIVE_JOURNEY_TASK_ICON_TYPE_BOXING_GLOVES: 16
            }
        }
    }
    ,
    563142: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                weekly_task_info: {
                    type: "LiveJourneyWeeklyTaskInfo",
                    id: 1
                },
                challenge_task_info: {
                    type: "LiveJourneyChallengeTaskInfo",
                    id: 2
                }
            }
        }
    }
    ,
    935111: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                task_record_id: {
                    type: "string",
                    id: 1
                },
                task_id: {
                    type: "string",
                    id: 2
                },
                title: {
                    type: "string",
                    id: 3
                },
                current_num: {
                    type: "int64",
                    id: 4
                },
                target_num: {
                    type: "int64",
                    id: 5
                },
                measure_name: {
                    type: "string",
                    id: 6
                },
                reward_num: {
                    type: "int64",
                    id: 7
                },
                loop_info: {
                    type: "LiveJourneyTaskRecordLoopInfo",
                    id: 8
                },
                challenge_icon: {
                    type: "string",
                    id: 9
                },
                task_guide_info: {
                    type: "AnchorTaskGuideInfo",
                    id: 10
                },
                icon_type: {
                    type: "LiveJourneyTaskIconType",
                    id: 11
                },
                task_status: {
                    type: "webcast.data.AnchorGrowTaskStatus",
                    id: 12
                },
                task_start_time: {
                    type: "int64",
                    id: 13
                },
                task_expire_time: {
                    type: "int64",
                    id: 14
                },
                task_complete_time: {
                    type: "int64",
                    id: 15
                }
            }
        }
    }
    ,
    308893: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                already_loop_num: {
                    type: "int64",
                    id: 1
                },
                max_loop_num: {
                    type: "int64",
                    id: 2
                }
            }
        }
    }
    ,
    468261: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                task_list: {
                    rule: "repeated",
                    type: "LiveJourneyTaskRecordInfo",
                    id: 1
                },
                left_time: {
                    type: "int64",
                    id: 2
                }
            }
        }
    }
    ,
    226612: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                end_time: {
                    type: "int64",
                    id: 1
                },
                reason: {
                    type: "string",
                    id: 2
                }
            }
        }
    }
    ,
    195304: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                is_live_pro: {
                    type: "bool",
                    id: 1
                },
                show_banner: {
                    type: "bool",
                    id: 2
                },
                banner: {
                    type: "webcast.data.Image",
                    id: 3
                },
                banner_starling_key: {
                    type: "string",
                    id: 4
                },
                label: {
                    type: "webcast.data.Image",
                    id: 5
                },
                live_pro_type: {
                    type: "LiveProType",
                    id: 6
                },
                gamer_label: {
                    type: "webcast.data.Image",
                    id: 7
                },
                gamer_banner_starling_key: {
                    type: "string",
                    id: 8
                }
            }
        }
    }
    ,
    989252: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                LIVE_PRO_TYPE_DEFAULT: 0,
                LIVE_PRO_TYPE_GAMER: 1
            }
        }
    }
    ,
    405695: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                task_id: {
                    type: "string",
                    id: 1
                },
                game_link_type: {
                    type: "PublisherAnchorType",
                    id: 2
                },
                game_id: {
                    type: "string",
                    id: 3
                },
                game_name: {
                    type: "string",
                    id: 4
                },
                game_icon: {
                    type: "string",
                    id: 5
                },
                estimated_earnings: {
                    type: "string",
                    id: 6
                },
                start_ts: {
                    type: "int64",
                    id: 7
                },
                end_ts: {
                    type: "int64",
                    id: 8
                },
                is_joined: {
                    type: "bool",
                    id: 9
                },
                task_status: {
                    type: "PublisherTaskStatus",
                    id: 10
                },
                remain_budget: {
                    type: "string",
                    id: 11
                },
                total_budget: {
                    type: "string",
                    id: 12
                },
                max_complete_times: {
                    type: "int64",
                    id: 13
                },
                unit_price: {
                    type: "string",
                    id: 14
                },
                max_earnings: {
                    type: "string",
                    id: 15
                },
                task_requirement: {
                    type: "LivePublisherTaskDetailRequirement",
                    id: 16
                },
                remain_budget_percent: {
                    type: "float",
                    id: 17
                },
                budget_control: {
                    type: "BudgetControl",
                    id: 18
                },
                task_offline_reason: {
                    type: "PublisherTaskOfflineReason",
                    id: 19
                },
                game_tag_id: {
                    type: "string",
                    id: 20
                }
            }
        }
    }
    ,
    260944: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                room_uv: {
                    type: "int64",
                    id: 1
                },
                content_consistent_duration: {
                    type: "int64",
                    id: 2
                },
                gamepad_mount_duration: {
                    type: "int64",
                    id: 3
                },
                other_requirement: {
                    rule: "repeated",
                    type: "string",
                    id: 4
                }
            }
        }
    }
    ,
    620544: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                can_record: {
                    type: "bool",
                    id: 1
                },
                has_fixed_floating_ball: {
                    type: "bool",
                    id: 2
                },
                max_record_duration: {
                    type: "int64",
                    id: 3
                },
                min_storage_size: {
                    type: "int64",
                    id: 4
                }
            }
        }
    }
    ,
    926063: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                LiveRoomModeNormal: 0,
                LiveRoomModeOBS: 1,
                LiveRoomModeMedia: 2,
                LiveRoomModeAudio: 3,
                LiveRoomModeScreen: 4,
                LiveRoomModeLiveStudio: 6,
                LiveRoomModeLiveVoice: 7
            }
        }
    }
    ,
    393716: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                msg_type: {
                    type: "MsgType",
                    id: 2
                },
                promotion_id: {
                    type: "int64",
                    id: 3
                },
                target_uid: {
                    rule: "repeated",
                    type: "int64",
                    id: 4
                },
                bubble_type: {
                    type: "BubbleType",
                    id: 5
                },
                screenshot_timestamp: {
                    type: "int64",
                    id: 6
                },
                sec_target_uid: {
                    rule: "repeated",
                    type: "string",
                    id: 7
                },
                ecom_notice: {
                    type: "string",
                    id: 8
                },
                updated_product_ids: {
                    rule: "repeated",
                    type: "int64",
                    id: 9
                },
                update_type: {
                    type: "UpdateType",
                    id: 10
                },
                updated_product_info: {
                    type: "UpdatedProductInfo",
                    id: 11
                },
                sold_out: {
                    type: "bool",
                    id: 12
                },
                updated_coupon_info: {
                    type: "UpdatedCouponInfo",
                    id: 13
                },
                updated_campaign_info: {
                    type: "UpdatedCampaignInfo",
                    id: 14
                },
                update_timestamp: {
                    type: "int64",
                    id: 15
                },
                button_label: {
                    type: "string",
                    id: 16
                },
                promotions_num: {
                    type: "int64",
                    id: 17
                },
                update_sku_info: {
                    type: "UpdatedSkuInfo",
                    id: 18
                }
            },
            nested: {
                MsgType: {
                    values: {
                        HAS_PROMOTIONS: 0,
                        NO_PROMOTIONS: 1,
                        BUBBLE_PROMOTION: 2,
                        CANCEL_CURRENT_PROMOTION: 3,
                        DIALOG_PROMOTION: 4,
                        AUTHOR_SCREEN_SHOT: 5,
                        ECOM_NOTICE: 6,
                        UPDATE_PRODUCT_INFO: 7,
                        FLASH_BUY: 8,
                        NO_FLASH_BUY: 9
                    }
                },
                BubbleType: {
                    values: {
                        NORMAL: 0,
                        ALL_FLASH: 1
                    }
                },
                UpdateType: {
                    values: {
                        PRICE: 0,
                        SOLD_OUT: 1,
                        COUPON: 2,
                        CAMPAIGN: 3
                    }
                }
            }
        }
    }
    ,
    792379: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                message_type: {
                    type: "LiveShowMessageType",
                    id: 2
                },
                show_content: {
                    type: "webcast.data.multi_guest_play.ShowContent",
                    id: 3
                },
                showUserFinishReason: {
                    type: "ShowUserFinishReason",
                    id: 4
                },
                operator_user_info: {
                    type: "tikcast.linkmic.common.LinkerMediaChangeOperator",
                    id: 5
                }
            }
        }
    }
    ,
    274851: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                LIVE_SHOW_UNKNOWN: 0,
                LIVE_SHOW_CREATE_SHOW: 1,
                LIVE_SHOW_NEXT_GUEST: 2,
                LIVE_SHOW_FINISH_GUEST: 3,
                LIVE_SHOW_SHOW_AGAIN_GUEST: 4,
                LIVE_SHOW_END_SHOW: 5,
                LIVE_SHOW_CONTENT_CHANGED: 6,
                LIVE_SHOW_HOST_TRANSITION_START: 7
            }
        }
    }
    ,
    659207: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
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
    379995: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                gift_type: {
                    type: "string",
                    id: 1
                },
                gift_duration: {
                    type: "int64",
                    id: 2
                },
                need_screen_shot: {
                    type: "bool",
                    id: 3
                },
                should_multi_frame: {
                    type: "bool",
                    id: 4
                },
                view_overlay: {
                    type: "string",
                    id: 5
                },
                bef_view_render_size: {
                    type: "BefViewRenderSize",
                    id: 6
                },
                bef_view_render_fps: {
                    type: "int32",
                    id: 7
                },
                bef_view_fit_mode: {
                    type: "int32",
                    id: 8
                },
                model_names: {
                    type: "string",
                    id: 9
                },
                requirements: {
                    rule: "repeated",
                    type: "string",
                    id: 10
                }
            }
        }
    }
    ,
    245617: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
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
    251171: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                condition_id: {
                    type: "int64",
                    id: 1
                },
                type: {
                    type: "int32",
                    id: 2
                },
                content: {
                    type: "string",
                    id: 3
                },
                status: {
                    type: "int32",
                    id: 4
                },
                description: {
                    type: "string",
                    id: 5
                },
                gift_id: {
                    type: "int64",
                    id: 6
                },
                gift_count: {
                    type: "int64",
                    id: 7
                },
                gift_name: {
                    type: "string",
                    id: 8
                },
                need_diamond_count: {
                    type: "int64",
                    id: 9
                }
            }
        }
    }
    ,
    846042: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                count_downs: {
                    rule: "repeated",
                    type: "int64",
                    id: 3
                },
                user_nums: {
                    rule: "repeated",
                    type: "int64",
                    id: 1
                },
                prize_counts: {
                    rule: "repeated",
                    type: "int64",
                    id: 2
                },
                default_config: {
                    type: "LotteryDefaultConfig",
                    id: 4
                },
                prize_type: {
                    type: "int32",
                    id: 5
                },
                prize_name: {
                    type: "string",
                    id: 6
                },
                user_condition_types: {
                    rule: "repeated",
                    type: "int32",
                    id: 7
                },
                lottery_condition_types: {
                    rule: "repeated",
                    type: "int32",
                    id: 8
                },
                gift_info_list: {
                    rule: "repeated",
                    type: "GiftInfo",
                    id: 9
                },
                gift_counts: {
                    rule: "repeated",
                    type: "int64",
                    id: 10
                },
                white_list: {
                    rule: "repeated",
                    type: "int64",
                    id: 11
                },
                black_list: {
                    rule: "repeated",
                    type: "int64",
                    id: 12
                },
                enable: {
                    type: "int64",
                    id: 13
                },
                prize_averages: {
                    rule: "repeated",
                    type: "int64",
                    id: 14
                },
                lottery_config_type: {
                    type: "int64",
                    id: 15
                }
            }
        }
    }
    ,
    174653: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                count_down: {
                    type: "int64",
                    id: 1
                },
                user_num: {
                    type: "int64",
                    id: 2
                },
                prize_count: {
                    type: "int64",
                    id: 3
                },
                gift_id: {
                    type: "int64",
                    id: 4
                },
                gift_count: {
                    type: "int64",
                    id: 5
                },
                is_first_lottery: {
                    type: "int64",
                    id: 6
                },
                command: {
                    type: "string",
                    id: 7
                },
                prize_name: {
                    type: "string",
                    id: 8
                },
                condition_types: {
                    rule: "repeated",
                    type: "int32",
                    id: 9
                },
                prize_average: {
                    type: "int64",
                    id: 10
                }
            }
        }
    }
    ,
    45295: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                lottery_id: {
                    type: "int64",
                    id: 2
                },
                lottery_status: {
                    type: "int32",
                    id: 3
                },
                lottery_start_time: {
                    type: "int64",
                    id: 4
                },
                lottery_draw_time: {
                    type: "int64",
                    id: 5
                },
                lottery_current_time: {
                    type: "int64",
                    id: 6
                },
                rule_page_scheme: {
                    type: "string",
                    id: 7
                }
            }
        }
    }
    ,
    651163: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                lottery_id: {
                    type: "int64",
                    id: 2
                },
                lottery_status: {
                    type: "int32",
                    id: 3
                },
                lottery_start_time: {
                    type: "int64",
                    id: 4
                },
                lottery_draw_time: {
                    type: "int64",
                    id: 5
                },
                lottery_current_time: {
                    type: "int64",
                    id: 6
                },
                rule_page_scheme: {
                    type: "string",
                    id: 7
                },
                prize_type: {
                    type: "int64",
                    id: 8
                }
            }
        }
    }
    ,
    830540: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                lottery_id: {
                    type: "int64",
                    id: 1
                },
                owner_user_id: {
                    type: "int64",
                    id: 2
                },
                anchor_id: {
                    type: "int64",
                    id: 3
                },
                owner_type: {
                    type: "int32",
                    id: 4
                },
                room_id: {
                    type: "int64",
                    id: 5
                },
                status: {
                    type: "int32",
                    id: 6
                },
                prize_info: {
                    type: "LotteryPrize",
                    id: 7
                },
                conditions: {
                    rule: "repeated",
                    type: "LotteryCondition",
                    id: 8
                },
                prize_count: {
                    type: "int64",
                    id: 9
                },
                lucky_count: {
                    type: "int64",
                    id: 10
                },
                count_down: {
                    type: "int64",
                    id: 11
                },
                start_time: {
                    type: "int64",
                    id: 12
                },
                draw_time: {
                    type: "int64",
                    id: 13
                },
                extra: {
                    type: "string",
                    id: 14
                },
                real_lucky_count: {
                    type: "int64",
                    id: 15
                },
                total_grant_count: {
                    type: "int64",
                    id: 16
                },
                withdraw_count: {
                    type: "int64",
                    id: 17
                },
                real_draw_time: {
                    type: "int64",
                    id: 18
                },
                lucky_users: {
                    rule: "repeated",
                    type: "LotteryLuckyUser",
                    id: 19
                },
                current_time: {
                    type: "int64",
                    id: 20
                },
                candidate_num: {
                    type: "int64",
                    id: 21
                },
                lottery_id_str: {
                    type: "string",
                    id: 22
                },
                room_id_str: {
                    type: "string",
                    id: 23
                },
                sec_anchor_id: {
                    type: "string",
                    id: 24
                },
                sec_owner_user_id: {
                    type: "string",
                    id: 25
                }
            }
        }
    }
    ,
    642013: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                lucky_id: {
                    type: "int64",
                    id: 1
                },
                lottery_id: {
                    type: "int64",
                    id: 2
                },
                room_id: {
                    type: "int64",
                    id: 3
                },
                user_id: {
                    type: "int64",
                    id: 4
                },
                user_name: {
                    type: "string",
                    id: 5
                },
                avatar_url: {
                    type: "string",
                    id: 6
                },
                grant_count: {
                    type: "int64",
                    id: 7
                },
                user_extra_info: {
                    type: "string",
                    id: 8
                },
                order_info: {
                    type: "string",
                    id: 9
                },
                sec_user_id: {
                    type: "string",
                    id: 10
                }
            }
        }
    }
    ,
    710549: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                }
            }
        }
    }
    ,
    159874: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                prize_id: {
                    type: "int64",
                    id: 1
                },
                type: {
                    type: "int32",
                    id: 2
                },
                name: {
                    type: "string",
                    id: 3
                },
                image: {
                    type: "string",
                    id: 4
                }
            }
        }
    }
    ,
    409054: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                is_watching: {
                    type: "bool",
                    id: 1
                },
                has_command: {
                    type: "bool",
                    id: 2
                },
                has_follow: {
                    type: "bool",
                    id: 3
                },
                is_fansclub_member: {
                    type: "bool",
                    id: 4
                },
                has_gift: {
                    type: "bool",
                    id: 5
                }
            }
        }
    }
    ,
    624738: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                anchor_id_str: {
                    type: "string",
                    id: 2
                },
                audience_id_str: {
                    type: "string",
                    id: 3
                },
                time_op_type: {
                    type: "TimeOpType",
                    id: 4
                },
                sub_op_type: {
                    type: "int64",
                    id: 5
                },
                sub_event_time: {
                    type: "int64",
                    id: 6
                }
            }
        }
    }
    ,
    235689: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                diamond_count: {
                    type: "int64",
                    id: 2
                },
                box_id: {
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
                },
                lucky_icon: {
                    type: "webcast.data.Image",
                    id: 14
                },
                display_duration: {
                    type: "int64",
                    id: 15
                },
                box_status: {
                    type: "int32",
                    id: 16
                },
                flat_duration: {
                    type: "int32",
                    id: 17
                },
                unpack_type: {
                    type: "int32",
                    id: 18
                },
                meta: {
                    type: "BoxMeta",
                    id: 19
                },
                extra: {
                    type: "Extra",
                    id: 20
                },
                business_type: {
                    type: "int64",
                    id: 21
                },
                top_cover_image: {
                    type: "webcast.data.Image",
                    id: 22
                },
                bottom_cover_image: {
                    type: "webcast.data.Image",
                    id: 23
                },
                box_id_str: {
                    type: "string",
                    id: 24
                },
                bottom_comment_msg: {
                    type: "BottomCommentMsg",
                    id: 25
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
                },
                BoxMeta: {
                    fields: {
                        title_desc: {
                            type: "string",
                            id: 1
                        },
                        content_count_desc: {
                            type: "string",
                            id: 2
                        },
                        content_amount_desc: {
                            type: "string",
                            id: 3
                        },
                        animation_desc: {
                            type: "string",
                            id: 4
                        },
                        before_unpack_desc: {
                            type: "string",
                            id: 5
                        },
                        success_unpack_desc: {
                            type: "string",
                            id: 6
                        },
                        fail_unpack_desc: {
                            type: "string",
                            id: 7
                        },
                        ad_image: {
                            type: "webcast.data.Image",
                            id: 8
                        },
                        im_desc: {
                            type: "string",
                            id: 9
                        }
                    }
                },
                Extra: {
                    fields: {
                        all_desc: {
                            keyType: "string",
                            type: "string",
                            id: 1
                        },
                        all_image: {
                            keyType: "string",
                            type: "webcast.data.Image",
                            id: 2
                        },
                        current_round: {
                            type: "int32",
                            id: 3
                        },
                        pct: {
                            type: "int32",
                            id: 4
                        },
                        round_target: {
                            rule: "repeated",
                            type: "int64",
                            id: 5
                        }
                    }
                },
                BottomCommentMsg: {
                    fields: {
                        text: {
                            type: "webcast.data.Text",
                            id: 1
                        },
                        background: {
                            type: "webcast.data.Image",
                            id: 2
                        },
                        left_icon: {
                            type: "webcast.data.Image",
                            id: 3
                        },
                        right_icon: {
                            type: "webcast.data.Image",
                            id: 4
                        }
                    }
                }
            }
        }
    }
    ,
    488710: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                deprecated1: {
                    type: "Image",
                    id: 1
                },
                deprecated2: {
                    type: "string",
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
                    type: "Image",
                    id: 5
                }
            }
        }
    }
    ,
    392594: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                user: {
                    type: "webcast.data.User",
                    id: 2
                },
                luckymoney_id: {
                    type: "int64",
                    id: 3
                },
                diamond_count: {
                    type: "int64",
                    id: 4
                }
            }
        }
    }
    ,
    764842: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                id: {
                    type: "int64",
                    id: 1
                },
                code: {
                    type: "int64",
                    id: 2
                },
                type: {
                    type: "int64",
                    id: 3
                },
                params: {
                    rule: "repeated",
                    type: "string",
                    id: 4
                },
                extra: {
                    type: "string",
                    id: 5
                }
            }
        }
    }
    ,
    765471: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            fields: {
                id: {
                    type: "int64",
                    id: 1
                },
                lyric_type: {
                    type: "LyricType",
                    id: 2
                },
                vid: {
                    type: "string",
                    id: 3
                },
                klyric_urls: {
                    rule: "repeated",
                    type: "string",
                    id: 4
                },
                lyric_status: {
                    type: "KaraokeStatus",
                    id: 5
                }
            }
        }
    }
    ,
    197126: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        const n = {
            values: {
                LYRIC_TYPE_NONE: 0,
                LYRIC_TYPE_TRC: 1,
                LYRIC_TYPE_LRC: 2,
                LYRIC_TYPE_KRC: 3,
                LYRIC_TYPE_TXT: 4,
                LYRIC_TYPE_JSON: 10,
                LYRIC_TYPE_PREVIEW_TXT: 11
            }
        }
    }
}]);
