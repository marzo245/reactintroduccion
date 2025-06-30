package com.ejemplo.reactintroduccion.controller;

import com.ejemplo.reactintroduccion.model.Persona;
import com.ejemplo.reactintroduccion.repository.PersonaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/personas")
@CrossOrigin(origins = "http://localhost:5173")
public class PersonaController {

    @Autowired
    private PersonaRepository personaRepository;

    // GET - Obtener todas las personas
    @GetMapping
    public List<Persona> obtenerTodasLasPersonas() {
        return personaRepository.findAll();
    }

    // GET - Obtener persona por ID
    @GetMapping("/{id}")
    public ResponseEntity<Persona> obtenerPersonaPorId(@PathVariable Long id) {
        Optional<Persona> persona = personaRepository.findById(id);
        if (persona.isPresent()) {
            return ResponseEntity.ok(persona.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // POST - Crear nueva persona
    @PostMapping
    public Persona crearPersona(@RequestBody Persona persona) {
        return personaRepository.save(persona);
    }

    // PUT - Actualizar persona
    @PutMapping("/{id}")
    public ResponseEntity<Persona> actualizarPersona(@PathVariable Long id, @RequestBody Persona personaActualizada) {
        Optional<Persona> personaExistente = personaRepository.findById(id);
        if (personaExistente.isPresent()) {
            Persona persona = personaExistente.get();
            persona.setNombre(personaActualizada.getNombre());
            persona.setEmail(personaActualizada.getEmail());
            persona.setEdad(personaActualizada.getEdad());
            persona.setProfesion(personaActualizada.getProfesion());
            return ResponseEntity.ok(personaRepository.save(persona));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // DELETE - Eliminar persona
    @DeleteMapping("/{id}")
    public ResponseEntity<?> eliminarPersona(@PathVariable Long id) {
        Optional<Persona> persona = personaRepository.findById(id);
        if (persona.isPresent()) {
            personaRepository.delete(persona.get());
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
