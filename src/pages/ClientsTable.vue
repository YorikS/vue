<template>
    <v-div>
        <h1>Клиенты</h1>
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
                [0, '8(360)711-38-48', 'Кузнецов', 'Артем', 'Михайлович'],
                [1, '86()773-70-12', 'Беляева', 'Стефания', ''],
                [2, '6(009)064-28-70', 'Коновалова', 'Анна', 'Глебовна'],
                [3, '6(138)029-89-25', 'Климов', 'Мирон', 'Станиславович'],
                [4, '680(30)273-91-57', 'Михайлов', 'Пётр', ''],
                [5, '12(14)277-90-71', 'Маркова', 'Виктория', 'Максимовна']
            ]
        }
    }
}
</script>

<style>
</style>