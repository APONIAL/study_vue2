package com.tao.server.server.controller;

import com.tao.server.server.pojo.Student;

import org.springframework.http.HttpRequest;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.Arrays;
import java.util.List;

/**
 * @Author Tao
 * @Date 2025/2/9 14:54
 * @Version 1.0
 */
@RestController
//@CrossOrigin
public class StudentsController {

    @GetMapping("/students")
    public List<Student> getStudents(HttpServletRequest request) {
        System.out.println("getStudents");
        System.out.println("__请求来自于__:"+request.getHeader("Host"));
        return Arrays.asList(
                new Student("001", "tom", 18),
                new Student("002", "jerry", 19),
                new Student("003", "tony", 120)
        );
    }
}
