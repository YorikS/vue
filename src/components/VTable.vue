<template>
    <table class="v-table">
            <thead class="v-table-header">
                <tr>
                    <th class="v-table-element" v-for="item in headers" :key="item">{{ item }}</th>
                </tr>
            </thead>
            <tbody class="v-table-content">
                <tr v-for="row in content" :key="row">
                    <td class="v-table-element" v-for="item in row" :key="item">{{ item }}</td>
                </tr>
            </tbody>
        </table>
</template>

<script>
export default {
    name: 'v-table',
    props: ['headers', 'content']
};
</script>

<style>
.v-table {
	width: 100%;
	border: none;
	margin-bottom: 20px;
}
.v-table-header {
	font-weight: bold;
	text-align: left;
	border: none;
	padding: 10px 15px;
	background: #d8d8d8;
	font-size: 14px;
}
.v-table-element:first-child {
	border-radius: 8px 0 0 8px;
}
.v-table-element:last-child {
	border-radius: 0 8px 8px 0;
}
.v-table-content td {
	text-align: left;
	border: none;
	padding: 10px 15px;
	font-size: 14px;
	vertical-align: top;
}
.v-table-content tr:nth-child(even){
	background: #f3f3f3;
}
.v-table-content tr td:first-child {
	border-radius: 8px 0 0 8px;
}
.v-table-content tr td:last-child {
	border-radius: 0 8px 8px 0;
}
</style>