"use strict";
(globalThis.__TIKTOK_CHUNKS__ = globalThis.__TIKTOK_CHUNKS__ || []).push([[6432], {
    52141: (t, e, i) => {
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
    758178: (t, e, i) => {
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
    893664: (t, e, i) => {
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
    670502: (t, e, i) => {
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
    39587: (t, e, i) => {
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
    465667: (t, e, i) => {
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
    813627: (t, e, i) => {
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
    692236: (t, e, i) => {
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
    475498: (t, e, i) => {
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
    63760: (t, e, i) => {
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
    799657: (t, e, i) => {
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
    760059: (t, e, i) => {
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
    344277: (t, e, i) => {
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
    923291: (t, e, i) => {
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
    693408: (t, e, i) => {
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
    982044: (t, e, i) => {
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
    161122: (t, e, i) => {
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
    319423: (t, e, i) => {
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
    978206: (t, e, i) => {
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
    968699: (t, e, i) => {
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
    268027: (t, e, i) => {
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
    890779: (t, e, i) => {
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
    151921: (t, e, i) => {
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
    325679: (t, e, i) => {
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
    311058: (t, e, i) => {
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
    136232: (t, e, i) => {
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
    790617: (t, e, i) => {
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
    349463: (t, e, i) => {
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
    536424: (t, e, i) => {
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
    635809: (t, e, i) => {
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
    970484: (t, e, i) => {
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
    764421: (t, e, i) => {
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
    925974: (t, e, i) => {
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
    987305: (t, e, i) => {
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
    199115: (t, e, i) => {
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
    15966: (t, e, i) => {
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
    215266: (t, e, i) => {
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
    731635: (t, e, i) => {
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
    250882: (t, e, i) => {
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
    629952: (t, e, i) => {
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
    3701: (t, e, i) => {
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
    165668: (t, e, i) => {
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
    957526: (t, e, i) => {
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
    413736: (t, e, i) => {
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
    442601: (t, e, i) => {
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
    615194: (t, e, i) => {
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
    934168: (t, e, i) => {
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
    114682: (t, e, i) => {
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
    9170: (t, e, i) => {
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
    556560: (t, e, i) => {
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
    36652: (t, e, i) => {
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
    555726: (t, e, i) => {
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
    167318: (t, e, i) => {
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
    647901: (t, e, i) => {
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
    71483: (t, e, i) => {
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
    307372: (t, e, i) => {
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
    230862: (t, e, i) => {
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
    729265: (t, e, i) => {
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
    313537: (t, e, i) => {
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
    466358: (t, e, i) => {
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
    666406: (t, e, i) => {
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
    524604: (t, e, i) => {
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
    500657: (t, e, i) => {
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
    636062: (t, e, i) => {
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
    617282: (t, e, i) => {
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
    296956: (t, e, i) => {
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
    80823: (t, e, i) => {
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
    465252: (t, e, i) => {
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
    289954: (t, e, i) => {
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
    753422: (t, e, i) => {
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
    187640: (t, e, i) => {
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
    665146: (t, e, i) => {
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
    372991: (t, e, i) => {
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
    124779: (t, e, i) => {
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
    604687: (t, e, i) => {
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
    707334: (t, e, i) => {
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
    25084: (t, e, i) => {
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
    947650: (t, e, i) => {
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
    801143: (t, e, i) => {
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
    634236: (t, e, i) => {
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
    425134: (t, e, i) => {
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
    775970: (t, e, i) => {
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
    576747: (t, e, i) => {
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
    817095: (t, e, i) => {
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
    747914: (t, e, i) => {
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
    908172: (t, e, i) => {
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
    995341: (t, e, i) => {
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
    536829: (t, e, i) => {
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
    530717: (t, e, i) => {
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
    588938: (t, e, i) => {
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
    299874: (t, e, i) => {
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
    473078: (t, e, i) => {
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
    367748: (t, e, i) => {
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
    177783: (t, e, i) => {
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
    292678: (t, e, i) => {
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
    67370: (t, e, i) => {
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
    317771: (t, e, i) => {
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
    653832: (t, e, i) => {
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
    980700: (t, e, i) => {
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
    30638: (t, e, i) => {
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
    968160: (t, e, i) => {
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
    533378: (t, e, i) => {
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
    958050: (t, e, i) => {
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
    401480: (t, e, i) => {
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
    655047: (t, e, i) => {
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
    176182: (t, e, i) => {
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
    410730: (t, e, i) => {
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
    555360: (t, e, i) => {
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
    148604: (t, e, i) => {
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
    526303: (t, e, i) => {
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
    688031: (t, e, i) => {
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
    679521: (t, e, i) => {
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
    778166: (t, e, i) => {
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
    451503: (t, e, i) => {
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
    957306: (t, e, i) => {
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
    115983: (t, e, i) => {
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
    439191: (t, e, i) => {
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
    160194: (t, e, i) => {
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
    234478: (t, e, i) => {
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
    571591: (t, e, i) => {
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
    162790: (t, e, i) => {
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
    542837: (t, e, i) => {
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
    274997: (t, e, i) => {
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
    793630: (t, e, i) => {
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
    69679: (t, e, i) => {
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
    432363: (t, e, i) => {
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
    47729: (t, e, i) => {
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
    730500: (t, e, i) => {
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
    633764: (t, e, i) => {
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
    525419: (t, e, i) => {
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
    223750: (t, e, i) => {
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
    574427: (t, e, i) => {
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
    334620: (t, e, i) => {
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
    106510: (t, e, i) => {
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
    978571: (t, e, i) => {
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
    638220: (t, e, i) => {
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
    167886: (t, e, i) => {
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
    52640: (t, e, i) => {
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
    687346: (t, e, i) => {
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
    663732: (t, e, i) => {
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
    540875: (t, e, i) => {
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
    186400: (t, e, i) => {
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
    475040: (t, e, i) => {
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
    935797: (t, e, i) => {
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
    571315: (t, e, i) => {
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
    239776: (t, e, i) => {
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
    352797: (t, e, i) => {
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
    541590: (t, e, i) => {
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
    220352: (t, e, i) => {
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
    413544: (t, e, i) => {
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
    88018: (t, e, i) => {
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
    75546: (t, e, i) => {
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
    662112: (t, e, i) => {
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
    396872: (t, e, i) => {
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
    503434: (t, e, i) => {
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
    734392: (t, e, i) => {
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
    601943: (t, e, i) => {
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
    5630: (t, e, i) => {
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
    222516: (t, e, i) => {
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
    436717: (t, e, i) => {
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
    638349: (t, e, i) => {
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
    57410: (t, e, i) => {
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
    872671: (t, e, i) => {
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
    996966: (t, e, i) => {
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
    481350: (t, e, i) => {
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
    342162: (t, e, i) => {
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
    424852: (t, e, i) => {
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
    347250: (t, e, i) => {
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
    734068: (t, e, i) => {
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
    516977: (t, e, i) => {
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
    407620: (t, e, i) => {
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
    636041: (t, e, i) => {
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
    375105: (t, e, i) => {
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
    901436: (t, e, i) => {
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
    464076: (t, e, i) => {
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
    125863: (t, e, i) => {
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
    403966: (t, e, i) => {
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
    716235: (t, e, i) => {
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
    328375: (t, e, i) => {
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
    361695: (t, e, i) => {
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
    536641: (t, e, i) => {
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
    693114: (t, e, i) => {
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
    751750: (t, e, i) => {
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
    717573: (t, e, i) => {
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
    636255: (t, e, i) => {
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
    241858: (t, e, i) => {
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
    333824: (t, e, i) => {
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
    179042: (t, e, i) => {
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
    890159: (t, e, i) => {
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
    579737: (t, e, i) => {
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
    206904: (t, e, i) => {
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
    134280: (t, e, i) => {
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
    314615: (t, e, i) => {
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
    476485: (t, e, i) => {
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
    727890: (t, e, i) => {
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
    683847: (t, e, i) => {
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
    170005: (t, e, i) => {
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
    1557: (t, e, i) => {
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
    755715: (t, e, i) => {
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
    121856: (t, e, i) => {
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
    710757: (t, e, i) => {
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
    221771: (t, e, i) => {
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
    559748: (t, e, i) => {
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
    257949: (t, e, i) => {
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
    988184: (t, e, i) => {
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
    662764: (t, e, i) => {
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
    485539: (t, e, i) => {
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
    63331: (t, e, i) => {
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
    259275: (t, e, i) => {
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
    391574: (t, e, i) => {
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
    678679: (t, e, i) => {
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
    469695: (t, e, i) => {
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
    321299: (t, e, i) => {
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
    995859: (t, e, i) => {
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
    768163: (t, e, i) => {
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
    334107: (t, e, i) => {
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
    327718: (t, e, i) => {
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
    14902: (t, e, i) => {
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
    570474: (t, e, i) => {
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
    768923: (t, e, i) => {
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
    843090: (t, e, i) => {
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
    567428: (t, e, i) => {
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
    823116: (t, e, i) => {
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
    20545: (t, e, i) => {
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
    733356: (t, e, i) => {
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
    74192: (t, e, i) => {
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
    710907: (t, e, i) => {
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
    676948: (t, e, i) => {
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
    58337: (t, e, i) => {
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
    83454: (t, e, i) => {
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
    873323: (t, e, i) => {
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
    674002: (t, e, i) => {
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
    92071: (t, e, i) => {
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
    799154: (t, e, i) => {
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
    162222: (t, e, i) => {
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
    549705: (t, e, i) => {
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
    747919: (t, e, i) => {
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
    610303: (t, e, i) => {
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
    701865: (t, e, i) => {
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
    901170: (t, e, i) => {
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
    37539: (t, e, i) => {
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
    367025: (t, e, i) => {
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
    822953: (t, e, i) => {
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
    378504: (t, e, i) => {
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
    213258: (t, e, i) => {
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
    929863: (t, e, i) => {
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
    166711: (t, e, i) => {
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
    272042: (t, e, i) => {
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
    157161: (t, e, i) => {
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
    568011: (t, e, i) => {
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
    593326: (t, e, i) => {
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
    787885: (t, e, i) => {
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
    114335: (t, e, i) => {
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
    194787: (t, e, i) => {
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
    492723: (t, e, i) => {
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
    345215: (t, e, i) => {
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
    158311: (t, e, i) => {
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
    607920: (t, e, i) => {
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
    158440: (t, e, i) => {
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
    612027: (t, e, i) => {
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
    657077: (t, e, i) => {
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
    83445: (t, e, i) => {
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
    655745: (t, e, i) => {
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
    574102: (t, e, i) => {
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
    324871: (t, e, i) => {
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
    346506: (t, e, i) => {
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
    820678: (t, e, i) => {
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
    515235: (t, e, i) => {
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
    464340: (t, e, i) => {
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
    105552: (t, e, i) => {
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
    795947: (t, e, i) => {
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
    270616: (t, e, i) => {
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
    652163: (t, e, i) => {
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
    530621: (t, e, i) => {
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
    688226: (t, e, i) => {
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
    601423: (t, e, i) => {
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
    653094: (t, e, i) => {
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
    946598: (t, e, i) => {
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
    746868: (t, e, i) => {
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
    523386: (t, e, i) => {
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
    565268: (t, e, i) => {
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
    491688: (t, e, i) => {
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
    450263: (t, e, i) => {
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
    205845: (t, e, i) => {
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
    658568: (t, e, i) => {
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
    450792: (t, e, i) => {
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
    874446: (t, e, i) => {
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
    420995: (t, e, i) => {
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
    817003: (t, e, i) => {
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
    866446: (t, e, i) => {
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
    920640: (t, e, i) => {
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
    486494: (t, e, i) => {
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
    648097: (t, e, i) => {
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
    186353: (t, e, i) => {
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
    650161: (t, e, i) => {
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
    188869: (t, e, i) => {
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
    804479: (t, e, i) => {
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
    822147: (t, e, i) => {
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
    991293: (t, e, i) => {
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
    845930: (t, e, i) => {
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
    481121: (t, e, i) => {
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
    431852: (t, e, i) => {
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
    565626: (t, e, i) => {
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
    467023: (t, e, i) => {
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
    322450: (t, e, i) => {
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
    749875: (t, e, i) => {
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
    207422: (t, e, i) => {
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
    111645: (t, e, i) => {
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
    211717: (t, e, i) => {
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
    500971: (t, e, i) => {
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
    630165: (t, e, i) => {
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
    639169: (t, e, i) => {
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
    716758: (t, e, i) => {
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
    558435: (t, e, i) => {
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
    489659: (t, e, i) => {
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
    225653: (t, e, i) => {
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
    659479: (t, e, i) => {
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
    563057: (t, e, i) => {
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
    604197: (t, e, i) => {
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
    901521: (t, e, i) => {
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
    704930: (t, e, i) => {
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
    168937: (t, e, i) => {
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
    173809: (t, e, i) => {
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
    967433: (t, e, i) => {
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
    567911: (t, e, i) => {
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
    874863: (t, e, i) => {
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
    554272: (t, e, i) => {
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
    400120: (t, e, i) => {
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
    100619: (t, e, i) => {
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
    411142: (t, e, i) => {
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
    562634: (t, e, i) => {
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
    623264: (t, e, i) => {
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
    550017: (t, e, i) => {
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
    876472: (t, e, i) => {
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
    629285: (t, e, i) => {
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
    359630: (t, e, i) => {
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
    53125: (t, e, i) => {
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
    776968: (t, e, i) => {
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
    446892: (t, e, i) => {
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
    38260: (t, e, i) => {
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
    64363: (t, e, i) => {
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
    386960: (t, e, i) => {
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
    624499: (t, e, i) => {
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
    351085: (t, e, i) => {
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
    175685: (t, e, i) => {
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
    50191: (t, e, i) => {
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
    697305: (t, e, i) => {
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
    195798: (t, e, i) => {
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
    686292: (t, e, i) => {
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
    945325: (t, e, i) => {
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
    100202: (t, e, i) => {
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
    543315: (t, e, i) => {
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
    863947: (t, e, i) => {
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
    485829: (t, e, i) => {
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
    881733: (t, e, i) => {
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
    737182: (t, e, i) => {
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
    266287: (t, e, i) => {
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
    924291: (t, e, i) => {
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
    840795: (t, e, i) => {
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
    54581: (t, e, i) => {
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
    130379: (t, e, i) => {
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
    535171: (t, e, i) => {
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
    711686: (t, e, i) => {
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
    10329: (t, e, i) => {
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
    996345: (t, e, i) => {
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
    800242: (t, e, i) => {
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
    968609: (t, e, i) => {
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
    538842: (t, e, i) => {
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
    582953: (t, e, i) => {
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
    233983: (t, e, i) => {
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
    689098: (t, e, i) => {
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
    118373: (t, e, i) => {
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
    842249: (t, e, i) => {
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
    316851: (t, e, i) => {
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
    831757: (t, e, i) => {
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
    459914: (t, e, i) => {
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
    568852: (t, e, i) => {
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
    220654: (t, e, i) => {
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
    984565: (t, e, i) => {
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
    630549: (t, e, i) => {
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
    204675: (t, e, i) => {
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
    225703: (t, e, i) => {
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
    272614: (t, e, i) => {
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
    392239: (t, e, i) => {
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
    312781: (t, e, i) => {
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
    760592: (t, e, i) => {
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
    258368: (t, e, i) => {
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
    493119: (t, e, i) => {
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
    786950: (t, e, i) => {
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
    198622: (t, e, i) => {
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
    26633: (t, e, i) => {
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
    691990: (t, e, i) => {
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
    861900: (t, e, i) => {
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
    797433: (t, e, i) => {
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
    407946: (t, e, i) => {
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
    666871: (t, e, i) => {
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
    302423: (t, e, i) => {
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
    183660: (t, e, i) => {
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
    752765: (t, e, i) => {
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
    505229: (t, e, i) => {
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
    115511: (t, e, i) => {
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
    305492: (t, e, i) => {
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
    794430: (t, e, i) => {
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
    886973: (t, e, i) => {
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
    28019: (t, e, i) => {
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
    685074: (t, e, i) => {
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
    563572: (t, e, i) => {
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
    732898: (t, e, i) => {
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
    219118: (t, e, i) => {
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
    735106: (t, e, i) => {
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
    80258: (t, e, i) => {
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
    653444: (t, e, i) => {
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
    733848: (t, e, i) => {
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
    283191: (t, e, i) => {
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
    143395: (t, e, i) => {
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
    857306: (t, e, i) => {
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
    282893: (t, e, i) => {
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
    793198: (t, e, i) => {
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
    601079: (t, e, i) => {
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
    388734: (t, e, i) => {
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
    410844: (t, e, i) => {
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
    868386: (t, e, i) => {
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
    154587: (t, e, i) => {
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
    428828: (t, e, i) => {
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
    714293: (t, e, i) => {
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
    338889: (t, e, i) => {
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
    697300: (t, e, i) => {
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
    242750: (t, e, i) => {
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
    315812: (t, e, i) => {
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
    131724: (t, e, i) => {
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
    469478: (t, e, i) => {
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
    105e3: (t, e, i) => {
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
    667428: (t, e, i) => {
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
    60914: (t, e, i) => {
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
    926040: (t, e, i) => {
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
    186836: (t, e, i) => {
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
    568806: (t, e, i) => {
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
    840893: (t, e, i) => {
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
    431480: (t, e, i) => {
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
    162383: (t, e, i) => {
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
    118704: (t, e, i) => {
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
    670680: (t, e, i) => {
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
    927602: (t, e, i) => {
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
    945722: (t, e, i) => {
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
    551380: (t, e, i) => {
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
    467788: (t, e, i) => {
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
    357764: (t, e, i) => {
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
    404041: (t, e, i) => {
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
    369732: (t, e, i) => {
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
    265636: (t, e, i) => {
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
    588359: (t, e, i) => {
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
    404460: (t, e, i) => {
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
    365910: (t, e, i) => {
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
    994585: (t, e, i) => {
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
    229417: (t, e, i) => {
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
    35836: (t, e, i) => {
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
    790521: (t, e, i) => {
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
    758999: (t, e, i) => {
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
    897108: (t, e, i) => {
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
    864188: (t, e, i) => {
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
    501937: (t, e, i) => {
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
    440849: (t, e, i) => {
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
    988375: (t, e, i) => {
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
    424438: (t, e, i) => {
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
    696692: (t, e, i) => {
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
    563813: (t, e, i) => {
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
    638557: (t, e, i) => {
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
    498035: (t, e, i) => {
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
    273467: (t, e, i) => {
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
    53527: (t, e, i) => {
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
    966150: (t, e, i) => {
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
    528784: (t, e, i) => {
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
    582299: (t, e, i) => {
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
    521894: (t, e, i) => {
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
    287776: (t, e, i) => {
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
    352768: (t, e, i) => {
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
    697730: (t, e, i) => {
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
    570928: (t, e, i) => {
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
    408481: (t, e, i) => {
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
    518382: (t, e, i) => {
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
    760186: (t, e, i) => {
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
    532098: (t, e, i) => {
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
    781854: (t, e, i) => {
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
    375392: (t, e, i) => {
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
    99585: (t, e, i) => {
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
    507592: (t, e, i) => {
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
    209199: (t, e, i) => {
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
    727268: (t, e, i) => {
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
    572807: (t, e, i) => {
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
    400768: (t, e, i) => {
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
    369536: (t, e, i) => {
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
    612353: (t, e, i) => {
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
    343758: (t, e, i) => {
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
}]);
