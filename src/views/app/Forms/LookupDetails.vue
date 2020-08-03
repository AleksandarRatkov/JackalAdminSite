<template>
  <b-form>
   
      <b-form-group>
        <label>Title</label>
        <div class="input-group mb-3">
          <b-form-input
            type="text"
            maxlength="100"
            class="form-control"
            placeholder="Title"
            required
          />
        </div>
      </b-form-group>


      <div class="row">
        <div class="col-md-4">
          <b-form-group>
            <label>Lnaguage</label>
            <b-form-input
              type="text"
              maxlength="100"
              class="form-control"
              placeholder="Culture"
              required
            />
          </b-form-group>
        </div>
        <div class="col-md-8">
          <b-form-group>
            <label>Key</label>
            <b-form-input
              type="text"
              maxlength="100"
              class="form-control"
              placeholder="Key"
              required
            />
          </b-form-group>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label>Order</label>
            <b-form-input type="number" maxlength="8" class="form-control" placeholder="0" />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <b-form-group>
            <label class="form-label">Notes</label>
            <b-form-textarea
              class="form-control"
              maxlength="1500"
              rows="5"
              placeholder="Description"
            ></b-form-textarea>
          </b-form-group>
        </div>
      </div>

    <div class="row"></div>
  </b-form>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>