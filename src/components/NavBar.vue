<template>
    <q-footer elevated class="bg-white q-pa-md main__footer">
        <div class="row">
            <div class="col flex justify-center">
                <router-link to="/" class="null-link"><q-btn round flat color="grey-5" icon="home" /></router-link>
            </div>
            <div class="col flex justify-center">
                <router-link to="/create-task" class="null-link"><q-btn round color="black" icon="add" /></router-link>
            </div>
            <div class="col flex justify-center">
                <router-link to="/tasks" class="null-link"><q-btn round flat color="grey-5" icon="list" /></router-link>
            </div>
        </div>
    </q-footer>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>
