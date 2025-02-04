<template>
  <main class="bg-[#222] flex-1 flex flex-col p-3">
    <!-- container -->
    <div
      class="max-w-[1024px] w-full flex flex-col rounded-xl bg-[#282828] text-[#aaa] mx-auto pb-5"
    >
      <!-- Container Header -->
      <div class="flex px-5 py-3 text-base items-center">
        <RouterLink to="/">
          <div
            class="h-[40px] w-[40px] rounded-full hover:border flex justify-center items-center border-[#444] active:bg-[#333]"
          >
            <ArrowLeft :size="20" />
          </div>
        </RouterLink>
        <div class="flex-1 text-center font-semibold">New Tasklist</div>
        <div
          class="h-[40px] w-[40px] rounded-full hover:border flex justify-center items-center border-[#444] active:bg-[#333]"
          tabindex="0"
        >
          <EllipsisVertical :size="20" />
        </div>
      </div>

      <!-- Container Body -->
      <div class="flex-1 max-w-[900px] mx-auto w-full">
        <!-- new task wrapper -->
        <div class="flex text-center justify-center gap-3 p-5">
          <input
            v-model="newTask"
            class="h-[40px] flex-1 rounded-lg bg-[#222] px-5 outline-none"
            placeholder="Type your task here ..."
            style="box-shadow: inset 0 0 4px 1px #111"
            @keyup.enter="addTask"
          />
          <ButtonUI :class="`rounded-full`">Add</ButtonUI>
        </div>
        <!-- Tasks List -->
        <div class="flex flex-col px-5">
          <!-- Header -->
          <div class="text-[#777] pb-3">Tasks</div>
          <!-- List -->
          <div class="flex flex-col gap-2">
            <!-- List - Item -->
            <div
              class="flex items-center px-3 h-[40px] rounded bg-[#181818] rounded task "
              v-for="(task, index) in tasks"
              :key="index"
            >
              <!-- Checkbox + Text -->
              <div @click="toggleCompleted(index)">
                <input type="checkbox" :checked="task.completed" />
                <span
                  class="cursor-pointer mx-3"
                  :class="{ completed: task.completed }"
                  >{{ task.text }}</span
                >
              </div>
              <!-- Action Buttons -->
              <section class="ml-auto gap-3 items-center hidden task-actions border border-[#222] hover:border-[#333] rounded active:bg-[#333]">
                <button class="h-[30px] gap-3 px-3 flex items-center justify-center" @click="deleteTask(index)">
                  <Trash :size="15" />
                  Delete
                </button>
              </section>
            </div>
          </div>
          <!-- Placeholder -->
          <div v-if="tasks.length == 0" class="py-8 text-center text-[#777]">
            Tasks will appear here ...
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from "vue";
import ButtonUI from "../components/ButtonUI.vue";
import { ArrowLeft, EllipsisVertical, Trash } from "lucide-vue-next";

const newTask = ref("");
const tasks = ref<{ text: string; completed: boolean }[]>([
  {text:"Do Workout", completed: true}
]);

const addTask = () => {
  if (newTask.value.trim() == "") return;
  tasks.value.push({ text: newTask.value, completed: false });
  newTask.value = "";
};

const toggleCompleted = (index: number) => {
  // console.log(index);
  tasks.value[index].completed = !tasks.value[index].completed;
};

const deleteTask = (index: number) => {
  tasks.value.splice(index, 1);
}


</script>

<style lang="css" scoped>
.completed {
  text-decoration: line-through;
}
input[type="checkbox"] {
  vertical-align: middle;
}

.task{
  transition: 300ms;
}

.task:hover > .task-actions{
  display: flex;
}

.task:hover{
  box-shadow: 0 0 4px 1px #555;
}
</style>
