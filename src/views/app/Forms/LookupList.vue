<template>
  <div >
            <label>Lookup Type</label>
            <select class="form-control" v-model="requestType" v-on:change="onLookupChange()">
                <option value="" disabled selected>Select Type</option>
                <!-- <option v-for="(key, value) in requestTypes" v-bind:title="value" v-bind:value="key">{{value}}</option> -->
            </select>
   
       
            <div class="table-border-style">
                <div class="table-responsive">
                    <table id="tblList" class="display table nowrap table-striped table-hover">
                        <thead>
                            <tr>
                                <th>Order</th>
                                <th>Title</th>
                                <th>Description</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- <tr v-for="status in lookupValues">
                                <td>{{status.order}}</td>
                                <td>{{status.title}}</td>
                                <td>{{status.description}}</td>
                                <td><button type="button" class="btn btn-link" v-on:click="viewDetails(status.id)">view details</button> </td>
                            </tr> -->
                        </tbody>
                    </table>
                </div>
            </div>
    
        </div> 
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>