<template>
  <v-table>
    <thead class="bg-secondary-lighten-1">
      <tr>
        <th width="30" class="text-center">編號</th>
        <th class="text-center">標題</th>
        <th width="60" class="text-center">日期</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in desserts" :key="item.name">
        <td class="text-center">{{ item.num }}</td>
        <td>{{ item.name }}</td>
        <td class="text-center">{{ item.date }}</td>
      </tr>
    </tbody>
  </v-table>
</template>

<script>
export default {
  data() {
    return {
      desserts: [
        {
          num: "01",
          name: "通勤搭車看預報 環保集點10倍送",
          date: "2025/01/01",
        },
        {
          num: "02",
          name: "春節不無聊上網學習環境教育",
          date: "2025/01/01",
        },
        {
          num: "03",
          name: "洗錢防制，國家向前",
          date: "2025/01/01",
        },
        {
          num: "04",
          name: "春節送禮認標章 環保減碳又健康",
          date: "2025/01/01",
        },
        {
          num: "05",
          name: "環保替代役歲末新春送溫暖",
          date: "2025/01/01",
        },
      ],
    };
  },
};
</script>

<style></style>
