<script>
import axios from "axios";

export default {
  name: "ApiCall",

  props: {
    apiAddress: {
      type: String,
      required: true,
    },
  },
  mounted() {
    axios.get(this.apiAddress).then((response) => {
      this.$emit('response', response.data);
    });
  },
};
</script>
