<template>
  <b-modal
    id="modalright"
    ref="modalright"
    :title="$t('pages.add-new-modal-title')"
    modal-class="modal-right"
  >
    <b-form>
      <b-form-group :label="$t('pages.key')">
        <b-form-input v-model="newItem.key" />
      </b-form-group>
       <b-form-group :label="$t('pages.order')">
        <b-form-input v-model="newItem.order" placeholder="item order" type="number"  />
      </b-form-group>
      <b-form-group :label="$t('pages.title')">
        <b-form-input v-model="newItem.title" />
      </b-form-group>
      <b-form-group :label="$t('pages.language')">
        <b-dropdown
          id="langddm"
          class="ml-2"
          variant="light"
          size="sm"
          toggle-class="language-button"
          v-model="newItem.language" 
        >
          <b-dropdown-item
            v-for="(l,index) in localeOptions"
            :key="index"
          >{{l.name}}</b-dropdown-item>
        </b-dropdown>
      </b-form-group>
      <b-form-group :label="$t('pages.description')">
        <b-textarea v-model="newItem.description" :rows="2" :max-rows="2" />
      </b-form-group>
    </b-form>

    <template slot="modal-footer">
      <b-button
        variant="outline-secondary"
        @click="hideModal('modalright')"
      >{{ $t('pages.cancel') }}</b-button>
      <b-button variant="primary" @click="addNewItem()" class="mr-1">{{ $t('pages.submit') }}</b-button>
    </template>
  </b-modal>
</template>
<script>
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import {
  localeOptions,
} from "../../constants/config";
export default {
  components: {
    "v-select": vSelect
  },
  props: ["categories"],
  data() {
    return {
      newItem: {
        key: "",
        title: "",
        order: 0,
        category: "",
        description: "",
      },
      localeOptions
    };
  },
  methods: {
    addNewItem() {
      console.log("adding item : ", this.newItem);
    },
    hideModal(refname) {
      this.$refs[refname].hide();
    }
  }
};
</script>

