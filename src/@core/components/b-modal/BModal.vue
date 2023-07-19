<template>
  <div class="b-modal">
    <div class="d-flex align-items-start">
      <b-modal
        id="modal-center"
        centered
        title="Vertically Centered"
        ok-only
        ok-title="Accept"
      >
        <b-card-text>
          <b-card-title>Name: </b-card-title> <span>{{ name }}</span>
          <b-card-title>Contractor name: </b-card-title>
          <span>{{ contractorName }}</span> <b-card-title>Sum: </b-card-title>
          <span>{{ sum }}</span> <b-card-title>Date: </b-card-title>
          <span>{{ date }}</span> <b-card-title>Number: </b-card-title>
          <span>{{ number }}</span> <b-card-title>Branch code: </b-card-title>
          <span>{{ branchCode }}</span>
        </b-card-text>
      </b-modal>
    </div>
  </div>
</template>

<script>
import { BModal, BCardText, BCardTitle } from "bootstrap-vue";
export default {
  components: { BModal, BCardText, BCardTitle },
  props: {
    name: {
      type: String,
      required: true,
    },
    contractorName: {
      type: String,
      required: true,
    },
    sum: {
      type: [String, Number],
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    number: {
      type: Number,
      required: true,
    },
    branchCode: {
      type: [String, Number],
      required: true,
    },
  },
};
</script>

<style></style>