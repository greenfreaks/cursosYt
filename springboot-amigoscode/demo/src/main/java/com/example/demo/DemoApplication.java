package com.example.demo;

import com.example.demo.student.StudentModel;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.time.Month;
import java.util.List;

@SpringBootApplication
@RestController // Esta anotación nos ayuda a que esta clase funcione como un endpoint
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

	@GetMapping
	//Esta clase devolverá una lista de tipo StudentModel
	public List<StudentModel> hello(){
		// List.of itera un arreglo

		//Creamos un API
		return List.of(
				new StudentModel( // Instanciamos por primera vez a StudentModl (creamos un objeto)
						1L,
						"Mario",
						"mario.sandoval@gmail.com",
						LocalDate.of(1998, Month.NOVEMBER, 26),
						25
				),
				new StudentModel( // Instanciamos por 2da vez a StudentModel (creamos un segundo objeto de tipo StudentModel)
						2L,
						"Julia",
						"julia.velas@gmail.com",
						LocalDate.of(1998, Month.OCTOBER, 10),
						20
				)

		);
	}

}
