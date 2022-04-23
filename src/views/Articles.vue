<template>
  <v-app>
    <v-container class="pa-8">
      <v-card v-for="(item, index) in trendingDatasets" :key="index" class="mb-5">
        <v-card-title class="text-h5">{{ item.name }}</v-card-title>

        <v-list>
          <div v-for="(article, index2) in item.war.articles" :key="index2">
            <v-divider></v-divider>
            <v-list-item link @click="openArticle(article.articleURL)">
              <v-list-item-content>
                <v-list-item-title>{{ article.title }}</v-list-item-title>
              </v-list-item-content>
              <v-list-item-avatar rounded size="80"><v-img :src="article.imageURL"></v-img></v-list-item-avatar>
            </v-list-item>
          </div>
        </v-list>
      </v-card>
    </v-container>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { TrendingDataset, trendingDatasets } from '@/store/dummyData';

@Component
export default class News extends Vue {
  trendingDatasets: TrendingDataset[] = trendingDatasets;

  openArticle(articleURL: string) {
    window.open(articleURL);
  }
}
</script>
