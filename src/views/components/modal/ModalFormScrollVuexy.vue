<template>
  <div class="d-flex">
  <b-button size="sm" v-b-modal.modal-1>
    <feather-icon icon="Edit2Icon" class="mr-50" />
    update
  </b-button>

  <b-modal id="modal-1" title="BootstrapVue">
    <p class="my-4">Hello from modal!</p>
  </b-modal>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>