@extends('app')

@section('content')

<div id="crud" class="row">
	<div class="col-12">
		<h1 class="cabecera card-header">Catálago de proyectos</h1>
	</div>
	<div class="col-6 row justify-content-center">
		<div class="col-8">
			<h4>ejemplo</h4>
		</div>
		<div class="col-auto">
			<a href="#" class="btn btn-sm btn-primary" data-toggle="modal" data-target="#create">Nueva proyecto</a>
		</div>		
	</div>
	<div class="col-12">
		<table class="table table-hover table-striped" >
			<thead>
				<tr>
					<th>ID</th>
					<th>Titulo</th>

					<th colspan="2">&nbsp;</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="keep in keeps">
					<td width="10px">@{{ keep.id }}</td>
					<td>@{{ keep.keep }}</td>
					<td width="10px">
						<a href="#" class="btn btn-warning btn-sm" v-on:click.prevent="editKeep(keep)">Editar</a>
					</td>
					<td width="10px">
						<a href="#" class="btn btn-danger btn-sm" v-on:click.prevent="deleteKeep(keep)">Eliminar</a>
					</td>
				</tr>
			</tbody>
		</table>

		<nav>
			<ul class="pagination">
				<li class="page-item" v-if="pagination.current_page > 1">
					<a href="#" @click.prevent="changePage(pagination.current_page - 1)">
						<span class="page-link">Atras</span>
					</a>
				</li>

				<li v-for="page in pagesNumber" v-bind:class="[ page == isActived ? 'page-item active' : '']">
					<a class="page-link" href="#" @click.prevent="changePage(page)">
						@{{ page }}
					</a>
				</li>

				<li v-if="pagination.current_page < pagination.last_page">
					<a href="#" @click.prevent="changePage(pagination.current_page + 1)">
						<span class="page-link">Siguiente</span>
					</a>
				</li>
			</ul>
		</nav>



		@include('create')
		@include('edit')
	</div>
<!-- 	<div class="card col-sm-5">
		<pre>
			@{{ $data }}
		</pre>
	</div> -->
</div>

<div id="crudProyect" class="row">
	<div class="col-6 row justify-content-center">
		<div class="col-8">
			<h4>Proyectos</h4>
		</div>
		<div class="col-auto">
			<a href="#" class="btn btn-sm btn-primary" data-toggle="modal" data-target="#createProyecto">Nuevo proyecto</a>
		</div>		
	</div>
	<div class="col-12">
		<table class="table table-hover table-striped" >
			<thead>
				<tr>
					<th>ID</th>
					<th>Titulo</th>
					<th>Subtitulo</th>
					<th colspan="2">&nbsp;</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="proyecto in proyectos">
					<td width="10px">@{{ proyecto.id }}</td>
					<td>@{{ proyecto.titulo }}</td>
					<td>@{{ proyecto.subtitulo }}</td>
					<td width="10px">
						<a href="#" class="btn btn-warning btn-sm" v-on:click.prevent="editProyecto(proyecto)">Editar</a>
					</td>
					<td width="10px">
						<a href="#" class="btn btn-danger btn-sm" v-on:click.prevent="deleteProyecto(proyecto)">Eliminar</a>
					</td>
				</tr>
			</tbody>
		</table>

		<nav>
			<ul class="pagination">
				<li class="page-item" v-if="pagination.current_page > 1">
					<a href="#" @click.prevent="changePage(pagination.current_page - 1)">
						<span class="page-link">Atras</span>
					</a>
				</li>

				<li v-for="page in pagesNumber" v-bind:class="[ page == isActived ? 'page-item active' : '']">
					<a class="page-link" href="#" @click.prevent="changePage(page)">
						@{{ page }}
					</a>
				</li>

				<li v-if="pagination.current_page < pagination.last_page">
					<a href="#" @click.prevent="changePage(pagination.current_page + 1)">
						<span class="page-link">Siguiente</span>
					</a>
				</li>
			</ul>
		</nav>
<!-- 	<div class="card col-sm-5">
		<pre>
			@{{ $data }}
		</pre>
	</div> -->

@include('createProyecto')
@include('editProyecto')
</div>
</div>
@endsection