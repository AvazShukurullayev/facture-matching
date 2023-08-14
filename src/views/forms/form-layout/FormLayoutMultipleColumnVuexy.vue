<template>
  <b-card-code :title="title">
    <b-form @submit.prevent="submit">
      <b-row>
        <b-col md="3">
          <b-form-group label="Contractor name" label-for="mc-contractor-name">
            <b-form-input
              id="mc-contractor-name"
              placeholder="Contractor name"
              v-model="form.contractor.name"
              required
            />
          </b-form-group>
        </b-col>
        <b-col md="3">
          <b-form-group label="Contractor code" label-for="mc-contractor-code">
            <b-form-input
              id="mc-contractor-code"
              placeholder="Contractor code"
              v-model="form.contractor.code"
              required
            />
          </b-form-group>
        </b-col>
        <b-col md="3">
          <b-form-group label="Info number" label-for="mc-info-number">
            <b-form-input
              id="mc-info-number"
              placeholder="Info number"
              v-model="form.info.number"
              required
            />
          </b-form-group>
        </b-col>
        <b-col md="3">
          <b-form-group label="Info date" label-for="mc-info-date">
            <b-form-input
              id="mc-info-date"
              type="date"
              placeholder="Info date"
              v-model="form.info.date"
              required
            />
          </b-form-group>
        </b-col>
        <b-col md="3">
          <b-form-group label="Storno number" label-for="mc-storno-number">
            <b-form-input
              id="mc-storno-number"
              placeholder="Storno number"
              v-model="form.storno_number"
              required
            />
          </b-form-group>
        </b-col>
        <b-col md="3">
          <b-form-group label="Sum" label-for="mc-sum">
            <b-form-input
              id="mc-sum"
              type="number"
              placeholder="Sum"
              v-model="form.sum"
              required
            />
          </b-form-group>
        </b-col>
        <b-col md="3">
          <b-form-group label="Total" label-for="mc-total">
            <b-form-input
              id="mc-total"
              type="number"
              placeholder="Total"
              v-model="form.total"
              required
            />
          </b-form-group>
        </b-col>
        <b-col md="3">
          <b-form-group label="Shipment number" label-for="mc-shipment-number">
            <b-form-input
              id="mc-shipment-number"
              placeholder="Shipment number"
              v-model="form.shipment_number"
              required
            />
          </b-form-group>
        </b-col>
        <b-col md="3">
          <b-form-group label="Branch code" label-for="mc-branch-code">
            <b-form-input
              id="mc-branch-code"
              placeholder="Branch code"
              v-model="form.branch_code"
              required
            />
          </b-form-group>
        </b-col>
        <b-col md="3">
          <b-form-group label="Order number" label-for="mc-order-number">
            <b-form-input
              id="mc-order-number"
              placeholder="Order number"
              v-model="form.order_number"
              required
            />
          </b-form-group>
        </b-col>
        <b-col md="3">
          <b-form-group label="Sap code" label-for="mc-sap-code">
            <b-form-input
              id="mc-sap-code"
              placeholder="Sap code"
              v-model="form.sap_code"
              required
            />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <!-- submit and reset -->
        <b-col>
          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            type="submit"
            variant="primary"
            class="mr-1"
            @click="makeToast('primary')"
          >
            Submit
          </b-button>
          <b-button
            v-ripple.400="'rgba(186, 191, 199, 0.15)'"
            type="reset"
            variant="outline-secondary"
          >
            Reset
          </b-button>
        </b-col>
      </b-row>
    </b-form>
  </b-card-code>
</template>

<script>
import { mapActions } from "vuex";
import {
  BRow,
  BCol,
  BFormGroup,
  BFormInput,
  BFormCheckbox,
  BForm,
  BButton,
} from "bootstrap-vue";
import BCardCode from "@core/components/b-card-code";
import Ripple from "vue-ripple-directive";
import { codeMultipleColumn } from "./code";

export default {
  components: {
    BCardCode,
    BRow,
    BCol,
    BFormGroup,
    BFormInput,
    BFormCheckbox,
    BForm,
    BButton,
  },
  directives: {
    Ripple,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      codeMultipleColumn,
      form: {
        info: {
          number: "",
          date: "",
        },
        contractor: {
          code: "",
          name: "",
        },
        storno_number: "",
        sum: null,
        total: null,
        shipment_number: "",
        branch_code: "",
        order_number: "",
        sap_code: "",
        type: 1,
      },
      alertMessage: "",
    };
  },
  methods: {
    ...mapActions(["getApi", "postApi", "getOneApi", "getRowsCountApi"]),
    async submit() {
      let payload = JSON.stringify({
        info: {
          number: this.form.info.number,
          date: this.form.info.date,
        },
        contractor: {
          code: this.form.contractor.code,
          name: this.form.contractor.name,
        },
        storno_number: this.form.storno_number,
        sum: +this.form.sum,
        total: +this.form.total,
        shipment_number: this.form.shipment_number,
        branch_code: this.form.branch_code,
        order_number: this.form.order_number,
        sap_code: this.form.sap_code,
        type: 1,
      });
      console.log("Form payload => ", payload);

      await this.postApi(payload);
      await this.getApi();

      this.form = {
        info: {
          number: "",
          date: "",
        },
        contractor: {
          code: "",
          name: "",
        },
        storno_number: "",
        sum: null,
        total: null,
        shipment_number: "",
        branch_code: "",
        order_number: "",
        sap_code: "",
        type: 1,
      };
    },

    makeToast(variant = null) {
      this.$bvToast.toast(this.alertMessage, {
        title: `Variant ${variant || "default"}`,
        variant,
        solid: true,
      });
    },
  },
};
</script>
