export class Institucion {
    constructor(
        public nombre: string,
        public direccion: string,
        // public usuario: string,
        public modalidad?: string,
        public fecha?: string,
        public num_estudiantes?: string,
        public num_docentes?: number,
        public img?: string,
        public jornadas?: string,
        public coor_academico?: string,
        public coor_disciplinario?: string,
        public rector?: string,
        public nucleo?: string,
        public _id?: string
    ) {

    }
}
