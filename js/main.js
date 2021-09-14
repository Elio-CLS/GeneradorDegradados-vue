const app = Vue.createApp({
    data() {
        return {
            title: 'Degradados.CSS',
            fcolor: '#40EF12',
            scolor: '#0080FF',
            orientacion: 1,
        }
    },
    computed: {
        setColor() {
            if (this.orientacion == 1) {
                return `background: linear-gradient(to right, ${this.fcolor}, ${this.scolor} );`;
              } else if (this.orientacion == 2) {
                return `background: linear-gradient(to left, ${this.fcolor}, ${this.scolor} );`;
              } else if (this.orientacion == 3) {
                return `background: linear-gradient(to top, ${this.fcolor}, ${this.scolor} );`;
              } else {
                return `background: linear-gradient(to bottom, ${this.fcolor}, ${this.scolor} );`;
              }
        },
    }
})