package no.ntnu.fullstack.backend.quiz.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import no.ntnu.fullstack.backend.user.dto.UserDTO;

import java.util.Date;

/** The QuizDTO class represents a quiz with a revision */
@Getter
@Setter
@NoArgsConstructor
public class QuizDTO {
  private String title;
  private String description;
  private String difficulty;

  private UserDTO creator;

  private Date createdAt;
}
