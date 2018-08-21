<form method="POST" v-on:submit.prevent="createProyecto">
	<div class="modal fade" id="createProyecto">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<h4>Nuevo proyecto</h4>
					<button type="button" class="close" data-dismiss="modal">
						<span>&times;</span>
					</button>
				</div>
				<div class="modal-body">

					<label for="titulo">Titulo</label>
					<input type="text" name="titulo" class="form-control" v-model="newTitulo">

					<label for="subtitulo">Subtitulo del proyecto</label>
					<input type="text" name="subtitulo" class="form-control" v-model="newSubtitulo">

					<span v-for="error in errors" class="text-danger">@{{ error }}</span>
				</div>
				<div class="modal-footer">
					<input type="submit" class="btn btn-primary" value="Guardar">
				</div>
			</div>
		</div>
	</div>
</form>