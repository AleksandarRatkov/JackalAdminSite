<template>
  <div>
    <LookupList></LookupList>
    <LookupDetails></LookupDetails>
  </div>
</template>
<script>
import LookupList from "../Forms/LookupList";
import LookupDetails from "../Forms/LookupDetails";

export default {
  components: {
    LookupList,
    LookupDetails
  }
};
</script>