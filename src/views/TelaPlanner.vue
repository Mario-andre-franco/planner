<template>
    <div class="bg-gradient-to-t from-lilac-bush-400 to-lilac-bush-800 h-auto flex justify-center">
        <div class="container flex flex-col mx-auto my-auto bg-lilac-bush-400 ">
                <accordion title="Segunda-Feira" class="text-lg">
                    <div class="flex flex-col" v-for="(aluno,index) in alunosSegunda" :key="index">
                        <p class="pb-5 flex justify-start text-lilac-bush-50">{{aluno.nome}} - {{ aluno.horarioAula }}</p> 
                    </div>
                </accordion>
                <accordion title="Terça-Feira" class="text-lg">
                    <div class="flex flex-col" v-for="(aluno,index) in alunosTerca" :key="index">
                        <div v-if="alunosTerca.length === 0">
                            <p class="pb-5 flex justify-start text-lilac-bush-50">Nenhum aluno nesse dia</p>
                        </div>
                        <div v-else>
                            <p class="pb-5 flex justify-start text-lilac-bush-50">{{aluno.nome}} - {{ aluno.horarioAula }}</p> 
                        </div>    
                    </div>
                </accordion>    
                <accordion title="Quarta-Feira" class="text-lg">
                    <div class="flex flex-col" v-for="(aluno,index) in alunosQuarta" :key="index">
                        <p class="pb-5 flex justify-start text-lilac-bush-50">{{aluno.nome}} - {{ aluno.horarioAula }}</p> 
                    </div>
                    
                </accordion>  
                <accordion title="Quinta-Feira" class="text-lg">
                    <div class="flex flex-col" v-for="(aluno,index) in alunosQuinta" :key="index">
                        <p class="pb-5 flex justify-start text-lilac-bush-50">{{aluno.nome}} - {{ aluno.horarioAula }}</p> 
                    </div>
                    
                </accordion>  
                <accordion title="Sexta-Feira" class="text-lg">
                    <div class="flex flex-col" v-for="(aluno,index) in alunosSexta" :key="index">
                        <p class="pb-5 flex justify-start text-lilac-bush-50">{{aluno.nome}} - {{ aluno.horarioAula }}</p> 
                    </div>
                    
                </accordion>  
                <accordion title="Sábado" class="text-lg">
                    <div class="flex flex-col" v-for="(aluno,index) in alunosSabado" :key="index">
                        <p class="pb-5 flex justify-start text-lilac-bush-50">{{aluno.nome}} - {{ aluno.horarioAula }}</p> 
                    </div>
                    
                </accordion>  
        </div>
    </div>
</template>
<script>
import accordion from '../components/AccordionMenu.vue'
import axios from 'axios'
export default {
    components: {
        accordion
    },
    data () {
        return {
            alunos: [],
            alunosSegunda: [],
            alunosTerca: [],
            alunosQuarta: [],
            alunosQuinta: [],
            alunosSexta: [],
            alunosSabado: []
        }
    },
    methods: {
        formatarDiaDaSemana(payload) {
            for (let index = 0; index < payload.length; index++) {
                const element = payload[index];
                if(element.diaSemana === "segunda-feira") {
                   this.alunosSegunda.push(element) 
                }
                else if(element.diaSemana === "terça-feira") {
                    this.alunosTerca.push(element) 
                    console(this.alunosTerca.length)
                }
                else if(element.diaSemana === "quarta-feira") {
                    this.alunosQuarta.push(element)
                }
                else if(element.diaSemana === "quinta-feira") {
                    this.alunosQuinta.push(element)
                }
                else if(element.diaSemana === "sexta-feira") {
                    this.alunosSexta.push(element)
                }
                else if(element.diaSemana === "sábado") {
                    this.alunosSabado.push(element)
                }

                
            }
        }
    },
    mounted () {
        axios.get('https://planner-backend-service.onrender.com/alunos')
        .then(response => {
            this.alunos = this.formatarDiaDaSemana(response.data)
        })
        .catch(error => {
            console.log(error)
        })
    }
}
</script>
