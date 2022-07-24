<script setup>
  import { ref } from 'vue';
  const isCircleOne = ref(true);
  const isGrade = ref({
    isGrade7: true,
    isGrade8: false,
    isGrade9: false,
    isGrade10: false,
    isGrade11: false,
  });
  const emits = defineEmits(['changeCircle', 'changeGrade']);
  function changeCircle() {
    isCircleOne.value = !isCircleOne.value;
    if (isCircleOne.value) {
      isGrade.value.isGrade7 = true;
      isGrade.value.isGrade8 = false;
      isGrade.value.isGrade9 = false;
      emits('changeCircle', 1);
    } else {
      isGrade.value.isGrade9 = true;
      isGrade.value.isGrade10 = false;
      isGrade.value.isGrade11 = false;
      emits('changeCircle', 2);
    }
  }
  function changeGrade(chooseGradeNumber) {
    isGrade.value.isGrade7 = false;
    isGrade.value.isGrade8 = false;
    isGrade.value.isGrade9 = false;
    isGrade.value.isGrade10 = false;
    isGrade.value.isGrade11 = false;
    isGrade.value['isGrade' + chooseGradeNumber] = true;
    emits('changeGrade', chooseGradeNumber);
  }
</script>

<template>
  <div class="lessons-list__box-navigation box-navigation">
    <div class="box-navigation__circle-meaning">
      <span>1 круг</span> <br />
      изучение тем школьной программы в общем виде
    </div>

    <div class="box-navigation__navigation navigation">
      <div class="navigation__box-circles">
        <div
          class="navigation__circle"
          :class="{ navigation__choosen_circle: isCircleOne }"
          @click="changeCircle"
        >
          1 круг
        </div>
        <div
          class="navigation__circle"
          :class="{ navigation__choosen_circle: !isCircleOne }"
          @click="changeCircle"
        >
          2 круг
        </div>
      </div>

      <div class="navigation__box-grades">
        <div
          class="navigation__grade"
          :class="{ navigation__choosen_grade: isGrade.isGrade7 }"
          v-show="isCircleOne"
          @click="changeGrade(7)"
        >
          7 класс
        </div>
        <div
          class="navigation__grade"
          :class="{ navigation__choosen_grade: isGrade.isGrade8 }"
          v-show="isCircleOne"
          @click="changeGrade(8)"
        >
          8 класс
        </div>
        <div
          class="navigation__grade"
          :class="{ navigation__choosen_grade: isGrade.isGrade9 }"
          @click="changeGrade(9)"
        >
          9 класс
        </div>
        <div
          class="navigation__grade"
          :class="{ navigation__choosen_grade: isGrade.isGrade10 }"
          v-show="!isCircleOne"
          @click="changeGrade(10)"
        >
          10 класс
        </div>
        <div
          class="navigation__grade"
          :class="{ navigation__choosen_grade: isGrade.isGrade11 }"
          v-show="!isCircleOne"
          @click="changeGrade(11)"
        >
          11 класс
        </div>
      </div>
    </div>

    <div class="box-navigation__circle-meaning">
      <span>2 круг</span> <br />
      углубленное изучение тем школьной программы
    </div>
  </div>
</template>

<style scoped lang="scss">
  .lessons-list {
    &__box-navigation {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      flex-wrap: wrap;
    }
  }

  .box-navigation {
    &__circle-meaning {
      border: 0.5px solid black;
      border-radius: 50%;
      width: 150px;
      height: 150px;
      text-align: center;
      font: normal 16px Times New Roman;
      padding-top: 20px;
      padding-left: 10px;
      padding-right: 10px;
    }

    &__circle-meaning span {
      color: rgb(255, 115, 0);
      font-weight: bold;
    }

    &__navigation {
      margin-left: 10px;
      margin-right: 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }

  @media (max-width: 560px) {
    .box-navigation__navigation {
      order: 2;
    }
  }

  .navigation {
    &__box-circles {
      display: flex;
      flex-direction: row;
      justify-content: center;
      border: 0.5px solid black;
      border-radius: 30px;
      margin: 0px auto;
    }

    &__circle {
      padding: 5px;
      border-radius: 30px;
      cursor: default;
      user-select: none;
    }

    &__choosen_circle {
      background-color: black;
      color: white;
    }

    &__box-grades {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      border: 0.5px solid black;
      border-radius: 30px;
      margin-top: 20px;
      align-self: center;
    }

    &__grade {
      padding: 5px;
      border-radius: 30px;
      cursor: default;
      user-select: none;
    }

    &__choosen_grade {
      background-color: black;
      color: white;
    }
  }
</style>
