<template>
    <v-div>
        <h1>Заказы</h1>
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
                "IdOrder", "IdShift", "IdClient", "NumPassengers", "OrderStart", "OrderEnd", "Mileage", "OrderStatus"
            ],
            tableContent: [
                [0, 0, 0, 1, '30/4/2022 06:00', '30/4/2022 06:20', 10.0, 'Выполнен'],
                [1, 0, 1, 3, '30/4/2022 06:21', '', '', 'Отменён'],
                [2, 4, 2, 6, '13/05/2022 14:20', '13/05/2022 14:20', 5.0, 'Выполнен'],
                [3, 5, 3, 2, '13/05/2022 19:30:00', '', '', 'Выполняется'],
                [4, 6, 4, 4, '12/05/2022 02:55:00', '12/05/2022 03:00:00', 8.2, 'Выполнен'],
                [5, 6, 5, 1, '12/05/2022 03:06:00', '12/05/2022 03:40:00', 16.5, 'Выполнен']
            ]
        }
    }
}
</script>

<style>
</style>