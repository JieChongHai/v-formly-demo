<template>
  <div id="app">
    <div class="wrapper">
      <v-formly ref="form" v-model="data" :meta="meta"> </v-formly>
      <div class="btns">
        <a-button type="danger" @click="clear"> 重置 </a-button>
        <a-button type="primary" @click="submit"> 提交 </a-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data: function () {
    return {
      meta: {
        type: "object",
        properties: {
          name: {
            title: "姓名",
            type: "string",
            default: "kevin",
            ui: {
              showRequired: true,
            },
          },
          desc: {
            title: "描述",
            type: "string",
            default: "Base on technical, but not limited on it!",
            ui: {
              change: (val) => {
                console.log("val = ", val);
              },
            },
          },
          enable: {
            title: "启用",
            type: "boolean",
          },
        },
        required: ["name"],
      },
      data: { enable: true },
    };
  },
  methods: {
    clear() {
      this.data = null;
    },
    async submit() {
      let valid = await this.$refs.form.validate();
      if (valid) {
        this.$message.success(JSON.stringify(this.data));
      }
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
.wrapper {
  margin: auto;
  max-width: 600px;
}
.btns {
  display: flex;
  justify-content: flex-end;
}
.ant-btn + .ant-btn {
  margin-left: 8px;
}
</style>
