<template>
    <div>
        <h1>List of Workshops</h1>
        <hr />
        <div class="d-flex justify-content-center" v-if="status === 'LOADING'">
            <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
        <ul v-else-if="status === 'LOADED'">
            <li v-for="workshop in workshops" :key="workshop.id">
                {{workshop.name}}
            </li>
        </ul>
        <div
            class="alert alert-danger"
            role="alert"
            v-else-if="status === 'ERROR'"
        >
            {{error.message}}
        </div>
    </div>
</template>

<script>
import { getWorkshops } from '@/services/workshops';
export default {
    name: 'WorkshopsList',
    data() {
        return {
            // status = 'LOADING' | 'LOADED' | 'ERROR'
            status: 'LOADING',
            workshops: [],
            error: null
        };
    },
    // lifecycle method
    created() {
        getWorkshops()
            .then( data => {
                this.status = 'LOADED';
                this.workshops = data;
            })
            .catch( error => {
                this.status = 'ERROR';
                this.error = error;
            });
    }
}
</script>

<style scoped>
</style>