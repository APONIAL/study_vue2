package com.tao.server.server.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @Author Tao
 * @Date 2025/2/9 14:57
 * @Version 1.0
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Student {
    private String id;
    private String name;
    private Integer age;
}
