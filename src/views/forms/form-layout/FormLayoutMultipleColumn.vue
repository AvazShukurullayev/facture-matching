<template>
  <b-card-code>
    <b-form>
      <b-row>
        <b-col md="4">
          <b-form-group label="Name" label-for="mc-name">
            <b-form-input id="mc-name" placeholder="Name" />
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group label="Date" label-for="mc-date">
            <b-form-input id="mc-date" type="date" placeholder="Date" />
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group label="Number" label-for="mc-number">
            <b-form-input id="mc-number" type="number" placeholder="Number" />
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group label="Contractor name" label-for="mc-contractor-name">
            <b-form-input
              id="mc-contractor-name"
              placeholder="Contractor name"
            />
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group label="Sum" label-for="mc-sum">
            <b-form-input id="mc-sum" type="number" placeholder="Sum" />
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group label="Branch code" label-for="mc-branch-code">
            <b-form-input id="mc-branch-code" placeholder="Branch code" />
          </b-form-group>
        </b-col>

        <!-- submit and reset -->
        <b-col>
          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            type="submit"
            variant="primary"
            class="mr-1"
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
  data() {
    return {
      codeMultipleColumn,
    };
  },
};
</script>
