<template>
  <b-card-code :title="title">
    <div class="custom-search">
      <!--? modal  -->
      <div>
        <b-modal id="bv-modal-example" hide-footer>
          <template #modal-title> About {{ tableData.fullName }}</template>
          <div class="border p-1">
            <p><b>Contractor name:</b> {{ tableData.contractor.name }}</p>
            <p><b>Contractor code:</b> {{ tableData.contractor.code }}</p>
            <p><b>Branch code:</b> {{ tableData.branch_code }}</p>
            <p><b>Info number:</b> {{ tableData.info.number }}</p>
            <p><b>Info date:</b> {{ tableData.info.date }}</p>
            <p><b>Order number:</b> {{ tableData.order_number }}</p>
            <p><b>Sap code:</b> {{ tableData.sap_code }}</p>
            <p><b>Shipment number:</b> {{ tableData.shipment_number }}</p>
            <p><b>Storno number:</b> {{ tableData.storno_number }}</p>
            <p><b>Sum:</b> {{ tableData.sum }}</p>
            <p><b>Total:</b> {{ tableData.total }}</p>
          </div>
          <b-button
            class="mt-3"
            block
            @click="$bvModal.hide('bv-modal-example')"
          >
            Close Me
          </b-button>
        </b-modal>
      </div>
      <!--? modal  -->
      <b-row>
        <b-col md="3">
          <b-form-group>
            <label>Name:</label>
            <b-form-input
              placeholder="Search"
              type="text"
              class="d-inline-block"
              @input="advanceSearch"
            />
          </b-form-group>
        </b-col>
        <b-col md="3">
          <b-form-group>
            <label>Date:</label>
            <flat-pickr
              v-model="rangeDate"
              class="form-control"
              :config="{ mode: 'range' }"
            />
          </b-form-group>
        </b-col>
        <!--* Date picker finished -->
        <b-col md="3">
          <b-form-group>
            <label>Branch code:</label>
            <b-form-input
              placeholder="Search"
              type="text"
              class="d-inline-block"
              @input="advanceSearch"
            />
          </b-form-group>
        </b-col>

        <b-col md="3">
          <b-form-group>
            <label>Sap code:</label>
            <b-form-input
              placeholder="Search"
              type="email"
              class="d-inline-block"
              @input="advanceSearch"
            />
          </b-form-group>
        </b-col>
        <b-col md="3">
          <b-form-group>
            <label>Shipment number:</label>
            <b-form-input
              placeholder="Search"
              type="text"
              class="d-inline-block"
              @input="advanceSearch"
            />
          </b-form-group>
        </b-col>
        <b-col md="3">
          <b-form-group>
            <label>Storno number:</label>
            <b-form-input
              placeholder="Search"
              type="text"
              class="d-inline-block"
              @input="advanceSearch"
            />
          </b-form-group>
        </b-col>
        <b-col md="3">
          <b-form-group>
            <label>Sum:</label>
            <b-form-input
              placeholder="Search"
              type="number"
              class="d-inline-block"
              @input="advanceSearch"
            />
          </b-form-group>
        </b-col>
        <b-col md="3">
          <b-form-group>
            <label>Total:</label>
            <b-form-input
              placeholder="Search"
              type="number"
              class="d-inline-block"
              @input="advanceSearch"
            />
          </b-form-group>
        </b-col>
        <b-col md="3">
          <b-form-group>
            <label>Id:</label>
            <b-form-input
              placeholder="Search"
              type="number"
              class="d-inline-block"
              @input="advanceSearch"
            />
          </b-form-group>
        </b-col>
        <b-col md="3">
          <b-form-group>
            <label>Original index:</label>
            <b-form-input
              placeholder="Search"
              type="number"
              class="d-inline-block"
              @input="advanceSearch"
            />
          </b-form-group>
        </b-col>
      </b-row>
    </div>

    <!-- table -->
    <vue-good-table
      :columns="columns"
      :rows="getRows"
      :rtl="direction"
      :search-options="{
        enabled: true,
        externalQuery: searchTerm,
      }"
      :select-options="{
        enabled: true,
        selectOnCheckboxOnly: true, // only select when checkbox is clicked instead of the row
        selectionInfoClass: 'custom-class',
        selectionText: 'rows selected',
        clearSelectionText: 'clear',
        disableSelectInfo: true, // disable the select info panel on top
        selectAllByGroup: true, // when used in combination with a grouped table, add a checkbox in the header row to check/uncheck the entire group
      }"
      :pagination-options="{
        enabled: true,
        perPage: pageLength,
      }"
      theme="my-theme"
      @on-row-click="onRowClick"
    >
      <template slot="table-row" slot-scope="props">
        <span v-if="props.column.field === 'fullName'" class="text-nowrap">
          <span>{{ props.row.fullName }}</span>
        </span>
        <span v-else>
          {{ props.formattedRow[props.column.field] }}
        </span>
      </template>

      <!-- pagination -->
      <template slot="pagination-bottom" slot-scope="props">
        <div class="d-flex justify-content-between flex-wrap">
          <div class="d-flex align-items-center mb-0 mt-1">
            <span class="text-nowrap"> Showing 1 to </span>
            <b-form-select
              v-model="pageLength"
              :options="['3', '5', '10']"
              class="mx-1"
              @input="
                (value) => props.perPageChanged({ currentPerPage: value })
              "
            />
            <span class="text-nowrap"> of {{ props.total }} entries </span>
          </div>
          <div>
            <b-pagination
              :value="1"
              :total-rows="props.total"
              :per-page="pageLength"
              first-number
              last-number
              align="right"
              prev-class="prev-item"
              next-class="next-item"
              class="mt-1 mb-0"
              @input="(value) => props.pageChanged({ currentPage: value })"
            >
              <template #prev-text>
                <feather-icon icon="ChevronLeftIcon" size="18" />
              </template>
              <template #next-text>
                <feather-icon icon="ChevronRightIcon" size="18" />
              </template>
            </b-pagination>
          </div>
        </div>
      </template>
    </vue-good-table>
  </b-card-code>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import factureMatch from "@/service/service";
import flatPickr from "vue-flatpickr-component";
import BCardCode from "@core/components/b-card-code/BCardCode.vue";
import {
  BPagination,
  BFormGroup,
  BFormInput,
  BFormSelect,
  BRow,
  BCol,
  BButton,
} from "bootstrap-vue";
import ToastificationContent from "@core/components/toastification/ToastificationContent.vue";
import { VueGoodTable } from "vue-good-table";
import store from "@/store/index";
import { codeAdvance } from "./code";
import ModalBasicVuexy from "@/views/components/modal/ModalBasicVuexy.vue";
import axios from "axios";
export default {
  components: {
    BCardCode,
    VueGoodTable,
    BPagination,
    BFormGroup,
    BFormInput,
    BFormSelect,
    BRow,
    BCol,
    BButton,
    // eslint-disable-next-line vue/no-unused-components
    ToastificationContent,
    ModalBasicVuexy,
    flatPickr,
    factureMatch,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    let startDate = new Date();
    let endDate = new Date();
    endDate.setDate(endDate.getDate() + 6);
    return {
      dateRange: { startDate, endDate },
      rangeDate: null,
      pageLength: 5,
      dir: false,
      codeAdvance,
      columns: [
        {
          label: "Name",
          field: "contractor.name",
        },
        {
          label: "Date",
          field: "created_at",
        },
        {
          label: "Branch code",
          field: "branch_code",
        },
        {
          label: "Sap code",
          field: "sap_code",
        },
        {
          label: "Shipment number",
          field: "shipment_number",
        },
        {
          label: "Storno number",
          field: "storno_number",
        },
        {
          label: "Sum",
          field: "sum",
        },
        {
          label: "Total",
          field: "total",
        },
        {
          label: "Id",
          field: "id",
        },
        {
          label: "Orig. ind.",
          field: "originalIndex",
        },
      ],
      rows: [],
      searchTerm: "",
      tableData: {
        contractor: {
          name: "",
          code: "",
        },
        branch_code: "",
        info: {
          number: "",
          date: "",
        },
        order_number: "",
        sap_code: "",
        shipment_number: "",
        storno_number: "",
        sum: null,
        total: null,
      },
    };
  },
  filters: {
    dateCell(value) {
      let dt = new Date(value);
      return dt.getDate();
    },
    date(val) {
      return val ? val.toLocaleString() : "";
    },
  },
  computed: {
    ...mapGetters(["getRows"]),
    direction() {
      // this.$refs.picker.togglePicker(false);
      if (store.state.appConfig.isRTL) {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.dir = true;
        return this.dir;
      }
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.dir = false;
      return this.dir;
    },
  },
  methods: {
    ...mapActions(["getApi"]),
    advanceSearch(val) {
      this.searchTerm = val;
    },
    onRowClick(params) {
      console.log("params", params);
      (this.tableData = {
        contractor: {
          name: params.row.contractor.name,
          code: params.row.contractor.code,
        },
        branch_code: params.row.branch_code,
        info: {
          number: params.row.info.number,
          date: params.row.info.date,
        },
        order_number: params.row.order_number,
        sap_code: params.row.sap_code,
        shipment_number: params.row.shipment_number,
        storno_number: params.row.storno_number,
        sum: params.row.sum,
        total: params.row.total,
      }),
        console.log(this.tableData);
      this.$bvModal.show("bv-modal-example");
    },
  },
  async created() {
    console.log("Created API");
    await this.getApi();
  },
  async mounted() {
    console.log("Mounted API");
    await this.getApi();
  },
};
</script>

<style lang="scss">
@import "@core/scss/vue/libs/vue-flatpicker.scss";
</style>
