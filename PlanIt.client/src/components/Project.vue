<template>

  <div class="container-fluid ineedmargin">
    <div class="card m-4 projectcard shadow selectable" @click="goToProject()">
      <div class="card-body p-5">
        <h5 class="card-title cardtitle">{{project.name}}</h5>
        <p class="card-text carddescription">
          {{project.description}}
        </p>
      </div>
    </div>
  </div>

</template>


<script>
import { useRouter } from 'vue-router';
export default {
  props: {
    project: {
      type: Object,
      required: true,
    }
  },
  setup(props){
    const router = useRouter();
    return {
      goToProject(){
        router.push({
          name: "Project",
          params: { id: props.project.id}
        })
      }
    }
  }
}
</script>


<style lang="scss" scoped>
.projectcard {
  border-color: #8900ed;
  border-width: 5px;
  width: 90%;
}

.cardtitle {
  font-family: "Dosis", sans-serif;
  font-weight: 500;
  font-size: 24px;
}

.carddescription {
  font-family: "Work Sans", sans-serif;
}

.ineedmargin {
  margin-left: 3em;
}
</style>