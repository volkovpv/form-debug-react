/**
 * Created by https://github.com/volkovpv on 07.2015.
 */

var fieldConstants = [
    {
        FIELD_NAME: "Имя",
        FIELD_NUMBER: 0,
        TYPE: "text"
    },
    {
        FIELD_NAME: "Фамилия",
        FIELD_NUMBER: 1,
        TYPE: "text"
    },
    {
        FIELD_NAME: "Отчество",
        FIELD_NUMBER: 2,
        TYPE: "text"
    },
    {
        FIELD_NAME: "Возраст",
        FIELD_NUMBER: 3,
        TYPE: "text"
    },
    {
        FIELD_NAME: "Пол",
        FIELD_NUMBER: 4,
        TYPE: "select",
        OPTION: [
            {
                ID: 0,
                SEX: "Выберите"
            },
            {
                ID: 1,
                SEX: "Мужской"
            },
            {
                ID: 2,
                SEX: "Женский"
            }
        ]
    }
];

module.exports = fieldConstants;