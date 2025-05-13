"use strict";
(globalThis.__TIKTOK_CHUNKS__ = globalThis.__TIKTOK_CHUNKS__ || []).push([[9011], {
    512389: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                room_llm_title: {
                    type: "string",
                    id: 1
                },
                result_key: {
                    type: "string",
                    id: 2
                },
                create_timestamp: {
                    type: "int64",
                    id: 3
                },
                ai_live_summary_switch: {
                    type: "int32",
                    id: 4
                }
            }
        }
    }
    ,
    252250: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                ai_live_summary: {
                    type: "webcast.data.AILiveSummary",
                    id: 2
                }
            }
        }
    }
    ,
    112408: (t, e, i) => {
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
                    type: "string",
                    id: 2
                },
                show_at_first: {
                    type: "bool",
                    id: 3
                },
                icon: {
                    type: "webcast.data.Image",
                    id: 4
                },
                title: {
                    type: "webcast.data.Text",
                    id: 5
                },
                multi_lang_summary_list: {
                    rule: "repeated",
                    type: "MultiLangContent",
                    id: 6
                },
                click_title_scheme_link: {
                    type: "string",
                    id: 7
                },
                click_content_scheme_link: {
                    type: "string",
                    id: 8
                },
                long_press_area_scheme_link: {
                    type: "string",
                    id: 9
                },
                public_area_message_common: {
                    type: "PublicAreaMessageCommon",
                    id: 10
                },
                require_stay: {
                    type: "bool",
                    id: 11
                },
                stay_duration_ms: {
                    type: "int64",
                    id: 12
                }
            }
        }
    }
    ,
    764958: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                captcha_record_id: {
                    type: "int64",
                    id: 1
                },
                room_id: {
                    type: "int64",
                    id: 2
                },
                verify_duration_in_sec: {
                    type: "int64",
                    id: 3
                }
            }
        }
    }
    ,
    120635: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            oneofs: {
                msg_content: {
                    oneof: ["captcha"]
                }
            },
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                captcha: {
                    type: "AccessControlCaptcha",
                    id: 2
                }
            }
        }
    }
    ,
    237163: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
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
                end_time: {
                    type: "int64",
                    id: 4
                },
                scene: {
                    type: "string",
                    id: 5
                },
                notice: {
                    type: "webcast.data.Text",
                    id: 6
                },
                content: {
                    type: "webcast.data.Text",
                    id: 7
                },
                punish_info: {
                    type: "webcast.data.PunishEventInfo",
                    id: 8
                }
            }
        }
    }
    ,
    433427: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                vid: {
                    type: "string",
                    id: 1
                },
                accompaniment_urls: {
                    rule: "repeated",
                    type: "string",
                    id: 2
                },
                id: {
                    type: "int64",
                    id: 3
                },
                volume_loudness_lufs: {
                    type: "double",
                    id: 4
                },
                volume_amplitude_peak: {
                    type: "double",
                    id: 5
                }
            }
        }
    }
    ,
    588948: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                room_id: {
                    type: "int64",
                    id: 1
                },
                play_id: {
                    type: "int64",
                    id: 2
                },
                play_status: {
                    type: "ActivePlaybookStatus",
                    id: 3
                },
                playbook: {
                    type: "Playbook",
                    id: 4
                },
                exists_custom_content: {
                    type: "bool",
                    id: 5
                },
                start_time: {
                    type: "int64",
                    id: 6
                },
                end_time: {
                    type: "int64",
                    id: 7
                }
            }
        }
    }
    ,
    368562: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                ACTIVE_PLAYBOOK_STATUS_UNKNOWN: 0,
                ACTIVE_PLAYBOOK_STATUS_ONGOING: 1,
                ACTIVE_PLAYBOOK_STATUS_END: 2
            }
        }
    }
    ,
    178280: (t, e, i) => {
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
                primary_id: {
                    type: "string",
                    id: 3
                },
                timestamp: {
                    type: "int64",
                    id: 4
                },
                question: {
                    type: "webcast.data.QuizQuestionInfo",
                    id: 5
                },
                answer: {
                    type: "webcast.data.QuizAnswerInfo",
                    id: 6
                },
                final_result: {
                    type: "webcast.data.QuizFinalResult",
                    id: 7
                },
                call_up_webview: {
                    type: "webcast.data.QuizCallUpWebview",
                    id: 8
                },
                rules_introduction: {
                    type: "webcast.data.QuizRulesIntroduction",
                    id: 9
                },
                sei_delay_multiple: {
                    type: "float",
                    id: 10
                },
                sei_delay_bias: {
                    type: "int64",
                    id: 11
                },
                expired_time: {
                    type: "int64",
                    id: 12
                }
            }
        }
    }
    ,
    31521: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                primary_id: {
                    type: "string",
                    id: 2
                },
                version: {
                    type: "int64",
                    id: 3
                },
                retain_device_id: {
                    type: "string",
                    id: 4
                },
                timestamp: {
                    type: "int64",
                    id: 5
                },
                body: {
                    type: "webcast.data.QuizUserIdentityInfo",
                    id: 6
                }
            }
        }
    }
    ,
    807683: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                ACTIVITY_TASK_STATUS_INIT: 0,
                ACTIVITY_TASK_STATUS_DOING: 1,
                ACTIVITY_TASK_STATUS_ACCOMPLISH: 2,
                ACTIVITY_TASK_STATUS_REWARD_ALLOCATED: 3,
                ACTIVITY_TASK_STATUS_ANCHOR_JUST_VIEW: 10
            }
        }
    }
    ,
    332637: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                status: {
                    type: "AddToCartButtonStatus",
                    id: 1
                },
                click_hint_starling: {
                    type: "string",
                    id: 2
                }
            }
        }
    }
    ,
    473347: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                UnknowType: 0,
                Enabled: 1,
                Disabled: 2,
                Hidden: 3
            }
        }
    }
    ,
    279512: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                group_status: {
                    type: "GroupStatus",
                    id: 1
                }
            }
        }
    }
    ,
    816724: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                AGE_APPEAL_METHOD_DEFAULT_AGE_VERIFY_METHOD: 0,
                AGE_APPEAL_METHOD_HELP_WITH_ADULT: 1,
                AGE_APPEAL_METHOD_ID_VERIFICATION: 2,
                AGE_APPEAL_METHOD_CREDIT_CARD: 3,
                AGE_APPEAL_METHOD_FACIAL_AGE_ESTIMATION: 4,
                AGE_APPEAL_METHOD_ID_VERIFICATION_SELFIE: 5,
                AGE_APPEAL_METHOD_PARENTAL_CONSENT: 6,
                AGE_APPEAL_METHOD_OPS: 30,
                AGE_APPEAL_METHOD_KYC: 31,
                AGE_APPEAL_METHOD_UNKNOWN: 100
            }
        }
    }
    ,
    116746: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                UNKNOWNAgeIntervalEnum: 0,
                CHILDREN: 1,
                EARLY_TEEN: 2,
                LATE_TEEN: 3,
                ADULT: 4
            }
        }
    }
    ,
    950151: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                restricted: {
                    type: "bool",
                    id: 1
                },
                AgeInterval: {
                    type: "AgeIntervalEnum",
                    id: 2
                },
                source: {
                    type: "AgeRestrictedSource",
                    id: 3
                }
            }
        }
    }
    ,
    885686: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                UnknownSource: 0,
                AnchorSet: 1,
                LinkmicAnchorSet: 2,
                LCCPunish: 3
            }
        }
    }
    ,
    817091: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                Audience: {
                    type: "webcast.data.User",
                    id: 1
                },
                SuccessList: {
                    rule: "repeated",
                    type: "AggregationScene",
                    id: 2
                }
            }
        }
    }
    ,
    567331: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                Audience: 0,
                Anchor: 1
            }
        }
    }
    ,
    645171: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                AGREE_UNKNOWN: 0,
                AGREE: 1,
                REJECT: 2
            }
        }
    }
    ,
    916425: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                ID: {
                    type: "int64",
                    id: 1
                },
                AlertType: {
                    type: "int32",
                    id: 2
                },
                TosUrl: {
                    type: "string",
                    id: 3
                },
                AuditStatus: {
                    type: "MaterialAuditStatus",
                    id: 4
                }
            }
        }
    }
    ,
    170647: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                UserID: {
                    type: "int64",
                    id: 2
                },
                ImageList: {
                    rule: "repeated",
                    type: "AlertImage",
                    id: 3
                },
                TextList: {
                    rule: "repeated",
                    type: "AlertText",
                    id: 4
                },
                Scene: {
                    type: "string",
                    id: 5
                },
                AudioList: {
                    rule: "repeated",
                    type: "AlertAudio",
                    id: 6
                }
            }
        }
    }
    ,
    883978: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                ID: {
                    type: "int64",
                    id: 1
                },
                AlertType: {
                    type: "int32",
                    id: 2
                },
                TosUrl: {
                    type: "string",
                    id: 3
                },
                AuditStatus: {
                    type: "MaterialAuditStatus",
                    id: 4
                }
            }
        }
    }
    ,
    644320: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                ID: {
                    type: "int64",
                    id: 1
                },
                AlertType: {
                    type: "int32",
                    id: 2
                },
                Text: {
                    type: "string",
                    id: 3
                },
                AuditStatus: {
                    type: "MaterialAuditStatus",
                    id: 4
                }
            }
        }
    }
    ,
    606609: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                linked_list: {
                    rule: "repeated",
                    type: "LinkLayerListUser",
                    id: 2
                },
                applied_list: {
                    rule: "repeated",
                    type: "LinkLayerListUser",
                    id: 3
                },
                invited_list: {
                    rule: "repeated",
                    type: "LinkLayerListUser",
                    id: 4
                },
                ready_list: {
                    rule: "repeated",
                    type: "LinkLayerListUser",
                    id: 5
                }
            }
        }
    }
    ,
    453279: (t, e, i) => {
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
                startTime: {
                    type: "int64",
                    id: 3
                },
                duration: {
                    type: "int64",
                    id: 4
                }
            }
        }
    }
    ,
    642880: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                AnchorCategory_Unknown: 0,
                AnchorCategory_NoFan: 1,
                AnchorCategory_InCompetentRanking: 2,
                AnchorCategory_InCompetentRanking_EU: 3,
                AnchorCategory_CompetentRanking: 4,
                AnchorCategory_CompetentRanking_EU: 5
            }
        }
    }
    ,
    202073: (t, e, i) => {
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
                    type: "string",
                    id: 2
                }
            }
        }
    }
    ,
    98540: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                avatar: {
                    type: "string",
                    id: 1
                }
            }
        }
    }
    ,
    165037: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
                has_next_level: {
                    type: "bool",
                    id: 4
                },
                is_completed: {
                    type: "bool",
                    id: 5
                },
                current_level_info: {
                    type: "AnchorGrowLevelLevelInfo",
                    id: 6
                },
                task_list: {
                    rule: "repeated",
                    type: "AnchorGrowTaskListItem",
                    id: 7
                }
            }
        }
    }
    ,
    748366: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                msg_type: {
                    type: "AnchorGrowLevelImMsgType",
                    id: 1
                },
                task_done_data: {
                    type: "AnchorGrowLevelImMsgTaskDone",
                    id: 2
                }
            }
        }
    }
    ,
    386769: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                level: {
                    type: "int64",
                    id: 1
                },
                is_final_level: {
                    type: "bool",
                    id: 2
                },
                is_complete_level: {
                    type: "bool",
                    id: 3
                },
                task_id: {
                    type: "int64",
                    id: 4
                },
                content: {
                    type: "string",
                    id: 5
                },
                starling_key: {
                    type: "string",
                    id: 6
                }
            }
        }
    }
    ,
    654643: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                Level: {
                    type: "int64",
                    id: 1
                },
                IsFinalLevel: {
                    type: "bool",
                    id: 2
                },
                IsCompleteLevel: {
                    type: "bool",
                    id: 3
                },
                TaskID: {
                    type: "int64",
                    id: 4
                }
            }
        }
    }
    ,
    546630: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                ANCHOR_GROW_LEVEL_IM_MSG_TYPE_TASK_DONE: 0,
                ANCHOR_GROW_LEVEL_IM_MSG_TYPE_LIVE_CENTER_BEGINNER: 1,
                ANCHOR_GROW_LEVEL_IM_MSG_TYPE_SCREEN: 2,
                ANCHOR_GROW_LEVEL_IM_MSG_TYPE_LIVE_CENTER_REWARD: 3,
                ANCHOR_GROW_LEVEL_IM_MSG_TYPE_LIVE_CENTER_INSTANCE_BEGINNER: 4
            }
        }
    }
    ,
    341018: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                msg_type: {
                    type: "AnchorGrowLevelImMsgType",
                    id: 1
                },
                notification_data: {
                    type: "AnchorGrowLevelImMsgNotification",
                    id: 2
                }
            }
        }
    }
    ,
    246507: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                level: {
                    type: "int64",
                    id: 1
                },
                is_special: {
                    type: "bool",
                    id: 2
                },
                desc: {
                    type: "string",
                    id: 3
                },
                reward_list: {
                    rule: "repeated",
                    type: "AnchorGrowRewardInfo",
                    id: 4
                }
            }
        }
    }
    ,
    412922: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                anchor_grow_level_im_msg: {
                    type: "webcast.data.AnchorGrowLevelImMsg",
                    id: 2
                },
                anchor_grow_level_im_msg_v2: {
                    type: "webcast.data.AnchorGrowLevelImMsgV2",
                    id: 3
                }
            }
        }
    }
    ,
    470952: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                level: {
                    type: "int64",
                    id: 1
                },
                reward_list: {
                    rule: "repeated",
                    type: "AnchorGrowRewardInfo",
                    id: 2
                },
                receive_time: {
                    type: "int64",
                    id: 3
                },
                expire_time: {
                    type: "int64",
                    id: 4
                },
                has_next_level: {
                    type: "bool",
                    id: 5
                }
            }
        }
    }
    ,
    631741: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                level: {
                    type: "int64",
                    id: 1
                },
                upgrade_level_time: {
                    type: "int64",
                    id: 2
                },
                task_list: {
                    rule: "repeated",
                    type: "AnchorGrowTaskListItem",
                    id: 3
                }
            }
        }
    }
    ,
    541596: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                icon: {
                    type: "string",
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
                num: {
                    type: "int64",
                    id: 4
                },
                type: {
                    type: "MotRewardType",
                    id: 5
                },
                lowercase_title: {
                    type: "string",
                    id: 6
                },
                mot_reward_id: {
                    type: "string",
                    id: 7
                }
            }
        }
    }
    ,
    428702: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                ANCHOR_GROW_REWARD_STATUS_UNKNOWN: 0,
                ANCHOR_GROW_REWARD_STATUS_NOT_REWARD: 1,
                ANCHOR_GROW_REWARD_STATUS_ONGOING: 2,
                ANCHOR_GROW_REWARD_STATUS_CAN_BE_CLAIM: 3,
                ANCHOR_GROW_REWARD_STATUS_CLAIMED: 4,
                ANCHOR_GROW_REWARD_STATUS_EXPRIE: 5
            }
        }
    }
    ,
    102816: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                ANCHOR_GROW_REWARD_TYPE_UNKNOWN: 0,
                ANCHOR_GROW_REWARD_TYPE_FLARE: 1,
                ANCHOR_GROW_REWARD_TYPE_GROW_LEVEL_EXP: 3
            }
        }
    }
    ,
    413089: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                task_id: {
                    type: "int64",
                    id: 1
                },
                task_name: {
                    type: "string",
                    id: 2
                },
                task_type: {
                    type: "webcast.data.AnchorGrowTaskType",
                    id: 3
                },
                task_status: {
                    type: "webcast.data.AnchorGrowTaskStatus",
                    id: 4
                },
                task_progress: {
                    rule: "repeated",
                    type: "webcast.data.AnchorTaskProgress",
                    id: 5
                },
                task_start_time: {
                    type: "int64",
                    id: 6
                },
                task_expire_time: {
                    type: "int64",
                    id: 7
                },
                reward_expire_time: {
                    type: "int64",
                    id: 8
                },
                reward_status: {
                    type: "webcast.data.AnchorGrowRewardStatus",
                    id: 9
                },
                reward_info: {
                    type: "webcast.data.AnchorTaskRewardInfo",
                    id: 10
                },
                task_finish_time: {
                    type: "int64",
                    id: 11
                },
                task_id_str: {
                    type: "string",
                    id: 12
                },
                task_reward_info: {
                    type: "webcast.data.AnchorGrowRewardInfo",
                    id: 13
                },
                task_record_id: {
                    type: "int64",
                    id: 14
                },
                task_record_id_str: {
                    type: "string",
                    id: 15
                }
            }
        }
    }
    ,
    225685: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                ANCHOR_GROW_TASK_STAGE_UNKNOWN: 0,
                ANCHOR_GROW_TASK_STAGE_ONE: 1,
                ANCHOR_GROW_TASK_STAGE_TWO: 2,
                ANCHOR_GROW_TASK_STAGE_THREE: 3,
                ANCHOR_GROW_TASK_STAGE_FOUR: 4,
                ANCHOR_GROW_TASK_STAGE_FIVE: 5,
                ANCHOR_GROW_TASK_STAGE_SIX: 6
            }
        }
    }
    ,
    716400: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                ANCHOR_GROW_TASK_STATUS_UNKNOWN: 0,
                ANCHOR_GROW_TASK_STATUS_NOT_START: 1,
                ANCHOR_GROW_TASK_STATUS_ON_GOING: 2,
                ANCHOR_GROW_TASK_STATUS_FINISHED: 3,
                ANCHOR_GROW_TASK_STATUS_EXPIRE: 4
            }
        }
    }
    ,
    419490: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                ANCHOR_GROW_TASK_TYPE_UNKNOWN: 0,
                ANCHOR_GROW_TASK_TYPE_DAILY: 1,
                ANCHOR_GROW_TASK_TYPE_WEEKLY: 2,
                ANCHOR_GROW_TASK_TYPE_NORMAL: 3,
                ANCHOR_GROW_TASK_TYPE_CHAINED: 4,
                ANCHOR_GROW_TASK_TYPE_BEGINNER: 5,
                ANCHOR_GROW_TASK_TYPE_LOOP: 6
            }
        }
    }
    ,
    834803: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                is_turn_on: {
                    type: "bool",
                    id: 1
                },
                accept_multi_linkmic: {
                    type: "bool",
                    id: 2
                },
                accept_not_follower_invite: {
                    type: "bool",
                    id: 3
                },
                allow_gift_to_other_anchors: {
                    type: "bool",
                    id: 4
                },
                block_invitation_of_this_live: {
                    type: "bool",
                    id: 5
                },
                receive_friend_multi_host_invites: {
                    type: "bool",
                    id: 6
                },
                receive_friend_multi_host_application: {
                    type: "bool",
                    id: 7
                },
                block_this_multi_host_invites: {
                    type: "bool",
                    id: 8
                },
                block_this_multi_host_application: {
                    type: "bool",
                    id: 9
                },
                receive_not_friend_multi_host_invites: {
                    type: "bool",
                    id: 10
                },
                receive_not_friend_multi_host_application: {
                    type: "bool",
                    id: 11
                },
                allow_live_notice_of_friends: {
                    type: "bool",
                    id: 12
                },
                allow_friend_invites: {
                    type: "bool",
                    id: 13
                },
                allow_suggested_invites: {
                    type: "bool",
                    id: 14
                }
            }
        }
    }
    ,
    345578: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                ANCHOR_LIVE_JOURNEY_GUIDE_TYPE_NONE: 0,
                ANCHOR_LIVE_JOURNEY_GUIDE_TYPE_INIT: 1,
                ANCHOR_LIVE_JOURNEY_GUIDE_TYPE_UPGRADE: 2
            }
        }
    }
    ,
    290072: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                team_rank_card: {
                    type: "TeamRankCard",
                    id: 1
                },
                anchor_tips_card: {
                    type: "AnchorTipsCard",
                    id: 2
                },
                team_mission_card: {
                    type: "TeamMissionCard",
                    id: 3
                }
            }
        }
    }
    ,
    223700: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                source_anchor_id: {
                    type: "int64",
                    id: 1
                },
                target_anchor_id: {
                    type: "int64",
                    id: 2
                }
            }
        }
    }
    ,
    589654: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                has_task: {
                    type: "bool",
                    id: 1
                },
                current_popularity_score: {
                    type: "int64",
                    id: 2
                },
                target_popularity_score: {
                    type: "int64",
                    id: 3
                }
            }
        }
    }
    ,
    267134: (t, e, i) => {
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
                    type: "string",
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
    728837: (t, e, i) => {
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
    686611: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                reminder_word_info: {
                    type: "AnchorReminderWordInfoMsg",
                    id: 2
                }
            }
        }
    }
    ,
    666116: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                scene: {
                    type: "string",
                    id: 1
                },
                status: {
                    type: "ReminderWordStatus",
                    id: 2
                },
                title: {
                    type: "string",
                    id: 3
                },
                desc: {
                    type: "string",
                    id: 4
                }
            }
        }
    }
    ,
    216742: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                last_layout_settings: {
                    rule: "repeated",
                    type: "AnchorLastLayoutSetting",
                    id: 1
                }
            },
            nested: {
                AnchorLastLayoutSetting: {
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
        }
    }
    ,
    466665: (t, e, i) => {
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
                need_sub_counts: {
                    type: "int64",
                    id: 3
                },
                during_time: {
                    type: "int64",
                    id: 4
                },
                emote_list: {
                    rule: "repeated",
                    type: "webcast.data.Emote",
                    id: 5
                }
            }
        }
    }
    ,
    349705: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                anchor_sub_wave_trigger_settings: {
                    type: "AnchorSubWaveTriggerSettings",
                    id: 1
                },
                anchor_sub_wave_challenge_settings: {
                    type: "AnchorSubWaveChallengeSettings",
                    id: 2
                }
            }
        }
    }
    ,
    285518: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                anchor_sub_wave_trigger_settings_list: {
                    rule: "repeated",
                    type: "AnchorSubWaveTriggerSettings",
                    id: 1
                },
                anchor_sub_wave_challenge_settings_list: {
                    rule: "repeated",
                    type: "AnchorSubWaveChallengeSettings",
                    id: 2
                }
            }
        }
    }
    ,
    192590: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                strike_enabled: {
                    type: "bool",
                    id: 1
                },
                need_sub_count: {
                    type: "int64",
                    id: 2
                },
                duration_time: {
                    type: "int64",
                    id: 3
                },
                emote_list: {
                    rule: "repeated",
                    type: "webcast.data.Emote",
                    id: 4
                }
            }
        }
    }
    ,
    792580: (t, e, i) => {
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
                need_sub_counts: {
                    type: "int64",
                    id: 3
                }
            }
        }
    }
    ,
    917289: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                guide_in_room: {
                    type: "AnchorTaskGuideInfoItem",
                    id: 1
                },
                guide_pre_live: {
                    type: "AnchorTaskGuideInfoItem",
                    id: 2
                },
                guide_out_room: {
                    type: "AnchorTaskGuideInfoItem",
                    id: 3
                }
            }
        }
    }
    ,
    549174: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                button_text: {
                    type: "string",
                    id: 1
                },
                redirect_schema: {
                    type: "string",
                    id: 2
                }
            }
        }
    }
    ,
    908730: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                task_target_des: {
                    type: "string",
                    id: 1
                },
                task_target_value: {
                    type: "int32",
                    id: 2
                },
                sub_target_value: {
                    type: "int32",
                    id: 3
                },
                sub_target_des: {
                    type: "string",
                    id: 4
                },
                task_target_finished: {
                    type: "int32",
                    id: 5
                },
                task_measure_name: {
                    type: "string",
                    id: 6
                },
                task_guide_info: {
                    type: "AnchorTaskGuideInfo",
                    id: 7
                }
            }
        }
    }
    ,
    785620: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                anchor_id: {
                    type: "string",
                    id: 1
                },
                record_id: {
                    type: "string",
                    id: 2
                },
                task_id: {
                    type: "string",
                    id: 3
                },
                task_type: {
                    type: "webcast.data.AnchorGrowTaskType",
                    id: 4
                },
                task_status: {
                    type: "webcast.data.AnchorGrowTaskStatus",
                    id: 5
                },
                task_effective_time: {
                    type: "int64",
                    id: 6
                },
                task_expire_time: {
                    type: "int64",
                    id: 7
                },
                reward_status: {
                    type: "webcast.data.AnchorGrowRewardStatus",
                    id: 8
                },
                reward_num: {
                    type: "int64",
                    id: 9
                },
                task_info_extra: {
                    type: "string",
                    id: 10
                },
                task_progress: {
                    type: "AnchorTaskRecordV2Progress",
                    id: 11
                },
                extra: {
                    keyType: "string",
                    type: "string",
                    id: 12
                },
                create_time: {
                    type: "int64",
                    id: 13
                },
                update_time: {
                    type: "int64",
                    id: 14
                },
                biz_key: {
                    type: "string",
                    id: 15
                }
            }
        }
    }
    ,
    559039: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                task_title: {
                    type: "string",
                    id: 1
                },
                target_value: {
                    type: "int64",
                    id: 2
                },
                finished_value: {
                    type: "int64",
                    id: 3
                },
                measure_name: {
                    type: "string",
                    id: 4
                }
            }
        }
    }
    ,
    131388: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                task_record_id: {
                    type: "string",
                    id: 2
                }
            }
        }
    }
    ,
    719930: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                reward_type: {
                    type: "webcast.data.AnchorGrowRewardType",
                    id: 1
                },
                reward_count: {
                    type: "int32",
                    id: 2
                }
            }
        }
    }
    ,
    127734: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                Show: 0,
                Hide: 1
            }
        }
    }
    ,
    812992: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                tip_list: {
                    rule: "repeated",
                    type: "Tip",
                    id: 1
                }
            }
        }
    }
    ,
    437330: (t, e, i) => {
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
                },
                effect_id: {
                    type: "int64",
                    id: 3
                },
                name: {
                    type: "string",
                    id: 4
                },
                resource_id: {
                    type: "string",
                    id: 5
                },
                modification_type: {
                    type: "ModificationType",
                    id: 6
                },
                role: {
                    type: "int64",
                    id: 7
                },
                msg_type: {
                    type: "ModificationMsgType",
                    id: 8
                },
                sub_type: {
                    type: "int64",
                    id: 9
                },
                start_time: {
                    type: "int64",
                    id: 10
                },
                end_time: {
                    type: "int64",
                    id: 11
                },
                duration: {
                    type: "int64",
                    id: 12
                },
                tab: {
                    type: "string",
                    id: 21
                },
                mode: {
                    type: "int64",
                    id: 22
                },
                from: {
                    type: "int64",
                    id: 23
                },
                value: {
                    type: "double",
                    id: 24
                },
                url: {
                    type: "string",
                    id: 25
                },
                scene: {
                    type: "string",
                    id: 26
                },
                status: {
                    type: "int64",
                    id: 27
                },
                content: {
                    type: "string",
                    id: 28
                }
            }
        }
    }
    ,
    262615: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                modification: {
                    type: "webcast.data.AnchorToolModification",
                    id: 2
                }
            }
        }
    }
    ,
    136739: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                gecko_channel_name: {
                    type: "string",
                    id: 1
                },
                file_name: {
                    type: "string",
                    id: 2
                },
                height: {
                    type: "int64",
                    id: 3
                },
                width: {
                    type: "int64",
                    id: 4
                },
                right_offset: {
                    type: "int64",
                    id: 5
                }
            }
        }
    }
    ,
    969479: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                NoAnimation: 0,
                EnterRank: 1,
                LeaveRank: 2,
                Rise: 3,
                Fall: 4,
                AfterSettle: 5,
                ClassGetStar: 6,
                ClassLoseStar: 7,
                ClassUpTop: 8,
                ClassDownBottom: 9,
                NewPeriodStart: 10
            }
        }
    }
    ,
    364590: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                show_appeal: {
                    type: "bool",
                    id: 1
                },
                appeal_status: {
                    type: "AppealStatus",
                    id: 2
                },
                room_id: {
                    type: "int64",
                    id: 3
                },
                host_center_appeal_type: {
                    type: "webcast.data.HostCenterAppealType",
                    id: 4
                }
            }
        }
    }
    ,
    236820: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                APPEAL_STATUS_NOT_APPEAL: 0,
                APPEAL_STATUS_ONGOING: 1,
                APPEAL_STATUS_SUCCESS: 2,
                APPEAL_STATUS_FAILED: 3
            }
        }
    }
    ,
    758602: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                user_id: {
                    type: "int64",
                    id: 1
                },
                is_display: {
                    type: "bool",
                    id: 2
                }
            }
        }
    }
    ,
    456927: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                user: {
                    type: "webcast.data.User",
                    id: 1
                }
            }
        }
    }
    ,
    588916: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                applier: {
                    type: "tikcast.linkmic.common.Player",
                    id: 1
                },
                applier_link_mic_id: {
                    type: "string",
                    id: 2
                }
            }
        }
    }
    ,
    117222: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                APPLY_LIMIT_TYPE_ALL_USER: 0,
                APPLY_LIMIT_TYPE_FOLLOWER_ONLY: 1,
                APPLY_LIMIT_TYPE_CREATOR_TEAM_ONLY: 2,
                APPLY_LIMIT_TYPE_SUBSCRIBER_ONLY: 3
            }
        }
    }
    ,
    407514: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                status: {
                    type: "int32",
                    id: 2
                },
                test_string: {
                    type: "string",
                    id: 3
                }
            }
        }
    }
    ,
    78938: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                icon: {
                    type: "Image",
                    id: 1
                }
            }
        }
    }
    ,
    488771: (t, e, i) => {
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
                },
                ask_demo_count: {
                    type: "int32",
                    id: 3
                },
                product_index: {
                    type: "int32",
                    id: 4
                }
            }
        }
    }
    ,
    712255: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                effect_starling_key: {
                    type: "string",
                    id: 1
                }
            }
        }
    }
    ,
    722658: (t, e, i) => {
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
                panel_display_text: {
                    type: "webcast.data.Text",
                    id: 3
                },
                show_message: {
                    type: "bool",
                    id: 4
                },
                show_panel: {
                    type: "bool",
                    id: 5
                },
                user: {
                    type: "webcast.data.User",
                    id: 6
                },
                to_user: {
                    type: "webcast.data.User",
                    id: 7
                },
                priority: {
                    type: "webcast.data.GiftIMPriority",
                    id: 8
                },
                log_id: {
                    type: "string",
                    id: 9
                },
                asset: {
                    type: "webcast.data.AssetStruct",
                    id: 10
                }
            }
        }
    }
    ,
    386404: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                name: {
                    type: "string",
                    id: 1
                },
                resource_uri: {
                    type: "string",
                    id: 2
                },
                legacy_effect_id: {
                    type: "int64",
                    id: 3
                },
                resource_url: {
                    type: "Image",
                    id: 4
                },
                describe: {
                    type: "string",
                    id: 5
                },
                id: {
                    type: "int64",
                    id: 6
                },
                resource_type: {
                    type: "int32",
                    id: 7
                },
                md5: {
                    type: "string",
                    id: 8
                },
                size: {
                    type: "int64",
                    id: 9
                },
                loki_content: {
                    type: "LokiContent",
                    id: 10
                },
                download_type: {
                    type: "int32",
                    id: 26
                },
                model_requirements: {
                    rule: "repeated",
                    type: "string",
                    id: 27
                },
                resource_bytevc1_url: {
                    type: "Image",
                    id: 28
                },
                bytevc1_md5: {
                    type: "string",
                    id: 29
                },
                video_resource_list: {
                    rule: "repeated",
                    type: "VideoResource",
                    id: 30
                },
                face_recognition_archive_meta: {
                    type: "FaceRecognitionArchiveMeta",
                    id: 31
                },
                lynx_url_settings_key: {
                    type: "string",
                    id: 32
                },
                downgrade_resource_type: {
                    type: "int32",
                    id: 33
                },
                asset_extra: {
                    type: "AssetExtra",
                    id: 34
                },
                sticker_asset_variant: {
                    type: "StickerAssetVariant",
                    id: 35
                },
                immediate_download: {
                    type: "bool",
                    id: 36
                },
                sticker_asset_variant_reason: {
                    type: "StickerAssetVariantReason",
                    id: 37
                }
            }
        }
    }
    ,
    346197: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                tags: {
                    rule: "repeated",
                    type: "Tag",
                    id: 1
                }
            },
            nested: {
                Tag: {
                    fields: {
                        type: {
                            type: "Type",
                            id: 1
                        },
                        desc: {
                            type: "string",
                            id: 2
                        },
                        count: {
                            type: "int64",
                            id: 3
                        },
                        status: {
                            type: "Status",
                            id: 4
                        }
                    },
                    nested: {
                        Type: {
                            values: {
                                Type_Unknown: 0,
                                Hot: 1,
                                UnderStock: 2,
                                TopSales: 3
                            }
                        },
                        Status: {
                            values: {
                                Status_Unknown: 0,
                                Active: 1,
                                Deactivated: 2
                            }
                        }
                    }
                }
            }
        }
    }
    ,
    727893: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                tag_type: {
                    type: "AtmosphereTagType",
                    id: 1
                },
                atmosphere_tags: {
                    rule: "repeated",
                    type: "ProductAtmosphereTag",
                    id: 2
                },
                pin_atmosphere_tags: {
                    rule: "repeated",
                    type: "ProductAtmosphereTag",
                    id: 3
                }
            }
        }
    }
    ,
    468245: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                AtmosphereTagType_Unknown: 0,
                AtmosphereTagType_Hot: 1,
                AtmosphereTagType_UnderStock: 2,
                AtmosphereTagType_TopSales: 3,
                AtmosphereTagType_OrderSold: 4
            }
        }
    }
    ,
    937698: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                type: {
                    type: "AtomActionType",
                    id: 1
                },
                request_item: {
                    type: "ReqItem",
                    id: 2
                }
            }
        }
    }
    ,
    889802: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                AtomActionType_Unknown: 0,
                PopCardByReq: 1001,
                CloseCard: 1002,
                PopRefreshByReq: 1003,
                PopRefreshByMsg: 1004,
                ForcePopRefreshByReq: 1005
            }
        }
    }
    ,
    924366: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                ATTRIBUTION_SCENE_LIVE: 0,
                ATTRIBUTION_SCENE_SEARCH: 1,
                ATTRIBUTION_SCENE_VIDEO: 2,
                ATTRIBUTION_SCENE_TTCM: 3,
                ATTRIBUTION_SCENE_ALL: 10,
                ATTRIBUTION_SCENE_TEST_SEARCH: 101,
                ATTRIBUTION_SCENE_TEST_SEARCH_VIEW: 201
            }
        }
    }
    ,
    868428: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                from_user_id: {
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
    618639: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                from_user_id: {
                    type: "int64",
                    id: 1
                }
            }
        }
    }
    ,
    654078: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                from_user_id: {
                    type: "int64",
                    id: 1
                }
            }
        }
    }
    ,
    369026: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                from_user_id: {
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
    838515: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                UnknownField: 0,
                Reserve: 1,
                Cancel: 2,
                Wait: 3,
                Done: 4,
                AUDIENCE_RESERVE_TYPE_REJECT: 5
            }
        }
    }
    ,
    246384: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                user_id: {
                    type: "int64",
                    id: 1
                },
                reserve_id: {
                    type: "int64",
                    id: 2
                }
            }
        }
    }
    ,
    992388: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            oneofs: {
                reserve_content: {
                    oneof: ["audience_reserve_content", "audience_cancel_content", "audience_reply_content", "audience_reject_content"]
                }
            },
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                room_id: {
                    type: "int64",
                    id: 2
                },
                type: {
                    type: "AudienceReserveType",
                    id: 3
                },
                audience_reserve_user_info: {
                    type: "AudienceReserveUserInfo",
                    id: 4
                },
                audience_reserve_content: {
                    type: "AudienceReserveContent",
                    id: 100
                },
                audience_cancel_content: {
                    type: "AudienceCancelContent",
                    id: 101
                },
                audience_reply_content: {
                    type: "AudienceReplyContent",
                    id: 102
                },
                audience_reject_content: {
                    type: "AudienceRejectContent",
                    id: 103
                }
            }
        }
    }
    ,
    147382: (t, e, i) => {
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
                content: {
                    type: "string",
                    id: 3
                },
                audio_url: {
                    type: "string",
                    id: 4
                },
                audio_duration: {
                    type: "int64",
                    id: 5
                }
            }
        }
    }
    ,
    841112: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                AUDIO_FORMAT_UNKNOWN: 0,
                AUDIO_FORMAT_MP3: 1,
                AUDIO_FORMAT_M4A: 2
            }
        }
    }
    ,
    868058: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                id: {
                    type: "int64",
                    id: 1
                },
                duration: {
                    type: "int32",
                    id: 2
                },
                audio_format: {
                    type: "AudioFormat",
                    id: 3
                },
                vid: {
                    type: "string",
                    id: 4
                },
                audio_urls: {
                    rule: "repeated",
                    type: "string",
                    id: 5
                },
                volume_loudness_lufs: {
                    type: "double",
                    id: 6
                },
                volume_amplitude_peak: {
                    type: "double",
                    id: 7
                }
            }
        }
    }
    ,
    454970: (t, e, i) => {
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
                    type: "AuditTaskType",
                    id: 2
                }
            }
        }
    }
    ,
    91344: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                AuditStatusUnknown: 0,
                AuditStatusPass: 1,
                AuditStatusFailed: 2,
                AuditStatusReviewing: 3,
                AuditStatusForbidden: 4
            }
        }
    }
    ,
    700047: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                AUDIT_TASK_TYPE_DEFAULT: 0,
                AUDIT_TASK_TYPE_APPEAL: 1
            }
        }
    }
    ,
    18254: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                auth_type: {
                    type: "AuthType",
                    id: 4
                },
                auth_link: {
                    type: "string",
                    id: 5
                },
                auth_link_android: {
                    type: "string",
                    id: 6
                },
                auth_link_ios: {
                    type: "string",
                    id: 7
                },
                fallback_link: {
                    type: "string",
                    id: 8
                },
                android_package_name: {
                    type: "string",
                    id: 9
                }
            },
            nested: {
                AuthType: {
                    values: {
                        AUTH_TYPE_WEB_URL: 0,
                        AUTH_TYPE_DEEPLINK_FALLBACK_STORE: 1,
                        AUTH_TYPE_DEEPLINK_FALLBACK_WEB: 2,
                        AUTH_TYPE_WEB_URL_BROWSER: 3,
                        AUTH_TYPE_DEEPLINK_FALLBACK_WEB_BROWSER: 4,
                        AUTH_TYPE_JUMP_MLBB: 5
                    }
                }
            }
        }
    }
    ,
    549490: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                from: {
                    type: "string",
                    id: 2
                },
                content: {
                    type: "string",
                    id: 3
                },
                style: {
                    type: "string",
                    id: 4
                },
                user_content: {
                    type: "ContentBlock",
                    id: 6
                },
                user_relation: {
                    type: "RelationBlock",
                    id: 7
                }
            },
            nested: {
                ContentBlock: {
                    fields: {
                        show: {
                            type: "bool",
                            id: 1
                        },
                        is_authorized: {
                            type: "bool",
                            id: 2
                        },
                        title: {
                            type: "string",
                            id: 3
                        },
                        content: {
                            type: "string",
                            id: 4
                        },
                        detail: {
                            type: "string",
                            id: 5
                        }
                    }
                },
                RelationBlock: {
                    fields: {
                        show: {
                            type: "bool",
                            id: 1
                        },
                        is_authorized: {
                            type: "bool",
                            id: 2
                        },
                        title: {
                            type: "string",
                            id: 3
                        },
                        content: {
                            type: "string",
                            id: 4
                        },
                        detail: {
                            type: "string",
                            id: 5
                        }
                    }
                }
            }
        }
    }
    ,
    931032: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                image: {
                    type: "webcast.data.Image",
                    id: 2
                }
            }
        }
    }
    ,
    251076: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                avatar_id: {
                    type: "int64",
                    id: 1
                },
                image: {
                    type: "webcast.data.Image",
                    id: 2
                },
                video_static: {
                    type: "Video",
                    id: 3
                },
                video_dynamic: {
                    type: "Video",
                    id: 4
                },
                style_id: {
                    type: "int64",
                    id: 5
                },
                created_at: {
                    type: "int64",
                    id: 6
                },
                updated_at: {
                    type: "int64",
                    id: 7
                },
                status: {
                    type: "AvatarStatus",
                    id: 8
                },
                failed_title: {
                    type: "string",
                    id: 9
                },
                failed_reason: {
                    type: "string",
                    id: 10
                },
                is_system: {
                    type: "bool",
                    id: 12
                }
            }
        }
    }
    ,
    304455: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                avatar: {
                    type: "data.multi_guest_social_data.Avatar",
                    id: 2
                }
            }
        }
    }
    ,
    752471: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                example_images: {
                    type: "webcast.data.Image",
                    id: 1
                },
                is_bad: {
                    type: "bool",
                    id: 2
                }
            }
        }
    }
    ,
    693081: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                title: {
                    type: "string",
                    id: 1
                },
                desc: {
                    type: "string",
                    id: 2
                },
                examples: {
                    rule: "repeated",
                    type: "AvatarImageCase",
                    id: 3
                },
                rules: {
                    rule: "repeated",
                    type: "string",
                    id: 4
                }
            }
        }
    }
    ,
    675550: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                avatar_id: {
                    type: "int64",
                    id: 2
                },
                avatar_owner_user_id: {
                    type: "int64",
                    id: 3
                }
            }
        }
    }
    ,
    744231: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                avatar_id: {
                    type: "int64",
                    id: 1
                }
            }
        }
    }
    ,
    579458: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                AVATAR_STATUS_UNKNOWN: 0,
                AVATAR_STATUS_SUCCESS: 1,
                AVATAR_STATUS_GENERATING: 2,
                AVATAR_STATUS_FAILED_TNS_REVIEW: 3,
                AVATAR_STATUS_FAILED_IC_CREATE_RESOURCE: 4,
                AVATAR_STATUS_FAILED_IC_CREATE_VIDEO: 5,
                AVATAR_STATUS_FAILED_VIDEO_REVERSE: 6,
                AVATAR_STATUS_FAILED_VIDEO_CONCAT: 7,
                AVATAR_STATUS_DELETE_REPORTED: 8,
                AVATAR_STATUS_FAILED_OTHER: 9
            }
        }
    }
    ,
    696967: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                style_id: {
                    type: "int64",
                    id: 1
                },
                image: {
                    type: "webcast.data.Image",
                    id: 2
                }
            }
        }
    }
    ,
    19263: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                status: {
                    type: "data.multi_guest_social_data.StyleStatus",
                    id: 2
                },
                status_message: {
                    type: "string",
                    id: 3
                },
                image: {
                    type: "webcast.data.Image",
                    id: 4
                },
                style_id: {
                    type: "int64",
                    id: 5
                },
                origin_image_uri: {
                    type: "string",
                    id: 6
                },
                task_id: {
                    type: "int64",
                    id: 7
                }
            }
        }
    }
    ,
    672202: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                display_content: {
                    type: "webcast.data.Text",
                    id: 1
                },
                awarded_users: {
                    rule: "repeated",
                    type: "webcast.data.BattleUserInfo",
                    id: 2
                }
            }
        }
    }
    ,
    937734: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                extra: {
                    type: "Extra",
                    id: 2
                }
            },
            nested: {
                Extra: {
                    fields: {
                        promotion_id: {
                            type: "int64",
                            id: 1
                        },
                        active: {
                            type: "bool",
                            id: 2
                        }
                    }
                }
            }
        }
    }
    ,
    548575: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                op: {
                    type: "int32",
                    id: 2
                },
                page_id: {
                    type: "int64",
                    id: 3
                },
                op_time: {
                    type: "int64",
                    id: 4
                },
                cta_text: {
                    type: "string",
                    id: 5
                },
                schema: {
                    type: "string",
                    id: 6
                },
                pin_period: {
                    type: "int32",
                    id: 7
                },
                card_intro: {
                    type: "string",
                    id: 8
                },
                card_button_text: {
                    type: "string",
                    id: 9
                },
                card_title: {
                    type: "string",
                    id: 10
                }
            }
        }
    }
    ,
    634286: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                op: {
                    type: "int32",
                    id: 2
                },
                id: {
                    type: "int64",
                    id: 3
                },
                title: {
                    type: "string",
                    id: 4
                },
                subtitle: {
                    type: "string",
                    id: 5
                },
                url: {
                    type: "string",
                    id: 6
                },
                pic: {
                    type: "string",
                    id: 7
                },
                op_time: {
                    type: "int64",
                    id: 8
                },
                card_type: {
                    type: "int32",
                    id: 9
                },
                game_url: {
                    type: "string",
                    id: 10
                },
                live_log_extra: {
                    type: "string",
                    id: 11
                }
            }
        }
    }
    ,
    804253: (t, e, i) => {
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
                    type: "string",
                    id: 2
                }
            }
        }
    }
    ,
    458525: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                ba_link_permission: {
                    type: "int32",
                    id: 1
                },
                ba_link_data: {
                    type: "string",
                    id: 2
                }
            }
        }
    }
    ,
    785590: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                ecom_bc_toggle: {
                    type: "int64",
                    id: 1
                },
                bc_toggle_text: {
                    type: "string",
                    id: 2
                },
                bc_toggle_show_interval: {
                    type: "int64",
                    id: 3
                }
            }
        }
    }
    ,
    159687: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                leads_gen_permission: {
                    type: "bool",
                    id: 1
                },
                leads_gen_model: {
                    type: "string",
                    id: 2
                }
            }
        }
    }
    ,
    620675: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                sticker_id: {
                    type: "string",
                    id: 1
                }
            }
        }
    }
    ,
    155241: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                m3u8_url: {
                    type: "string",
                    id: 2
                },
                ts_urls: {
                    rule: "repeated",
                    type: "string",
                    id: 3
                },
                execution_id: {
                    type: "string",
                    id: 4
                },
                succeed: {
                    type: "bool",
                    id: 5
                },
                start_time: {
                    type: "int64",
                    id: 6
                },
                end_time: {
                    type: "int64",
                    id: 7
                }
            }
        }
    }
    ,
    497132: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                change_type: {
                    type: "BagItemChangeType",
                    id: 2
                },
                action: {
                    type: "webcast.data.BagItemAction",
                    id: 3
                },
                item_type: {
                    type: "webcast.data.BagItemType",
                    id: 4
                },
                item_id: {
                    type: "int64",
                    id: 5
                }
            }
        }
    }
    ,
    595852: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                badge_lmt: {
                    type: "BadgeLimit",
                    id: 1
                },
                origin_badge_img_list: {
                    rule: "repeated",
                    type: "OriginBadgeInfo",
                    id: 2
                }
            }
        }
    }
    ,
    851011: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                badge: {
                    type: "Badge",
                    id: 1
                },
                preview_list: {
                    rule: "repeated",
                    type: "BadgePreview",
                    id: 2
                },
                badge_abbr_audit_status: {
                    type: "AuditStatus",
                    id: 3
                },
                badge_desc_audit_status: {
                    type: "AuditStatus",
                    id: 4
                },
                exist: {
                    type: "bool",
                    id: 5
                },
                badge_abbr_audit_info: {
                    type: "AuditInfo",
                    id: 6
                },
                badge_desc_audit_info: {
                    type: "AuditInfo",
                    id: 7
                }
            }
        }
    }
    ,
    659966: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                BadgeDisplayType_Unknown: 0,
                BadgeDisplayType_Image: 1,
                BadgeDisplayType_Text: 2,
                BadgeDisplayType_String: 3,
                BadgeDisplayType_Combine: 4
            }
        }
    }
    ,
    990455: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                BadgeExhibitionTypeBadge: 0,
                BadgeExhibitionTypeIdentityLabel: 1
            }
        }
    }
    ,
    619262: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                level: {
                    type: "int32",
                    id: 1
                },
                emoji: {
                    type: "string",
                    id: 2
                },
                icon_url: {
                    type: "string",
                    id: 3
                }
            }
        }
    }
    ,
    64867: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                abbr_char_cnt_lmt: {
                    type: "int32",
                    id: 1
                },
                desc_char_cnt_lmt: {
                    type: "int32",
                    id: 2
                }
            }
        }
    }
    ,
    247028: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                sub_level: {
                    type: "int32",
                    id: 1
                },
                mixed_image: {
                    type: "webcast.data.Image",
                    id: 2
                },
                badge_struct: {
                    type: "webcast.data.BadgeStruct",
                    id: 3
                }
            }
        }
    }
    ,
    328098: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                BadgePriorityType_Unknown: 0,
                BadgePriorityType_StrongRelation: 10,
                BadgePriorityType_Platform: 20,
                BadgePriorityType_Relation: 30,
                BadgePriorityType_Activity: 40,
                BadgePriorityType_RankList: 50
            }
        }
    }
    ,
    929896: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                BadgeSceneType_Unknown: 0,
                BadgeSceneType_Admin: 1,
                BadgeSceneType_FirstRecharge: 2,
                BadgeSceneType_Friends: 3,
                BadgeSceneType_Subscriber: 4,
                BadgeSceneType_Activity: 5,
                BadgeSceneType_Ranklist: 6,
                BadgeSceneType_NewSubscriber: 7,
                BadgeSceneType_UserGrade: 8,
                BadgeSceneType_StateControlledMedia: 9,
                BadgeSceneType_Fans: 10,
                BadgeSceneType_LivePro: 11,
                BadgeSceneType_Anchor: 12
            }
        }
    }
    ,
    473807: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            oneofs: {
                Data: {
                    oneof: ["image", "text", "str", "combine"]
                }
            },
            fields: {
                display_type: {
                    type: "BadgeDisplayType",
                    id: 1
                },
                priority_type: {
                    type: "BadgePriorityType",
                    id: 2
                },
                scene_type: {
                    type: "BadgeSceneType",
                    id: 3
                },
                position: {
                    type: "Position",
                    id: 4
                },
                display_status: {
                    type: "DisplayStatus",
                    id: 5
                },
                greyed_by_client: {
                    type: "int64",
                    id: 6
                },
                exhibition_type: {
                    type: "BadgeExhibitionType",
                    id: 7
                },
                OpenWebURL: {
                    type: "string",
                    id: 10
                },
                display: {
                    type: "bool",
                    id: 11
                },
                privilege_log_extra: {
                    type: "PrivilegeLogExtra",
                    id: 12
                },
                is_customized: {
                    type: "bool",
                    id: 24
                },
                image: {
                    type: "ImageBadge",
                    id: 20
                },
                text: {
                    type: "TextBadge",
                    id: 21
                },
                str: {
                    type: "StringBadge",
                    id: 22
                },
                combine: {
                    type: "CombineBadge",
                    id: 23
                }
            }
        }
    }
    ,
    571561: (t, e, i) => {
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
                pieces: {
                    rule: "repeated",
                    type: "string",
                    id: 3
                }
            }
        }
    }
    ,
    64594: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                BadgeTextPositionUnknown: 0,
                BadgeTextPositionRight: 1,
                BadgeTextPositionBelow: 2
            }
        }
    }
    ,
    763318: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                BadgeTypeNormal: 0,
                BadgeTypeEmoji: 1,
                BadgeTypePlatformIcon: 2,
                BadgeTypeMultiEmoji: 3
            }
        }
    }
    ,
    718979: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                value: {
                    type: "int32",
                    id: 1
                }
            }
        }
    }
    ,
    355748: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                item_type: {
                    type: "BagItemType",
                    id: 1
                },
                item_id: {
                    type: "int64",
                    id: 2
                },
                count: {
                    type: "int64",
                    id: 3
                },
                min_expire_at: {
                    type: "int64",
                    id: 4
                },
                name: {
                    type: "string",
                    id: 5
                },
                image: {
                    type: "data.Image",
                    id: 6
                },
                preview_image: {
                    type: "data.Image",
                    id: 7
                },
                banner: {
                    type: "data.GiftStruct.GiftPanelBanner",
                    id: 8
                },
                available: {
                    type: "bool",
                    id: 10
                },
                toast: {
                    type: "string",
                    id: 11
                },
                pre_update_info: {
                    type: "BagItemPreUpdateInfo",
                    id: 12
                },
                group_id: {
                    type: "int64",
                    id: 13
                },
                combo: {
                    type: "bool",
                    id: 14
                },
                gift_price: {
                    type: "int64",
                    id: 15
                },
                activate_at: {
                    type: "int64",
                    id: 16
                }
            }
        }
    }
    ,
    271894: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                UnknownBagItemAction: 0,
                MatchConsume: 1,
                MatchObtain: 2,
                MatchReturn: 4,
                CampaignObtain: 5,
                FirstConsumeTaskObtain: 6,
                GiftConsume: 7,
                MoyObtain: 8,
                MoyConsume: 9,
                FirstRechargeObtain: 10
            }
        }
    }
    ,
    457128: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                BAG_ITEM_CHANGE_TYPE_UNKNOWN: 0,
                BAG_ITEM_CHANGE_TYPE_OBTAIN: 1,
                BAG_ITEM_CHANGE_TYPE_CONSUME: 2
            }
        }
    }
    ,
    432170: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                count: {
                    type: "int64",
                    id: 1
                },
                min_expire_at: {
                    type: "int64",
                    id: 2
                }
            }
        }
    }
    ,
    498876: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                UnknownBagItemType: 0,
                CriticalHit: 1,
                Mist: 2,
                ExtraTime: 3,
                SpecialEffect: 4,
                Potion: 5,
                Wave: 6,
                Gift: 100,
                PopVote: 101
            }
        }
    }
    ,
    20147: (t, e, i) => {
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
                image: {
                    type: "webcast.data.Image",
                    id: 3
                },
                height: {
                    type: "int64",
                    id: 4
                },
                width: {
                    type: "int64",
                    id: 5
                },
                schema_url: {
                    type: "string",
                    id: 6
                },
                action_type: {
                    type: "int64",
                    id: 7
                },
                banner_type: {
                    type: "int64",
                    id: 8
                },
                priority: {
                    type: "int64",
                    id: 9
                },
                text: {
                    type: "string",
                    id: 10
                },
                frame_type: {
                    type: "int64",
                    id: 11
                },
                extra: {
                    type: "string",
                    id: 12
                },
                status: {
                    type: "int64",
                    id: 13
                },
                uid: {
                    type: "int64",
                    id: 14
                },
                roomid: {
                    type: "int64",
                    id: 15
                },
                appointment_start_timestamp: {
                    type: "int64",
                    id: 16
                },
                appointment_end_timestamp: {
                    type: "int64",
                    id: 17
                },
                appointment_id: {
                    type: "int64",
                    id: 18
                },
                business_type: {
                    type: "int64",
                    id: 19
                },
                dynamic_banner: {
                    type: "webcast.data.BannerContentDynamic",
                    id: 20
                },
                banner_location: {
                    type: "BannerLocation",
                    id: 21
                },
                open_with_navigation_tag: {
                    type: "bool",
                    id: 22
                },
                business_source: {
                    type: "string",
                    id: 23
                },
                activity_id: {
                    type: "string",
                    id: 24
                },
                banner_id_str: {
                    type: "string",
                    id: 25
                }
            }
        }
    }
    ,
    635160: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                collapse_title: {
                    type: "webcast.data.Text",
                    id: 1
                },
                collapse_image: {
                    type: "webcast.data.Image",
                    id: 2
                },
                enable: {
                    type: "bool",
                    id: 3
                },
                background_color: {
                    type: "string",
                    id: 4
                },
                collapse_height: {
                    type: "int64",
                    id: 5
                },
                vertical_line_color: {
                    type: "string",
                    id: 6
                }
            }
        }
    }
    ,
    957304: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                container_url: {
                    type: "string",
                    id: 1
                },
                banner_list: {
                    rule: "repeated",
                    type: "Banner",
                    id: 2
                },
                animation_image: {
                    type: "webcast.data.Image",
                    id: 3
                },
                collapse: {
                    type: "BannerCollapse",
                    id: 4
                },
                container_height: {
                    type: "int64",
                    id: 5
                },
                container_width: {
                    type: "int64",
                    id: 6
                },
                lynx_container_url: {
                    type: "string",
                    id: 7
                },
                container_type: {
                    type: "int64",
                    id: 8
                }
            }
        }
    }
    ,
    783565: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                json_resource: {
                    type: "string",
                    id: 1
                }
            }
        }
    }
    ,
    241947: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                top_right: {
                    type: "webcast.data.BannerContainer",
                    id: 1
                },
                bottom_right: {
                    type: "webcast.data.BannerContainer",
                    id: 2
                },
                gift_panel: {
                    type: "webcast.data.BannerContainer",
                    id: 3
                },
                middle: {
                    type: "webcast.data.BannerContainer",
                    id: 4
                },
                activity_top_right: {
                    type: "webcast.data.BannerContainer",
                    id: 5
                },
                top_left: {
                    type: "webcast.data.BannerContainer",
                    id: 6
                },
                live_scene: {
                    type: "webcast.data.BannerContainer",
                    id: 7
                }
            }
        }
    }
    ,
    320280: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                BannerLocationUnknown: 0,
                BannerLocationFeedTop: 1,
                BannerLocationLiveEndPage: 2,
                BannerLocationInRoomTopRight: 3,
                BannerLocationHostCenterLiveCampaign: 4,
                BannerLocationHostCenterLiveAcademy: 5,
                BannerLocationLiveStartPage: 6,
                BannerLocationLiveStartPageScreen: 7,
                BannerLocationLiveStartPageOBS: 8,
                BannerLocationLiveStartPageLiveStudio: 9,
                BannerLocationLiveStartPagePop: 10
            }
        }
    }
    ,
    407029: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                event_name: {
                    type: "string",
                    id: 1
                },
                params: {
                    keyType: "string",
                    type: "string",
                    id: 2
                }
            }
        }
    }
    ,
    234062: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "webcast.im.Common",
                    id: 1
                },
                event: {
                    type: "BarrageEvent",
                    id: 2
                },
                msg_type: {
                    type: "BarrageType",
                    id: 3
                },
                icon: {
                    type: "webcast.data.Image",
                    id: 4
                },
                content: {
                    type: "webcast.data.Text",
                    id: 5
                },
                duration: {
                    type: "int64",
                    id: 6
                },
                background: {
                    type: "webcast.data.Image",
                    id: 7
                },
                right_icon: {
                    type: "webcast.data.Image",
                    id: 8
                },
                display_config: {
                    type: "int32",
                    id: 9
                },
                gallery_gift_id: {
                    type: "int64",
                    id: 10
                },
                scene: {
                    type: "string",
                    id: 11
                },
                control: {
                    type: "webcast.data.DisplayControl",
                    id: 12
                },
                right_label: {
                    type: "RightLabel",
                    id: 13
                },
                use_marquee: {
                    type: "bool",
                    id: 14
                },
                show_type: {
                    type: "ShowType",
                    id: 15
                },
                badge: {
                    type: "webcast.data.BadgeStruct",
                    id: 16
                },
                render_type: {
                    type: "RenderType",
                    id: 17
                },
                left_icon_display_type: {
                    type: "IconDisplayType",
                    id: 18
                },
                ribbon_animation: {
                    type: "webcast.data.Image",
                    id: 19
                },
                animation_data: {
                    type: "AnimationData",
                    id: 20
                },
                hybrid_url: {
                    type: "string",
                    id: 21
                },
                schema: {
                    type: "string",
                    id: 22
                },
                sub_type: {
                    type: "string",
                    id: 23
                },
                common_barrage_content: {
                    type: "webcast.data.Text",
                    id: 24
                },
                user_grade_param: {
                    type: "BarrageTypeUserGradeParam",
                    id: 100
                },
                fans_level_param: {
                    type: "BarrageTypeFansLevelParam",
                    id: 101
                },
                subscribe_gift_param: {
                    type: "BarrageTypeSubscribeGiftParam",
                    id: 102
                },
                privilege_log_extra: {
                    type: "webcast.data.PrivilegeLogExtra",
                    id: 103
                },
                gift_gallery_params: {
                    type: "BarrageTypeGiftGalleryParam",
                    id: 104
                }
            },
            nested: {
                BarrageType: {
                    values: {
                        Unknown: 0,
                        EcomOrdering: 1,
                        EcomBuying: 2,
                        Normal: 3,
                        Subscribe: 4,
                        EventView: 5,
                        EventRegistered: 6,
                        SubscribeGift: 7,
                        UserUpgrade: 8,
                        GradeUserEntranceNotification: 9,
                        FansLevelUpgrade: 10,
                        FansLevelEntrance: 11,
                        GamePartnership: 12,
                        GiftGallery: 13,
                        EcomBought: 14,
                        CommonBarrage: 100
                    }
                },
                RightLabel: {
                    fields: {
                        background_color: {
                            type: "string",
                            id: 1
                        },
                        content: {
                            type: "webcast.data.Text",
                            id: 2
                        },
                        height: {
                            type: "int64",
                            id: 3
                        }
                    }
                },
                ShowType: {
                    values: {
                        SHOW_TYPE_NORMAL: 0,
                        SHOW_TYPE_FADE_IN_OUT: 1
                    }
                },
                RenderType: {
                    values: {
                        RenderTypeNative: 0,
                        RenderTypeHybrid: 1,
                        RenderTypeAlpha: 2
                    }
                },
                IconDisplayType: {
                    values: {
                        IconDisplayTypeImage: 0,
                        IconDisplayTypeBadge: 1
                    }
                }
            }
        }
    }
    ,
    265480: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                current_grade: {
                    type: "int32",
                    id: 1
                },
                display_config: {
                    type: "int32",
                    id: 2
                },
                user: {
                    type: "webcast.data.User",
                    id: 4
                }
            }
        }
    }
    ,
    409984: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                from_user_id: {
                    type: "int64",
                    id: 1
                },
                to_user_id: {
                    type: "int64",
                    id: 2
                }
            }
        }
    }
    ,
    376202: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                gift_sub_count: {
                    type: "int64",
                    id: 1
                },
                show_gift_sub_count: {
                    type: "bool",
                    id: 2
                },
                gift_source: {
                    type: "GiftSource",
                    id: 3
                }
            }
        }
    }
    ,
    890226: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                current_grade: {
                    type: "int32",
                    id: 1
                },
                display_config: {
                    type: "int32",
                    id: 2
                },
                user_id: {
                    type: "string",
                    id: 3
                },
                user: {
                    type: "webcast.data.User",
                    id: 4
                }
            }
        }
    }
    ,
    986328: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                ab_test_type: {
                    type: "BattleABTestType",
                    id: 1
                },
                group: {
                    type: "int64",
                    id: 2
                }
            }
        }
    }
    ,
    541824: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                ab_test_list: {
                    rule: "repeated",
                    type: "BattleABTest",
                    id: 1
                }
            }
        }
    }
    ,
    751346: (t, e, i) => {
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
                    type: "BattleABTestList",
                    id: 2
                }
            }
        }
    }
    ,
    705632: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                UnknownABTestType: 0,
                MeanwhileInvite: 1,
                SpecifiedGift: 2,
                RTCMessageChannel: 3,
                ConnectionTimeOut: 4,
                RematchSkipTeammate: 5,
                OptInvitee4048: 6,
                BATTLE_AB_TEST_TYPE_TIME_CALIBRATE: 7
            }
        }
    }
    ,
    720271: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                SCENE_NORMAL: 0,
                SCENE_DISCONNECT: 1
            }
        }
    }
    ,
    868982: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                anchor_id: {
                    type: "int64",
                    id: 1
                },
                rank_list: {
                    rule: "repeated",
                    type: "RankUser",
                    id: 2
                },
                anchor_id_str: {
                    type: "string",
                    id: 3
                }
            },
            nested: {
                RankUser: {
                    fields: {
                        user_id: {
                            type: "int64",
                            id: 1
                        },
                        nickname: {
                            type: "string",
                            id: 2
                        },
                        avatar_thumb: {
                            type: "webcast.data.Image",
                            id: 3
                        },
                        score: {
                            type: "int64",
                            id: 4
                        },
                        user_id_str: {
                            type: "string",
                            id: 5
                        }
                    }
                }
            }
        }
    }
    ,
    822108: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                UNKNOWN_CARD_ACTION: 0,
                CARD_OBTAIN_GUIDE: 1,
                USE_CRITICAL_STRIKE_CARD: 2,
                USE_SMOKE_CARD: 3,
                BATTLE_CARD_MSG_TYPE_AWARD_CARD_NOTICE: 4,
                USE_EXTRA_TIME_CARD: 5,
                USE_SPECIAL_EFFECT_CARD: 6,
                USE_POTION_CARD: 7,
                USE_WAVE_CARD: 8,
                SPECIAL_EFFECT_NOTICE: 9
            }
        }
    }
    ,
    824949: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                user_id: {
                    type: "int64",
                    id: 1
                },
                combo_status: {
                    type: "int64",
                    id: 2
                },
                combo_count: {
                    type: "int64",
                    id: 3
                },
                combo_icon_url: {
                    type: "string",
                    id: 4
                },
                combo_rule_guide_url: {
                    type: "string",
                    id: 5
                }
            }
        }
    }
    ,
    395317: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                user_id: {
                    type: "int64",
                    id: 1
                },
                combo_status: {
                    type: "int64",
                    id: 2
                },
                combo_count: {
                    type: "int64",
                    id: 3
                },
                combo_icon_url: {
                    type: "string",
                    id: 4
                },
                combo_type: {
                    type: "ComboType",
                    id: 5
                },
                combo_rule_guide_schema: {
                    type: "string",
                    id: 6
                }
            }
        }
    }
    ,
    362954: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                Normal: 0,
                Game: 1
            }
        }
    }
    ,
    761815: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                game_id: {
                    type: "int64",
                    id: 1
                },
                prop_id: {
                    type: "int64",
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
    487710: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                NORMAL: 0,
                AGAIN: 1
            }
        }
    }
    ,
    733166: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                UNKNOWN_CARD: 0,
                CRITICAL_STRIKE_CARD: 1,
                SMOKE_CARD: 2,
                EXTRA_TIME_CARD: 3,
                SPECIAL_EFFECT_CARD: 4,
                POTION_CARD: 5,
                WAVE_CARD: 6
            }
        }
    }
    ,
    466874: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                match_type: {
                    type: "int64",
                    id: 1
                },
                tips: {
                    type: "string",
                    id: 2
                },
                invite_type: {
                    type: "int64",
                    id: 3
                },
                sub_type: {
                    type: "int64",
                    id: 4
                },
                scene: {
                    type: "int64",
                    id: 5
                },
                theme: {
                    type: "string",
                    id: 6
                },
                duration: {
                    type: "int64",
                    id: 7
                },
                extra: {
                    type: "InviterRivalExtra",
                    id: 8
                },
                tags: {
                    rule: "repeated",
                    type: "webcast.data.BattleRivalTag",
                    id: 9
                }
            },
            nested: {
                InviterRivalExtra: {
                    fields: {
                        TextType: {
                            type: "int64",
                            id: 1
                        },
                        Text: {
                            type: "string",
                            id: 2
                        },
                        Label: {
                            type: "string",
                            id: 3
                        }
                    }
                }
            }
        }
    }
    ,
    784300: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                mode: {
                    type: "int32",
                    id: 1
                },
                steal_tower_data: {
                    type: "StealTowerData",
                    id: 2
                }
            },
            nested: {
                StealTowerData: {
                    fields: {
                        trigger_time: {
                            type: "int64",
                            id: 1
                        },
                        duration: {
                            type: "int64",
                            id: 2
                        },
                        target_score: {
                            type: "int64",
                            id: 3
                        },
                        start_time: {
                            type: "int64",
                            id: 4
                        },
                        attacker_id: {
                            type: "int64",
                            id: 5
                        },
                        finish_time: {
                            type: "int64",
                            id: 6
                        },
                        win: {
                            type: "int64",
                            id: 7
                        },
                        count: {
                            type: "int64",
                            id: 8
                        },
                        open_score: {
                            type: "int64",
                            id: 9
                        },
                        finish: {
                            type: "bool",
                            id: 10
                        }
                    }
                }
            }
        }
    }
    ,
    584634: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                content: {
                    type: "BattleNoticeText",
                    id: 1
                }
            }
        }
    }
    ,
    774956: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                content: {
                    type: "BattleNoticeText",
                    id: 1
                },
                button_content: {
                    type: "BattleNoticeText",
                    id: 2
                }
            }
        }
    }
    ,
    291753: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                content: {
                    type: "BattleNoticeText",
                    id: 1
                }
            }
        }
    }
    ,
    886620: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                display_text: {
                    type: "webcast.data.Text",
                    id: 1
                },
                except_anchor: {
                    type: "bool",
                    id: 2
                }
            }
        }
    }
    ,
    531521: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                battle_id: {
                    type: "int64",
                    id: 1
                },
                display_text_origin_viewers: {
                    type: "webcast.data.Text",
                    id: 2
                },
                display_text_unrelated_viewers: {
                    type: "webcast.data.Text",
                    id: 3
                },
                extreme_high_score_threshold: {
                    type: "int64",
                    id: 4
                }
            }
        }
    }
    ,
    932377: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                content: {
                    type: "BattleNoticeText",
                    id: 1
                },
                button_content: {
                    type: "BattleNoticeText",
                    id: 2
                },
                rule_detail_url: {
                    type: "string",
                    id: 3
                },
                except_anchor: {
                    type: "bool",
                    id: 4
                },
                content_text: {
                    type: "webcast.data.Text",
                    id: 5
                },
                button_content_text: {
                    type: "webcast.data.Text",
                    id: 6
                }
            }
        }
    }
    ,
    39860: (t, e, i) => {
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
    471156: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                content: {
                    type: "BattleNoticeText",
                    id: 1
                }
            }
        }
    }
    ,
    432799: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                ANCHOR_GUIDE: 0,
                TOAST: 1,
                BUBBLE_GUIDE: 2,
                ANCHOR_GIFT_GUIDE: 3,
                RULE_GUIDE: 4,
                ANCHOR_MULTI_MATCH_GUIDE: 5,
                COMMON_GUIDE: 6,
                EXTREME_HIGH_SCORE: 7
            }
        }
    }
    ,
    961894: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                user_id: {
                    type: "int64",
                    id: 1
                },
                result: {
                    type: "Result",
                    id: 2
                },
                score: {
                    type: "int64",
                    id: 3
                },
                diamond_score: {
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
    977363: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                Prompt: {
                    type: "webcast.data.Prompt",
                    id: 1
                },
                status: {
                    type: "RewardStatus",
                    id: 2
                }
            },
            nested: {
                RewardStatus: {
                    values: {
                        REWARD_STATUS_SUCCEED: 0,
                        REWARD_STATUS_FAILED: 1
                    }
                }
            }
        }
    }
    ,
    278143: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                extra_info: {
                    type: "webcast.data.RivalExtraInfo",
                    id: 2
                },
                tags: {
                    rule: "repeated",
                    type: "webcast.data.BattleRivalTag",
                    id: 3
                }
            }
        }
    }
    ,
    546103: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                bg_image: {
                    type: "webcast.data.Image",
                    id: 1
                },
                icon_image: {
                    type: "webcast.data.Image",
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
    398041: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                score: {
                    type: "int32",
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
    239890: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                battle_id: {
                    type: "int64",
                    id: 1
                },
                start_time_ms: {
                    type: "int64",
                    id: 2
                },
                duration: {
                    type: "int64",
                    id: 3
                },
                channel_id: {
                    type: "int64",
                    id: 4
                },
                status: {
                    type: "BattleStatus",
                    id: 5
                },
                invite_type: {
                    type: "BattleInviteType",
                    id: 6
                },
                gift_mode_meta: {
                    type: "GiftModeMeta",
                    id: 7
                },
                battle_type: {
                    type: "BattleType",
                    id: 8
                },
                extra_duration_second: {
                    type: "int64",
                    id: 9
                },
                end_time_ms: {
                    type: "int64",
                    id: 10
                }
            },
            nested: {
                BattleStatus: {
                    values: {
                        BattleNotStarted: 0,
                        BattleStarted: 1,
                        BattleFinished: 2,
                        BattlePunishStarted: 3,
                        BattlePunishFinished: 4
                    }
                }
            }
        }
    }
    ,
    956574: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                BattleSkinDefault: 0,
                BattleSkinHourlyRank: 1,
                BattleSkinOperatingActivity: 2
            }
        }
    }
    ,
    672253: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                channel_id: {
                    type: "int64",
                    id: 1
                },
                battle_id: {
                    type: "int64",
                    id: 2
                },
                battle_mode: {
                    type: "BattleMode",
                    id: 3
                },
                battle_settings: {
                    type: "BattleSettings",
                    id: 4
                },
                battle_armies: {
                    rule: "repeated",
                    type: "BattleArmy",
                    id: 5
                },
                channel_info: {
                    type: "ChannelInfo",
                    id: 6
                },
                battle_scores: {
                    rule: "repeated",
                    type: "BattleScore",
                    id: 7
                },
                anchors: {
                    rule: "repeated",
                    type: "webcast.data.User",
                    id: 8
                },
                loser_id: {
                    type: "int64",
                    id: 9
                }
            }
        }
    }
    ,
    43847: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                UnknownAction: 0,
                LikeAction: 1
            }
        }
    }
    ,
    919594: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                config: {
                    type: "BattleTaskConfig",
                    id: 1
                },
                status: {
                    type: "BattleTaskStatus",
                    id: 2
                }
            }
        }
    }
    ,
    546872: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                preview_start_time: {
                    type: "int64",
                    id: 1
                },
                preview_config: {
                    rule: "repeated",
                    type: "PreviewPeriod",
                    id: 2
                },
                target_config: {
                    type: "TargetConfig",
                    id: 3
                },
                reward_config: {
                    type: "RewardConfig",
                    id: 4
                },
                gift_amount_guide: {
                    keyType: "int64",
                    type: "GiftAmountGuide",
                    id: 5
                },
                preview_start_timestamp: {
                    type: "int64",
                    id: 6
                },
                preview_click_action_schema_url: {
                    type: "string",
                    id: 7
                }
            },
            nested: {
                PreviewPeriod: {
                    fields: {
                        duration: {
                            type: "int64",
                            id: 1
                        },
                        prompt: {
                            type: "Prompt",
                            id: 2
                        },
                        icon_image: {
                            type: "webcast.data.Image",
                            id: 25
                        }
                    }
                },
                TargetConfig: {
                    oneofs: {
                        prompt: {
                            oneof: ["static_prompt", "progress_target"]
                        }
                    },
                    fields: {
                        target_start_time: {
                            type: "int64",
                            id: 1
                        },
                        duration: {
                            type: "int64",
                            id: 2
                        },
                        target_start_timestamp: {
                            type: "int64",
                            id: 3
                        },
                        click_action: {
                            type: "ClickAction",
                            id: 11
                        },
                        click_prompt: {
                            type: "Prompt",
                            id: 12
                        },
                        prompt_type: {
                            type: "PromptType",
                            id: 21
                        },
                        static_prompt: {
                            type: "Prompt",
                            id: 22
                        },
                        progress_target: {
                            type: "int64",
                            id: 23
                        },
                        target_type: {
                            type: "TargetType",
                            id: 24
                        },
                        icon_image: {
                            type: "webcast.data.Image",
                            id: 25
                        },
                        click_action_schema_url: {
                            type: "string",
                            id: 26
                        }
                    },
                    nested: {
                        ClickAction: {
                            values: {
                                GIFT_PANEL: 0,
                                SCHEMA_REDIRECT: 1
                            }
                        },
                        PromptType: {
                            values: {
                                STATIC: 0,
                                PROGRESS: 1
                            }
                        },
                        TargetType: {
                            values: {
                                UNKNOWN: 0,
                                GIFT_COUNT: 1,
                                GIFT_AMOUNT: 2,
                                TEAM_GIFT_COUNT: 3,
                                TEAM_GIFT_AMOUNT: 4,
                                INDIVIDUAL_GIFT_COUNT: 5,
                                INDIVIDUAL_GIFT_AMOUNT: 6,
                                ONE_V_N_GIFT_COUNT: 7,
                                ONE_V_N_GIFT_AMOUNT: 8,
                                JOIN_FANS_CLUB: 21,
                                START_BONUS: 22
                            }
                        }
                    }
                },
                RewardConfig: {
                    fields: {
                        reward_start_time: {
                            type: "int64",
                            id: 1
                        },
                        duration: {
                            type: "int64",
                            id: 2
                        },
                        reward_multiple: {
                            type: "int64",
                            id: 3
                        },
                        reward_start_timestamp: {
                            type: "int64",
                            id: 4
                        },
                        reward_prepare_prompt: {
                            type: "Prompt",
                            id: 11
                        },
                        rewarding_prompt: {
                            type: "Prompt",
                            id: 12
                        },
                        click_prompt: {
                            type: "Prompt",
                            id: 13
                        }
                    }
                },
                GiftAmountGuide: {
                    fields: {
                        guide_prompt: {
                            type: "Prompt",
                            id: 1
                        },
                        prompt_type: {
                            type: "int32",
                            id: 2
                        },
                        disappear_duration: {
                            type: "int32",
                            id: 3
                        },
                        icon_image: {
                            type: "webcast.data.Image",
                            id: 11
                        },
                        gift_image: {
                            type: "webcast.data.Image",
                            id: 12
                        },
                        recommend_gift_id: {
                            type: "int64",
                            id: 21
                        },
                        recommend_gift_count: {
                            type: "int32",
                            id: 22
                        },
                        guide_content: {
                            type: "webcast.data.Text",
                            id: 23
                        }
                    }
                }
            }
        }
    }
    ,
    998586: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                task_type: {
                    type: "int64",
                    id: 1
                },
                start_time: {
                    type: "int64",
                    id: 2
                },
                duration: {
                    type: "int64",
                    id: 3
                },
                end_time: {
                    type: "int64",
                    id: 4
                },
                task_round: {
                    type: "int64",
                    id: 5
                },
                collected_count: {
                    type: "int64",
                    id: 6
                },
                goal_count: {
                    type: "int64",
                    id: 7
                },
                finished: {
                    type: "int64",
                    id: 8
                },
                success: {
                    type: "int64",
                    id: 9
                },
                bonus_ratio: {
                    type: "int64",
                    id: 10
                },
                has_next_task: {
                    type: "int64",
                    id: 11
                }
            }
        }
    }
    ,
    858567: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                START: 0,
                TASK_UPDATE: 1,
                TASK_SETTLE: 2,
                REWARD_SETTLE: 3
            }
        }
    }
    ,
    301457: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                result: {
                    type: "Result",
                    id: 1
                },
                reward_start_time: {
                    type: "int64",
                    id: 2
                },
                reward_start_timestamp: {
                    type: "int64",
                    id: 3
                }
            },
            nested: {
                Result: {
                    values: {
                        SUCCEED: 0,
                        FAILED: 1,
                        BOTH_SUCCEED: 2
                    }
                }
            }
        }
    }
    ,
    16048: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                config: {
                    type: "webcast.data.BattleTaskConfig",
                    id: 1
                }
            }
        }
    }
    ,
    111504: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                status: {
                    type: "Status",
                    id: 1
                },
                enter_room_prompt: {
                    type: "Prompt",
                    id: 2
                },
                progress: {
                    type: "int64",
                    id: 11
                },
                user_assisted: {
                    type: "bool",
                    id: 12
                },
                reward_settle_prompt: {
                    type: "Prompt",
                    id: 13
                },
                reward_settle_duration: {
                    type: "int64",
                    id: 14
                },
                reward_settle_status: {
                    type: "int64",
                    id: 15
                }
            },
            nested: {
                Status: {
                    values: {
                        NONE: 0,
                        INPREVIEW: 1,
                        INPROGRESS: 2,
                        SUCCEED: 3,
                        BOTH_SUCCEED: 4,
                        FAILED: 5,
                        INREWARD: 6,
                        REWARD_SETTLE: 7
                    }
                }
            }
        }
    }
    ,
    595551: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                progress: {
                    type: "int64",
                    id: 1
                },
                from_user_id: {
                    type: "int64",
                    id: 2
                },
                prompt_key: {
                    type: "string",
                    id: 3
                },
                log_id: {
                    type: "string",
                    id: 21
                }
            }
        }
    }
    ,
    140141: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                triggered: {
                    type: "bool",
                    id: 1
                },
                rule_detail_url: {
                    type: "string",
                    id: 2
                },
                anchor_region: {
                    type: "string",
                    id: 3
                },
                lap_guide_key: {
                    type: "string",
                    id: 4
                },
                lap_guide_duration_second: {
                    type: "int32",
                    id: 5
                }
            }
        }
    }
    ,
    813322: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                close_content_key: {
                    type: "string",
                    id: 1
                }
            }
        }
    }
    ,
    73951: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                tips: {
                    rule: "repeated",
                    type: "TruthOrDareTip",
                    id: 1
                },
                gift_guide_key: {
                    type: "string",
                    id: 2
                }
            },
            nested: {
                TruthOrDareTip: {
                    fields: {
                        tip_type: {
                            type: "string",
                            id: 1
                        },
                        tip_content: {
                            type: "string",
                            id: 2
                        }
                    }
                }
            }
        }
    }
    ,
    378973: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                anchor_content_key: {
                    type: "string",
                    id: 1
                },
                audience_content_key: {
                    type: "string",
                    id: 2
                },
                guide_duration_second: {
                    type: "int32",
                    id: 3
                },
                rule_detail_url: {
                    type: "string",
                    id: 4
                }
            }
        }
    }
    ,
    216125: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                anchor_content_key: {
                    type: "string",
                    id: 1
                },
                audience_content_key: {
                    type: "string",
                    id: 2
                },
                tips: {
                    rule: "repeated",
                    type: "TruthOrDareTip",
                    id: 3
                },
                guide_duration_second: {
                    type: "int32",
                    id: 4
                },
                tip_duration_second: {
                    type: "int32",
                    id: 5
                },
                rule_detail_url: {
                    type: "string",
                    id: 6
                },
                lap_guide_key: {
                    type: "string",
                    id: 7
                },
                lap_guide_duration_second: {
                    type: "int32",
                    id: 8
                },
                is_first_time: {
                    type: "bool",
                    id: 9
                }
            },
            nested: {
                TruthOrDareTip: {
                    fields: {
                        tip_type_key: {
                            type: "string",
                            id: 1
                        },
                        tip_content_key: {
                            type: "string",
                            id: 2
                        }
                    }
                }
            }
        }
    }
    ,
    324875: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                UnknownBattleType: 0,
                NormalBattle: 1,
                TeamBattle: 2,
                IndividualBattle: 3,
                BattleType1vN: 4,
                TakeTheStage: 51,
                GroupShow: 52
            }
        }
    }
    ,
    560456: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                user: {
                    type: "BaseUserInfo",
                    id: 1
                },
                tags: {
                    rule: "repeated",
                    type: "webcast.data.BattleRivalTag",
                    id: 2
                }
            },
            nested: {
                BaseUserInfo: {
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
                        },
                        display_id: {
                            type: "string",
                            id: 4
                        }
                    }
                }
            }
        }
    }
    ,
    778589: (t, e, i) => {
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
                    type: "webcast.data.BattleUserInfo",
                    id: 2
                }
            }
        }
    }
    ,
    418813: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                is_turn_on: {
                    type: "bool",
                    id: 1
                },
                accept_not_follower_invite: {
                    type: "bool",
                    id: 2
                },
                allow_gift_to_other_anchors: {
                    type: "bool",
                    id: 3
                }
            }
        }
    }
    ,
    222003: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                UNKNOWN: 0,
                TRUTH_OR_DARE_TRIGGER: 1,
                TRUTH_OR_DARE_TIPS: 2,
                TRUTH_OR_DARE_OPT_CLOSE: 3,
                TRUTH_OR_DARE_TRIGGER_V2: 4
            }
        }
    }
    ,
    974396: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                w: {
                    type: "int32",
                    id: 1
                },
                h: {
                    type: "int32",
                    id: 2
                }
            }
        }
    }
    ,
    999637: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                GuideUndefined: 0,
                Chiji: 1
            }
        }
    }
    ,
    334320: (t, e, i) => {
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
                    type: "BeginnerGuideFeatureType",
                    id: 2
                },
                prompts: {
                    type: "string",
                    id: 3
                }
            }
        }
    }
    ,
    16372: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                official_icon_images: {
                    rule: "repeated",
                    type: "webcast.data.Image",
                    id: 1
                },
                max_enable_benefit_num: {
                    type: "int32",
                    id: 2
                },
                max_benefit_list_num: {
                    type: "int32",
                    id: 3
                }
            }
        }
    }
    ,
    911067: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                gift_info: {
                    type: "PartnershipGiftInfo",
                    id: 1
                },
                activity_id_str: {
                    type: "string",
                    id: 2
                },
                task_status: {
                    type: "ActivityTaskStatus",
                    id: 3
                },
                is_out_of_stock: {
                    type: "bool",
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
                rule: {
                    type: "string",
                    id: 7
                },
                platform: {
                    type: "string",
                    id: 8
                },
                task_type: {
                    type: "BenefitTaskType",
                    id: 9
                }
            }
        }
    }
    ,
    265899: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                gift_info: {
                    type: "PartnershipGiftInfo",
                    id: 1
                },
                brief_game: {
                    type: "BriefGame",
                    id: 2
                },
                activity_id_str: {
                    type: "string",
                    id: 3
                }
            }
        }
    }
    ,
    386243: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                BENEFIT_TASK_TYPE_UNKNOWN: 0,
                BENEFIT_TASK_TYPE_DOWNLOAD: 1,
                BENEFIT_TASK_TYPE_BIND_ACCOUNT: 2,
                BENEFIT_TASK_TYPE_OPEN_PARTICIPATE: 3
            }
        }
    }
    ,
    637182: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                BenefitTypeUnknown: 0,
                BenefitTypeEmote: 1,
                BenefitTypeBadge: 2,
                BenefitTypeChat: 3,
                BenefitTypeGift: 4
            }
        }
    }
    ,
    808191: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                benefit_type: {
                    type: "BenefitViewType",
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
                },
                nav_icon: {
                    type: "webcast.data.Image",
                    id: 5
                }
            }
        }
    }
    ,
    444631: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                BENEFIT_VIEW_TYPE_UNKNOWN: 0,
                BENEFIT_VIEW_TYPE_EMOTE: 1,
                BENEFIT_VIEW_TYPE_BADGE: 2,
                BENEFIT_VIEW_TYPE_CHAT: 3,
                BENEFIT_VIEW_TYPE_GIFT: 4,
                BENEFIT_VIEW_TYPE_CUSTOMIZED_PERKS: 5,
                BENEFIT_VIEW_TYPE_LIMITED_CONTENT: 6,
                BENEFIT_VIEW_TYPE_DISCORD: 7,
                BENEFIT_VIEW_TYPE_SUB_ONLY_VIDEO: 8
            }
        }
    }
    ,
    891931: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                user_id: {
                    type: "int64",
                    id: 1
                },
                best_teammate_id: {
                    type: "int64",
                    id: 2
                }
            }
        }
    }
    ,
    867531: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                id: {
                    type: "int64",
                    id: 1
                },
                option_name: {
                    type: "string",
                    id: 2
                },
                money: {
                    type: "int64",
                    id: 3
                },
                rate: {
                    type: "int64",
                    id: 4
                },
                win: {
                    type: "bool",
                    id: 5
                },
                can_bet: {
                    type: "bool",
                    id: 6
                },
                can_bet_money: {
                    type: "int64",
                    id: 7
                }
            }
        }
    }
    ,
    867883: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                bet_option: {
                    type: "string",
                    id: 1
                },
                bet_points: {
                    type: "int64",
                    id: 2
                },
                win_points: {
                    type: "int64",
                    id: 3
                },
                refund_points: {
                    type: "int64",
                    id: 4
                },
                rollback_points: {
                    type: "int64",
                    id: 5
                },
                bet_times: {
                    type: "int64",
                    id: 6
                }
            }
        }
    }
    ,
    696803: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                billboard_type: {
                    type: "BillboardType",
                    id: 1
                },
                billboard_id: {
                    type: "string",
                    id: 2
                },
                display_result: {
                    type: "DisplayResult",
                    id: 3
                }
            }
        }
    }
    ,
    764654: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                billboard_type: {
                    type: "BillboardType",
                    id: 1
                },
                billboard_ids: {
                    rule: "repeated",
                    type: "string",
                    id: 2
                },
                source_from: {
                    type: "int32",
                    id: 3
                }
            }
        }
    }
    ,
    972734: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                Template_Type: 0,
                Image_Type: 1
            }
        }
    }
    ,
    872322: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                BILLING_TYPE_UNKNOWN: 0,
                BILLING_TYPE_GP: 1,
                BILLING_TYPE_WEB: 2,
                BILLING_TYPE_APPB: 3,
                BILLING_TYPE_GP_COMMON_SKU: 4
            }
        }
    }
    ,
    116035: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                msg: {
                    type: "GiftMessage",
                    id: 1
                },
                common: {
                    type: "Common",
                    id: 2
                }
            }
        }
    }
    ,
    161626: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                biz_sticker: {
                    rule: "repeated",
                    type: "webcast.data.RoomSticker",
                    id: 2
                }
            }
        }
    }
    ,
    592428: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                DEFAULT: 0,
                RETHINK_CHAT: 1,
                RETHINK_QA: 2,
                WARNINGTAG_CurrentRoom: 3,
                WARNINGTAG_CoHostRoom: 4,
                AGS_AtRiskOfUnableToComment: 5,
                PerceptionCenter: 6
            }
        }
    }
    ,
    411684: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                id: {
                    type: "int64",
                    id: 1
                },
                task_source: {
                    type: "int32",
                    id: 2
                },
                task_id: {
                    type: "int64",
                    id: 3
                }
            }
        }
    }
    ,
    626681: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                cards: {
                    rule: "repeated",
                    type: "BoostCard",
                    id: 3
                }
            }
        }
    }
    ,
    141412: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                boosting: {
                    type: "bool",
                    id: 1
                },
                boost_end_time: {
                    type: "int64",
                    id: 2
                },
                card_id: {
                    type: "int64",
                    id: 3
                },
                card_id_str: {
                    type: "string",
                    id: 4
                },
                task_id: {
                    type: "string",
                    id: 5
                },
                task_source: {
                    type: "int32",
                    id: 6
                },
                image_path: {
                    type: "string",
                    id: 7
                }
            }
        }
    }
    ,
    198168: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                total_cnt: {
                    type: "int64",
                    id: 2
                },
                flare: {
                    type: "FlareBoostedUsers",
                    id: 3
                },
                promote_ads: {
                    rule: "repeated",
                    type: "PromoteAdBoostedUsers",
                    id: 4
                }
            }
        }
    }
    ,
    402611: (t, e, i) => {
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
                show_type: {
                    type: "ShowType",
                    id: 3
                },
                text_type: {
                    type: "TextType",
                    id: 4
                },
                Duration: {
                    type: "int64",
                    id: 5
                },
                biz_type: {
                    type: "BizType",
                    id: 6
                },
                violation_user_id: {
                    type: "int64",
                    id: 7
                },
                punish_info: {
                    type: "webcast.data.PunishEventInfo",
                    id: 8
                },
                style: {
                    type: "int32",
                    id: 9
                },
                detail_url: {
                    type: "string",
                    id: 10
                },
                float_style: {
                    type: "int32",
                    id: 11
                },
                float_icon_type: {
                    type: "webcast.data.PerceptionDialogIconType",
                    id: 12
                }
            }
        }
    }
    ,
    493036: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                bridge_message_json: {
                    type: "string",
                    id: 2
                }
            }
        }
    }
    ,
    837817: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                bridge: {
                    type: "BridgeData",
                    id: 2
                }
            }
        }
    }
    ,
    729126: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                brief_gift_info: {
                    type: "BriefGiftInfo",
                    id: 1
                },
                activity_id_str: {
                    type: "string",
                    id: 2
                },
                task_status: {
                    type: "ActivityTaskStatus",
                    id: 3
                },
                is_out_of_stock: {
                    type: "bool",
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
                task_type: {
                    type: "BenefitTaskType",
                    id: 7
                }
            }
        }
    }
    ,
    435523: (t, e, i) => {
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
                icon: {
                    type: "string",
                    id: 4
                },
                labels: {
                    rule: "repeated",
                    type: "string",
                    id: 5
                },
                android_package: {
                    type: "string",
                    id: 6
                },
                ios_bundle_id: {
                    type: "string",
                    id: 7
                },
                open_gll: {
                    type: "int32",
                    id: 8
                },
                game_tag_id: {
                    type: "string",
                    id: 9
                },
                game_tag_name: {
                    type: "string",
                    id: 10
                },
                header_image_url: {
                    type: "string",
                    id: 11
                }
            }
        }
    }
    ,
    466650: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                brief_game: {
                    type: "BriefGame",
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
                },
                log_extra: {
                    type: "string",
                    id: 5
                },
                extra_params: {
                    type: "string",
                    id: 6
                }
            }
        }
    }
    ,
    563855: (t, e, i) => {
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
                type: {
                    type: "GiftType",
                    id: 5
                },
                need_auth: {
                    type: "bool",
                    id: 7
                },
                auth_param: {
                    type: "AuthParam",
                    id: 8
                }
            }
        }
    }
    ,
    92490: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
                unit_price: {
                    type: "string",
                    id: 12
                },
                max_earnings: {
                    type: "string",
                    id: 13
                }
            }
        }
    }
    ,
    861398: (t, e, i) => {
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
            }
        }
    }
    ,
    296369: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                content: {
                    type: "string",
                    id: 1
                },
                duration: {
                    type: "int64",
                    id: 2
                },
                rich_text: {
                    type: "webcast.data.Text",
                    id: 3
                },
                scheme_url: {
                    type: "string",
                    id: 4
                }
            }
        }
    }
    ,
    855559: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                BUDGET_CONTROL_UNKNOWN: 0,
                BUDGET_CONTROL_FIRST_CONTROL: 1,
                BUDGET_CONTROL_SECOND_CONTROL: 2,
                BUDGET_CONTROL_NORMAL: 3
            }
        }
    }
    ,
    632711: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                burst_time_remain_seconds: {
                    type: "int64",
                    id: 1
                },
                multiple: {
                    type: "int64",
                    id: 2
                },
                property_definition_id: {
                    type: "int64",
                    id: 3
                },
                property_icon: {
                    type: "webcast.data.Image",
                    id: 4
                }
            }
        }
    }
    ,
    867489: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                BusinessActionUnknown: 0,
                BusinessActionAdd: 1,
                BusinessActionRemove: 2
            }
        }
    }
    ,
    997018: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            oneofs: {
                business: {
                    oneof: ["multi_live_content", "cohost_content"]
                }
            },
            fields: {
                over_length: {
                    type: "int64",
                    id: 1
                },
                multi_live_content: {
                    type: "webcast.im.MultiLiveContent",
                    id: 100
                },
                cohost_content: {
                    type: "webcast.im.CohostContent",
                    id: 200
                }
            }
        }
    }
    ,
    950267: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                BusinessType_Unknown: 0,
                BusinessType_CF: 1,
                BusinessType_TCM: 2,
                BusinessType_SHOUTOUTS: 3,
                BusinessType_TIKTOK_SHOP: 4,
                BusinessType_MAGIC: 5,
                BusinessType_LIVE_ACCEL: 6,
                BusinessType_TCM_ID: 7,
                BusinessType_TCM_TH: 8,
                BusinessType_CREATOR_PLUS: 9,
                BusinessType_TCM_US: 10,
                BusinessType_EVENT_TICKET: 11,
                BusinessType_TIKTOK_SHOP_ID: 12,
                BusinessType_TCM_KR: 13,
                BusinessType_TCM_RU: 14,
                BusinessType_TCM_VN: 15,
                BusinessType_TCM_CA: 16,
                BusinessType_TCM_DE: 17,
                BusinessType_TCM_JP: 18,
                BusinessType_TCM_FR: 19,
                BusinessType_TCM_IT: 20,
                BusinessType_TCM_AU: 21,
                BusinessType_COIN_EXCHANGE_US: 22,
                BusinessType_BM_US: 24,
                BusinessType_EVENT_EU: 25,
                BusinessType_BM_GRP23: 26
            }
        }
    }
    ,
    884921: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                BUTTON_NOTICE_TYPE_UNKNOWN: 0,
                BUTTON_NOTICE_TYPE_INVITE: 1,
                BUTTON_NOTICE_TYPE_VIEW: 2
            }
        }
    }
    ,
    771278: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                default_signaling_server_first: {
                    type: "int32",
                    id: 1
                }
            }
        }
    }
    ,
    499712: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                watch_duration: {
                    type: "int64",
                    id: 2
                },
                watch_total: {
                    type: "int64",
                    id: 3
                },
                current_round: {
                    type: "int32",
                    id: 7
                },
                pct: {
                    type: "int32",
                    id: 8
                },
                round_target: {
                    rule: "repeated",
                    type: "int64",
                    id: 9
                },
                all_desc: {
                    keyType: "string",
                    type: "string",
                    id: 10
                },
                all_image: {
                    keyType: "string",
                    type: "webcast.data.Image",
                    id: 11
                }
            }
        }
    }
    ,
    845269: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                award_content: {
                    type: "string",
                    id: 2
                },
                banner_content: {
                    type: "string",
                    id: 3
                }
            }
        }
    }
    ,
    885999: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                hit_ensure: {
                    type: "bool",
                    id: 1
                },
                cpt_price: {
                    type: "string",
                    id: 2
                },
                cpt_times: {
                    type: "int32",
                    id: 3
                }
            }
        }
    }
    ,
    703535: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                image_url: {
                    type: "string",
                    id: 1
                },
                campaign_banner_is_display: {
                    type: "bool",
                    id: 2
                },
                source_from: {
                    type: "int32",
                    id: 3
                }
            }
        }
    }
    ,
    862066: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                campaign_banner_display_result: {
                    type: "DisplayResult",
                    id: 1
                }
            }
        }
    }
    ,
    814561: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                CAMPAIGN_STATUS_DEFAULT: 0,
                CAMPAIGN_STATUS_FIRST_TASK: 1,
                CAMPAIGN_STATUS_SECOND_TASK: 2,
                CAMPAIGN_STATUS_USER_NO_BIND: 3,
                CAMPAIGN_STATUS_USER_BINDED_BUT_NO_TASK: 4
            }
        }
    }
    ,
    614419: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                CAMPAIGN_TYPE_UNKNOWN: 0,
                CAMPAIGN_TYPE_NOT_INVOLVED: 1,
                CAMPAIGN_TYPE_NORMAL_FIRST_RECHARGE: 2,
                CAMPAIGN_TYPE_FROZEN_COINS_FIRST_RECHARGE: 3,
                CAMPAIGN_TYPE_RETENTION_TASK: 4
            }
        }
    }
    ,
    67718: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                applier: {
                    type: "tikcast.linkmic.common.Player",
                    id: 1
                },
                applier_link_mic_id: {
                    type: "string",
                    id: 2
                }
            }
        }
    }
    ,
    972549: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                invitor: {
                    type: "tikcast.linkmic.common.Player",
                    id: 1
                },
                invitor_link_mic_id: {
                    type: "string",
                    id: 2
                },
                invitee_link_mic_id: {
                    type: "string",
                    id: 3
                },
                invite_seq_id: {
                    type: "int64",
                    id: 4
                },
                invitee: {
                    type: "tikcast.linkmic.common.Player",
                    id: 5
                }
            }
        }
    }
    ,
    952615: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                leaver: {
                    rule: "repeated",
                    type: "tikcast.linkmic.common.GroupPlayer",
                    id: 1
                },
                operator: {
                    type: "tikcast.linkmic.common.GroupPlayer",
                    id: 2
                },
                type: {
                    type: "tikcast.linkmic.common.JoinType",
                    id: 3
                },
                group_user: {
                    type: "tikcast.linkmic.common.GroupChannelAllUser",
                    id: 4
                }
            }
        }
    }
    ,
    216379: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                user_id: {
                    type: "int64",
                    id: 1
                },
                user_name: {
                    type: "string",
                    id: 2
                },
                avatar_url: {
                    type: "string",
                    id: 3
                },
                sec_user_id: {
                    type: "string",
                    id: 4
                }
            }
        }
    }
    ,
    785659: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                cohost: {
                    type: "CapsuleBizParamsCohost",
                    id: 1
                },
                random_gift: {
                    type: "CapsuleBizParamsRandomGift",
                    id: 3
                },
                effect_params: {
                    type: "CapsuleBizParamsNewAnchorEffect",
                    id: 4
                },
                comment_flagged_prompt: {
                    type: "CapsuleBizParamsCommentFlaggedPrompt",
                    id: 5
                },
                multi_guest_invite_guide: {
                    type: "CapsuleBizParamsMultiGuestInviteGuide",
                    id: 6
                },
                anchor_pin_perk: {
                    type: "CapsuleBizParamsAnchorPinPerk",
                    id: 7
                },
                gaming_moderators_comment_guide: {
                    type: "CapsuleBizParamsGamingModeratorsCommentGuide",
                    id: 8
                },
                comment_mute_rule_prompt: {
                    type: "CapsuleBizParamsCommentMuteRulePrompt",
                    id: 9
                },
                comment_flagged_prompt_for_new_user: {
                    type: "CapsuleBizParamsCommentFlaggedPromptForNewUser",
                    id: 10
                }
            }
        }
    }
    ,
    699895: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                pin_id: {
                    type: "int64",
                    id: 1
                },
                pin_card_type: {
                    type: "webcast.data.PinCardType",
                    id: 2
                },
                template_id: {
                    type: "string",
                    id: 3
                }
            }
        }
    }
    ,
    57503: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                available_friend_number: {
                    type: "int64",
                    id: 1
                },
                is_followed_by_rival: {
                    type: "bool",
                    id: 2
                },
                rival_user: {
                    type: "webcast.data.User",
                    id: 3
                },
                type: {
                    type: "string",
                    id: 4
                },
                invitee_model_prediction_data: {
                    type: "UserModelPredictionData",
                    id: 5
                },
                invitee_room_id: {
                    type: "int64",
                    id: 6
                },
                invitee_inner_channel_id: {
                    type: "int64",
                    id: 7
                },
                invitee_user_info: {
                    type: "webcast.data.User",
                    id: 8
                }
            }
        }
    }
    ,
    788488: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                trigger: {
                    type: "int64",
                    id: 1
                }
            }
        }
    }
    ,
    235584: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                trigger: {
                    type: "int64",
                    id: 1
                },
                comment_ids: {
                    rule: "repeated",
                    type: "int64",
                    id: 2
                }
            }
        }
    }
    ,
    581971: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                content: {
                    type: "string",
                    id: 1
                },
                user_cnt: {
                    type: "int64",
                    id: 2
                }
            }
        }
    }
    ,
    335597: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                user: {
                    type: "webcast.data.User",
                    id: 1
                },
                reply_msg_text: {
                    type: "webcast.data.Text",
                    id: 2
                },
                recommend_text: {
                    type: "RecommendComment",
                    id: 3
                }
            }
        }
    }
    ,
    303517: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                invitee_user: {
                    type: "webcast.data.User",
                    id: 1
                },
                display_strategy: {
                    type: "LinkmicAudienceInviteNoticeDisplayStrategy",
                    id: 2
                },
                linkmic_audience_invite_notice_reason: {
                    type: "string",
                    id: 3
                }
            }
        }
    }
    ,
    299769: (t, e, i) => {
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
    965246: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
                }
            }
        }
    }
    ,
    936623: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                icon: {
                    type: "webcast.data.Image",
                    id: 2
                },
                desc: {
                    type: "webcast.data.Text",
                    id: 3
                },
                button_text: {
                    type: "webcast.data.Text",
                    id: 4
                },
                schema: {
                    type: "string",
                    id: 5
                },
                type: {
                    type: "CapsuleType",
                    id: 6
                },
                scene: {
                    type: "string",
                    id: 7
                },
                biz_params: {
                    type: "CapsuleBizParams",
                    id: 8
                }
            }
        }
    }
    ,
    52962: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                CapsuleTypeDefault: 0,
                EcomPinProduct: 1,
                StreamGoalRemindPin: 2,
                Cohost: 3,
                Match: 4,
                RandomGift: 5,
                RankList: 6,
                SubscriptionGuild: 10,
                SubscriptionUpsell: 11,
                NewAnchorGuidance: 20,
                CommentFlaggedPrompt: 21,
                MultiGuestInviteGuide: 31,
                AudienceWantSetGuess: 41,
                RevenueTipsModeratorWelcomeCommentGuide: 50,
                RevenueTipsModeratorThanksGiftCommentGuide: 51,
                CommentMuteRulePrompt: 52,
                CommentFlaggedPromptForNewUser: 53
            }
        }
    }
    ,
    429454: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                lang: {
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
    160827: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                open: {
                    type: "bool",
                    id: 1
                },
                align_stream: {
                    type: "bool",
                    id: 2
                },
                support_lang: {
                    rule: "repeated",
                    type: "string",
                    id: 3
                },
                location: {
                    type: "CaptionLocation",
                    id: 4
                },
                show_type: {
                    type: "CaptionShowType",
                    id: 5
                }
            },
            nested: {
                CaptionLocation: {
                    values: {
                        UnknownLocation: 0,
                        TopRight: 1,
                        MiddleLeft: 2
                    }
                },
                CaptionShowType: {
                    values: {
                        UnknownShowType: 0,
                        OnlyDefinite: 1,
                        ShowIntermediate: 2
                    }
                }
            }
        }
    }
    ,
    740732: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                timestamp_ms: {
                    type: "int64",
                    id: 2
                },
                duration_ms: {
                    type: "int64",
                    id: 3
                },
                content: {
                    rule: "repeated",
                    type: "CaptionContent",
                    id: 4
                },
                sentence_id: {
                    type: "int64",
                    id: 5
                },
                sequence_id: {
                    type: "int64",
                    id: 6
                },
                definite: {
                    type: "bool",
                    id: 7
                }
            }
        }
    }
    ,
    665288: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                is_show: {
                    type: "bool",
                    id: 2
                }
            }
        }
    }
    ,
    110211: (t, e, i) => {
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
                    type: "int64",
                    id: 2
                },
                series_id: {
                    type: "int64",
                    id: 3
                },
                series_name: {
                    type: "string",
                    id: 4
                },
                official_price: {
                    type: "string",
                    id: 5
                },
                image_url: {
                    type: "string",
                    id: 6
                },
                open_url: {
                    type: "string",
                    id: 7
                }
            }
        }
    }
    ,
    21360: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                not_in_use: {
                    type: "int32",
                    id: 1
                }
            }
        }
    }
    ,
    381467: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                CardTypeNotExist: 0,
                CardTypePopProduct: 1,
                CardTypeShoppingBagList: 2
            }
        }
    }
    ,
    757909: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                CaseType_Unknown: 0,
                CaseType_W9: 1,
                CaseType_EuVat: 2,
                CaseType_Idn: 3,
                CaseType_Th: 4,
                CaseType_Kr: 5,
                CaseType_Jp: 6,
                CaseType_Ca: 7,
                CaseType_Au: 8,
                CaseType_W8: 9
            }
        }
    }
    ,
    384170: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                category_id: {
                    type: "string",
                    id: 2
                },
                category_name: {
                    type: "string",
                    id: 3
                },
                challenge_id: {
                    type: "string",
                    id: 4
                },
                challenge_name: {
                    type: "string",
                    id: 5
                }
            }
        }
    }
    ,
    846999: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                gift_id: {
                    type: "int64",
                    id: 1
                },
                gift_name: {
                    type: "string",
                    id: 2
                },
                gift_image: {
                    type: "webcast.data.Image",
                    id: 3
                },
                gift_price: {
                    type: "int64",
                    id: 4
                },
                lowest_unlock_level: {
                    type: "int64",
                    id: 100
                },
                highest_unlock_level: {
                    type: "int64",
                    id: 101
                },
                valid_duration_seconds: {
                    type: "int64",
                    id: 102
                },
                is_unlocked: {
                    type: "bool",
                    id: 103
                },
                expire_time_seconds: {
                    type: "int64",
                    id: 104
                }
            }
        }
    }
    ,
    78046: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                gifts: {
                    rule: "repeated",
                    type: "CelebrationGift",
                    id: 1
                },
                is_about_to_upgrade: {
                    type: "bool",
                    id: 2
                }
            }
        }
    }
    ,
    329550: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                items: {
                    rule: "repeated",
                    type: "UserRoom",
                    id: 2
                },
                max_push_delay_time: {
                    type: "int64",
                    id: 3
                }
            }
        }
    }
    ,
    247132: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                ChallengeTypeNone: 0,
                ChallengeTypeUVTask: 1
            }
        }
    }
    ,
    519074: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                vendor: {
                    type: "int32",
                    id: 1
                },
                layout: {
                    type: "int32",
                    id: 2
                },
                dimension: {
                    type: "int32",
                    id: 3
                }
            }
        }
    }
    ,
    945708: (t, e, i) => {
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
                content: {
                    type: "string",
                    id: 3
                },
                visible_to_sender: {
                    type: "bool",
                    id: 4
                },
                background_image: {
                    type: "webcast.data.Image",
                    id: 5
                },
                full_screen_text_color: {
                    type: "string",
                    id: 6
                },
                background_image_v2: {
                    type: "webcast.data.Image",
                    id: 7
                },
                public_area_common: {
                    type: "PublicAreaCommon",
                    id: 9
                },
                gift_image: {
                    type: "webcast.data.Image",
                    id: 10
                },
                input_type: {
                    type: "int32",
                    id: 11
                },
                at_user: {
                    type: "webcast.data.User",
                    id: 12
                },
                emotes: {
                    rule: "repeated",
                    type: "EmoteWithIndex",
                    id: 13
                },
                content_language: {
                    type: "string",
                    id: 14
                },
                msg_filter: {
                    type: "webcast.data.MsgFilter",
                    id: 15
                },
                quick_chat_scene: {
                    type: "int32",
                    id: 16
                },
                community_flagged_status: {
                    type: "int32",
                    id: 17
                },
                user_identity: {
                    type: "webcast.data.UserIdentity",
                    id: 18
                },
                comment_quality_scores: {
                    rule: "repeated",
                    type: "CommentQualityScore",
                    id: 19
                },
                comment_tag: {
                    rule: "repeated",
                    type: "CommentTag",
                    id: 20
                },
                public_area_message_common: {
                    type: "PublicAreaMessageCommon",
                    id: 21
                },
                screen_time: {
                    type: "int64",
                    id: 22
                },
                signature: {
                    type: "string",
                    id: 23
                },
                signature_version: {
                    type: "string",
                    id: 24
                },
                ec_streamer_key: {
                    type: "string",
                    id: 25
                }
            },
            nested: {
                EmoteWithIndex: {
                    fields: {
                        index: {
                            type: "int64",
                            id: 1
                        },
                        emote: {
                            type: "webcast.data.Emote",
                            id: 2
                        }
                    }
                }
            }
        }
    }
    ,
    663664: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                user_id: {
                    type: "int64",
                    id: 1
                },
                can_participate: {
                    type: "bool",
                    id: 2
                },
                original_bonus: {
                    type: "int64",
                    id: 3
                },
                total_participations: {
                    type: "int64",
                    id: 4
                },
                participations_this_month: {
                    type: "int64",
                    id: 5
                },
                max_winning_streak: {
                    type: "int64",
                    id: 6
                },
                max_battle_score: {
                    type: "int64",
                    id: 7
                },
                total_bonus: {
                    type: "int64",
                    id: 8
                },
                bonus_this_month: {
                    type: "int64",
                    id: 9
                },
                max_bonus: {
                    type: "int64",
                    id: 10
                },
                result_list: {
                    rule: "repeated",
                    type: "ChijiResult",
                    id: 11
                }
            }
        }
    }
    ,
    948863: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                time_str: {
                    type: "string",
                    id: 1
                },
                winning_streak: {
                    type: "int64",
                    id: 2
                },
                bonus: {
                    type: "int64",
                    id: 3
                }
            }
        }
    }
    ,
    152562: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                NO_PERM: 0,
                COHOST_PERM: 1,
                MULTIHOST_PERM: 2
            }
        }
    }
    ,
    646445: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                multi_cohost_permission: {
                    type: "bool",
                    id: 1
                },
                linked_users: {
                    rule: "repeated",
                    type: "LinkmicUser",
                    id: 2
                }
            }
        }
    }
    ,
    788450: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                ab_test_type: {
                    type: "CohostABTestType",
                    id: 1
                },
                group: {
                    type: "int64",
                    id: 2
                }
            }
        }
    }
    ,
    132150: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                ab_test_list: {
                    rule: "repeated",
                    type: "CohostABTest",
                    id: 1
                }
            }
        }
    }
    ,
    845628: (t, e, i) => {
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
                    type: "CohostABTestList",
                    id: 2
                }
            }
        }
    }
    ,
    166922: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                COHOST_AB_TEST_TYPE_UNKNOWN: 0,
                COHOST_AB_TEST_TYPE_LINK_TIMEOUT_STRATEGY: 1,
                COHOST_AB_TEST_TYPE_COHOST_RESERVATION: 2,
                COHOST_AB_TEST_TYPE_QUICK_PAIR_NEW_ARCH_SWITCH: 3,
                COHOST_AB_TEST_TYPE_COHOST_INVITATION_TEXT: 4
            }
        }
    }
    ,
    947904: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            oneofs: {
                business: {
                    oneof: ["join_group_biz_content", "permit_join_group_biz_content", "list_change_biz_content"]
                }
            },
            fields: {
                join_group_biz_content: {
                    type: "JoinGroupBizContent",
                    id: 1
                },
                permit_join_group_biz_content: {
                    type: "PermitJoinGroupBizContent",
                    id: 2
                },
                list_change_biz_content: {
                    type: "ListChangeBizContent",
                    id: 11
                }
            }
        }
    }
    ,
    426276: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                COHOST_LAYOUT_MODE_NORMAL: 0,
                COHOST_LAYOUT_MODE_SCREEN_SHARE: 1
            }
        }
    }
    ,
    652416: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                users: {
                    rule: "repeated",
                    type: "webcast.data.CohostListUser",
                    id: 1
                }
            }
        }
    }
    ,
    176242: (t, e, i) => {
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
                    type: "webcast.data.Image",
                    id: 3
                },
                linked_time: {
                    type: "int64",
                    id: 4
                },
                play_type: {
                    type: "LinkmicPlayType",
                    id: 5
                },
                room_id: {
                    type: "int64",
                    id: 6
                },
                linkmic_user_status: {
                    type: "LinkmicUserStatus",
                    id: 7
                },
                link_remaining_time: {
                    type: "int64",
                    id: 8
                },
                permission_type: {
                    type: "CoHostPermissoinType",
                    id: 9
                },
                display_id: {
                    type: "string",
                    id: 10
                },
                follow_status: {
                    type: "int64",
                    id: 11
                },
                is_low_version: {
                    type: "bool",
                    id: 12
                },
                rival_user_id: {
                    type: "int64",
                    id: 13
                },
                rival_room_id: {
                    type: "int64",
                    id: 14
                },
                is_initiator: {
                    type: "bool",
                    id: 15
                },
                linkmic_id_str: {
                    type: "string",
                    id: 16
                },
                best_teammate_uid: {
                    type: "int64",
                    id: 17
                },
                has_topic_perm: {
                    type: "bool",
                    id: 18
                },
                inner_channel_id: {
                    type: "int64",
                    id: 19
                }
            }
        }
    }
    ,
    470858: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                COHOST_NUDGE_INFO_NONE: 0,
                COHOST_NUDGE_INFO_YOUR_NUDGE: 1,
                COHOST_NUDGE_INFO_NUDGED_YOU: 2
            }
        }
    }
    ,
    353142: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            oneofs: {
                content: {
                    oneof: ["reserve_content", "reply_content"]
                }
            },
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                reserve_type: {
                    type: "ReserveType",
                    id: 2
                },
                reservation_id: {
                    type: "int64",
                    id: 3
                },
                reserve_content: {
                    type: "ReserveContent",
                    id: 4
                },
                reply_content: {
                    type: "ReplyContent",
                    id: 5
                }
            }
        }
    }
    ,
    712603: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                screen_share_stream_id: {
                    type: "string",
                    id: 1
                }
            }
        }
    }
    ,
    933606: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                id: {
                    type: "int64",
                    id: 1
                },
                title_key: {
                    type: "string",
                    id: 2
                },
                title_text: {
                    type: "string",
                    id: 3
                },
                liked: {
                    type: "bool",
                    id: 21
                },
                total_heat: {
                    type: "int64",
                    id: 22
                },
                total_rivals: {
                    type: "int64",
                    id: 23
                },
                rivals_avatar: {
                    rule: "repeated",
                    type: "webcast.data.Image",
                    id: 24
                }
            }
        }
    }
    ,
    404019: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            oneofs: {
                content: {
                    oneof: ["topic_set_content", "heat_update_content"]
                }
            },
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                action: {
                    type: "ActionType",
                    id: 2
                },
                topic: {
                    type: "webcast.data.CohostTopic",
                    id: 3
                },
                session_status: {
                    type: "webcast.data.TopicSessionStatus",
                    id: 21
                },
                topic_set_content: {
                    type: "TopicSetContent",
                    id: 5
                },
                heat_update_content: {
                    type: "HeatUpdateContent",
                    id: 6
                }
            },
            nested: {
                ActionType: {
                    values: {
                        ACTION_TYPE_UNKNOWN: 0,
                        ACTION_TYPE_TOPIC_SET: 1,
                        ACTION_TYPE_HEAT_UPDATE: 2
                    }
                }
            }
        }
    }
    ,
    314742: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                permission_type: {
                    type: "int64",
                    id: 1
                },
                source_type: {
                    type: "SourceType",
                    id: 2
                },
                is_low_version: {
                    type: "bool",
                    id: 3
                },
                best_teammate_uid: {
                    type: "int64",
                    id: 4
                },
                has_topic_perm: {
                    type: "bool",
                    id: 5
                },
                stream_config: {
                    type: "CohostStreamConfig",
                    id: 6
                },
                nickname: {
                    type: "string",
                    id: 11
                },
                display_id: {
                    type: "string",
                    id: 12
                },
                avatar_thumb: {
                    type: "webcast.data.Image",
                    id: 13
                },
                follow_status: {
                    type: "int64",
                    id: 14
                },
                user_id_str: {
                    type: "string",
                    id: 15
                }
            }
        }
    }
    ,
    86680: (t, e, i) => {
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
                    type: "ColdStartMsgType",
                    id: 2
                },
                status: {
                    type: "ColdStartStatus",
                    id: 3
                },
                viewer_count: {
                    type: "int64",
                    id: 4
                },
                total_count: {
                    type: "int64",
                    id: 5
                }
            }
        }
    }
    ,
    417990: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                StatusChange: 0,
                ViewerNumUpdate: 1
            }
        }
    }
    ,
    905753: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                seconds: {
                    type: "int32",
                    id: 1
                },
                total_count: {
                    type: "int64",
                    id: 2
                },
                viewer_count: {
                    type: "int64",
                    id: 3
                }
            }
        }
    }
    ,
    622889: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                viewer_count: {
                    type: "int32",
                    id: 1
                },
                status: {
                    type: "int32",
                    id: 2
                },
                stats: {
                    rule: "repeated",
                    type: "ColdStartStat",
                    id: 3
                }
            }
        }
    }
    ,
    642569: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                NotColdStart: 0,
                StartOrRunning: 1,
                STOP: 2
            }
        }
    }
    ,
    924541: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                display_type: {
                    type: "BadgeDisplayType",
                    id: 1
                },
                icon: {
                    type: "Image",
                    id: 2
                },
                text: {
                    type: "BadgeText",
                    id: 3
                },
                str: {
                    type: "string",
                    id: 4
                },
                padding: {
                    type: "PaddingInfo",
                    id: 5
                },
                font_style: {
                    type: "FontStyle",
                    id: 6
                },
                profile_card_panel: {
                    type: "ProfileCardPanel",
                    id: 7
                },
                background: {
                    type: "CombineBadgeBackground",
                    id: 11
                },
                background_dark_mode: {
                    type: "CombineBadgeBackground",
                    id: 12
                },
                icon_auto_mirrored: {
                    type: "bool",
                    id: 13
                },
                background_auto_mirrored: {
                    type: "bool",
                    id: 14
                },
                public_screen_show_style: {
                    type: "int32",
                    id: 15
                },
                personal_card_show_style: {
                    type: "int32",
                    id: 16
                },
                ranklist_online_audience_show_style: {
                    type: "int32",
                    id: 17
                },
                multi_guest_show_style: {
                    type: "int32",
                    id: 18
                },
                arrow_config: {
                    type: "ArrowConfig",
                    id: 19
                },
                padding_new_font: {
                    type: "PaddingInfo",
                    id: 20
                }
            }
        }
    }
    ,
    567269: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                image: {
                    type: "Image",
                    id: 1
                },
                background_color_code: {
                    type: "string",
                    id: 2
                },
                border_color_code: {
                    type: "string",
                    id: 3
                }
            }
        }
    }
    ,
    617885: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                UnknownResult: 0,
                ComboWin: 1,
                ComboInterrupt: 2
            }
        }
    }
    ,
    894647: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                ComboTypeUnknow: 0,
                ComboTypeNormal: 1,
                ComboTypeActivity: 2
            }
        }
    }
    ,
    26827: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                icon: {
                    type: "webcast.data.Image",
                    id: 1
                },
                placeholder: {
                    type: "string",
                    id: 2
                }
            }
        }
    }
    ,
    524757: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                version: {
                    type: "string",
                    id: 1
                },
                score: {
                    type: "int64",
                    id: 2
                }
            }
        }
    }
    ,
    553970: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                COMMENT_TAG_NORMAL: 0,
                COMMENT_TAG_CANDIDATE: 1,
                COMMENT_TAG_OVERAGE: 2
            }
        }
    }
    ,
    743113: (t, e, i) => {
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
                content_type: {
                    type: "int64",
                    id: 3
                },
                count: {
                    type: "int64",
                    id: 4
                },
                chat_time: {
                    type: "int64",
                    id: 5
                },
                tray_id: {
                    type: "int64",
                    id: 6
                }
            }
        }
    }
    ,
    547892: (t, e, i) => {
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
                content: {
                    type: "string",
                    id: 3
                },
                color: {
                    type: "string",
                    id: 4
                },
                back_ground: {
                    type: "webcast.data.Image",
                    id: 5
                },
                action_type: {
                    type: "int64",
                    id: 6
                },
                action_content: {
                    type: "string",
                    id: 7
                }
            }
        }
    }
    ,
    154818: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                product_info: {
                    keyType: "int64",
                    type: "ProductItem",
                    id: 1
                },
                pop_card_info: {
                    type: "PopCardInfo",
                    id: 2
                }
            }
        }
    }
    ,
    897671: (t, e, i) => {
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
                    type: "int64",
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
    621306: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                has_commerce_sale: {
                    type: "bool",
                    id: 2
                }
            }
        }
    }
    ,
    527819: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                commerce_permission: {
                    type: "int64",
                    id: 1
                },
                oec_live_enter_room_init_data: {
                    type: "string",
                    id: 2
                },
                use_async_load: {
                    type: "bool",
                    id: 3
                },
                product_num: {
                    type: "int64",
                    id: 4
                },
                use_new_promotion: {
                    type: "int32",
                    id: 5
                }
            }
        }
    }
    ,
    861558: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                open_commercial_content_toggle: {
                    type: "bool",
                    id: 1
                },
                promote_myself: {
                    type: "bool",
                    id: 2
                },
                promote_third_party: {
                    type: "bool",
                    id: 3
                }
            }
        }
    }
    ,
    115330: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                custom_message_id: {
                    type: "int64",
                    id: 2
                },
                brand_logo: {
                    type: "webcast.data.Image",
                    id: 3
                },
                brand_name: {
                    type: "webcast.data.Text",
                    id: 4
                },
                content: {
                    type: "webcast.data.Text",
                    id: 5
                },
                background_color: {
                    type: "string",
                    id: 6
                },
                border_color: {
                    type: "string",
                    id: 7
                },
                right_label: {
                    type: "RightLabel",
                    id: 8
                },
                duration: {
                    type: "int64",
                    id: 9
                }
            },
            nested: {
                RightLabel: {
                    fields: {
                        background_color: {
                            type: "string",
                            id: 1
                        },
                        content: {
                            type: "webcast.data.Text",
                            id: 2
                        },
                        height: {
                            type: "int64",
                            id: 3
                        }
                    }
                }
            }
        }
    }
    ,
    509197: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                goal_desc_commit_state: {
                    type: "EnumGoalDescCommitStatus",
                    id: 1
                }
            }
        }
    }
    ,
    446860: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
                },
                is_show_msg: {
                    type: "bool",
                    id: 6
                },
                describe: {
                    type: "string",
                    id: 7
                },
                display_text: {
                    type: "webcast.data.Text",
                    id: 8
                },
                fold_type: {
                    type: "int64",
                    id: 9
                },
                anchor_fold_type: {
                    type: "int64",
                    id: 10
                },
                priority_score: {
                    type: "int64",
                    id: 11
                },
                log_id: {
                    type: "string",
                    id: 12
                },
                msg_process_filter_k: {
                    type: "string",
                    id: 13
                },
                msg_process_filter_v: {
                    type: "string",
                    id: 14
                },
                from_idc: {
                    type: "string",
                    id: 15
                },
                to_idc: {
                    type: "string",
                    id: 16
                },
                filter_msg_tags: {
                    rule: "repeated",
                    type: "string",
                    id: 17
                },
                sei: {
                    type: "webcast.data.LiveMessageSEI",
                    id: 18
                },
                depend_root_id: {
                    type: "webcast.data.LiveMessageID",
                    id: 19
                },
                depend_id: {
                    type: "webcast.data.LiveMessageID",
                    id: 20
                },
                anchor_priority_score: {
                    type: "int64",
                    id: 21
                },
                room_message_heat_level: {
                    type: "int64",
                    id: 22
                },
                fold_type_for_web: {
                    type: "int64",
                    id: 23
                },
                anchor_fold_type_for_web: {
                    type: "int64",
                    id: 24
                },
                client_send_time: {
                    type: "int64",
                    id: 25
                },
                dispatch_strategy: {
                    type: "IMDispatchStrategy",
                    id: 26
                }
            }
        }
    }
    ,
    381443: (t, e, i) => {
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
                    type: "int64",
                    id: 2
                },
                main_content: {
                    type: "webcast.data.Text",
                    id: 3
                },
                secondary_content: {
                    rule: "repeated",
                    type: "ComplexContent",
                    id: 4
                },
                icon: {
                    type: "webcast.data.Image",
                    id: 5
                },
                button_content: {
                    type: "webcast.data.Text",
                    id: 6
                },
                button_action_schema: {
                    type: "string",
                    id: 7
                },
                button_icon: {
                    type: "webcast.data.Image",
                    id: 8
                },
                duration: {
                    type: "int64",
                    id: 9
                },
                is_rounded_icon: {
                    type: "bool",
                    id: 10
                }
            }
        }
    }
    ,
    31389: (t, e, i) => {
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
                luckymoney_id: {
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
                user: {
                    type: "webcast.data.User",
                    id: 6
                },
                style: {
                    type: "int64",
                    id: 7
                },
                lucky_icon: {
                    type: "LuckyIcon",
                    id: 8
                },
                background: {
                    type: "webcast.data.Image",
                    id: 9
                },
                is_official: {
                    type: "bool",
                    id: 10
                }
            },
            nested: {
                LuckyIcon: {
                    fields: {
                        url_list: {
                            rule: "repeated",
                            type: "string",
                            id: 1
                        },
                        uri: {
                            type: "string",
                            id: 2
                        }
                    }
                }
            }
        }
    }
    ,
    773369: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                schema_url: {
                    type: "string",
                    id: 2
                },
                anchor_pop_up: {
                    type: "bool",
                    id: 3
                }
            }
        }
    }
    ,
    742030: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                discardable: {
                    type: "bool",
                    id: 2
                },
                immediate: {
                    type: "bool",
                    id: 3
                },
                duration: {
                    type: "int64",
                    id: 4
                },
                text_color: {
                    type: "string",
                    id: 5
                },
                background_color_start: {
                    type: "string",
                    id: 6
                },
                background_color_end: {
                    type: "string",
                    id: 7
                },
                position: {
                    type: "int64",
                    id: 8
                },
                top_img: {
                    type: "webcast.data.Image",
                    id: 9
                },
                top_img_width: {
                    type: "int64",
                    id: 10
                },
                top_img_height: {
                    type: "int64",
                    id: 11
                },
                show_mongolia_layer: {
                    type: "bool",
                    id: 12
                }
            }
        }
    }
    ,
    960603: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                community_content_type: {
                    type: "CommunityContentType",
                    id: 1
                },
                community_content_text: {
                    type: "string",
                    id: 2
                },
                community_content_image: {
                    type: "webcast.data.Image",
                    id: 3
                },
                community_content_display_order: {
                    type: "int32",
                    id: 4
                },
                title_template_id: {
                    type: "string",
                    id: 5
                }
            }
        }
    }
    ,
    561603: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                CommunityContentTypeUnknown: 0,
                CommunityContentTypeText: 1,
                CommunityContentTypeImage: 2
            }
        }
    }
    ,
    925261: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                community_content_list: {
                    rule: "repeated",
                    type: "CommunityContent",
                    id: 1
                },
                audit_status: {
                    type: "AuditStatus",
                    id: 2
                }
            }
        }
    }
    ,
    730239: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                type: {
                    type: "BattleType",
                    id: 1
                },
                channel_id: {
                    type: "int64",
                    id: 2
                },
                competition_id: {
                    type: "int64",
                    id: 3
                },
                room_id: {
                    type: "int64",
                    id: 4
                },
                competition_id_str: {
                    type: "string",
                    id: 5
                },
                room_id_str: {
                    type: "string",
                    id: 6
                }
            }
        }
    }
    ,
    546793: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                user: {
                    type: "CompetitionUserBase",
                    id: 1
                },
                score: {
                    type: "int64",
                    id: 2
                },
                avatar: {
                    type: "webcast.data.Image",
                    id: 3
                }
            }
        }
    }
    ,
    454077: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                COMPETITION_END_REASON_UNKNOWN: 0,
                COMPETITION_END_REASON_NORMAL: 1,
                COMPETITION_END_REASON_CUT_SHORT: 2
            }
        }
    }
    ,
    25769: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                competition_finish_time: {
                    type: "int64",
                    id: 1
                },
                reason: {
                    type: "CompetitionEndReason",
                    id: 2
                },
                leave_user: {
                    type: "CompetitionUserBase",
                    id: 3
                }
            }
        }
    }
    ,
    782090: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            oneofs: {
                biz_info: {
                    oneof: ["take_the_stage_info", "group_show_info"]
                }
            },
            fields: {
                biz_common: {
                    type: "webcast.data.CompetitionCommon",
                    id: 1
                },
                team_infos: {
                    rule: "repeated",
                    type: "webcast.data.CompetitionResultsTeamInfo",
                    id: 2
                },
                take_the_stage_info: {
                    type: "TakeTheStageInfo",
                    id: 100
                },
                group_show_info: {
                    type: "GroupShowInfo",
                    id: 101
                }
            },
            nested: {
                GroupShowInfo: {
                    fields: {
                        status: {
                            type: "GroupShowStatus",
                            id: 1
                        },
                        end_timestamp: {
                            type: "int64",
                            id: 2
                        },
                        actual_end_timestamp: {
                            type: "int64",
                            id: 3
                        },
                        start_timestamp: {
                            type: "int64",
                            id: 4
                        }
                    }
                }
            }
        }
    }
    ,
    878273: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                initiate_info: {
                    type: "webcast.data.CompetitionInitiateInfo",
                    id: 1
                },
                gift_permissions: {
                    keyType: "int64",
                    type: "webcast.data.GiftPermissionType",
                    id: 2
                }
            }
        }
    }
    ,
    299321: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            oneofs: {
                biz_info: {
                    oneof: ["take_the_stage_biz"]
                }
            },
            fields: {
                initiator: {
                    type: "CompetitionUserBase",
                    id: 1
                },
                initiate_type: {
                    type: "CompetitionInitiateType",
                    id: 2
                },
                teams: {
                    rule: "repeated",
                    type: "CompetitionTeamBase",
                    id: 3
                },
                take_the_stage_biz: {
                    type: "TakeTheStageBiz",
                    id: 100
                }
            },
            nested: {
                TakeTheStageBiz: {
                    fields: {
                        anchors: {
                            rule: "repeated",
                            type: "AnchorInfo",
                            id: 1
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
                        }
                    }
                }
            }
        }
    }
    ,
    844945: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                COMPETITION_INITIATE_TYPE_NORMAL: 0,
                COMPETITION_INITIATE_TYPE_REMATCH: 1
            }
        }
    }
    ,
    472255: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            oneofs: {
                content: {
                    oneof: ["initiate", "reply", "start", "settle_start", "settle_end", "score_change", "finish", "switch_turn"]
                }
            },
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                biz_common: {
                    type: "webcast.data.CompetitionCommon",
                    id: 2
                },
                type: {
                    type: "CompetitionMessageType",
                    id: 3
                },
                initiate: {
                    type: "webcast.data.CompetitionInitiate",
                    id: 100
                },
                reply: {
                    type: "webcast.data.CompetitionReply",
                    id: 101
                },
                start: {
                    type: "CompetitionStart",
                    id: 102
                },
                settle_start: {
                    type: "webcast.data.CompetitionSettleStart",
                    id: 103
                },
                settle_end: {
                    type: "webcast.data.CompetitionSettleEnd",
                    id: 104
                },
                score_change: {
                    type: "CompetitionScoreChange",
                    id: 105
                },
                finish: {
                    type: "webcast.data.CompetitionFinish",
                    id: 106
                },
                switch_turn: {
                    type: "webcast.data.CompetitionSwitchTurn",
                    id: 107
                }
            }
        }
    }
    ,
    529431: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                COMPETITION_MESSAGE_TYPE_UNKNOWN: 0,
                COMPETITION_MESSAGE_TYPE_INITIATE: 1,
                COMPETITION_MESSAGE_TYPE_REPLY: 2,
                COMPETITION_MESSAGE_TYPE_START: 3,
                COMPETITION_MESSAGE_TYPE_SETTLE_START: 4,
                COMPETITION_MESSAGE_TYPE_SETTLE_END: 5,
                COMPETITION_MESSAGE_TYPE_SCORE_CHANGE: 6,
                COMPETITION_MESSAGE_TYPE_FINISH: 7,
                COMPETITION_MESSAGE_TYPE_SWITCH_TURN: 8
            }
        }
    }
    ,
    642600: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            oneofs: {
                biz_info: {
                    oneof: ["take_the_stage_biz"]
                }
            },
            fields: {
                reply_type: {
                    type: "CompetitionReplyType",
                    id: 1
                },
                replier: {
                    type: "CompetitionUserBase",
                    id: 2
                },
                initiate: {
                    type: "CompetitionInitiate",
                    id: 3
                },
                take_the_stage_biz: {
                    type: "TakeTheStageBiz",
                    id: 100
                }
            },
            nested: {
                TakeTheStageBiz: {
                    fields: {
                        take_the_stage_status: {
                            type: "TakeTheStageStatus",
                            id: 1
                        },
                        performance_start_time: {
                            type: "int64",
                            id: 2
                        },
                        anchors: {
                            rule: "repeated",
                            type: "AnchorInfo",
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
                        }
                    }
                }
            }
        }
    }
    ,
    717648: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                COMPETITION_REPLY_TYPE_UNKNOWN: 0,
                COMPETITION_REPLY_TYPE_ACCEPT: 1,
                COMPETITION_REPLY_TYPE_REJECT: 2,
                COMPETITION_REPLY_TYPE_WITHDRAW: 3
            }
        }
    }
    ,
    438243: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                team_id: {
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
                result: {
                    type: "Result",
                    id: 4
                },
                contributors: {
                    rule: "repeated",
                    type: "CompetitionContributorInfo",
                    id: 5
                },
                members: {
                    rule: "repeated",
                    type: "CompetitionTeamMemberInfo",
                    id: 6
                },
                team_id_str: {
                    type: "string",
                    id: 7
                }
            },
            nested: {
                Result: {
                    values: {
                        RESULT_UNKNOWN: 0,
                        RESULT_WIN: 1,
                        RESULT_LOSE: 2,
                        RESULT_DRAW: 3
                    }
                }
            }
        }
    }
    ,
    917326: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                COMPETITION_ROLE_TYPE_UNKNOWN: 0,
                COMPETITION_ROLE_TYPE_ANCHOR: 1,
                COMPETITION_ROLE_TYPE_AUDIENCE: 2
            }
        }
    }
    ,
    227394: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            oneofs: {
                biz_info: {
                    oneof: ["take_the_stage_biz"]
                }
            },
            fields: {
                team_infos: {
                    rule: "repeated",
                    type: "webcast.data.CompetitionResultsTeamInfo",
                    id: 1
                },
                take_the_stage_biz: {
                    type: "TakeTheStageBiz",
                    id: 100
                }
            },
            nested: {
                TakeTheStageBiz: {
                    fields: {
                        status: {
                            type: "webcast.data.TakeTheStageStatus",
                            id: 1
                        },
                        performance_start_time: {
                            type: "int64",
                            id: 2
                        },
                        order_info: {
                            type: "data.TakeTheStageOrderInfo",
                            id: 3
                        }
                    }
                }
            }
        }
    }
    ,
    594440: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                planned_finish_time: {
                    type: "int64",
                    id: 1
                },
                team_infos: {
                    rule: "repeated",
                    type: "CompetitionResultsTeamInfo",
                    id: 2
                },
                leave_user: {
                    type: "CompetitionUserBase",
                    id: 3
                },
                reason: {
                    type: "CompetitionEndReason",
                    id: 4
                }
            }
        }
    }
    ,
    477689: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                planned_settlement_end_time: {
                    type: "int64",
                    id: 1
                },
                extra_time_interval: {
                    type: "int64",
                    id: 2
                },
                initiator: {
                    type: "CompetitionUserBase",
                    id: 3
                }
            }
        }
    }
    ,
    825248: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                competition_start_time: {
                    type: "int64",
                    id: 1
                },
                initiate_info: {
                    type: "webcast.data.CompetitionInitiateInfo",
                    id: 2
                },
                end_timestamp: {
                    type: "int64",
                    id: 3
                },
                actual_end_timestamp: {
                    type: "int64",
                    id: 4
                }
            }
        }
    }
    ,
    726349: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            oneofs: {
                biz_info: {
                    oneof: ["take_the_stage_biz"]
                }
            },
            fields: {
                take_the_stage_biz: {
                    type: "TakeTheStageBiz",
                    id: 100
                }
            },
            nested: {
                TakeTheStageBiz: {
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
                }
            }
        }
    }
    ,
    354550: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                team_id: {
                    type: "int64",
                    id: 1
                },
                users: {
                    rule: "repeated",
                    type: "CompetitionUserBase",
                    id: 2
                }
            }
        }
    }
    ,
    397693: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                user: {
                    type: "CompetitionUserBase",
                    id: 1
                },
                score: {
                    type: "int64",
                    id: 2
                }
            }
        }
    }
    ,
    141984: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                user_id: {
                    type: "int64",
                    id: 1
                },
                role: {
                    type: "CompetitionRoleType",
                    id: 2
                },
                nickname: {
                    type: "string",
                    id: 3
                },
                avatar: {
                    type: "webcast.data.Image",
                    id: 4
                },
                user_id_str: {
                    type: "string",
                    id: 5
                }
            }
        }
    }
    ,
    364036: (t, e, i) => {
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
                font_color: {
                    type: "string",
                    id: 3
                },
                font_size: {
                    type: "int64",
                    id: 4
                },
                weight: {
                    type: "int64",
                    id: 5
                },
                img: {
                    type: "webcast.data.Image",
                    id: 6
                }
            }
        }
    }
    ,
    166620: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                INVITE_SOURCE_UNKNOWN: 0,
                INVITE_SOURCE_PANEL_GOLIVE: 1,
                INVITE_SOURCE_MUTUAL_NOTICE: 2,
                INVITE_SOURCE_USER_PROFILE: 3,
                INVITE_SOURCE_RESERVE: 4
            }
        }
    }
    ,
    863843: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                content_i_d: {
                    type: "string",
                    id: 1
                },
                content_type: {
                    type: "ContentPositionType",
                    id: 2
                },
                pos: {
                    type: "Position",
                    id: 3
                },
                content_linkmic_i_d: {
                    type: "string",
                    id: 4
                },
                start_time_nano: {
                    type: "int64",
                    id: 5
                }
            }
        }
    }
    ,
    733096: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                content_i_d: {
                    type: "string",
                    id: 1
                },
                content_type: {
                    type: "ContentPositionType",
                    id: 2
                }
            }
        }
    }
    ,
    435195: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                CONTENT_POSITION_TYPE_UNKNOWN: 0,
                CONTENT_POSITION_TYPE_STREAM: 1,
                CONTENT_POSITION_TYPE_LIVE_STUDIO_STREAM_PORTRAIT: 2,
                CONTENT_POSITION_TYPE_LIVE_STUDIO_STREAM_LANDSCAPE: 3
            }
        }
    }
    ,
    963589: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                ContentSourceUnknown: 0,
                ContentSourceNormal: 1,
                ContentSourceCamera: 2
            }
        }
    }
    ,
    940413: (t, e, i) => {
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
                tips: {
                    type: "string",
                    id: 3
                },
                extra: {
                    type: "Extra",
                    id: 4
                },
                perception_dialog: {
                    type: "webcast.data.PerceptionDialogInfo",
                    id: 5
                },
                perception_audience_text: {
                    type: "webcast.data.Text",
                    id: 6
                },
                punish_info: {
                    type: "webcast.data.PunishEventInfo",
                    id: 7
                },
                float_text: {
                    type: "webcast.data.Text",
                    id: 8
                },
                float_style: {
                    type: "int32",
                    id: 9
                }
            },
            nested: {
                Extra: {
                    fields: {
                        ban_info_url: {
                            type: "string",
                            id: 1
                        },
                        reason_no: {
                            type: "int64",
                            id: 2
                        },
                        title: {
                            type: "webcast.data.Text",
                            id: 3
                        },
                        violation_reason: {
                            type: "webcast.data.Text",
                            id: 4
                        },
                        content: {
                            type: "webcast.data.Text",
                            id: 5
                        },
                        got_it_button: {
                            type: "webcast.data.Text",
                            id: 6
                        },
                        ban_detail_button: {
                            type: "webcast.data.Text",
                            id: 7
                        },
                        source: {
                            type: "string",
                            id: 8
                        }
                    }
                }
            }
        }
    }
    ,
    585127: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                item_comment: {
                    type: "int32",
                    id: 1
                },
                item_duet: {
                    type: "int32",
                    id: 2
                },
                item_stitch: {
                    type: "int32",
                    id: 3
                }
            }
        }
    }
    ,
    851297: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                background_image_url: {
                    type: "string",
                    id: 1
                },
                cover_image_url: {
                    type: "string",
                    id: 2
                },
                config_json_url: {
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
                starling_map: {
                    keyType: "string",
                    type: "string",
                    id: 7
                },
                thumb_cover_image_url: {
                    type: "string",
                    id: 8
                }
            }
        }
    }
    ,
    540686: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                COOLING_DOWN_TYPE_UNKNOWN: 0,
                COOLING_DOWN_TYPE_EDIT: 1,
                COOLING_DOWN_TYPE_DISABLE: 2
            }
        }
    }
    ,
    963516: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                duration: {
                    type: "int64",
                    id: 1
                },
                auto_expand: {
                    type: "bool",
                    id: 2
                },
                target_score: {
                    type: "int64",
                    id: 3
                }
            }
        }
    }
    ,
    318021: (t, e, i) => {
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
                countdown_id: {
                    type: "int64",
                    id: 3
                },
                status: {
                    type: "int32",
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
                countdown_config: {
                    type: "CountdownConfig",
                    id: 7
                },
                countdown_user: {
                    type: "CountdownUser",
                    id: 8
                }
            }
        }
    }
    ,
    424802: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                duration: {
                    type: "int64",
                    id: 1
                },
                target_score: {
                    type: "int64",
                    id: 2
                }
            }
        }
    }
    ,
    442235: (t, e, i) => {
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
                play_id: {
                    type: "int64",
                    id: 3
                },
                play_status: {
                    type: "CountdownForAllStatus",
                    id: 4
                },
                version: {
                    type: "int64",
                    id: 5
                },
                start_time: {
                    type: "int64",
                    id: 6
                },
                end_time: {
                    type: "int64",
                    id: 7
                },
                play_config: {
                    type: "CountdownForAllConfig",
                    id: 8
                },
                play_users: {
                    rule: "repeated",
                    type: "CountdownForAllUser",
                    id: 9
                }
            }
        }
    }
    ,
    926867: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                COUNTDOWN_FOR_ALL_END_REASON_UNKNOWN: 0,
                COUNTDOWN_FOR_ALL_END_REASON_TIMER_OVER_NORMALLY: 1,
                COUNTDOWN_FOR_ALL_END_REASON_HOST_END: 2,
                COUNTDOWN_FOR_ALL_END_REASON_MODERATOR_END: 3,
                COUNTDOWN_FOR_ALL_END_REASON_LAST_PLAYER_LEAVE: 4,
                COUNTDOWN_FOR_ALL_END_REASON_MULTI_GUEST_CLOSED: 5,
                COUNTDOWN_FOR_ALL_END_REASON_KICK_OUT_ALL_GUESTS: 6
            }
        }
    }
    ,
    783789: (t, e, i) => {
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
                    type: "CountdownForAllMessageType",
                    id: 2
                },
                play_content: {
                    type: "webcast.data.multi_guest_play.CountdownForAllContent",
                    id: 3
                },
                operator_user_info: {
                    type: "tikcast.linkmic.common.LinkerMediaChangeOperator",
                    id: 4
                },
                play_end_reason: {
                    type: "CountdownForAllEndReason",
                    id: 5
                }
            }
        }
    }
    ,
    753565: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                COUNTDOWN_FOR_ALL_MESSAGE_TYPE_UNKNOWN: 0,
                COUNTDOWN_FOR_ALL_MESSAGE_TYPE_START: 1,
                COUNTDOWN_FOR_ALL_MESSAGE_TYPE_END: 2,
                COUNTDOWN_FOR_ALL_MESSAGE_TYPE_CONTENT_SYNC: 3,
                COUNTDOWN_FOR_ALL_MESSAGE_TYPE_RANK_SYNC: 4
            }
        }
    }
    ,
    633478: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                COUNTDOWN_FOR_ALL_STATUS_UNKNOWN: 0,
                COUNTDOWN_FOR_ALL_STATUS_ONGOING: 1,
                COUNTDOWN_FOR_ALL_STATUS_END: 2,
                COUNTDOWN_FOR_ALL_STATUS_FINISHED: 3
            }
        }
    }
    ,
    901015: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
                user: {
                    type: "webcast.data.User",
                    id: 5
                },
                nickname: {
                    type: "string",
                    id: 6
                },
                display_id: {
                    type: "string",
                    id: 7
                },
                avatar_thumb: {
                    type: "webcast.data.Image",
                    id: 8
                }
            }
        }
    }
    ,
    611195: (t, e, i) => {
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
                    type: "CountdownMessageType",
                    id: 2
                },
                countdown_content: {
                    type: "webcast.data.multi_guest_play.CountdownContent",
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
    529315: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                COUNTDOWN_MESSAGE_TYPE_UNKNOWN: 0,
                COUNTDOWN_MESSAGE_TYPE_START: 1,
                COUNTDOWN_MESSAGE_TYPE_END: 2,
                COUNTDOWN_MESSAGE_TYPE_CONTENT_SYNC: 3
            }
        }
    }
    ,
    907757: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
                completion_progress_percent: {
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
                }
            }
        }
    }
    ,
    976483: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                activity_type: {
                    type: "int64",
                    id: 1
                },
                before_text: {
                    type: "string",
                    id: 2
                },
                before_button: {
                    type: "string",
                    id: 3
                },
                after_text: {
                    type: "string",
                    id: 4
                },
                after_button: {
                    type: "string",
                    id: 5
                }
            }
        }
    }
    ,
    711131: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                coupon_meta_id: {
                    type: "string",
                    id: 1
                },
                start_time: {
                    type: "string",
                    id: 2
                },
                expire_time: {
                    type: "string",
                    id: 3
                },
                period_type: {
                    type: "int64",
                    id: 4
                },
                valid_period: {
                    type: "int64",
                    id: 5
                },
                start_apply_time: {
                    type: "string",
                    id: 6
                },
                end_apply_time: {
                    type: "string",
                    id: 7
                },
                coupon_name: {
                    type: "string",
                    id: 8
                },
                url: {
                    type: "string",
                    id: 9
                },
                threshold: {
                    type: "int64",
                    id: 10
                },
                credit: {
                    type: "int64",
                    id: 11
                },
                max_apply_times: {
                    type: "int64",
                    id: 12
                },
                type: {
                    type: "int64",
                    id: 13
                },
                type_detail: {
                    type: "string",
                    id: 14
                },
                discount: {
                    type: "double",
                    id: 15
                },
                shop_id: {
                    type: "string",
                    id: 16
                },
                pay_type: {
                    type: "int64",
                    id: 17
                },
                max_discount_limit: {
                    type: "int64",
                    id: 18
                },
                shop_name: {
                    type: "string",
                    id: 19
                },
                type_string: {
                    type: "string",
                    id: 20
                },
                what_coupon: {
                    type: "string",
                    id: 21
                },
                coupon_string: {
                    type: "string",
                    id: 22
                },
                channel_id: {
                    type: "int64",
                    id: 23
                },
                left_amount: {
                    type: "int64",
                    id: 24
                },
                has_applied: {
                    type: "int64",
                    id: 25
                },
                status: {
                    type: "int64",
                    id: 26
                },
                shop_logo: {
                    type: "string",
                    id: 27
                },
                is_show: {
                    type: "int64",
                    id: 28
                },
                total_amount: {
                    type: "int64",
                    id: 29
                },
                live_coupon_status: {
                    type: "int32",
                    id: 30
                },
                coupon_source: {
                    type: "int32",
                    id: 31
                },
                user_apply_times: {
                    type: "int64",
                    id: 32
                },
                can_continue_apply: {
                    type: "bool",
                    id: 33
                },
                coupon_status: {
                    type: "bool",
                    id: 34
                },
                coupon_reset: {
                    type: "bool",
                    id: 35
                },
                start_time_timestamp: {
                    type: "int64",
                    id: 36
                },
                expire_time_timestamp: {
                    type: "int64",
                    id: 37
                },
                avatar: {
                    type: "string",
                    id: 38
                },
                kol_uid: {
                    type: "int64",
                    id: 39
                },
                product_ids: {
                    rule: "repeated",
                    type: "int64",
                    id: 40
                },
                platform_sub_type: {
                    type: "int64",
                    id: 41
                },
                has_available_goods: {
                    type: "bool",
                    id: 42
                },
                type_title: {
                    type: "string",
                    id: 43
                }
            }
        }
    }
    ,
    824478: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                url_list: {
                    rule: "repeated",
                    type: "string",
                    id: 1
                },
                uri: {
                    type: "string",
                    id: 2
                },
                width: {
                    type: "int64",
                    id: 3
                },
                height: {
                    type: "int64",
                    id: 4
                }
            }
        }
    }
    ,
    207489: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                level: {
                    type: "int64",
                    id: 1
                },
                bubble_tip: {
                    type: "string",
                    id: 2
                },
                pop_tip: {
                    type: "string",
                    id: 3
                },
                uri: {
                    type: "string",
                    id: 4
                }
            }
        }
    }
    ,
    905393: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                CPP_AGE_VERIFICATION_AB_UPGRADING_REQUIREMENT: 0,
                CPP_AGE_VERIFICATION_AB_PREREQUISITE: 1,
                CPP_AGE_VERIFICATION_AB_NO_VERIFY: 2
            }
        }
    }
    ,
    171610: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                cpp_age_verification_ab: {
                    type: "CppAgeVerificationAB",
                    id: 1
                },
                age_verify_status: {
                    type: "CppAgeVerifyStatus",
                    id: 2
                },
                age_verify_process_status: {
                    type: "CppAgeVerifyProcessStatus",
                    id: 3
                },
                age_verify_times: {
                    type: "int64",
                    id: 4
                },
                age_appeal_method_time: {
                    type: "int64",
                    id: 5
                },
                age_appeal_method_time_unit: {
                    type: "TimeUnit",
                    id: 6
                },
                age_appeal_method: {
                    type: "AgeAppealMethod",
                    id: 7
                }
            }
        }
    }
    ,
    816745: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                CPP_AGE_VERIFY_PROCESS_STATUS_CAN_SUBMIT: 0,
                CPP_AGE_VERIFY_PROCESS_STATUS_CAN_RETRY: 1,
                CPP_AGE_VERIFY_PROCESS_STATUS_REVIEWING: 2,
                CPP_AGE_VERIFY_PROCESS_STATUS_FAILED: 3
            }
        }
    }
    ,
    507298: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                CPP_AGE_VERIFY_STATUS_VERIFIED: 0,
                CPP_AGE_VERIFY_STATUS_NOT_VERIFIED: 1
            }
        }
    }
    ,
    548897: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                current_live_duration: {
                    type: "int64",
                    id: 1
                },
                current_live_days: {
                    type: "int64",
                    id: 2
                },
                last_live_duration: {
                    type: "int64",
                    id: 3
                },
                last_live_days: {
                    type: "int64",
                    id: 4
                },
                live_duration_threshold: {
                    type: "int64",
                    id: 5
                },
                live_days_threshold: {
                    type: "int64",
                    id: 6
                },
                task_status: {
                    type: "webcast.data.CppTaskStatus",
                    id: 7
                },
                show_cpp_v2_model: {
                    type: "bool",
                    id: 8
                }
            }
        }
    }
    ,
    353831: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                CPP_TASK_STATUS_NOT_START: 0,
                CPP_TASK_STATUS_STARTED: 1,
                CPP_TASK_STATUS_FINISHED: 2,
                CPP_TASK_STATUS_RESET: 3
            }
        }
    }
    ,
    698178: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                CPP_VERSION_NOT_CPP: 0,
                CPP_VERSION_CPP_V1: 1,
                CPP_VERSION_CPP_V2: 2
            }
        }
    }
    ,
    526557: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                owner: {
                    type: "tikcast.linkmic.common.Player",
                    id: 1
                },
                owner_link_mic_id: {
                    type: "string",
                    id: 2
                }
            }
        }
    }
    ,
    577857: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                CREATE_CONTRACT_INTENT_DEFAULT: 0,
                CREATE_CONTRACT_INTENT_NEW_PURCHASE: 1,
                CREATE_CONTRACT_INTENT_EXTEND: 2,
                CREATE_CONTRACT_INTENT_CHANGE_PACKAGE: 3,
                CREATE_CONTRACT_INTENT_CHANGE_CYCLE: 4
            }
        }
    }
    ,
    201467: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                red_packets: {
                    rule: "repeated",
                    type: "RedPacket",
                    id: 2
                }
            }
        }
    }
    ,
    197013: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                room_continue: {
                    type: "int32",
                    id: 1
                },
                is_anchor_continue_keep_msg: {
                    type: "bool",
                    id: 2
                },
                cross_device_continue_scene: {
                    type: "int32",
                    id: 3
                },
                continue_scene: {
                    type: "int32",
                    id: 4
                },
                link_mic_user_num: {
                    type: "int64",
                    id: 5
                }
            }
        }
    }
    ,
    331378: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                NotLimit: 0,
                ShopLimit: 1,
                ThirdPartyLimit: 2
            }
        }
    }
    ,
    163292: (t, e, i) => {
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
                critical_strike_rate_low: {
                    type: "int64",
                    id: 6
                },
                critical_strike_rate_high: {
                    type: "int64",
                    id: 7
                },
                multiple: {
                    type: "int64",
                    id: 8
                },
                gift_name_key: {
                    type: "string",
                    id: 9
                },
                rule_url: {
                    type: "string",
                    id: 10
                },
                effect_time_sec: {
                    type: "int64",
                    id: 11
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
    225702: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                question: {
                    type: "webcast.data.InteractionQuestion",
                    id: 1
                },
                like_cnt: {
                    type: "uint64",
                    id: 2
                },
                self_like_status: {
                    type: "int32",
                    id: 3
                },
                favorite_status: {
                    type: "int32",
                    id: 4
                }
            }
        }
    }
    ,
    310317: (t, e, i) => {
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
                    type: "CustomPromotionType",
                    id: 2
                },
                title: {
                    type: "string",
                    id: 3
                },
                desc: {
                    type: "string",
                    id: 4
                },
                tip: {
                    type: "string",
                    id: 5
                },
                discount_percentage: {
                    type: "int64",
                    id: 6
                },
                discount_local_price_amount_micros: {
                    type: "int64",
                    id: 7
                },
                free_trial_info: {
                    type: "FreeTrialInfo",
                    id: 8
                }
            }
        }
    }
    ,
    780957: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                CUSTOM_PROMOTION_TYPE_NONE: 0,
                CUSTOM_PROMOTION_TYPE_PERCENTAGE_DISCOUNT: 1,
                CUSTOM_PROMOTION_TYPE_FREE_TRIAL: 2
            }
        }
    }
    ,
    498139: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                id: {
                    type: "int64",
                    id: 1
                },
                tab_title: {
                    type: "string",
                    id: 2
                },
                tab_schema: {
                    type: "string",
                    id: 3
                },
                tab_schema_type: {
                    type: "TabSchemaType",
                    id: 4
                },
                tab_priority: {
                    type: "int64",
                    id: 5
                }
            },
            nested: {
                TabSchemaType: {
                    values: {
                        Chat_Schema: 0,
                        Lynx_Schema: 1,
                        Native_Lynx_Schema: 2
                    }
                }
            }
        }
    }
    ,
    283023: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                custom_tabs: {
                    type: "CustomTabs",
                    id: 1
                }
            }
        }
    }
    ,
    583118: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                id: {
                    type: "int64",
                    id: 1
                },
                begin_time: {
                    type: "int64",
                    id: 2
                },
                end_time: {
                    type: "int64",
                    id: 3
                },
                anchor_id: {
                    type: "int64",
                    id: 4
                },
                room_id: {
                    type: "int64",
                    id: 5
                },
                default_tab_index: {
                    type: "int64",
                    id: 6
                },
                custom_tab_list: {
                    rule: "repeated",
                    type: "CustomTab",
                    id: 7
                }
            }
        }
    }
    ,
    265047: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                CycleTypeUnknown: 0,
                CycleTypeFixedTime: 1,
                CycleTypePermanent: 2
            }
        }
    }
    ,
    196197: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                value_str: {
                    type: "string",
                    id: 1
                },
                value_int: {
                    type: "int64",
                    id: 2
                }
            }
        }
    }
    ,
    660872: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                rooms: {
                    rule: "repeated",
                    type: "string",
                    id: 2
                },
                max_push_delay_time: {
                    type: "int64",
                    id: 3
                }
            }
        }
    }
    ,
    158104: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                scene_version: {
                    type: "int32",
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
    462055: (t, e, i) => {
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
                type: {
                    type: "int64",
                    id: 3
                },
                input_rect: {
                    rule: "repeated",
                    type: "int64",
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
                content: {
                    type: "string",
                    id: 7
                },
                max_length: {
                    type: "int64",
                    id: 8
                },
                status: {
                    type: "int64",
                    id: 9
                },
                h: {
                    type: "int64",
                    id: 10
                },
                x: {
                    type: "int64",
                    id: 11
                },
                w: {
                    type: "int64",
                    id: 12
                },
                y: {
                    type: "int64",
                    id: 13
                },
                kind: {
                    type: "int64",
                    id: 14
                },
                sub_type: {
                    type: "int64",
                    id: 15
                },
                reservation: {
                    type: "Reservation",
                    id: 16
                }
            }
        }
    }
    ,
    93102: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    102934: (t, e, i) => {
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
    391073: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                min_delay_ms: {
                    type: "int64",
                    id: 1
                },
                max_delay_ms: {
                    type: "int64",
                    id: 2
                }
            }
        }
    }
    ,
    107214: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    ,
    151172: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                kind: {
                    type: "int32",
                    id: 1
                },
                status: {
                    type: "int32",
                    id: 2
                },
                game_id: {
                    type: "int64",
                    id: 3
                },
                gift_limit: {
                    type: "int32",
                    id: 4
                },
                round_id: {
                    type: "int64",
                    id: 5
                },
                game_kind: {
                    type: "webcast.data.GameKind",
                    id: 6
                },
                chat: {
                    type: "int64",
                    id: 7
                },
                loader: {
                    type: "int64",
                    id: 8
                },
                reload: {
                    type: "int64",
                    id: 9
                },
                data: {
                    keyType: "string",
                    type: "string",
                    id: 10
                }
            }
        }
    }
    ,
    715473: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                contain_cart: {
                    type: "bool",
                    id: 1
                },
                total: {
                    type: "int64",
                    id: 2
                },
                flash_total: {
                    type: "int64",
                    id: 3
                }
            }
        }
    }
    ,
    813410: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                deprecated1: {
                    type: "DeprecatedStruct6",
                    id: 1
                }
            }
        }
    }
    ,
    487599: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                deprecated1: {
                    type: "DeprecatedStruct7",
                    id: 1
                },
                deprecated2: {
                    type: "DeprecatedStruct7",
                    id: 2
                },
                deprecated3: {
                    type: "string",
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
                    type: "string",
                    id: 6
                },
                deprecated7: {
                    type: "string",
                    id: 7
                },
                deprecated8: {
                    type: "webcast.data.Image",
                    id: 8
                },
                deprecated9: {
                    type: "webcast.data.Image",
                    id: 9
                },
                deprecated10: {
                    type: "string",
                    id: 10
                },
                deprecated11: {
                    type: "webcast.data.Image",
                    id: 11
                }
            },
            nested: {
                DeprecatedStruct7: {
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
    ,
    829759: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                DESCRIPTION_TYPE_DEFAULT: 0,
                DESCRIPTION_TYPE_PRESET: 1,
                DESCRIPTION_TYPE_HIDE: 2
            }
        }
    }
    ,
    232459: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                BlockReasonNone: 0,
                InLinkmic: 100,
                MultiHostFull: 101,
                InCohostLinkmic: 102,
                DealOtherInvite: 103,
                DealOtherApply: 104,
                InPKStatus: 105,
                SelfInPKStatus: 106,
                InCohostInviteApply: 107,
                InAudienceLinkmic: 108,
                WaitingAutoMatch: 109,
                InviteNeedToJoin: 110,
                JoinNeedToInvite: 111,
                InTakeTheStageStatus: 112,
                SelfInTakeTheStageStatus: 113,
                NoLinkmicPermission: 200,
                AnchorLinkmicSettingClosed: 202,
                AnchorLinkmicRefuseNotFollower: 203,
                AnchorLinkmicBlockInvitationOfLive: 204,
                AnchorLinkmicRefuseFriendInvite: 205,
                AnchorLinkmicRefuseFriendApply: 206,
                AnchorLinkmicRefuseNotFriendInvite: 207,
                AnchorLinkmicRefuseNotFriendApply: 208,
                AnchorLinkmicBlockInvitationOfMultiHost: 209,
                AnchorLinkmicBlockApplyOfMultiHost: 210,
                RoomPaused: 300,
                LiveTypeAudio: 301,
                RoomInteractionConflict: 302,
                RivalVersionNotSupport: 303,
                SelfVersionNotSupport: 304,
                MatureThemeMismatch: 305,
                SelfInOfficialChannel: 306,
                RivalInOfficialChannel: 307,
                InOfficialBackupChannel: 308,
                RivalReserveFull: 309,
                AnchorNotLiving: 310,
                AnchorIsSelf: 311,
                PrivateRoom: 312,
                BlockedByRival: 313,
                SelfBlockedRival: 314,
                ViewerRegionNotSupport: 315,
                SubscriberRoom: 316,
                RegionalBlock: 317,
                PenaltyBanned: 318,
                BlockProgramLiveTabRoom: 319,
                NetworkError: 400,
                RoomFilterError: 401
            }
        }
    }
    ,
    703172: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                seconds: {
                    type: "int64",
                    id: 1
                },
                diamond_count: {
                    type: "int64",
                    id: 2
                }
            }
        }
    }
    ,
    494917: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                id: {
                    type: "int64",
                    id: 1
                },
                normal_icon_url: {
                    type: "Image",
                    id: 2
                }
            }
        }
    }
    ,
    832917: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                digg_count: {
                    type: "int64",
                    id: 2
                },
                duration: {
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
                }
            }
        }
    }
    ,
    497029: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                DIRECT_MESSAGE_SCOPE_UNKNOWN: 0,
                DIRECT_MESSAGE_SCOPE_EVERYONE: 1,
                DIRECT_MESSAGE_SCOPE_FRIENDS: 2,
                DIRECT_MESSAGE_SCOPE_OFF: 3,
                DIRECT_MESSAGE_SCOPE_SUGGEST: 4
            }
        }
    }
    ,
    601071: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                enable_status: {
                    type: "EnableStatus",
                    id: 1
                },
                grant_discord_access: {
                    type: "bool",
                    id: 2
                },
                joined_discord_server: {
                    type: "bool",
                    id: 3
                },
                anchor_id: {
                    type: "int64",
                    id: 4
                },
                oauth_url: {
                    type: "string",
                    id: 5
                },
                guild_id: {
                    type: "string",
                    id: 6
                }
            }
        }
    }
    ,
    508812: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                DiscordExpiredSubscriberActionTypeNoAction: 0,
                DiscordExpiredSubscriberActionTypeRemoveRole7Days: 1,
                DiscordExpiredSubscriberActionTypeRemoveRole24Hours: 2,
                DiscordExpiredSubscriberActionTypeKickRole7Days: 3,
                DiscordExpiredSubscriberActionTypeKickRole24Hours: 4
            }
        }
    }
    ,
    183094: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
                    type: "DiscordRoleInfo",
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
    531973: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
                }
            }
        }
    }
    ,
    825931: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                dispersion_path: {
                    type: "DispersionPath",
                    id: 1
                },
                delay_param: {
                    type: "DelayParam",
                    id: 2
                }
            }
        }
    }
    ,
    662746: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                max_delay_ms: {
                    type: "int64",
                    id: 1
                },
                min_delay_ms: {
                    type: "int64",
                    id: 2
                }
            }
        }
    }
    ,
    776652: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                DispersionPathDefaultUnknowPath: 0,
                DispersionPathPopProduct: 1,
                DispersionPathPreviewAssemble: 2,
                DispersionPathPopRefresh: 3,
                DispersionPathDiffRefresh: 4,
                DispersionPathProductNum: 5,
                DispersionPathProductPromotion: 6
            }
        }
    }
    ,
    940122: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                priority: {
                    type: "int32",
                    id: 1
                },
                duration: {
                    type: "int64",
                    id: 2
                },
                target_group_show_rst: {
                    keyType: "int32",
                    type: "ShowResult",
                    id: 3
                },
                horizontal_trigger_type: {
                    type: "HorizontalOnclickTriggerType",
                    id: 4
                }
            },
            nested: {
                HorizontalOnclickTriggerType: {
                    values: {
                        OnclickTriggerType_Unknown: 0,
                        OnclickTriggerType_Left: 1,
                        OnclickTriggerType_Middle: 2,
                        OnclickTriggerType_Right: 3,
                        OnclickTriggerType_AllArea: 4
                    }
                }
            }
        }
    }
    ,
    867430: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                DefaultResult: 0,
                Success: 1,
                Fail: 2
            }
        }
    }
    ,
    973161: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                DisplayStatusNormal: 0,
                DisplayStatusShadow: 1
            }
        }
    }
    ,
    579610: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                DisplayStrategyUnknown: 0,
                DisplayStrategyHidden: 1
            }
        }
    }
    ,
    653882: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                DisplayStyleNormal: 0,
                DisplayStyleStay: 1,
                DisplayStyleChat: 2
            }
        }
    }
    ,
    865292: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                donation_total: {
                    type: "string",
                    id: 2
                },
                currency: {
                    type: "string",
                    id: 3
                },
                donation_user_count: {
                    type: "int64",
                    id: 4
                }
            }
        }
    }
    ,
    431568: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                total: {
                    type: "int64",
                    id: 2
                },
                currency: {
                    type: "string",
                    id: 3
                },
                sponsor: {
                    rule: "repeated",
                    type: "webcast.data.User",
                    id: 4
                },
                user: {
                    rule: "repeated",
                    type: "webcast.data.User",
                    id: 5
                }
            }
        }
    }
    ,
    343455: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                donation_sticker: {
                    rule: "repeated",
                    type: "webcast.data.DonationSticker",
                    id: 2
                }
            }
        }
    }
    ,
    653803: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
                compose: {
                    type: "string",
                    id: 6
                },
                room_fan_ticket_count: {
                    type: "int64",
                    id: 7
                },
                priority: {
                    type: "webcast.data.GiftIMPriority",
                    id: 8
                },
                log_id: {
                    type: "string",
                    id: 9
                },
                public_area_common: {
                    type: "PublicAreaCommon",
                    id: 10
                },
                tray_display_text: {
                    type: "webcast.data.Text",
                    id: 11
                }
            }
        }
    }
    ,
    817458: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                template_id: {
                    type: "int64",
                    id: 1
                },
                image: {
                    type: "Image",
                    id: 2
                }
            }
        }
    }
    ,
    552021: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                number: {
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
    ,
    234598: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                promotion: {
                    type: "int64",
                    id: 2
                }
            }
        }
    }
    ,
    709855: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                download_status_none: 0,
                download_status_not_ready: 1,
                download_status_auto_download: 2,
                download_status_ready: 3,
                download_status_unavailable: 4
            }
        }
    }
    ,
    274774: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                DefaultDrawType: 0,
                LuckyBag: 1
            }
        }
    }
    ,
    114420: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                new_count: {
                    type: "int64",
                    id: 2
                },
                popup_url: {
                    type: "string",
                    id: 3
                }
            }
        }
    }
    ,
    679834: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                DROPS_PIN_STATUS_UNPIN: 0,
                DROPS_PIN_STATUS_PIN: 1
            }
        }
    }
    ,
    260275: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                DROPS_REASON_TYPE_UNKNOWN: 0,
                DROPS_REASON_TYPE_EXCELLENT_CREATOR: 1,
                DROPS_REASON_TYPE_TOP_REWARDS: 2
            }
        }
    }
    ,
    624356: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                show_claim_drops_gift_notice: {
                    type: "bool",
                    id: 1
                },
                earliest_gift_expire_ts: {
                    type: "int32",
                    id: 2
                },
                drops_list_entrance: {
                    type: "bool",
                    id: 3
                },
                show_drops_tag: {
                    type: "bool",
                    id: 4
                }
            }
        }
    }
    ,
    279357: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                DropsStatusInit: 0,
                DropsStatusOnline: 1,
                DropsStatusOffline: 2
            }
        }
    }
    ,
    729345: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                DROPS_TASK_SKIP_REASON_UNSET: 0,
                DROPS_TASK_SKIP_REASON_LACK_STOCK: 1,
                DROPS_TASK_SKIP_REASON_NOT_OPEN_COMMENT: 2
            }
        }
    }
    ,
    771660: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                DropsTaskStatusInit: 0,
                DropsTaskStatusFinished: 1,
                DropsTaskStatusReward: 2,
                DropsTaskStatusReceived: 3
            }
        }
    }
    ,
    966886: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                DROPS_TASK_TYPE_UNKNOWN: 0,
                DROPS_TASK_TYPE_FOLLOW: 1,
                DROPS_TASK_TYPE_VIEW: 2,
                DROPS_TASK_TYPE_COMMENT: 3,
                DROPS_TASK_TYPE_SHARE: 4,
                DROPS_TASK_TYPE_COUNTDOWN: 5
            }
        }
    }
    ,
    506220: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                speedy_gift_id: {
                    type: "int32",
                    id: 5
                },
                target_score: {
                    type: "int32",
                    id: 6
                },
                stage_count: {
                    type: "int32",
                    id: 7
                },
                status: {
                    type: "int32",
                    id: 8
                },
                score: {
                    type: "int32",
                    id: 9
                },
                contribute_most: {
                    type: "webcast.data.User",
                    id: 10
                },
                contribute_most_score: {
                    type: "int32",
                    id: 11
                },
                duty_id: {
                    type: "int64",
                    id: 12
                }
            }
        }
    }
    ,
    444276: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                scenes: {
                    type: "SceneRestriction",
                    id: 1
                },
                receivers: {
                    rule: "repeated",
                    type: "ReceiverRestriction",
                    id: 2
                }
            }
        }
    }
    ,
    311176: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                round: {
                    type: "int64",
                    id: 1
                },
                title: {
                    type: "string",
                    id: 2
                },
                subtitle: {
                    type: "string",
                    id: 3
                },
                streak_info: {
                    type: "StreakInfo",
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
                announcement_starling_key: {
                    type: "string",
                    id: 7
                },
                description: {
                    type: "string",
                    id: 8
                },
                schema: {
                    type: "string",
                    id: 9
                },
                grade_info: {
                    type: "GradeInfo",
                    id: 10
                }
            },
            nested: {
                MileStone: {
                    fields: {
                        target_value: {
                            type: "int64",
                            id: 1
                        },
                        bonus_times: {
                            type: "int64",
                            id: 2
                        }
                    }
                },
                StreakType: {
                    values: {
                        STREAK_TYPE_UNKNOWN: 0,
                        STREAK_TYPE_COMBO: 1,
                        STREAK_TYPE_WIN: 2
                    }
                },
                StreakInfo: {
                    fields: {
                        streak_type: {
                            type: "StreakType",
                            id: 1
                        },
                        progress: {
                            type: "int64",
                            id: 2
                        },
                        mile_stones: {
                            rule: "repeated",
                            type: "MileStone",
                            id: 3
                        }
                    }
                },
                GradeInfo: {
                    fields: {
                        level: {
                            type: "int64",
                            id: 1
                        },
                        progress: {
                            type: "int64",
                            id: 2
                        },
                        target: {
                            type: "int64",
                            id: 3
                        }
                    }
                }
            }
        }
    }
    ,
    731166: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "webcast.im.Common",
                    id: 1
                },
                icon: {
                    type: "webcast.data.Image",
                    id: 2
                },
                content: {
                    type: "webcast.data.Text",
                    id: 3
                },
                duration: {
                    type: "int64",
                    id: 4
                },
                background_color: {
                    type: "string",
                    id: 5
                },
                background_opacity: {
                    type: "double",
                    id: 6
                }
            }
        }
    }
    ,
    414880: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                draw_type: {
                    type: "DrawTypeEnum",
                    id: 1
                },
                sub_type: {
                    type: "SubTypeEnum",
                    id: 2
                },
                activity_id: {
                    type: "int64",
                    id: 3
                },
                incentive_image: {
                    type: "webcast.data.Image",
                    id: 11
                },
                incentive_record_id: {
                    type: "int64",
                    id: 12
                }
            }
        }
    }
    ,
    370444: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                message_entity: {
                    type: "EcDrawEntity",
                    id: 2
                }
            }
        }
    }
    ,
    399914: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                message_entity: {
                    type: "ShortItemRefreshEntity",
                    id: 2
                }
            }
        }
    }
    ,
    886384: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                toast_msg: {
                    type: "string",
                    id: 1
                }
            }
        }
    }
    ,
    275612: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                message_entity: {
                    type: "EcTaskRefreshCouponListEntity",
                    id: 2
                }
            }
        }
    }
    ,
    528142: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                message_entity: {
                    type: "EcTaskRegisterMessageEntity",
                    id: 2
                }
            }
        }
    }
    ,
    839285: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                shuffle_interval: {
                    type: "int64",
                    id: 1
                },
                task_id: {
                    type: "string",
                    id: 2
                }
            }
        }
    }
    ,
    183232: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                WatchLiveDuration: 0
            }
        }
    }
    ,
    194199: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                EcomLiveElement_Unknown: 0,
                PopCard: 1,
                ShoppingBagIcon: 2,
                ShoppingBagList: 3
            }
        }
    }
    ,
    12088: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                atom_actions: {
                    rule: "repeated",
                    type: "AtomAction",
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
    479552: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                tag_name: {
                    type: "string",
                    id: 1
                },
                tag_type: {
                    type: "EcommerceRoomTagType",
                    id: 2
                },
                tag_show_time: {
                    type: "int64",
                    id: 3
                },
                da_info: {
                    type: "string",
                    id: 4
                }
            },
            nested: {
                EcommerceRoomTagType: {
                    values: {
                        Unknown: 0,
                        StarShop: 1
                    }
                }
            }
        }
    }
    ,
    158074: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                title: {
                    type: "string",
                    id: 1
                },
                url_link: {
                    type: "string",
                    id: 2
                },
                type: {
                    type: "EducationContentType",
                    id: 3
                },
                id: {
                    type: "string",
                    id: 4
                },
                create_time_sec: {
                    type: "int64",
                    id: 5
                },
                prompt_title: {
                    type: "string",
                    id: 6
                },
                prompt_content: {
                    type: "string",
                    id: 7
                }
            }
        }
    }
    ,
    368178: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                EDUCATION_CONTENT_LIVE: 0,
                EDUCATION_CONTENT_LEADS_GEN: 1
            }
        }
    }
    ,
    11020: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                effect_id: {
                    type: "int64",
                    id: 1
                },
                role: {
                    type: "int64",
                    id: 2
                },
                user_id: {
                    type: "int64",
                    id: 3
                }
            }
        }
    }
    ,
    731444: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                gift_id: {
                    rule: "repeated",
                    type: "int64",
                    id: 2
                },
                effect_id: {
                    rule: "repeated",
                    type: "int64",
                    id: 3
                },
                priority: {
                    type: "webcast.data.GiftIMPriority",
                    id: 14
                },
                log_id: {
                    type: "string",
                    id: 16
                }
            }
        }
    }
    ,
    874876: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                critical_strike_cards: {
                    rule: "repeated",
                    type: "CriticalStrikeCardInfo",
                    id: 1
                },
                smoke_cards: {
                    rule: "repeated",
                    type: "SmokeCardInfo",
                    id: 2
                },
                extra_time_cards: {
                    rule: "repeated",
                    type: "ExtraTimeCardInfo",
                    id: 3
                },
                special_effect_cards: {
                    rule: "repeated",
                    type: "SpecialEffectCardInfo",
                    id: 4
                },
                potion_cards: {
                    rule: "repeated",
                    type: "PotionCardInfo",
                    id: 5
                },
                wave_cards: {
                    rule: "repeated",
                    type: "WaveCardInfo",
                    id: 6
                }
            }
        }
    }
    ,
    197441: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                emote_id: {
                    type: "string",
                    id: 1
                },
                image: {
                    type: "webcast.data.Image",
                    id: 2
                },
                audit_status: {
                    type: "AuditStatus",
                    id: 3
                },
                uuid: {
                    type: "string",
                    id: 4
                },
                emote_type: {
                    type: "EmoteType",
                    id: 5
                },
                content_source: {
                    type: "ContentSource",
                    id: 6
                },
                emote_private_type: {
                    type: "EmotePrivateType",
                    id: 7
                },
                package_id: {
                    type: "string",
                    id: 8
                },
                audit_info: {
                    type: "AuditInfo",
                    id: 9
                },
                reward_condition: {
                    type: "RewardCondition",
                    id: 10
                },
                emote_upload_info: {
                    type: "EmoteUploadInfo",
                    id: 11
                },
                create_time: {
                    type: "int64",
                    id: 12
                },
                emote_scene: {
                    type: "EmoteScene",
                    id: 13
                }
            }
        }
    }
    ,
    18636: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                EMOTE_CHANGE_SOURCE_UNKNOWN: 0,
                EMOTE_CHANGE_SOURCE_ANCHOR: 1,
                EMOTE_CHANGE_SOURCE_MODERATOR: 2
            }
        }
    }
    ,
    636908: (t, e, i) => {
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
                emote_list: {
                    rule: "repeated",
                    type: "webcast.data.Emote",
                    id: 3
                },
                msg_filter: {
                    type: "webcast.data.MsgFilter",
                    id: 4
                },
                user_identity: {
                    type: "webcast.data.UserIdentity",
                    id: 5
                }
            }
        }
    }
    ,
    763279: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                emote_cnt_lmt: {
                    type: "int32",
                    id: 1
                },
                default_emote_list: {
                    rule: "repeated",
                    type: "Emote",
                    id: 2
                },
                located_emote_id: {
                    type: "string",
                    id: 3
                },
                emote_cnt_limit_sub_wave_custom: {
                    type: "int32",
                    id: 4
                }
            }
        }
    }
    ,
    79972: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                emote_list: {
                    rule: "repeated",
                    type: "Emote",
                    id: 1
                },
                exist: {
                    type: "bool",
                    id: 2
                },
                emote_version: {
                    type: "int64",
                    id: 3
                }
            }
        }
    }
    ,
    491582: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                EMOTE_PRIVATE_TYPE_NORMAL: 0,
                EMOTE_PRIVATE_TYPE_SUB_WAVE: 1,
                EMOTE_PRIVATE_TYPE_GUESSING: 101
            }
        }
    }
    ,
    799473: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                EMOTE_SCENE_SUBSCRIPTION: 0,
                EMOTE_SCENE_GAME: 1
            }
        }
    }
    ,
    861969: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                EmoteTypeNormal: 0,
                EmoteTypeWithSticker: 1
            }
        }
    }
    ,
    963428: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                user_id: {
                    type: "int64",
                    id: 1
                },
                emote_upload_source: {
                    type: "UserEmoteUploadSource",
                    id: 2
                },
                user_info: {
                    type: "webcast.data.User",
                    id: 3
                },
                user_id_str: {
                    type: "string",
                    id: 4
                }
            }
        }
    }
    ,
    212881: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                index: {
                    type: "int64",
                    id: 1
                },
                emote: {
                    type: "Emote",
                    id: 2
                }
            }
        }
    }
    ,
    464575: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                expire_time: {
                    type: "int64",
                    id: 1
                },
                anchor_id: {
                    type: "int64",
                    id: 2
                }
            }
        }
    }
    ,
    497452: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                EmotesShowStyleNormal: 0,
                EmotesShowStyleWithSticker: 1,
                EmotesShowStyleWithStickerNoPreview: 2
            }
        }
    }
    ,
    634913: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                id: {
                    type: "int64",
                    id: 1
                }
            }
        }
    }
    ,
    977508: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                EnableStatusUnknown: 0,
                EnableStatusOpen: 1,
                EnableStatusClose: 2
            }
        }
    }
    ,
    347910: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                SUCCESS: 0,
                FAIL: 1,
                ONGOING: 2
            }
        }
    }
    ,
    925513: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                is_enlarge: {
                    type: "int32",
                    id: 1
                },
                target_position: {
                    type: "string",
                    id: 2
                },
                scene: {
                    type: "webcast.data.EnlargeScreenScene",
                    id: 3
                },
                operator_info: {
                    type: "tikcast.linkmic.common.LinkerMediaChangeOperator",
                    id: 4
                },
                layout_id: {
                    type: "string",
                    id: 5
                },
                linked_user_ui_positions: {
                    rule: "repeated",
                    type: "string",
                    id: 6
                },
                enlarged_positions: {
                    rule: "repeated",
                    type: "tikcast.linkmic.common.PosIdentity",
                    id: 7
                }
            }
        }
    }
    ,
    488511: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                ENLARGE_UNKNOWN: 0,
                ENLARGE_HOST_SCREEN: 1,
                INVITE_ENLARGE_GUEST_SCREEN: 2,
                CANCEL_ENLARGE_FOR_HOST: 3,
                CANCEL_ENLARGE_FOR_GUEST: 4,
                HOST_RECEIVE_CANCEL_ENLARGE: 5,
                GET_ENLARGE_STATUS: 6,
                ENLARGE_POSITION: 7,
                CANCEL_ENLARGE_POSITION: 8,
                CANCEL_ENLARGE_FOR_ALL: 9,
                CHANGE_ENLARGE_RECORD: 10
            }
        }
    }
    ,
    97246: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                type: {
                    type: "int64",
                    id: 1
                },
                allow_list: {
                    rule: "repeated",
                    type: "string",
                    id: 2
                },
                deny_list: {
                    rule: "repeated",
                    type: "string",
                    id: 3
                }
            }
        }
    }
    ,
    77900: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                ENTRANCE_GROUP_TYPE_DEFAULT: 0,
                ENTRANCE_GROUP_TYPE_GIFT: 1,
                ENTRANCE_GROUP_TYPE_E_COMMERCE: 2,
                ENTRANCE_GROUP_TYPE_GAME: 3
            }
        }
    }
    ,
    824573: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                ENTRANCE_GUIDANCE_TYPE_UNKNOWN: 0,
                ENTRANCE_GUIDANCE_TYPE_ABOUT_TO_UPGRADE: 1
            }
        }
    }
    ,
    778469: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                Unknow: 0,
                Committed: 1,
                UncommittedWaitAudit: 2,
                UncommittedInternalError: 3,
                UncommittedSameDescription: 4
            }
        }
    }
    ,
    791323: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                BusinessTypeUnknown: 0,
                BusinessTypeUserDiamond: 1,
                BusinessTypePlatformDiamond: 2,
                BusinessTypePlatformShell: 3,
                BusinessTypePortal: 4,
                BusinessTypePlatformMerch: 5,
                BusinessTypeEOYDiamond: 6,
                BusinessTypeFanClubGTM: 7,
                BusinessTypePlatformPortal: 9,
                BusinessTypeEOYGtmPopularityTicket: 10,
                BusinessTypeEOYGtmRevenueDiamond: 11,
                BusinessTypeEOYGtmGameDiamond: 12,
                BusinessTypeCreatorLeaguePromotionGTM: 13,
                BusinessTypeMOYGtmPopularityTicket: 14
            }
        }
    }
    ,
    108915: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                EnvelopeDisplayUnknown: 0,
                EnvelopeDisplayNew: 1,
                EnvelopeDisplayHide: 2
            }
        }
    }
    ,
    914671: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                EnvelopeFollowShowUnknown: 0,
                EnvelopeFollowShow: 1,
                EnvelopeFollowNotShow: 2
            }
        }
    }
    ,
    169854: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                envelope_info: {
                    type: "EnvelopeInfo",
                    id: 2
                },
                display: {
                    type: "webcast.data.EnvelopeDisplay",
                    id: 3
                }
            },
            nested: {
                EnvelopeInfo: {
                    fields: {
                        envelope_id: {
                            type: "string",
                            id: 1
                        },
                        business_type: {
                            type: "webcast.data.EnvelopeBusinessType",
                            id: 2
                        },
                        envelope_idc: {
                            type: "string",
                            id: 3
                        },
                        send_user_name: {
                            type: "string",
                            id: 4
                        },
                        diamond_count: {
                            type: "int32",
                            id: 5
                        },
                        people_count: {
                            type: "int32",
                            id: 6
                        },
                        unpack_at: {
                            type: "int32",
                            id: 7
                        },
                        send_user_id: {
                            type: "string",
                            id: 8
                        },
                        send_user_avatar: {
                            type: "webcast.data.Image",
                            id: 9
                        },
                        create_at: {
                            type: "string",
                            id: 10
                        },
                        room_id: {
                            type: "string",
                            id: 11
                        },
                        follow_show_status: {
                            type: "webcast.data.EnvelopeFollowShowStatus",
                            id: 12
                        },
                        skin_id: {
                            type: "int32",
                            id: 13
                        }
                    }
                }
            }
        }
    }
    ,
    474792: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                portal_info: {
                    type: "PortalInfo",
                    id: 2
                },
                portal_trans_target: {
                    type: "PortalTransTarget",
                    id: 3
                },
                portal_view: {
                    type: "PortalView",
                    id: 4
                },
                portal_display: {
                    type: "PortalDisplay",
                    id: 5
                },
                hide_reason: {
                    type: "PortalHideReason",
                    id: 6
                }
            },
            nested: {
                PortalTransTarget: {
                    fields: {
                        room_id: {
                            type: "string",
                            id: 1
                        },
                        send_room_cover: {
                            type: "webcast.data.Image",
                            id: 2
                        },
                        anchor_display_id: {
                            type: "string",
                            id: 3
                        },
                        anchor_id: {
                            type: "string",
                            id: 4
                        },
                        anchor_avatar: {
                            type: "webcast.data.Image",
                            id: 5
                        },
                        envelope_diamonds: {
                            type: "int32",
                            id: 6
                        }
                    }
                },
                PortalInfo: {
                    fields: {
                        id: {
                            type: "string",
                            id: 1
                        },
                        idc: {
                            type: "string",
                            id: 2
                        },
                        send_at_second: {
                            type: "int32",
                            id: 3
                        },
                        ddl_second: {
                            type: "int32",
                            id: 4
                        },
                        envelope_diamonds: {
                            type: "int32",
                            id: 5
                        },
                        portal_diamonds: {
                            type: "int32",
                            id: 6
                        },
                        sender_display_id: {
                            type: "string",
                            id: 7
                        },
                        sender_id: {
                            type: "string",
                            id: 8
                        },
                        sender_avatar: {
                            type: "webcast.data.Image",
                            id: 9
                        },
                        trans_count: {
                            type: "int32",
                            id: 10
                        },
                        touch_count: {
                            type: "int32",
                            id: 11
                        }
                    }
                }
            }
        }
    }
    ,
    38851: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                ts: {
                    type: "int64",
                    id: 1
                },
                data: {
                    keyType: "string",
                    type: "string",
                    id: 2
                },
                data_v2: {
                    keyType: "string",
                    type: "string",
                    id: 3
                },
                server_features: {
                    keyType: "string",
                    type: "string",
                    id: 4
                }
            }
        }
    }
    ,
    313326: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "Common",
                    id: 1
                },
                decisions: {
                    type: "EpiDecision",
                    id: 2
                }
            }
        }
    }
    ,
    109928: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                ts: {
                    type: "int64",
                    id: 1
                },
                data: {
                    keyType: "string",
                    type: "string",
                    id: 2
                },
                data_v2: {
                    keyType: "string",
                    type: "string",
                    id: 3
                },
                server_features: {
                    keyType: "string",
                    type: "string",
                    id: 4
                }
            }
        }
    }
    ,
    39368: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                match_id: {
                    type: "string",
                    id: 1
                },
                match_name: {
                    type: "string",
                    id: 2
                },
                participants: {
                    rule: "repeated",
                    type: "EsportsParticipant",
                    id: 3
                },
                total_participants: {
                    type: "int64",
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
                match_status: {
                    type: "EsportsMatchStatus",
                    id: 7
                },
                reserve_status: {
                    type: "ReserveStatus",
                    id: 8
                },
                score_is_available: {
                    type: "bool",
                    id: 9
                },
                official_living_room_id: {
                    type: "string",
                    id: 10
                },
                official_anchor_uid: {
                    type: "string",
                    id: 11
                },
                live_event_id: {
                    type: "string",
                    id: 12
                },
                hide_score: {
                    type: "bool",
                    id: 13
                }
            }
        }
    }
    ,
    717338: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                ESPORTS_MATCH_STATUS_WAIT_START: 0,
                ESPORTS_MATCH_STATUS_ONGOING: 1,
                ESPORTS_MATCH_STATUS_FINISHED: 2
            }
        }
    }
    ,
    364920: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                name: {
                    type: "string",
                    id: 1
                },
                icon: {
                    type: "string",
                    id: 2
                },
                match_score: {
                    type: "EsportsParticipantMatchScore",
                    id: 3
                }
            }
        }
    }
    ,
    637305: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                knock_out_score: {
                    type: "string",
                    id: 1
                },
                point_race_score: {
                    type: "EsportsPointRaceScore",
                    id: 2
                }
            }
        }
    }
    ,
    966518: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                total: {
                    type: "string",
                    id: 1
                },
                place: {
                    type: "string",
                    id: 2
                },
                kill: {
                    type: "string",
                    id: 3
                }
            }
        }
    }
    ,
    9906: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                tournament_id: {
                    type: "string",
                    id: 1
                },
                tournament_name: {
                    type: "string",
                    id: 2
                },
                tournament_icon: {
                    type: "string",
                    id: 3
                },
                icon_theme_color: {
                    type: "string",
                    id: 4
                },
                tournament_type: {
                    type: "webcast.data.EsportsTournamentType",
                    id: 5
                },
                match_info_list: {
                    rule: "repeated",
                    type: "EsportsMatchInfo",
                    id: 6
                }
            }
        }
    }
    ,
    398234: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                ESPORTS_TOURNAMENT_TYPE_UNSET: 0,
                ESPORTS_TOURNAMENT_TYPE_KNOCK_OUT_RACE: 1,
                ESPORTS_TOURNAMENT_TYPE_POINTS_RACE: 2
            }
        }
    }
    ,
    929071: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                event: {
                    type: "LiveEventInfo",
                    id: 1
                },
                card_start_time: {
                    type: "int64",
                    id: 2
                },
                card_icon_url: {
                    type: "string",
                    id: 3
                }
            }
        }
    }
    ,
    927766: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                EVENT_CONFIG_OPT_UNKNOWN: 0,
                EVENT_CONFIG_OPT_IN_LIVE_SET: 1,
                EVENT_CONFIG_OPT_PRE_LIVE_SET: 2,
                EVENT_CONFIG_OPT_IN_LIVE_UNSET: 3,
                EVENT_CONFIG_OPT_PRE_LIVE_UNSET: 4,
                EVENT_CONFIG_OPT_IN_LIVE_POS_MOVE: 5,
                EVENT_CONFIG_OPT_PRE_LIVE_POS_MOVE: 6,
                EVENT_CONFIG_OPT_SUB_COUNT_UPDATE: 7
            }
        }
    }
    ,
    26792: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                CP: 0,
                Platform: 1,
                None: 2
            }
        }
    }
    ,
    962729: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                EVENT_REGION_TYPE_UNKNOWN: 0,
                EVENT_REGION_TYPE_PRIORITY_REGION: 1,
                EVENT_REGION_TYPE_OPERATION_REGION: 2,
                EVENT_REGION_TYPE_STORE_REGION: 3
            }
        }
    }
    ,
    153630: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                user_id: {
                    type: "int64",
                    id: 1
                },
                avatar_uri: {
                    type: "string",
                    id: 2
                }
            }
        }
    }
    ,
    372560: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                EXAM_STATUS_FAIL: 0,
                EXAM_STATUS_SUCCESS: 1
            }
        }
    }
    ,
    854887: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                exempt_both_host: {
                    type: "bool",
                    id: 1
                },
                exempt_audience_top: {
                    type: "int32",
                    id: 2
                }
            }
        }
    }
    ,
    467340: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                ExhibitionType_Default: 0,
                ExhibitionType_Fold: 1,
                ExhibitionType_PublicScreen: 2
            }
        }
    }
    ,
    229119: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                key: {
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
    124184: (t, e, i) => {
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
                extra_duration_sec: {
                    type: "int64",
                    id: 9
                },
                to_anchor_id_str: {
                    type: "string",
                    id: 10
                }
            }
        }
    }
    ,
    528120: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                preview_product_card_info: {
                    type: "PreviewProductCardInfo",
                    id: 1
                },
                product_num: {
                    type: "int64",
                    id: 2
                },
                commerce_permission: {
                    type: "int64",
                    id: 3
                },
                pop_product_id: {
                    type: "int64",
                    id: 4
                },
                oec_live_preview_room_data: {
                    type: "string",
                    id: 5
                }
            }
        }
    }
    ,
    551849: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                tag: {
                    rule: "repeated",
                    type: "FYPRoomTagItem",
                    id: 1
                },
                sub_tag: {
                    rule: "repeated",
                    type: "FYPRoomTagItem",
                    id: 2
                },
                bottom_tag: {
                    rule: "repeated",
                    type: "FYPRoomTagItem",
                    id: 3
                },
                bottom_sub_tag: {
                    rule: "repeated",
                    type: "FYPRoomTagItem",
                    id: 4
                },
                bc_toggle_tag: {
                    rule: "repeated",
                    type: "FYPRoomTagItem",
                    id: 5
                },
                boost_toggle_tag: {
                    rule: "repeated",
                    type: "FYPRoomTagItem",
                    id: 6
                }
            }
        }
    }
    ,
    837878: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                id: {
                    type: "int32",
                    id: 1
                },
                style: {
                    type: "int32",
                    id: 2
                },
                content: {
                    type: "string",
                    id: 3
                },
                icon: {
                    type: "webcast.data.Image",
                    id: 4
                },
                da_info: {
                    type: "string",
                    id: 5
                },
                recommond_info: {
                    type: "string",
                    id: 6
                },
                from_user: {
                    type: "webcast.data.User",
                    id: 7
                },
                from_user_list: {
                    rule: "repeated",
                    type: "webcast.data.User",
                    id: 8
                }
            }
        }
    }
    ,
    605134: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    681202: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    820475: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    837297: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                content: {
                    type: "string",
                    id: 1
                }
            }
        }
    }
    ,
    707649: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    242001: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                FansClubBannerBackGroundTypeUnknown: 0,
                FansClubBannerBackGroundTypeColor: 1,
                FansClubBannerBackGroundTypeImage: 2
            }
        }
    }
    ,
    894212: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    824412: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    838106: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                common: {
                    type: "FansClubBannerCommonData",
                    id: 1
                }
            }
        }
    }
    ,
    83358: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    855470: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    949665: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                FansClubBannerTypeUnknown: 0,
                FansClubBannerTypeNormal: 1,
                FansClubBannerTypeComplex: 2,
                FansClubBannerTypeFullPage: 3
            }
        }
    }
    ,
    901280: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    279700: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    6974: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    953950: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    530718: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    542628: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    887869: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    577944: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    466887: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    147315: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    158768: (t, e, i) => {
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
    788435: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    709237: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    197990: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    405749: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    819420: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    529808: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    915961: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    901042: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                gift_id: {
                    type: "int64",
                    id: 1
                }
            }
        }
    }
    ,
    258501: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    594916: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    883231: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    651962: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    993730: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    518536: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    965946: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                FansTaskDurationType_Unknown: 0,
                FansTaskDurationType_Daily: 1,
                FansTaskDurationType_Monthly: 2,
                FansTaskDurationType_LongTerm: 3
            }
        }
    }
    ,
    317687: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    664097: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                FansTaskRewardType_Unknown: 0,
                FansTaskRewardType_Average: 1,
                FansTaskRewardType_Level: 2
            }
        }
    }
    ,
    393714: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    32700: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    617601: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    319120: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    434588: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    427228: (t, e, i) => {
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
    278208: (t, e, i) => {
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
                }
            }
        }
    }
    ,
    664965: (t, e, i) => {
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
                },
                fans_count: {
                    type: "int64",
                    id: 3
                }
            }
        }
    }
    ,
    252119: (t, e, i) => {
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
    398550: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    568516: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    862754: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    150708: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    855232: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                percentage: {
                    type: "int32",
                    id: 1
                }
            }
        }
    }
    ,
    942508: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                Random: 0
            }
        }
    }
    ,
    164414: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    82614: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    217138: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    934419: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    469056: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    715892: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    398040: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    65080: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                url_list: {
                    rule: "repeated",
                    type: "string",
                    id: 1
                },
                uri: {
                    type: "string",
                    id: 2
                },
                flex_setting: {
                    rule: "repeated",
                    type: "int64",
                    id: 3
                }
            }
        }
    }
    ,
    439466: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    805067: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    65231: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    888588: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    772135: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                font_size: {
                    type: "int32",
                    id: 1
                },
                font_width: {
                    type: "int32",
                    id: 2
                },
                font_color: {
                    type: "string",
                    id: 3
                },
                border_color: {
                    type: "string",
                    id: 4
                }
            }
        }
    }
    ,
    936819: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    353777: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    79327: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    985839: (t, e, i) => {
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
    36670: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    844101: (t, e, i) => {
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
    37530: (t, e, i) => {
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
                free_gift: {
                    type: "webcast.data.FreeGift",
                    id: 3
                }
            }
        }
    }
    ,
    560468: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                FREE_TRIAL_DURATION_UNITS_UNKNOWN: 0,
                FREE_TRIAL_DURATION_UNITS_DAYS: 1
            }
        }
    }
    ,
    833363: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    865429: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    376092: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                GP_ANCHOR_TASK_STATUS_UNPUBLISH: 0,
                GP_ANCHOR_TASK_STATUS_PROMOTING: 1,
                GP_ANCHOR_TASK_STATUS_CONFIRMING: 3,
                GP_ANCHOR_TASK_STATUS_REJECTED: 4
            }
        }
    }
    ,
    518839: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    432007: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    817033: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    602665: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                GAME_ACTION_TYPE_SHOW: 0,
                GAME_ACTION_TYPE_JUMP: 1,
                GAME_ACTION_TYPE_FOLLOW: 2
            }
        }
    }
    ,
    597962: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    537738: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    380786: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                GAME_BC_TOGGLE_STATUS_NONE: 0,
                GAME_BC_TOGGLE_STATUS_CLOSE: 1,
                GAME_BC_TOGGLE_STATUS_OPEN: 2
            }
        }
    }
    ,
    466205: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                emotes_can_not_be_used_hint: {
                    type: "string",
                    id: 1
                }
            }
        }
    }
    ,
    563931: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    579059: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    329211: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                GameEventTypeNormal: 0,
                GameEventTypeDrops: 1
            }
        }
    }
    ,
    204717: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    228650: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    337079: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    382562: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    591512: (t, e, i) => {
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
    940566: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    65101: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                GAME_GUESS_TASK_STATUS_RUNNING: 0,
                GAME_GUESS_TASK_STATUS_DONE: 1
            }
        }
    }
    ,
    250448: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    839950: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    903759: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    225134: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    969115: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    525252: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    116441: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    712881: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    471985: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    611196: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    18949: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                GAME_LIVE_ROOM_MODE_PHONE: 0,
                GAME_LIVE_ROOM_MODE_OBS: 1,
                GAME_LIVE_ROOM_MODE_SCREEN: 4,
                GAME_LIVE_ROOM_MODE_STUDIO: 6
            }
        }
    }
    ,
    372154: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                GAME_MOMENT_EFFECT_TYPE_UNKNOWN: 0,
                GAME_MOMENT_EFFECT_TYPE_GIFT_GUIDANCE: 1,
                GAME_MOMENT_EFFECT_TYPE_QUICK_COMMENT: 2
            }
        }
    }
    ,
    807420: (t, e, i) => {
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
    861188: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    435344: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    726529: (t, e, i) => {
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
    937743: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    106070: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    812510: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    704264: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                TYPE_UNKNOWN: 0,
                TYPE_TOP_ONE_NOTICE: 1
            }
        }
    }
    ,
    359761: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                GAME_SCORE_TYPE_UNKNOWN: 0,
                GAME_SCORE_TYPE_GUESS_SCORE: 1
            }
        }
    }
    ,
    26088: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    946677: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    964433: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                UnknownStatus: 0,
                Start: 1,
                Stop: 2
            }
        }
    }
    ,
    102926: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    100785: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    94683: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                id: {
                    type: "int64",
                    id: 1
                },
                show_name: {
                    type: "string",
                    id: 2
                },
                short_name: {
                    type: "string",
                    id: 3
                },
                full_name: {
                    type: "string",
                    id: 4
                },
                hashtag_id: {
                    rule: "repeated",
                    type: "int64",
                    id: 5
                },
                hashtag_list: {
                    rule: "repeated",
                    type: "Hashtag",
                    id: 6
                },
                game_category: {
                    rule: "repeated",
                    type: "GameTagCategory",
                    id: 7
                },
                landscape: {
                    type: "int64",
                    id: 8
                },
                package_name: {
                    type: "string",
                    id: 9
                },
                bundle_id: {
                    type: "string",
                    id: 10
                },
                is_new_game: {
                    type: "bool",
                    id: 11
                }
            },
            nested: {
                GameTagType: {
                    values: {
                        Unknown: 0,
                        PCGame: 1,
                        MobileGame: 2,
                        ConsoleGame: 3
                    }
                },
                GameTagCategory: {
                    fields: {
                        game_type: {
                            type: "GameTagType",
                            id: 1
                        },
                        title: {
                            type: "string",
                            id: 2
                        }
                    }
                }
            }
        }
    }
    ,
    415715: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                game_name: {
                    type: "string",
                    id: 1
                }
            }
        }
    }
    ,
    973574: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    875010: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    387042: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    356673: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    394952: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    527882: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    435357: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                GAMEPAD_SHOW_STATUS_SHOW: 0,
                GAMEPAD_SHOW_STATUS_HIDE: 1
            }
        }
    }
    ,
    626807: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                GAMEPAD_TASK_TYPE_PARTNERSHIP: 0,
                GAMEPAD_TASK_TYPE_PUBLISHER: 1,
                GAMEPAD_TASK_TYPE_EVENT: 2
            }
        }
    }
    ,
    747176: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                is_gaming_host: {
                    type: "bool",
                    id: 1
                }
            }
        }
    }
    ,
    431813: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    645588: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    936604: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    619181: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    588590: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    235481: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    79481: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    847492: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                GIFT_CHALLENGE_STATUS_UNKNOWN: 0,
                GIFT_CHALLENGE_STATUS_NOT_JOINED: 1,
                GIFT_CHALLENGE_STATUS_JOINED: 2,
                GIFT_CHALLENGE_STATUS_COMPLETED: 3
            }
        }
    }
    ,
    614215: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    486716: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    710141: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    573277: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                GIFT_CONFIG_TYPE_UNKNOWN: 0,
                GIFT_CONFIG_TYPE_AUDIO: 1
            }
        }
    }
    ,
    198664: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    440732: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                Unused: 0,
                Chat: 1,
                Tray: 2,
                Effect: 4
            }
        }
    }
    ,
    21603: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    954786: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    358748: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    313424: (t, e, i) => {
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
    534389: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    928021: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                SYSTEM: 0,
                SELF_SENT: 1,
                VALUABLE_GIFT: 2,
                COMMON_GIFT: 3
            }
        }
    }
    ,
    905254: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    938655: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    313840: (t, e, i) => {
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
    110332: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    969976: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    366176: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                GIFT_MESSAGE_IGNORE_CONFIG_NOT_IGNORE: 0,
                GIFT_MESSAGE_IGNORE_CONFIG_IGNORE_TRAY: 1,
                GIFT_MESSAGE_IGNORE_CONFIG_IGNORE_PSM: 2,
                GIFT_MESSAGE_IGNORE_CONFIG_IGNORE_TRAY_AND_PSM: 3
            }
        }
    }
    ,
    599350: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                GIFT_MESSAGE_VERSION_0: 0,
                GIFT_MESSAGE_VERSION_1: 1
            }
        }
    }
    ,
    567340: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    538925: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    677797: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    125092: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    951607: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    778399: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    788924: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    187413: (t, e, i) => {
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
    187744: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    438721: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    464186: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    58580: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    359471: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                fans_gift_toast: {
                    type: "string",
                    id: 1
                }
            }
        }
    }
    ,
    149342: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                GiftShowDefault: 0,
                GiftShowName: 1
            }
        }
    }
    ,
    74842: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                GiftSource_Unknown: 0,
                GiftSource_Platform: 1,
                GiftSource_UserBuyRandom: 2,
                GiftSource_UserBuySpecific: 3
            }
        }
    }
    ,
    276854: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    105650: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    482550: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    75663: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    304120: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                GIFT_TYPE_CD_KEY: 0,
                GIFT_TYPE_UNIFORM_KEY: 1,
                GIFT_TYPE_GAME_PROP: 2,
                GIFT_TYPE_CUSTOM_ACCOUNT_INPUT: 3
            }
        }
    }
    ,
    262556: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    379348: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    161003: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    619739: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    374588: (t, e, i) => {
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
    834564: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                NONE: 0,
                UPDATE: 1,
                FINISH: 2
            }
        }
    }
    ,
    382584: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    8824: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    194578: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    788538: (t, e, i) => {
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
    670713: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                GoalAutoCreateUnknown: 0,
                GoalAutoCreateOn: 1,
                GoalAutoCreateOff: 2
            }
        }
    }
    ,
    375951: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    353841: (t, e, i) => {
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
    893498: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    254218: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    86686: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    173577: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                GoalModeSingleSubGoal: 0,
                GoalModeMultiSubGoal: 1
            }
        }
    }
    ,
    931615: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    435595: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    758677: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    937431: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    828928: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    167154: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                GoalTypeUnknown: 0,
                GoalTypeStream: 1,
                GoalTypeSubscription: 2
            }
        }
    }
    ,
    432412: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    894350: (t, e, i) => {
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
    719653: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                recall_end_time: {
                    type: "int64",
                    id: 1
                }
            }
        }
    }
    ,
    44610: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    342466: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    197439: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                total_coin: {
                    type: "int32",
                    id: 1
                }
            }
        }
    }
    ,
    476243: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    598691: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    406032: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    626312: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                GoodyBagMessageTypeUnknown: 0,
                GoodyBagMessageTypeSend: 1,
                GoodyBagMessageTypeJoin: 2,
                GoodyBagMessageTypeWinnersInfo: 3
            }
        }
    }
    ,
    368833: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                GoodyBagStatusUnknown: 0,
                GoodyBagStatusSent: 1,
                GoodyBagStatusOpened: 2
            }
        }
    }
    ,
    807024: (t, e, i) => {
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
    276612: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    448985: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    220356: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                GRANT_GROUP_UNKNOWN: 0,
                GRANT_GROUP_ALL_USER: 1,
                GRANT_GROUP_USER_LEVEL: 2,
                GRANT_GROUP_FANS_LEVEL: 3
            }
        }
    }
    ,
    954131: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    90674: (t, e, i) => {
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
    956009: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    440575: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    267632: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    472295: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    990414: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                GROUP_CHAT_LIVE_ENTRANCE_STATUS_UNKNOWN: 0,
                GROUP_CHAT_LIVE_ENTRANCE_STATUS_HIDE: 1,
                GROUP_CHAT_LIVE_ENTRANCE_STATUS_GO_LIVE: 2,
                GROUP_CHAT_LIVE_ENTRANCE_STATUS_WATCH_LIVE: 3
            }
        }
    }
    ,
    220306: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    807900: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                group_show: {
                    type: "webcast.data.CompetitionInfo",
                    id: 1
                }
            }
        }
    }
    ,
    311802: (t, e, i) => {
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
    595524: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    294014: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    602587: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    858813: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                GROUP_SHOW_STATUS_UNKNOWN: 0,
                GROUP_SHOW_STATUS_STARTED: 1,
                GROUP_SHOW_STATUS_FINISHED: 10
            }
        }
    }
    ,
    147544: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    133822: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    429708: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    806211: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    958133: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                GUESS_PIN_CARD_STATUS_PIN: 0,
                GUESS_PIN_CARD_STATUS_UNPIN: 1,
                GUESS_PIN_CARD_STATUS_FROZEN: 2
            }
        }
    }
    ,
    841933: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                GUESS_PIN_TYPE_PIN: 0,
                GUESS_PIN_TYPE_UNPIN: 1,
                GUESS_PIN_TYPE_FROZEN: 2
            }
        }
    }
    ,
    353566: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    98897: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                avatar_uri: {
                    type: "string",
                    id: 1
                }
            }
        }
    }
    ,
    31578: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    982647: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    28139: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    67998: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    477068: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    590506: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    266279: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                GUESS_TASK_ACTION_TYPE_UNKNOWN: 0,
                GUESS_TASK_ACTION_TYPE_SHARE_ROOM: 1
            }
        }
    }
    ,
    62157: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                GUESS_TASK_TYPE_UNKNOWN: 0,
                GUESS_TASK_TYPE_WATCH_DURATION_TASK: 1,
                GUESS_TASK_TYPE_SHARE_ROOM: 2
            }
        }
    }
    ,
    668794: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    156659: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    392272: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    933647: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    523031: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                guess_widgets: {
                    type: "webcast.data.GuessWidgets",
                    id: 1
                }
            }
        }
    }
    ,
    602948: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    852535: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    117277: (t, e, i) => {
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
    40309: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                CHANGE_SCENE_UNKNOWN: 0,
                LIVE_SHOW_BY_ANCHOR_AUTO: 1,
                LIVE_SHOW_BY_SERVER_NORMAL: 2,
                LIVE_SHOW_BY_SHOW_END: 3
            }
        }
    }
    ,
    577101: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    224216: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    484130: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    635866: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    397947: (t, e, i) => {
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
    961882: (t, e, i) => {
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
    162717: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    692806: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    325750: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                GUEST_SHOWDOWN_TO_CALCULATING_REASON_UNKNOWN: 0,
                GUEST_SHOWDOWN_TO_CALCULATING_REASON_TIMER_OVER_NORMALLY: 1,
                GUEST_SHOWDOWN_TO_CALCULATING_REASON_HOST_FINISH: 2
            }
        }
    }
    ,
    674327: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    276718: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    253542: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    868542: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    680324: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    553477: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    922765: (t, e, i) => {
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
                image: {
                    type: "webcast.data.Image",
                    id: 3
                },
                namespace: {
                    type: "HashtagNamespace",
                    id: 4
                }
            }
        }
    }
    ,
    493442: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    304706: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                Global: 0,
                Gaming: 1
            }
        }
    }
    ,
    170444: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    81049: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    933718: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    281545: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    595591: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    909589: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    425807: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    721701: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    684965: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                HIGHLIGHT_INFO_TYPE_TEXT: 0,
                HIGHLIGHT_INFO_TYPE_STARLING_KEY: 1
            }
        }
    }
    ,
    216022: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                HorizontalPaddingRuleUseMiddleAndWidth: 0,
                HorizontalPaddingRuleUseLeftAndMiddleAndRight: 1
            }
        }
    }
    ,
    25677: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                HOST_CENTER_APPEAL_TYPE_REGULAR: 0,
                HOST_CENTER_APPEAL_TYPE_WITH_OPTIONS: 1
            }
        }
    }
    ,
    533753: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    350438: (t, e, i) => {
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
                    type: "HotRoomData",
                    id: 2
                }
            }
        }
    }
    ,
    279356: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    80884: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    914743: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    143910: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    621786: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    926284: (t, e, i) => {
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
                owner_rank: {
                    type: "int64",
                    id: 6
                }
            }
        }
    }
    ,
    858248: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                IM_DISPATCH_STRATEGY_DEFAULT: 0,
                IM_DISPATCH_STRATEGY_BYPASS_DISPATCH_QUEUE: 1
            }
        }
    }
    ,
    806918: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    981973: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    160730: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                icon: {
                    type: "Image",
                    id: 1
                },
                background: {
                    type: "CombineBadgeBackground",
                    id: 2
                }
            }
        }
    }
    ,
    877637: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    385888: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                url_list: {
                    rule: "repeated",
                    type: "string",
                    id: 1
                },
                uri: {
                    type: "string",
                    id: 2
                },
                height: {
                    type: "int64",
                    id: 3
                },
                width: {
                    type: "int64",
                    id: 4
                },
                avg_color: {
                    type: "string",
                    id: 5
                },
                image_type: {
                    type: "int32",
                    id: 6
                },
                open_web_url: {
                    type: "string",
                    id: 7
                },
                content: {
                    type: "Content",
                    id: 8
                },
                is_animated: {
                    type: "bool",
                    id: 9
                }
            },
            nested: {
                Content: {
                    fields: {
                        name: {
                            type: "string",
                            id: 1
                        },
                        font_color: {
                            type: "string",
                            id: 2
                        },
                        level: {
                            type: "int64",
                            id: 3
                        }
                    }
                }
            }
        }
    }
    ,
    807565: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                display_type: {
                    type: "BadgeDisplayType",
                    id: 1
                },
                image: {
                    type: "Image",
                    id: 2
                }
            }
        }
    }
    ,
    839550: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    997771: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    508776: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    840912: (t, e, i) => {
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
    742569: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    946832: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    239635: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    673556: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                DISABLED_TOOL_PERMISSION: 0,
                ENABLED_TOOL_PERMISSION: 1
            }
        }
    }
    ,
    415336: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                GREEN: 0,
                GREY: 1,
                RED: 2
            }
        }
    }
    ,
    253745: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    855600: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    7688: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    144224: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                Unknown: 0,
                Follow: 1,
                Video: 2
            }
        }
    }
    ,
    58398: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    668376: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                INTERACTION_HUB_GOAL_SOURCE_UNKNOWN: 0,
                INTERACTION_HUB_GOAL_SOURCE_INTERACTION_SYSTEM: 1,
                INTERACTION_HUB_GOAL_SOURCE_INTERACTION_SELF_SELECT: 2
            }
        }
    }
    ,
    327697: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                INTERACTION_HUB_GOAL_TYPE_UNKNOWN: 0,
                INTERACTION_HUB_GOAL_TYPE_EXPAND_TEAM: 1,
                INTERACTION_HUB_GOAL_TYPE_TITLE_GIFT: 2,
                INTERACTION_HUB_GOAL_TYPE_MORE_INTERACTION: 3,
                INTERACTION_HUB_GOAL_TYPE_FINISH_WISH_LIST: 4,
                INTERACTION_HUB_GOAL_TYPE_PK: 5,
                INTERACTION_HUB_GOAL_TYPE_START_LIVE: 6,
                INTERACTION_HUB_GOAL_TYPE_COHOST: 7,
                INTERACTION_HUB_GOAL_TYPE_NEW_GIFT: 8,
                INTERACTION_HUB_GOAL_TYPE_CLOSED: 100,
                INTERACTION_HUB_GOAL_TYPE_REOPEN: 101
            }
        }
    }
    ,
    783809: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    289317: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    69210: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    438030: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    122839: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    84883: (t, e, i) => {
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
    608432: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                INVITER_ROLE_UNKNOWN: 0,
                INVITER_ROLE_ANCHOR: 1,
                INVITER_ROLE_ADMIN: 2,
                INVITER_ROLE_GUEST: 3
            }
        }
    }
    ,
    977258: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    978502: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    360361: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    37398: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    66074: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    137995: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    451352: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    726029: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    918693: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    416405: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    624886: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    138907: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    510865: (t, e, i) => {
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
    679519: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    801609: (t, e, i) => {
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
    426551: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    127746: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    98628: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    628042: (t, e, i) => {
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
    951229: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                KARAOKE_STATUS_AVAILABLE: 0,
                KARAOKE_STATUS_UNAVAILABLE: 1
            }
        }
    }
    ,
    94184: (t, e, i) => {
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
    667289: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                KARAOKE_SWITCH_STATUS_ON: 0,
                KARAOKE_SWITCH_STATUS_OFF: 1
            }
        }
    }
    ,
    760251: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                KARAOKE_SWITCH_TYPE_KARAOKE: 0,
                KARAOKE_SWITCH_TYPE_LYRIC: 1
            }
        }
    }
    ,
    970860: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    163540: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                KARAOKE_YOU_SING_REQ_OP_TYPE_OVERRIDE: 0,
                KARAOKE_YOU_SING_REQ_OP_TYPE_REMOVE: 1,
                KARAOKE_YOU_SING_REQ_OP_TYPE_ADD: 2
            }
        }
    }
    ,
    193989: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                KICK_OUT_ALL_GUESTS_REASON_UNKNOWN: 0,
                KICK_OUT_ALL_GUESTS_REASON_HOST_TRIGGER: 10001,
                KICK_OUT_ALL_GUESTS_REASON_PUNISH_CENTER_IM: 10002
            }
        }
    }
    ,
    631713: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    766626: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    774207: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    54682: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    70591: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    754871: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                MAX_MIC_NUM_SETTING_SCENE_UNKNOWN: 0,
                MAX_MIC_NUM_SETTING_SCENE_FIXED_FLOW_LAYOUT: 1,
                MAX_MIC_NUM_SETTING_SCENE_FIXED_GRID_LAYOUT: 2
            }
        }
    }
    ,
    766102: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                layout_id: {
                    type: "string",
                    id: 1
                }
            }
        }
    }
    ,
    156564: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                form_id: {
                    type: "string",
                    id: 1
                }
            }
        }
    }
    ,
    779525: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    875590: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    663714: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    757564: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    849252: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    972191: (t, e, i) => {
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
    718315: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    474435: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    62438: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    899371: (t, e, i) => {
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
    431342: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                ShowOwner: 0,
                ShowGuest: 1
            }
        }
    }
    ,
    657369: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    437746: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    72384: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    333012: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    977519: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    814077: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    284429: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    422068: (t, e, i) => {
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
    263276: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                LINK_LAYOUT_UNKNOWN: 0,
                ADMIN_CHANGE_LAYOUT: 1
            }
        }
    }
    ,
    244867: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    449142: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    540542: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    689138: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    734378: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    122232: (t, e, i) => {
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
    621632: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                LINK_AD_UNKNOWN: 0,
                LINK_AD_START_PLAYING: 1,
                LINK_AD_STOP_PLAYING: 2
            }
        }
    }
    ,
    32825: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                None: 0,
                NormalConnect: 1,
                QuickConnect: 2
            }
        }
    }
    ,
    911348: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    189963: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    258784: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    644325: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    327146: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    404295: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    507348: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    957467: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    38700: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    968801: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    610350: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                AUDIO_CHATROOM_GUIDELINE: 0,
                LINKMIC_ICON_WHEN_HIDDEN_GUIDELINE: 1
            }
        }
    }
    ,
    412939: (t, e, i) => {
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
    941928: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    971177: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    110101: (t, e, i) => {
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
            }
        }
    }
    ,
    680990: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                UNDEFINED_TYPE: 0,
                MANAGER_TYPE: 1,
                HOST_TYPE: 2
            }
        }
    }
    ,
    800898: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    76089: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    636366: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    158342: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                BIZ_TPYE_LINKER_UNKNOWN: 0,
                BIZ_TYPE_LINKER_CANCEL_ENLARGE: 1,
                BIZ_TYPE_ENLARGE_STATUS_SYN: 2,
                BIZ_TYPE_ENLARGE_POSITION_STATUS_SYN: 3
            }
        }
    }
    ,
    347529: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    278224: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                STATUS_UNSILENCE: 0,
                STATUS_SILENCE_BY_SELF: 1,
                STATUS_SILENCE_BY_OWNER: 2
            }
        }
    }
    ,
    503061: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    770041: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                TYPE_UNKNOWN: 0,
                TYPE_VIDEO: 1,
                TYPE_AUDIO: 2,
                TYPE_VIRTUAL: 3
            }
        }
    }
    ,
    61285: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    475058: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                LINK_USER_TYPE_DEFAULT: 0,
                LINK_USER_TYPE_KARAOKE: 1
            }
        }
    }
    ,
    595545: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    100327: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    308735: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {}
        }
    }
    ,
    502030: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    723873: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    127063: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    653009: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    398409: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    587850: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    289396: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                match_type: {
                    type: "int64",
                    id: 1
                },
                invite_type: {
                    type: "int64",
                    id: 2
                },
                sub_type: {
                    type: "int64",
                    id: 3
                },
                theme: {
                    type: "string",
                    id: 4
                },
                duration: {
                    type: "int64",
                    id: 5
                },
                layout: {
                    type: "int64",
                    id: 6
                },
                tips: {
                    type: "string",
                    id: 7
                },
                extra: {
                    type: "InviterRivalExtra",
                    id: 8
                },
                other_users: {
                    rule: "repeated",
                    type: "InviterRivalExtra",
                    id: 9
                },
                topic_info: {
                    type: "webcast.data.CohostTopic",
                    id: 10
                },
                algo_request_id: {
                    type: "string",
                    id: 11
                }
            },
            nested: {
                InviterRivalExtra: {
                    fields: {
                        TextType: {
                            type: "int64",
                            id: 1
                        },
                        Text: {
                            type: "string",
                            id: 2
                        },
                        Label: {
                            type: "string",
                            id: 3
                        },
                        user_count: {
                            type: "int64",
                            id: 4
                        },
                        avatar_thumb: {
                            type: "Image",
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
                            type: "TopHostInfo",
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
                        follower_count: {
                            type: "int64",
                            id: 15
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
                                    type: "Image",
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
    364565: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    9194: (t, e, i) => {
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
    835242: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    697909: (t, e, i) => {
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
    443891: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    296824: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    615536: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                mic_idx_update_info: {
                    type: "LinkerMicIdxUpdateInfo",
                    id: 1
                }
            }
        }
    }
    ,
    190477: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    662510: (t, e, i) => {
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
                    type: "webcast.data.MuteStatus",
                    id: 2
                }
            }
        }
    }
    ,
    73679: (t, e, i) => {
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
    886771: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    820244: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    357876: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    272894: (t, e, i) => {
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
                }
            }
        }
    }
    ,
    506707: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    634513: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                update_user_setting_info: {
                    type: "webcast.data.LinkmicUserSettingInfo",
                    id: 1
                }
            }
        }
    }
    ,
    218354: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {}
        }
    }
    ,
    881039: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    703119: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    446859: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                LINKMIC_APPLIER_SORT_SETTING_NONE: 0,
                LINKMIC_APPLIER_SORT_SETTING_BY_GIFT_SCORE: 1
            }
        }
    }
    ,
    294336: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    840212: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    393213: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    352598: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                ALWAYS_CAPSULE: 0,
                POSITION_PRIOR_TO_CAPSULE: 1
            }
        }
    }
    ,
    786913: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    299631: (t, e, i) => {
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
    538900: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                TURN_ON_GUIDE: 0,
                INVITE_GUIDE: 1,
                INVITE_GROUP_CHAT_MEMBER_GUIDE: 2,
                INVITE_OUTSIDE_LIVE_ROOM_GUIDE: 3
            }
        }
    }
    ,
    256869: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                LINKMIC_AUDIENCE_PERMISSION_AS_VIEWER_NONE: 0,
                LINKMIC_AUDIENCE_PERMISSION_AS_VIEWER_OK: 1,
                LINKMIC_AUDIENCE_PERMISSION_AS_VIEWER_NOT_OK: 2
            }
        }
    }
    ,
    914746: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                LINKMIC_AUDIENCE_RT_UNKNOWN: 0,
                LINKMIC_AUDIENCE_RT_AGREE: 1,
                LINKMIC_AUDIENCE_RT_REJECT: 2
            }
        }
    }
    ,
    775622: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                LINKMIC_AUDIENCE_SHARED_INVITATION_TYPE_NONE: 0,
                LINKMIC_AUDIENCE_SHARED_INVITATION_TYPE_NORMAL_LIVE: 1,
                LINKMIC_AUDIENCE_SHARED_INVITATION_TYPE_LINK: 2
            }
        }
    }
    ,
    783010: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    269496: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    17468: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                AUDIENCE_TYPE_UNKNOWN: 0,
                VIDEO: 1,
                AUDIO: 2
            }
        }
    }
    ,
    689837: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                LINKMIC_AUDIENCE_USER_RETURN_TYPE_NONE: 0,
                LINKMIC_AUDIENCE_USER_RETURN_TYPE_PRIVATE_MSG: 1,
                LINKMIC_AUDIENCE_USER_RETURN_TYPE_DEEPLINK: 2,
                LINKMIC_AUDIENCE_USER_RETURN_TYPE_LINEUP: 3
            }
        }
    }
    ,
    756949: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    188106: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    144918: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                LINKMIC_CHECK_PERMISSION_OPTION_UNKNOWN: 0,
                LINKMIC_CHECK_PERMISSION_OPTION_CHECK_BAN_INFO: 1
            }
        }
    }
    ,
    551611: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                UNKNOWN_SCENE: 0,
                LIST_BY_TYPE: 1,
                BEFORE_APPLY: 2,
                BEFORE_REPLY: 3,
                SHOW_AUDIENCE_INFO: 4,
                HOST_LIVE_START: 5,
                HOST_ONE_CLICK_LIVE_START: 6
            }
        }
    }
    ,
    746763: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                ControlV1: 0,
                ExperimentV1: 1,
                ExperimentV2: 2
            }
        }
    }
    ,
    142002: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    296136: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                LAYOUT_UNKNOWN: 0,
                BIG: 1,
                SMALL: 8,
                BIG_PARTY: 16
            }
        }
    }
    ,
    224290: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                DEFAULT: 0,
                ANCHOR_USE_NEW_LAYOUT: 1
            }
        }
    }
    ,
    156723: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                LINKMIC_PERMIT_STATUS_NONE: 0,
                LINKMIC_PERMIT_STATUS_AGREE: 1,
                LINKMIC_PERMIT_STATUS_REJECT: 2
            }
        }
    }
    ,
    143612: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                PLAYTYPE_INVITE: 0,
                PLAYTYPE_APPLY: 1,
                PLAYTYPE_RESERVE: 2
            }
        }
    }
    ,
    825064: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                RT_UNKNOWN: 0,
                RT_AGREE: 1,
                RT_REJECT: 2
            }
        }
    }
    ,
    303638: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                ROLE_TYPE_UNKOWN: 0,
                LEADER: 1,
                PLAYER: 2,
                INVITEE: 3
            }
        }
    }
    ,
    201301: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                LINKMIC_RTC_EXT_INFO_KEY_DEFAULT: 0,
                LINKMIC_RTC_EXT_INFO_KEY_ANCHOR_FLOAT: 1,
                LINKMIC_RTC_EXT_INFO_KEY_ANCHOR_FLOAT_FIX: 2,
                LINKMIC_RTC_EXT_INFO_KEY_ANCHOR_GRID_2: 3,
                LINKMIC_RTC_EXT_INFO_KEY_ANCHOR_GRID_3: 4,
                LINKMIC_RTC_EXT_INFO_KEY_ANCHOR_GRID_4: 5,
                LINKMIC_RTC_EXT_INFO_KEY_GUEST_FLOAT: 101,
                LINKMIC_RTC_EXT_INFO_KEY_GUEST_FLOAT_FIX: 102,
                LINKMIC_RTC_EXT_INFO_KEY_GUEST_GRID_2: 103,
                LINKMIC_RTC_EXT_INFO_KEY_GUEST_GRID_3: 104,
                LINKMIC_RTC_EXT_INFO_KEY_GUEST_GRID_4: 105
            }
        }
    }
    ,
    437331: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                LinkMic_Version_Old: 0,
                LinkMic_Version_Generic: 1
            }
        }
    }
    ,
    603948: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    682144: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    43518: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                UNSET: 0,
                OPEN: 1,
                OFF: 2
            }
        }
    }
    ,
    589943: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                LINKMIC_SHARE_REVENUE_NOT_SET: 0,
                LINKMIC_SHARE_REVENUE_OPEN: 1,
                LINKMIC_SHARE_REVENUE_CLOSE: 2
            }
        }
    }
    ,
    579149: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                UNSILENCE: 0,
                SILENCE_BY_SELF: 1,
                SILENCE_BY_OWNER: 2
            }
        }
    }
    ,
    477945: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    359662: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    811838: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    397950: (t, e, i) => {
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
    973233: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                SOCIAL_TURN_ON_GUIDE: 0,
                SOCIAL_INVITE_GUIDE: 1,
                SOCIAL_APPLY_GUIDE: 2,
                SOCIAL_PERMIT_GUIDE: 3
            }
        }
    }
    ,
    625168: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    386175: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    416568: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                DISABLE: 0,
                ENABLE: 1,
                JUST_FOLLOWING: 2,
                MULTI_LINKING: 3,
                MULTI_LINKING_ONLY_FOLLOWING: 4
            }
        }
    }
    ,
    794100: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                Off: 0,
                On: 1
            }
        }
    }
    ,
    808606: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                AudioStream: 0,
                VideoStream: 1
            }
        }
    }
    ,
    530330: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                LINKMIC_TYPE_NONE: 0,
                LINKMIC_TYPE_COHOST: 1,
                LINKMIC_TYPE_MULTI_GUEST: 2
            }
        }
    }
    ,
    122273: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    741017: (t, e, i) => {
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
    307362: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                LINKMIC_USER_SETTING_DISTRIBUTE_TOAST_STATUS_UN_SET: 0,
                LINKMIC_USER_SETTING_DISTRIBUTE_TOAST_STATUS_CLEARED: 1
            }
        }
    }
    ,
    805654: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    552428: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                LINKMIC_USER_SETTING_GUEST_CAMERA_STATUS_UN_SET: 0,
                LINKMIC_USER_SETTING_GUEST_CAMERA_STATUS_OPEN: 1,
                LINKMIC_USER_SETTING_GUEST_CAMERA_STATUS_CLOSE: 2
            }
        }
    }
    ,
    438592: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                LINKMIC_USER_SETTING_GUEST_RANK_LIST_SHOW_UN_SET: 0,
                LINKMIC_USER_SETTING_GUEST_RANK_LIST_SHOW_OPEN: 1,
                LINKMIC_USER_SETTING_GUEST_RANK_LIST_SHOW_CLOSE: 2
            }
        }
    }
    ,
    804117: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    160227: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                LINKMIC_USER_SETTING_LAYOUT_GRID: 0,
                LINKMIC_USER_SETTING_LAYOUT_FLOATING: 1
            }
        }
    }
    ,
    755446: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    219535: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                USERSTATUS_NONE: 0,
                USERSTATUS_LINKED: 1,
                USERSTATUS_APPLYING: 2,
                USERSTATUS_INVITING: 3
            }
        }
    }
    ,
    167633: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    414062: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                UPDATE_DEFAULT_SCENE: 0,
                UPDATE_BACKGROUND_SCENE: 1,
                UPDATE_SHARE_REVENUE_SCENE: 2,
                UPDATE_EMPTY_SEAT_DISPLAY_SCENE: 3
            }
        }
    }
    ,
    8404: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                UNKNOWN: 0,
                AGORO: 1,
                ZEGO: 2,
                BYTE: 4,
                TWILIO: 8
            }
        }
    }
    ,
    205503: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    482004: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    31881: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    230652: (t, e, i) => {
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
    107471: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                event_id: {
                    type: "int64",
                    id: 1
                },
                start_time: {
                    type: "int64",
                    id: 2
                },
                duration: {
                    type: "int64",
                    id: 3
                },
                title: {
                    type: "string",
                    id: 4
                },
                description: {
                    type: "string",
                    id: 5
                },
                has_subscribed: {
                    type: "bool",
                    id: 6
                },
                is_paid_event: {
                    type: "bool",
                    id: 7
                },
                ticket_amount: {
                    type: "int64",
                    id: 8
                },
                pay_method: {
                    type: "EventPayMethod",
                    id: 9
                },
                wallet_pkg_dict: {
                    keyType: "string",
                    type: "WalletPackage",
                    id: 10
                },
                event_user_info: {
                    rule: "repeated",
                    type: "EventUserInfo",
                    id: 11
                },
                subscribed_count: {
                    type: "int64",
                    id: 12
                },
                paid_event_preview: {
                    type: "PaidEventPreview",
                    id: 13
                },
                wallet_package: {
                    type: "WalletPackage",
                    id: 14
                },
                register_type: {
                    type: "int64",
                    id: 15
                },
                periodic_settings: {
                    type: "string",
                    id: 16
                },
                periodic_shows: {
                    type: "string",
                    id: 17
                }
            },
            nested: {
                EventPayMethod: {
                    values: {
                        EventPayMethodInvalid: 0,
                        EventPayMethodCoins: 1,
                        EventPayMethodCash: 2
                    }
                },
                WalletPackage: {
                    fields: {
                        iap_id: {
                            type: "string",
                            id: 1
                        },
                        usd_price_show: {
                            type: "string",
                            id: 2
                        }
                    }
                }
            }
        }
    }
    ,
    887776: (t, e, i) => {
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
    205691: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                LiveFlashSaleActivityStockStatus_Unknown: 0,
                LiveFlashSaleActivityStockStatus_Sufficient: 1,
                LiveFlashSaleActivityStockStatus_Insufficient: 2,
                LiveFlashSaleActivityStockStatus_Soldout: 3
            }
        }
    }
    ,
    365246: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    303684: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    609822: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                mp4_video_meta_info: {
                    type: "webcast.data.VideoMetaInfo",
                    id: 34
                }
            }
        }
    }
    ,
    241102: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    291220: (t, e, i) => {
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
    782175: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                LIVE_INFO_AUDIT_CONTENT_TYPE_TITLE: 0,
                LIVE_INFO_AUDIT_CONTENT_TYPE_COVER: 1,
                LIVE_INFO_AUDIT_CONTENT_TYPE_ABOUT_ME: 2
            }
        }
    }
    ,
    248385: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    578498: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                LIVE_INFO_AUDIT_STATUS_ONGOING: 0,
                LIVE_INFO_AUDIT_STATUS_PASS: 1,
                LIVE_INFO_AUDIT_STATUS_UNKNOWN: 2,
                LIVE_INFO_AUDIT_STATUS_REJECT: 3
            }
        }
    }
    ,
    613382: (t, e, i) => {
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
    797172: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    883995: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    779962: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    403634: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    875347: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    460497: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    96119: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                LIVE_JOURNEY_LEVEL_STATUS_UNKNOWN: 0,
                LIVE_JOURNEY_LEVEL_STATUS_NOT_STARTED: 1,
                LIVE_JOURNEY_LEVEL_STATUS_IN_PROGRESS: 2,
                LIVE_JOURNEY_LEVEL_STATUS_COMPLETED: 3
            }
        }
    }
    ,
    84004: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    134832: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    138455: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    417534: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    916975: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    518773: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    173: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    871057: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                primary_id: {
                    type: "string",
                    id: 1
                },
                message_scene: {
                    type: "string",
                    id: 2
                }
            }
        }
    }
    ,
    811861: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            fields: {
                unique_id: {
                    type: "LiveMessageID",
                    id: 1
                },
                timestamp: {
                    type: "int64",
                    id: 2
                }
            }
        }
    }
    ,
    299804: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    386688: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    928028: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
            values: {
                LIVE_PRO_TYPE_DEFAULT: 0,
                LIVE_PRO_TYPE_GAMER: 1
            }
        }
    }
    ,
    531895: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    80168: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    474184: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    554151: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    877148: (t, e, i) => {
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
    255363: (t, e, i) => {
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
    315547: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    394991: (t, e, i) => {
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
    879491: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    860073: (t, e, i) => {
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
    158267: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    71538: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    727253: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    101367: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    787011: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    169924: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    385285: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    674461: (t, e, i) => {
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
    508154: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    441974: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    75642: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    466145: (t, e, i) => {
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
    929758: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    226218: (t, e, i) => {
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
    110178: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    294727: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
    555838: (t, e, i) => {
        i.d(e, {
            A: () => d
        });
        const d = {
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
