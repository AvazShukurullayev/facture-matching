<template>
  <b-card-code title="Basic Modal">
    <b-button
      v-ripple.400="'rgba(113, 102, 240, 0.15)'"
      v-b-modal.modal-center
      variant="outline-primary"
    >
      Vertically Center
    </b-button>
    <b-modal
      id="modal-center"
      centered
      title="Vertically Centered"
      ok-only
      ok-title="Accept"
    >
      <b-card-text>
        Croissant jelly-o halvah chocolate sesame snaps. Brownie caramels candy
        canes chocolate cake marshmallow icing lollipop I love. Gummies macaroon
        donut caramels biscuit topping danish.
      </b-card-text>
    </b-modal>
  </b-card-code>
</template>

<script>
import { BModal, BButton, VBModal, BAlert, BCardText } from "bootstrap-vue";
import BCardCode from "@core/components/b-card-code";
import Ripple from "vue-ripple-directive";
import { codeBasic } from "./code";

export default {
  components: {
    BCardCode,
    BButton,
    BModal,
    BAlert,
    BCardText,
  },
  directives: {
    "b-modal": VBModal,
    Ripple,
  },
  data() {
    return {
      codeBasic,
    };
  },
};
</script>
