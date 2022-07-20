<template>
   <div class="text-white flex flex-col items-center bg-black w-[75%] p-5 justify-center m-auto mt-[8%] rounded-xl" v-if="end === false">
      <h1 class="text-2xl text-white">Questions</h1>
      <i class="eci chevron-down text-6xl text-white"></i>
      <div>
         <h1>{{ resdata }}</h1>
      </div>
      <div class="flex">
      <button class="p-4 scale-110 m-4 transition-all duration-300 bg-green-500 text-black w-40 rounded-xl  hover:bg-green-400 hover:shadow-md hover:shadow-emerald-700
      hover:scale-125" id="truebtn" @click="trueClick">True</button>
      <button class="p-4 m-4 scale-110 transition-all duration-300 bg-red-600 text-white w-40 rounded-xl hover:bg-red-400 hover:shadow-md hover:shadow-emerald-700
      hover:scale-125" id="falsebtn" @click="falseClick">False</button>
      </div>

   </div>
   <div v-else class="bg-emerald-600 text-black w-[75%] p-5 rounded-xl mt-24 flex flex-col items-center m-auto">
      <h1 class="text-3xl text-gray-900">Number of Correct Questions : {{qucoranscont}}</h1>
   </div>
   <div>
      a
   </div>
</template> 


<script setup>
import { onMounted, ref } from 'vue'
let resdata = ref('')
let quesid = ref(0)
let end = ref(false)
let qucoranscont = ref(0)
let quecorct = ref('')
//let checkbtn = ref('')

function getData() {
   let url = 'https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=boolean'
   fetch(url)
      .then(response => {
         return response.json()
      })
      .then(response => {
         if(quesid.value <= 10) {
            console.log(response.results[quesid.value].question)
         resdata.value = response.results[quesid.value].question
         quecorct.value = response.results[quesid.value].correct_answer
         console.log(quecorct.value)
         console.log(qucoranscont.value)
         } else {
            console.log('bitti')
         }
      })
      .catch(err => {
         console.log('hata', err);
      })
}


// truye click olunduğunda eğer eğer tıklanan tru butanuysa ve ve que true sa getdatayı çağır
// function trueClick() {
//    checkbtn.value = 'true'
//    quesid.value++
//    if (quecorct.value === 'True' && checkbtn.value === 'true') {
//       qucoranscont.value += 1
//       getData()
//    } else {
//       qucoranscont.value += 0
//    }
// }

onMounted(() => {
   getData();
})

</script>