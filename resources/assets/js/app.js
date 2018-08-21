
	new Vue({
		el: '#crud',
		created: function () {
			this.getKeeps()
		},
		data: {
			keeps: [],
			pagination: {
                'total': 0,
                'current_page': 0,
                'per_page': 0,
                'last_page': 0,
                'from': 0,
                'to': 0,
			},
			newKeep: '',
			fillKeep: {'id': '', 'keep': ''},
			errors: [],
			offset: 3,
		},
		computed: {
			isActived: function () {
				return this.pagination.current_page;
			},
			pagesNumber: function () {
				if (!this.pagination.to) {
					return [];
				}
				var from = this.pagination.current_page - this.offset; 
				if (from < 1) {
					from = 1;
				}

				var to = from + (this.offset * 2); 
				if (to >= this.pagination.last_page) {
					to = this.pagination.last_page;
				}

				var pagesArray = [];
				while(from <= to){
					pagesArray.push(from);
					from++;
				}
				return pagesArray;
			}
		},
		methods:{
			getKeeps: function (page) {
				var urlKeeps = 'tasks?page='+page;
				axios.get(urlKeeps).then(response =>{
					this.keeps = response.data.tasks.data,
					this.pagination = response.data.pagination
				});
			},
			editKeep: function (keep) {
				this.fillKeep.id = keep.id;
				this.fillKeep.keep = keep.keep;
				$('#edit').modal('show');
			},
			updateKeep: function (id) {
				var url = 'tasks/' + id;
				axios.put(url, this.fillKeep).then(response => {
					this.getKeeps();
					this.fillKeep = {'id': '', 'keep': ''};
					this.errors = [];
					$('#edit').modal('hide');
					toastr.success('Tarea actualizada con éxito');
				}).catch(error =>{
					this.errors = error.response.data
				});
			},
			deleteKeep: function (keep) {
				var url = 'tasks/' + keep.id;
				axios.delete(url).then(response => { //eliminamos
					this.getKeeps(); //listamos
					toastr.success('Eliminado corectamente'); //mensaje
				});
			},
			createKeep: function () {
				var url = 'tasks';
				axios.post(url, {
					keep: this.newKeep
				}).then(response => {
					this.getKeeps();
					this.newKeep = '';
					this.errors = [];
					$('#create').modal('hide');
					toastr.success('Nueva tarea creada con éxito');
				}).catch(error => {
					this.errors = error.response.data
				});
			},
			changePage: function (page) {
				this.pagination.current_page = page;
				this.getKeeps(page);
			}
		}
	});

		new Vue({
		el: '#crudProyect',
		created: function () {
			this.getProyectos()
		},
		data: {
			proyectos: [],
			pagination: {
                'total': 0,
                'current_page': 0,
                'per_page': 0,
                'last_page': 0,
                'from': 0,
                'to': 0,
			},
			newTitulo: '',
			newSubtitulo: '',
			fillProyecto: {'id': '', 'titulo': '', 'subtitulo': ''},
			errors: [],
			offset: 3,
		},
		computed: {
			isActived: function () {
				return this.pagination.current_page;
			},
			pagesNumber: function () {
				if (!this.pagination.to) {
					return [];
				}
				var from = this.pagination.current_page - this.offset; 
				if (from < 1) {
					from = 1;
				}

				var to = from + (this.offset * 2); 
				if (to >= this.pagination.last_page) {
					to = this.pagination.last_page;
				}

				var pagesArray = [];
				while(from <= to){
					pagesArray.push(from);
					from++;
				}
				return pagesArray;
			}
		},
		methods:{
			getProyectos: function (page) {
				var urlProyectos = 'proyectos?page='+page;
				axios.get(urlProyectos).then(response =>{
					this.proyectos = response.data.proyectos.data,
					this.pagination = response.data.pagination
				});
			},
			editProyecto: function (proyecto) {
				this.fillProyecto.id = proyecto.id;
				this.fillProyecto.titulo = proyecto.titulo;
				this.fillProyecto.subtitulo = proyecto.subtitulo;
				$('#editProyecto').modal('show');
			},
			updateProyecto: function (id) {
				var url = 'proyectos/' + id;
				axios.put(url, this.fillProyecto).then(response => {
					this.getProyectos();
					this.fillProyecto = {'id': '', 'titulo': '', 'subtitulo': ''};
					this.errors = [];
					$('#editProyecto').modal('hide');
					toastr.success('Proyecto actualizado con éxito');
				}).catch(error =>{
					this.errors = error.response.data
				});
			},
			deleteProyecto: function (proyecto) {
				var url = 'proyectos/' + proyecto.id;
				axios.delete(url).then(response => { //eliminamos
					this.getProyectos(); //listamos
					toastr.success('Eliminado corectamente'); //mensaje
				});
			},
			createProyecto: function () {
				var url = 'proyectos';
				axios.post(url, {
					titulo: this.newTitulo,
					subtitulo: this.newSubtitulo
				}).then(response => {
					this.getProyectos();
					this.newTitulo = '';
					this.newSubtitulo = '';
					this.errors = [];
					$('#createProyecto').modal('hide');
					toastr.success('Nuevo proyecto creado con éxito');
				}).catch(error => {
					this.errors = error.response.data
				});
			},
			changePage: function (page) {
				this.pagination.current_page = page;
				this.getProyectos(page);
			}
		}
	});