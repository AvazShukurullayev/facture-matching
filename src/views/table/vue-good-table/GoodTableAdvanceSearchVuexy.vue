<template>
  <b-card-code :title="title">
    <div class="custom-search">
      <!--? modal  -->
      <div>
        <b-modal id="bv-modal-example" hide-footer>
          <template #modal-title> About {{ tableData.fullName }}</template>
          <div class="border p-1">
            <p><b>Name:</b> {{ tableData.fullName }}</p>
            <p><b>City:</b> {{ tableData.city }}</p>
            <p><b>Email:</b> {{ tableData.email }}</p>
            <p><b>Post:</b> {{ tableData.post }}</p>
            <p><b>Date:</b> {{ tableData.startDate }}</p>
            <p><b>Original index:</b> {{ tableData.originalIndex }}</p>
            <p><b>Id:</b> {{ tableData.id }}</p>
            <p><b>Salary:</b> {{ tableData.salary }}</p>
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
      :rows="rows"
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
        fullName: "",
        city: "",
        email: "",
        id: "",
        originalIndex: "",
        post: "",
        salary: "",
        startDate: "",
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
      console.log(params);
      /* (this.tableData = {
        fullName: params.row.fullName,
        city: params.row.city,
        email: params.row.email,
        id: params.row.id,
        originalIndex: params.row.originalIndex,
        post: params.row.post,
        salary: params.row.salary,
        startDate: this.rangeDate,
        startDate: `${this.dateRange.startDate} - ${this.dateRange.endDate}`,
      }),
        console.log(this.tableData); */
      this.$bvModal.show("bv-modal-example");
    },
  },
  async created() {
    await this.getApi();
    this.rows = await this.getRows;
  },
};
</script>

<style lang="scss">
@import "@core/scss/vue/libs/vue-flatpicker.scss";
</style>
