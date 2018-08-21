<form method="POST" v-on:submit.prevent="updateProyecto(fillProyecto.id)">
	<div class="modal fade" id="editProyecto">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<h4>Editar Proyecto</h4>
					<button type="button" class="close" data-dismiss="modal">
						<span>&times;</span>
					</button>
				</div>
				<div class="modal-body">

					<label for="titulo">Titulo</label>
					<input type="text" name="titulo" class="form-control" v-model="fillProyecto.titulo">

					<label for="subtitulo">Subtitulo</label>
					<input type="text" name="subtitulo" class="form-control" v-model="fillProyecto.subtitulo">

					<span v-for="error in errors" class="text-danger">@{{ error }}</span>
				</div>
				<div class="modal-footer">
					<input type="submit" class="btn btn-primary" value="Actualizar">
				</div>
			</div>
		</div>
	</div>
</form>