<template>
<v-div>
    <h1>Сотрудники</h1>
    <v-table :headers="tableHeaders" :content="tableContent" />
</v-div>
</template>

<script>
import VTable from "@/components/VTable.vue";

export default {
    components: {
        VTable
    },
    data() {
        return {
            tableHeaders: [
                "Id", "Телефон", "Фамилия", "Имя", "Отчество"
            ],
            tableContent: [
                [4058792936, 'Захарова' , 'Арина', 'Иванов'],
                [1428533898, 'Кудрявцева', 'Алиса', 'Фёдровна'],
                [3683822316, 'Алексеев', 'Иван', 'Дмитриевич'],
                [8320566688, 'Титова', 'Дарья', ''],
                [9139870391, 'Жукова', 'Виктория', 'Александровна'],
                [9293310609, 'Чернышева', 'Анастасия', 'Александровна']
            ]
        }
    }
}
</script>

<style>
</style>