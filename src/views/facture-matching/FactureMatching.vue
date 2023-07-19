<template>
  <div class="facture-matching">
    <FormLayoutMultipleColumnVuexy :title="title" />
    <GoodTableAdvanceSearchVuexy :title="title" />
  </div>
</template>

<script>
import FormLayoutMultipleColumnVuexy from "@/views/forms/form-layout/FormLayoutMultipleColumnVuexy.vue";
import GoodTableAdvanceSearchVuexy from "@/views/table/vue-good-table/GoodTableAdvanceSearchVuexy.vue";
import "vue-good-table/dist/vue-good-table.css";

export default {
  name: "FactureMatching",
  props: {},
  components: {
    FormLayoutMultipleColumnVuexy,
    GoodTableAdvanceSearchVuexy,
  },
  data() {
    return {
      title: "Act -in",
    };
  },
  methods: {
    onSubmit() {},
  },

 
};
</script>

<style></style>
