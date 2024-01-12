
<template>
    <div v-for="hotel in hotels" :key="hotel._id">
        <p>{{ hotel.originalTitleText.text }}</p>
        <p>{{ hotel.releaseDate.day }}/{{ hotel.releaseDate.month }}/{{ hotel.releaseDate.year }}</p>
        
    </div>
</template>
<script setup>
import { onMounted, ref } from 'vue';

const hotels = ref([])
const url = 'https://moviesdatabase.p.rapidapi.com/titles/x/upcoming';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'dcc5eb45cemshef131723b6d507ep18c5a7jsn87c5d7763852',
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
    }
};

const fetchHotels = async () => {
    const res = await fetch(url, options)
    const data = await res.json()
    hotels.value = data.results
    console.log(data.results)
}

onMounted(() => {
    fetchHotels()
})
</script>