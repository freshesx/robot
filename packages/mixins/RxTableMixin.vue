<template>
  <div>
    <table class="rx-table" bordered="1">
      <tbody>
        <tr v-for="i in 10" :key="i">
          <th>Title</th>
          <td>Happy</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'RxTableMixin'
}
</script>

