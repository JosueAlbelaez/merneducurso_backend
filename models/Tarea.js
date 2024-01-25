import mongoose from "mongoose";

const tareaSchema = mongoose.Schema(
  {
    nombre: {
      type: String,
      trim: true,
      required: true,
    },
    descripcion: {
      type: String,
      trim: true,
      required: false,
    },
    estado: {
      type: Boolean,
      default: false,
    },
    /* */
    fechaEntrega: {
        type: Date,
        required: true,
        default: Date.now(),
    },
      
    prioridad: {
      type: String,
      required: false,
      enum: ["En proceso", "Suficiente", "Avanzado"], 
    }, 
   
    
    proyecto: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Proyecto",
    },
 completado: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Usuario",
      default: null,
    }, 
  },
  {
    timestamps: true,
  }
);

const Tarea = mongoose.model("Tarea", tareaSchema);
export default Tarea;
