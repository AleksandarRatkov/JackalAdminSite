<template>
  <div>
    <b-row>
      <b-colxx xxs="12">
        <piaf-breadcrumb :heading="$t('menu.detail')" />
        <div class="separator mb-5"></div>
      </b-colxx>
    </b-row>
    <b-row>
      <b-colxx xs="12" md="12" class="mb-3">
        <b-row>
          <b-colxx xxs="12">
            <b-card class="mb-4" :title="$t('menu.detail')">
              <b-form
                @submit.prevent="onValitadeFormSubmit"
                class="av-tooltip tooltip-label-right"
              >
                <b-row>
                  <b-colxx xxs="12">
                    <b-form-group
                      :label="$t('detail.title')"
                      class="error-l-100"
                    >
                      <b-form-input
                        type="text"
                        :placeholder="$t('detail.title')"
                        v-model="$v.details.title.$model"
                        :state="!$v.details.title.$error"
                      />
                      <b-form-invalid-feedback v-if="!$v.details.title.required"
                        >Please enter title</b-form-invalid-feedback
                      >
                      <b-form-invalid-feedback
                        v-else-if="!$v.details.title.maxLength"
                        >Your title must not exceed 30
                        characters</b-form-invalid-feedback
                      >
                    </b-form-group>
                  </b-colxx>
                </b-row>
                <b-row>
                  <b-colxx xxs="12">
                    <b-form-group
                      :label="$t('detail.category')"
                      class="error-l-100"
                    >
                      <b-form-input
                        type="text"
                        :placeholder="$t('detail.category')"
                        v-model="$v.details.category.$model"
                        :state="!$v.details.category.$error"
                      />
                      <b-form-invalid-feedback
                        v-if="!$v.details.category.required"
                        >Please enter category</b-form-invalid-feedback
                      >
                      <b-form-invalid-feedback
                        v-else-if="!$v.details.category.maxLength"
                        >Your category must not exceed 30
                        characters</b-form-invalid-feedback
                      >
                    </b-form-group>
                  </b-colxx>
                </b-row>
                <b-row>
                  <b-colxx xxs="12">
                    <b-form-group :label="$t('detail.img')" class="error-l-100">
                      <b-form-input
                        type="text"
                        :placeholder="$t('detail.img')"
                        v-model="$v.details.img.$model"
                        :state="!$v.details.img.$error"
                      />
                      <b-form-invalid-feedback v-if="!$v.details.img.required"
                        >Please enter x</b-form-invalid-feedback
                      >
                      <b-form-invalid-feedback
                        v-else-if="!$v.details.img.maxLength"
                        >Your x must not exceed 30
                        characters</b-form-invalid-feedback
                      >
                    </b-form-group>
                  </b-colxx>
                </b-row>
                <b-row>
                  <b-colxx xxs="12">
                    <b-form-group
                      :label="$t('detail.status')"
                      class="error-l-100"
                    >
                      <b-form-input
                        type="text"
                        :placeholder="$t('detail.status')"
                        v-model="$v.details.status.$model"
                        :state="!$v.details.status.$error"
                      />
                      <b-form-invalid-feedback
                        v-if="!$v.details.status.required"
                        >Please enter x</b-form-invalid-feedback
                      >
                      <b-form-invalid-feedback
                        v-else-if="!$v.details.status.maxLength"
                        >Your x must not exceed 30
                        characters</b-form-invalid-feedback
                      >
                    </b-form-group>
                  </b-colxx>
                </b-row>
                <b-row>
                  <b-colxx xxs="12">
                    <b-form-group
                      :label="$t('detail.sales')"
                      class="error-l-100"
                    >
                      <b-form-input
                        type="text"
                        :placeholder="$t('detail.sales')"
                        v-model="$v.details.sales.$model"
                        :state="!$v.details.sales.$error"
                      />
                      <b-form-invalid-feedback v-if="!$v.details.sales.required"
                        >Please enter sales</b-form-invalid-feedback
                      >
                      <b-form-invalid-feedback
                        v-else-if="!$v.details.sales.maxLength"
                        >Your sales must not exceed 30
                        characters</b-form-invalid-feedback
                      >
                    </b-form-group>
                  </b-colxx>
                </b-row>
                <b-row>
                  <b-colxx xxs="12">
                    <b-form-group
                      :label="$t('detail.description')"
                      class="error-l-100"
                    >
                      <b-form-input
                        type="text"
                        :placeholder="$t('detail.description')"
                        v-model="$v.details.description.$model"
                        :state="!$v.details.description.$error"
                      />
                      <b-form-invalid-feedback
                        v-if="!$v.details.description.required"
                        >Please enter x</b-form-invalid-feedback
                      >
                      <b-form-invalid-feedback
                        v-else-if="!$v.details.description.maxLength"
                        >Your x must not exceed 30
                        characters</b-form-invalid-feedback
                      >
                    </b-form-group>
                  </b-colxx>
                </b-row>
                <b-row>
                  <b-colxx xxs="12">
                    <b-form-group
                      :label="$t('detail.stock')"
                      class="error-l-100"
                    >
                      <b-form-input
                        type="text"
                        :placeholder="$t('detail.stock')"
                        v-model="$v.details.stock.$model"
                        :state="!$v.details.stock.$error"
                      />
                      <b-form-invalid-feedback v-if="!$v.details.stock.required"
                        >Please enter stock</b-form-invalid-feedback
                      >
                      <b-form-invalid-feedback
                        v-else-if="!$v.details.stock.maxLength"
                        >Your stock must not exceed 30
                        characters</b-form-invalid-feedback
                      >
                    </b-form-group>
                  </b-colxx>
                </b-row>
                <b-row>
                  <b-colxx xxs="12">
                    <b-form-group
                      :label="$t('detail.date')"
                      class="error-l-100"
                    >
                      <b-form-input
                        type="text"
                        :placeholder="$t('detail.date')"
                        v-model="$v.details.date.$model"
                        :state="!$v.details.date.$error"
                      />
                      <b-form-invalid-feedback v-if="!$v.details.date.required"
                        >Please enter date</b-form-invalid-feedback
                      >
                      <b-form-invalid-feedback
                        v-else-if="!$v.details.date.maxLength"
                        >Your date must not exceed 30
                        characters</b-form-invalid-feedback
                      >
                    </b-form-group>
                  </b-colxx>
                </b-row>

                <b-row>
                  <b-colxx>
                    <b-button type="submit" variant="primary" class="mt-4">{{
                      $t("forms.submit")
                    }}</b-button>
                  </b-colxx>
                </b-row>
              </b-form>
            </b-card>
          </b-colxx>
        </b-row>
      </b-colxx>
    </b-row>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import { getDirection } from "../../../utils";
import Datepicker from "vuejs-datepicker";

const { required, maxLength, numeric } = require("vuelidate/lib/validators");

export default {
  components: {
    "v-select": vSelect,
    datepicker: Datepicker
  },
  data() {
    return {
      details: {
        id: 8,
        title: "Cheesecake",
        img: "/assets/img/cheesecake-thumb.jpg",
        category: "Cakes",
        status: "ON HOLD",
        statusColor: "primary",
        description: "Delicious vegan chocolate cake",
        sales: 887,
        stock: 21,
        date: "23.07.2020"
      },
      direction: getDirection().direction,
      selectData: [
        { value: "1", label: "Test1" },
        { value: "2", label: "Test2" },
        { value: "3", label: "Test3" },
        { value: "4", label: "Test4" }
      ]
    };
  },
  methods: {
    onValitadeFormSubmit() {
      this.$v.$touch();
    }
  },
  mixins: [validationMixin],
  validations: {
    details: {
      title: {
        required,
        maxLength: maxLength(30)
      },
      category: {
        required
      },
      status: {
        required
      },
      description: {
        required
      },
      img: {
        required
      },
      sales: {
        required
      },
      stock: {
        required
      },
      date: {
        required
      }
    }
  }
};
</script>
