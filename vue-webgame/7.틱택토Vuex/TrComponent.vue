<template>
    <table>
        <td-component v-for="(cellData, index) in rowData" :key="index" :cell-index="index" :row-index="rowIndex"></td-component>
    </table>
</template>

<script>
    import TdComponent from './TdComponent';

    export default {
        components: {
            TdComponent,
        },
        computed: {
            rowData() {
                return this.$store.state.tableData[this.rowIndex];
            }
        },
        props: {
            rowIndex: Number,
        },
    };
</script>

<style>

</style>