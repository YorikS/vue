<template>
    <v-div>
        <h1>Поставщики</h1>
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
                "ID", "Наименование", "Почта", "Телефон"
            ],
            tableContent: [
                [0, 'user1', 'user1@mail.ru', '+79140000000'],
                [1, 'user2', 'user2@mail.ru', '+79140000000'],
                [2, 'user3', 'user3@mail.ru', '+79140000000'],
                [3, 'user4', 'user4@mail.ru', '+79140000000'],
                [4, 'user5', 'user5@mail.ru', '+79140000000'],
                [5, 'user6', 'user6@mail.ru', '+79140000000']
            ]
        }
    }
} 
</script>

<style>
</style>