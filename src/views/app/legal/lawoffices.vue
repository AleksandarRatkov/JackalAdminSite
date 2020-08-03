<template>
<div>
  <b-row>
    <b-colxx xxs="12">
      <piaf-breadcrumb :heading="$t('menu.lawoffices')"/>
      <div class="separator mb-5"></div>
    </b-colxx>
  </b-row>
     <b-button class="mb-2" size="lg" variant="primary">{{ $t('button.large-button') }}</b-button>
  <b-row class="mb-5">
    <b-colxx xxs="12">
      <b-card class="mb-4" :title="$t('lawoffices.list')">
        <b-table
            ref="custom-table"
            class="vuetable"
            sort-by="title" sort-desc.sync="false"
            @row-selected="rowSelected"
            selectable
            :select-mode="bootstrapTable.selectMode"
            :current-page="currentPage"
            selectedVariant="primary"
            :fields="bootstrapTable.fields"
            :items="dataProvider"
          >
          <template slot="status" slot-scope="data">
            <b-badge class="mb-1" :variant="data.item.statusColor">{{ data.value }}</b-badge>
          </template>
          </b-table>
        <b-pagination
            size="sm"
            align="center"
            :total-rows="totalRows"
            :per-page="perPage"
            v-model="currentPage"
          >
            <template v-slot:next-text>
              <i class="simple-icon-arrow-right"/>
            </template>
            <template v-slot:prev-text>
              <i class="simple-icon-arrow-left"/>
            </template>
            <template v-slot:first-text>
              <i class="simple-icon-control-start"/>
            </template>
            <template v-slot:last-text>
              <i class="simple-icon-control-end"/>
            </template>
          </b-pagination>

          <b-alert v-if="bootstrapTable.selected.length>0" show variant="primary">Selected Items :<br/><pre>{{ bootstrapTable.selected }}</pre></b-alert>
      </b-card>
    </b-colxx>
  </b-row>
  </div>
</template>
<script>

import { jackalBaseApi } from "../../../constants/config";
import axios from 'axios'
import Vuetable from 'vuetable-2/src/components/Vuetable'
import VuetablePaginationBootstrap from '../../../components/Common/VuetablePaginationBootstrap'

export default {
  components: {
    'vuetable' : Vuetable,
    'vuetable-pagination-bootstrap' : VuetablePaginationBootstrap
  },
  data () {
    return {
      vuetableItems: {
        apiUrl: jackalBaseApi + '/LawOffices',
        fields: [
          {
            name: 'title',
            sortField: 'title',
            title: 'Name',
            titleClass: '',
            dataClass: 'list-item-heading'
          },
          {
            name: 'phone',
            sortField: 'phone',
            title: 'Phone',
            titleClass: '',
            dataClass: 'text-muted'
          },
          {
            name: 'city',
            sortField: 'city',
            title: 'City',
            titleClass: '',
            dataClass: 'text-muted'
          }
        ]
      },
      currentPage: 1,
      perPage: 5,
      totalRows: 0,
      bootstrapTable: {
        selected: [],
        selectMode: 'single',
        fields: [
          { key: 'title', label: 'Title', sortable: true, sortDirection: 'desc', tdClass: 'list-item-heading' },
          { key: 'phone', label: 'Phone', sortable: true, tdClass: 'text-muted' },
          { key: 'city', label: 'City', sortable: true, tdClass: 'text-muted' }
        ]
      }
    }
  },
  methods: {
    onPaginationData (paginationData) {
      this.$refs.pagination.setPaginationData(paginationData)
    },
    onChangePage (page) {
      this.$refs.vuetable.changePage(page)
    },
    rowSelected (items) {
      this.bootstrapTable.selected = items
    },
    dataProvider (ctx) {
      const params = this.apiParamsConverter(ctx)
      let promise = axios.get(jackalBaseApi + '/LawOffices', { params: params })

      return promise
        .then(result => result.data)
        .then((data) => {
          this.currentPage = data.current_page
          this.perPage = data.per_page
          this.totalRows = data.total
          const items = data.data
          return items;
        }).catch(_error => {
          return []
        })
    },
    apiParamsConverter (params) {
      let apiParams = {}
      if (params.perPage !== 0) {
        apiParams.per_page = params.perPage
      }
      if (params.currentPage >= 1) {
        apiParams.page = params.currentPage
      }
      if (params.sortBy && params.sortBy.length > 0) {
        apiParams.sort = `${params.sortBy}|${params.sortDesc ? 'desc' : 'asc'}`
      }
      if (params.filter && params.filter.length > 0) {
        // Optional
      }
      return apiParams
    }
  }
}
</script>
