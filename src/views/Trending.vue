<template>
  <v-app>
    <v-card class="filter">
      <v-layout>
        <v-card-title>Filters</v-card-title>
        <v-card-actions>
          <v-btn icon color="primary" @click="isFilterOpen = !isFilterOpen">
            <v-icon>{{ isFilterOpen ? mdiMenuUp : mdiMenuDown }}</v-icon>
          </v-btn>
        </v-card-actions>
      </v-layout>

      <v-expand-transition>
        <v-card-text v-if="isFilterOpen" class="ma-0 py-0">
          <v-switch v-model="war" label="War" class="pa-0 ma-0"></v-switch>
          <v-switch v-model="protest" label="Protest" class="pa-0 ma-0"></v-switch>
        </v-card-text>
      </v-expand-transition>
    </v-card>

    <gmaps-map ref="map" :options="mapOptions" @click="onMapClick">
      <!-- <gmaps-marker :position="{ lat: -27, lng: 153 }"/> -->
      <!-- <gmaps-info-window :options="{ position: { lat: -27, lng: 153 } }">
        <p>Any <span style="background: yellow">HTML</span> can<br />go in <strong>these</strong>.</p>
      </gmaps-info-window> -->
      <gmaps-heatmap :items="datasets" :opacity="0.7" weight-prop="weight" />
    </gmaps-map>

    <v-dialog v-model="isDialogOpen" width="600" dark>
      <v-card>
        <v-card-title class="text-h5">{{ datasets[selectedIndex].name }}</v-card-title>

        <v-card-text>
          <h3 class="mb-2">Articles</h3>

          <v-divider></v-divider>

          <div v-for="(article, index) in datasets[selectedIndex].war.articles" :key="index">
            <v-list-item two-line>
              <v-list-item-content @click="$router.push(article.articleURL)">
                <v-list-item-title>{{ article.title }}</v-list-item-title>
                <v-list-item-subtitle>{{ article.summary }}</v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-avatar rounded>
                <v-img :src="article.imageURL"></v-img>
              </v-list-item-avatar>
            </v-list-item>
            <v-divider></v-divider>
          </div>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="isDialogOpen = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { gmapsMap, gmapsMarker, gmapsHeatmap, gmapsInfoWindow } from 'x5-gmaps';
import { mdiMenuUp, mdiMenuDown } from '@mdi/js';
import { datasets } from '@/store/dummyData';

@Component({ components: { gmapsMap, gmapsMarker, gmapsHeatmap, gmapsInfoWindow } })
export default class Home extends Vue {
  war: boolean = false;
  protest: boolean = true;
  isFilterOpen: boolean = false;
  mdiMenuUp: string = mdiMenuUp;
  mdiMenuDown: string = mdiMenuDown;

  datasets: any = datasets;

  isDialogOpen: boolean = false;
  selectedIndex: number = 0;

  mapOptions: any = {
    center: { lat: 47.5, lng: 32.8 },
    zoom: 5,
    fullscreenControl: false,
    mapTypeControl: false,
    rotateControl: false,
    scaleControl: false,
    streetViewControl: false,
  };

  onMapClick(mapsMouseEvent: any) {
    const lat = mapsMouseEvent.latLng.toJSON().lat;
    const lng = mapsMouseEvent.latLng.toJSON().lng;

    this.selectedIndex = datasets.findIndex((data) => {
      if (Math.abs(data.lat - lat) <= 2 && Math.abs(data.lng - lng) <= 2) return true;
    });

    this.isDialogOpen = true;
  }
}
</script>

<style lang="scss">
.filter {
  position: fixed;
  top: 10px;
  right: 10px;
  z-index: 1;
}
</style>
