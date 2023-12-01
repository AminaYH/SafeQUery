package eniso.gte2.tp2aminayahia

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.text.Editable
import android.text.TextWatcher
import android.widget.Button
import android.widget.CheckBox
import android.widget.EditText
import android.widget.RadioGroup
import android.widget.TextView
import android.widget.Toast
import androidx.activity.ComponentActivity
import java.lang.Math.round
import kotlin.math.roundToInt

class TemperatureActivity : ComponentActivity() {
    private lateinit var inputTemperature: EditText
    private lateinit var resultTextView: TextView
    private lateinit var radioGroup: RadioGroup
    private lateinit var roundCheckbox: CheckBox
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_temperature)
        inputTemperature = findViewById(R.id.editTextTemperature)
        resultTextView = findViewById(R.id.textViewResult)
        radioGroup = findViewById(R.id.radioGroup)
        roundCheckbox = findViewById(R.id.checkboxRound)


        inputTemperature.addTextChangedListener(object : TextWatcher {
            override fun beforeTextChanged(s: CharSequence?, start: Int, count: Int, after: Int) {
            }

            override fun onTextChanged(s: CharSequence?, start: Int, before: Int, count: Int) {
                convertTemperature()
            }

            override fun afterTextChanged(s: Editable?) {

            }
        })


        convertTemperature()
    }
    private fun convertTemperature() {
        val inputValue = inputTemperature.text.toString()

        if (inputValue.isEmpty()) {
            showToast("Veuillez entrer une valeur de température.")
            return
        }

        val temperature = inputValue.toFloat()

        val selectedRadioButtonId = radioGroup.checkedRadioButtonId
        val isToFahrenheit = selectedRadioButtonId == R.id.radioButtonToFahrenheit

        val convertedTemperature = if (isToFahrenheit) {
            celsiusToFahrenheit(temperature)
        } else {
            fahrenheitToCelsius(temperature)
        }

        val roundedResult = if (roundCheckbox.isChecked) {
            convertedTemperature.roundToInt()
        } else {
            convertedTemperature
        }

        val resultText = if (isToFahrenheit) {
            "Température en Fahrenheit : $roundedResult °F"
        } else {
            "Température en Celsius : $roundedResult °C"
        }

        resultTextView.text = resultText
    }

    private fun celsiusToFahrenheit(celsius: Float): Float {
        return (celsius * 9 / 5) + 32
    }

    private fun fahrenheitToCelsius(fahrenheit: Float): Float {
        return (fahrenheit - 32) * 5 / 9
    }

    private fun showToast(message: String) {
        Toast.makeText(this, message, Toast.LENGTH_SHORT).show()
    }


    }




